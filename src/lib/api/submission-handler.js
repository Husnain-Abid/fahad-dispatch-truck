import { sendNotification } from "@/lib/email/send";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";
import {
  fieldErrorsFromIssues,
  normalizeEmail,
} from "@/lib/validation/schemas";

const MAX_BODY_BYTES = 24 * 1024;

function json(body, status = 200, headers = {}) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

/**
 * Shared, validated submission pipeline for the contact, quote, and carrier
 * signup forms. Success is only returned after Resend confirms delivery.
 */
export function createSubmissionHandler({
  formType,
  inquiryLabel,
  subject,
  schema,
  labels,
  successMessage,
}) {
  return async function POST(request) {
    const contentType = request.headers.get("content-type") || "";
    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > MAX_BODY_BYTES) {
      return json(
        { ok: false, message: "That submission is too large. Please shorten your message." },
        413,
      );
    }

    const rate = checkRateLimit(getClientKey(request, formType));
    if (!rate.allowed) {
      return json(
        {
          ok: false,
          message:
            "We have received several messages from this connection. Please wait a few minutes or call 316 376 9718.",
        },
        429,
        { "Retry-After": String(rate.retryAfter) },
      );
    }

    if (!contentType.toLowerCase().includes("application/json")) {
      return json(
        { ok: false, message: "Unsupported request format." },
        415,
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ ok: false, message: "We could not read that request." }, 400);
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return json({ ok: false, message: "We could not read that request." }, 400);
    }

    // Honeypot: hidden from real users, tempting to naive bots.
    if (typeof body.companyWebsite === "string" && body.companyWebsite.trim() !== "") {
      return json(
        {
          ok: false,
          message:
            "We could not verify this submission. Please call 316 376 9718 if you need help.",
        },
        422,
      );
    }

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return json(
        {
          ok: false,
          message: "Please review the highlighted fields and try again.",
          errors: fieldErrorsFromIssues(parsed.error.issues),
        },
        422,
      );
    }

    const data = parsed.data;
    const replyTo = normalizeEmail(data.email);

    if (!replyTo) {
      return json(
        {
          ok: false,
          message: "Please review the highlighted fields and try again.",
          errors: { email: "Enter a valid email address so we can reply." },
        },
        422,
      );
    }

    const fields = Object.entries(labels).map(([key, label]) => {
      const rawValue = data[key];
      const value = Array.isArray(rawValue)
        ? rawValue.join(", ")
        : rawValue === true
          ? "Acknowledged"
          : rawValue === false
            ? "Not acknowledged"
            : rawValue || "";
      return { label, value };
    });

    const result = await sendNotification({
      inquiryLabel,
      subject: `${subject} — ${data.fullName}`,
      fields,
      replyTo,
    });

    if (!result.ok) {
      return json(
        { ok: false, message: result.message, reason: result.reason },
        result.reason === "not_configured" ? 503 : 502,
      );
    }

    return json({ ok: true, message: successMessage });
  };
}
