import test from "node:test";
import assert from "node:assert/strict";
import { renderNotificationEmail } from "../src/lib/email/templates.js";

test("renders branded HTML and plain text with the inquiry label", () => {
  const { html, text } = renderNotificationEmail({
    inquiryLabel: "Quote request",
    fields: [
      { label: "Full name", value: "Jordan Miles" },
      { label: "Service", value: "Load Booking" },
      { label: "Phone", value: "" },
    ],
    submittedAt: "2025-05-01 12:00 UTC",
    replyTo: "jordan@example.com",
  });

  assert.match(html, /New Quote request/);
  assert.match(html, /Load Booking/);
  assert.match(html, /jordan@example\.com/);
  assert.match(text, /PRIME NATION HAUL/);
  assert.doesNotMatch(text, /Phone:/);
});

test("escapes user-supplied HTML in both formats", () => {
  const payload = '<script>alert("xss")</script>';
  const { html, text } = renderNotificationEmail({
    inquiryLabel: "Contact message",
    fields: [
      { label: "Full name", value: payload },
      { label: "Message", value: "A & B < C > D" },
    ],
    submittedAt: "2025-05-01 12:00 UTC",
    replyTo: "carrier@example.com",
  });

  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /&amp;/);
  assert.match(text, /<script>/);
});
