import { createSubmissionHandler } from "@/lib/api/submission-handler";
import { contactSchema } from "@/lib/validation/schemas";

export const runtime = "nodejs";

export const POST = createSubmissionHandler({
  formType: "contact",
  inquiryLabel: "Contact message",
  subject: "New contact message",
  schema: contactSchema,
  labels: {
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    service: "Topic / service",
    message: "Message",
    privacy: "Privacy acknowledgment",
  },
  successMessage:
    "Thank you — your message is on its way to our team. We will reply using the email address you provided.",
});
