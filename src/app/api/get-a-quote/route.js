import { createSubmissionHandler } from "@/lib/api/submission-handler";
import { quoteSchema } from "@/lib/validation/schemas";

export const runtime = "nodejs";

export const POST = createSubmissionHandler({
  formType: "quote",
  inquiryLabel: "Quote request",
  subject: "New quote request",
  schema: quoteSchema,
  labels: {
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    company: "Company / fleet",
    role: "Role",
    truckType: "Truck type",
    truckCount: "Number of trucks",
    service: "Service required",
    message: "Additional requirements",
    privacy: "Privacy acknowledgment",
  },
  successMessage:
    "Your quote request has reached our team. We will follow up with next steps using the contact details you provided.",
});
