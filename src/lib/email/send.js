import { Resend } from "resend";
import { renderNotificationEmail } from "@/lib/email/templates";

export function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  return {
    apiKey,
    to,
    from,
    configured: Boolean(apiKey && to && from),
  };
}

/**
 * Sends a branded notification through Resend. Resolves with
 * { ok: true, id } only after the provider confirms the send.
 * Never throws provider details back to the client.
 */
export async function sendNotification({
  inquiryLabel,
  subject,
  fields,
  replyTo,
}) {
  const config = getEmailConfig();

  if (!config.configured) {
    return {
      ok: false,
      reason: "not_configured",
      message:
        "Email delivery is not configured yet. Please call 316 376 9718 and our team will help directly.",
    };
  }

  const submittedAt = new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC";
  const { html, text } = renderNotificationEmail({
    inquiryLabel,
    fields,
    submittedAt,
    replyTo,
  });

  try {
    const resend = new Resend(config.apiKey);
    const { data, error } = await resend.emails.send({
      from: config.from,
      to: [config.to],
      subject,
      html,
      text,
      replyTo,
    });

    if (error) {
      console.error("[email] Resend returned an error", error?.name || "unknown");
      return {
        ok: false,
        reason: "provider_error",
        message:
          "We could not deliver your message right now. Please try again shortly or call 316 376 9718.",
      };
    }

    return { ok: true, id: data?.id || null };
  } catch (error) {
    console.error("[email] Unexpected send failure", error?.message || error);
    return {
      ok: false,
      reason: "send_failed",
      message:
        "We could not deliver your message right now. Please try again shortly or call 316 376 9718.",
    };
  }
}
