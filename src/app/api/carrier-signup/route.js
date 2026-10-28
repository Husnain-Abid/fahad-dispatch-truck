import { createSubmissionHandler } from "@/lib/api/submission-handler";
import { carrierSignupSchema } from "@/lib/validation/schemas";

export const runtime = "nodejs";

export const POST = createSubmissionHandler({
  formType: "carrier",
  inquiryLabel: "Carrier onboarding inquiry",
  subject: "New carrier inquiry",
  schema: carrierSignupSchema,
  labels: {
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    company: "Company name",
    role: "Carrier role",
    truckType: "Truck type",
    fleetSize: "Fleet size",
    mcNumber: "MC number",
    dotNumber: "DOT number",
    preferredServices: "Preferred services",
    additionalInfo: "Additional information",
    privacy: "Privacy acknowledgment",
  },
  successMessage:
    "Thank you — your carrier inquiry is with our team. We will reach out to discuss the next steps for your operation.",
});
