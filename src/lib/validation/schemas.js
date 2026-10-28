import { z } from "zod";
import {
  preferredServiceOptions,
  fleetSizeOptions,
} from "@/data/form-options";
import { serviceOptions } from "@/data/form-options";
import { roleOptions, truckTypeOptions } from "@/data/truck-types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const asText = (value) => (typeof value === "string" ? value : "");

const requiredText = (message) =>
  z.preprocess(asText, z.string().trim().min(1, message));

const fullName = z
  .preprocess(
    asText,
    z
      .string()
      .trim()
      .min(2, "Please enter your full name (at least 2 characters).")
      .max(120, "Please keep your name under 120 characters."),
  );

const email = z
  .preprocess(
    asText,
    z
      .string()
      .trim()
      .min(1, "Please enter your email address.")
      .max(180, "Please keep your email under 180 characters.")
      .refine((value) => EMAIL_PATTERN.test(value), {
        message: "Enter a valid email address, such as name@company.com.",
      }),
  );

const phone = z.preprocess(
  asText,
  z
    .string()
    .trim()
    .min(1, "Please enter a phone number we can reach you on.")
    .max(30, "Please enter a valid phone number.")
    .refine((value) => value.replace(/\D/g, "").length >= 10, {
      message: "Enter a 10-digit phone number, including the area code.",
    }),
);

const optionalText = (max, label) =>
  z
    .string()
    .trim()
    .max(max, `${label} must be ${max} characters or fewer.`)
    .optional()
    .transform((value) => value || "");

const privacy = z
  .boolean()
  .refine((value) => value === true, {
    message: "Please acknowledge the privacy notice to continue.",
  });

const role = requiredText(
  "Select the option that best describes your operation.",
).refine((value) => roleOptions.includes(value), {
  message: "Select Owner-Operator, Small Fleet, or Large Fleet.",
});

const truckType = requiredText("Select your truck type.").refine(
  (value) => truckTypeOptions.includes(value),
  { message: "Select a truck type from the list." },
);

const service = requiredText("Select the service you are interested in.").refine(
  (value) => serviceOptions.includes(value),
  { message: "Select a service from the list." },
);

const message = z
  .string()
  .trim()
  .max(2500, "Please keep your message under 2,500 characters.")
  .optional()
  .transform((value) => value || "");

export const contactSchema = z.object({
  fullName,
  email,
  phone,
  service,
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more so we can route your message (10+ characters).")
    .max(2500, "Please keep your message under 2,500 characters."),
  privacy,
});

export const quoteSchema = z.object({
  fullName,
  email,
  phone,
  company: optionalText(160, "Company name"),
  role,
  truckType,
  truckCount: optionalText(40, "Number of trucks"),
  service,
  message,
  privacy,
});

export const carrierSignupSchema = z.object({
  fullName,
  email,
  phone,
  company: optionalText(160, "Company name"),
  role,
  truckType,
  fleetSize: requiredText("Select your current fleet size.").refine(
    (value) => fleetSizeOptions.includes(value),
    { message: "Select a fleet size from the list." },
  ),
  mcNumber: optionalText(40, "MC number"),
  dotNumber: optionalText(40, "DOT number"),
  preferredServices: z
    .array(z.string().refine((v) => preferredServiceOptions.includes(v)))
    .max(preferredServiceOptions.length)
    .optional()
    .default([]),
  additionalInfo: optionalText(2000, "Additional information"),
  privacy,
});

export const schemaByFormType = {
  contact: contactSchema,
  quote: quoteSchema,
  carrier: carrierSignupSchema,
};

export const fieldConfigs = {
  contact: {
    endpoint: "/api/contact",
    submitLabel: "Send Message",
    fields: [
      { name: "fullName", label: "Full name", type: "text", autoComplete: "name", required: true, span: "half" },
      { name: "email", label: "Email address", type: "email", autoComplete: "email", required: true, span: "half" },
      { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", required: true, span: "half", hint: "Include your area code." },
      {
        name: "service",
        label: "What is this about?",
        type: "select",
        required: true,
        span: "half",
        placeholder: "Select a service",
        options: serviceOptions,
      },
      {
        name: "message",
        label: "How can we help?",
        type: "textarea",
        required: true,
        span: "full",
        rows: 5,
        maxLength: 2500,
        placeholder: "Share your truck type, lanes, and what you need help with.",
      },
      { name: "privacy", label: "Privacy acknowledgment", type: "checkbox", required: true, span: "full" },
    ],
  },
  quote: {
    endpoint: "/api/get-a-quote",
    submitLabel: "Request My Quote",
    fields: [
      { name: "fullName", label: "Full name", type: "text", autoComplete: "name", required: true, span: "half" },
      { name: "email", label: "Email address", type: "email", autoComplete: "email", required: true, span: "half" },
      { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", required: true, span: "half" },
      { name: "company", label: "Company or fleet name", type: "text", autoComplete: "organization", required: false, span: "half", hint: "Optional" },
      { name: "role", label: "Your role", type: "select", required: true, span: "half", placeholder: "Select your role", options: roleOptions },
      { name: "truckType", label: "Truck type", type: "select", required: true, span: "half", placeholder: "Select truck type", options: truckTypeOptions },
      { name: "truckCount", label: "Number of trucks", type: "text", required: false, span: "half", hint: "Optional", placeholder: "e.g. 2" },
      { name: "service", label: "Service required", type: "select", required: true, span: "half", placeholder: "Select a service", options: serviceOptions },
      {
        name: "message",
        label: "Additional requirements",
        type: "textarea",
        required: false,
        span: "full",
        rows: 5,
        maxLength: 2500,
        hint: "Optional — lanes, home base, start date, or anything else we should know.",
      },
      { name: "privacy", label: "Privacy acknowledgment", type: "checkbox", required: true, span: "full" },
    ],
  },
  carrier: {
    endpoint: "/api/carrier-signup",
    submitLabel: "Submit Carrier Inquiry",
    fields: [
      { name: "fullName", label: "Full name", type: "text", autoComplete: "name", required: true, span: "half" },
      { name: "email", label: "Email address", type: "email", autoComplete: "email", required: true, span: "half" },
      { name: "phone", label: "Phone number", type: "tel", autoComplete: "tel", required: true, span: "half" },
      { name: "company", label: "Company name", type: "text", autoComplete: "organization", required: false, span: "half", hint: "Optional" },
      { name: "role", label: "Carrier role", type: "select", required: true, span: "half", placeholder: "Select your role", options: roleOptions },
      { name: "truckType", label: "Truck type", type: "select", required: true, span: "half", placeholder: "Select truck type", options: truckTypeOptions },
      { name: "fleetSize", label: "Fleet size", type: "select", required: true, span: "half", placeholder: "Select fleet size", options: fleetSizeOptions },
      { name: "mcNumber", label: "MC number", type: "text", required: false, span: "half", hint: "Optional — add only if your authority is active." },
      { name: "dotNumber", label: "DOT number", type: "text", required: false, span: "half", hint: "Optional" },
      {
        name: "preferredServices",
        label: "Preferred services",
        type: "checkboxes",
        required: false,
        span: "full",
        options: preferredServiceOptions,
        hint: "Optional — select everything you would like help with.",
      },
      {
        name: "additionalInfo",
        label: "Additional information",
        type: "textarea",
        required: false,
        span: "full",
        rows: 4,
        maxLength: 2000,
        hint: "Optional — lanes, home base, authority status, or questions.",
      },
      { name: "privacy", label: "Privacy acknowledgment", type: "checkbox", required: true, span: "full" },
    ],
  },
};

export function fieldErrorsFromIssues(issues) {
  const errors = {};
  for (const issue of issues) {
    const key = issue.path?.[0];
    if (key && !errors[key]) {
      errors[key] = issue.message || "Please check this field.";
    }
  }
  return errors;
}

export function normalizeEmail(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}
