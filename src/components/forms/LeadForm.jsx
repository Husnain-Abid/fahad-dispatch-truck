"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Phone } from "lucide-react";
import {
  fieldConfigs,
  schemaByFormType,
} from "@/lib/validation/schemas";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const successEvents = {
  contact: "contact_form_success",
  quote: "quote_form_success",
  carrier: "carrier_signup_success",
};

function buildDefaults(config, presetService) {
  const defaults = { companyWebsite: "" };
  for (const field of config.fields) {
    if (field.type === "checkboxes") defaults[field.name] = [];
    else if (field.type === "checkbox") defaults[field.name] = false;
    else defaults[field.name] = "";
  }
  if (presetService) {
    const allowed = config.fields.find((field) => field.name === "service")?.options || [];
    if (allowed.includes(presetService)) defaults.service = presetService;
  }
  return defaults;
}

export default function LeadForm({ formType, presetService, compact = false }) {
  const config = fieldConfigs[formType];
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schemaByFormType[formType]),
    defaultValues: buildDefaults(config, presetService),
    mode: "onTouched",
  });

  const onSubmit = async (values, event) => {
    if (isSubmitting) return;
    setStatus({ state: "submitting", message: "" });

    const formElement = event?.target;
    const honeypotValue =
      formElement instanceof HTMLFormElement
        ? String(new FormData(formElement).get("companyWebsite") || "")
        : "";

    try {
      const response = await fetch(config.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          companyWebsite: honeypotValue,
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok || !payload.ok) {
        if (payload.errors) {
          for (const [field, message] of Object.entries(payload.errors)) {
            if (field in values) setError(field, { type: "server", message });
          }
        }
        setStatus({
          state: "error",
          message:
            payload.message ||
            "We could not send that message right now. Please try again or call 316 376 9718.",
        });
        return;
      }

      setStatus({ state: "success", message: payload.message });
      trackEvent(successEvents[formType] || "form_submit_success");
      reset(buildDefaults(config, presetService));
    } catch {
      setStatus({
        state: "error",
        message:
          "We could not reach the server. Check your connection and try again, or call 316 376 9718.",
      });
    }
  };

  if (status.state === "success") {
    return (
      <div
        className="border border-navy/10 bg-white p-8 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-12 w-12 items-center justify-center border border-gold/50 bg-offwhite text-gold">
          <CheckCircle2 aria-hidden="true" className="h-6 w-6" />
        </span>
        <h2 className="mt-6 text-[1.5rem] font-semibold text-navy">Message sent</h2>
        <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-muted">
          {status.message ||
            "Thank you — your message reached our team. We will reply using the contact details you provided."}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-navy/10 pt-6">
          <a
            href={siteConfig.phone.href}
            data-ga-event="click_to_call"
            data-ga-label="Form success phone"
            className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-navy transition-colors hover:text-gold"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
            {siteConfig.phone.display}
          </a>
          <button
            type="button"
            onClick={() => setStatus({ state: "idle", message: "" })}
            className="text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-gold underline decoration-gold/40 underline-offset-4 transition hover:decoration-gold"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "relative border border-navy/10 bg-white",
        compact ? "p-6 sm:p-7" : "p-6 sm:p-9",
      )}
      aria-busy={isSubmitting}
    >
      <div className="absolute inset-x-0 top-0 h-[2px] w-20 bg-gold" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        {config.fields.map((field) => {
          const error = errors[field.name];
          const describedBy = error ? `${field.name}-error` : undefined;
          const baseProps = {
            id: field.name,
            "aria-invalid": error ? "true" : "false",
            "aria-describedby": describedBy,
            "aria-required": field.required ? "true" : undefined,
            className: cn("field", error && "field-error"),
            autoComplete: field.autoComplete || "off",
          };

          if (field.type === "checkbox") {
            return (
              <div
                key={field.name}
                className={cn("pt-1", field.span === "full" ? "sm:col-span-2" : "")}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id={field.name}
                    {...register(field.name)}
                    aria-invalid={error ? "true" : "false"}
                    aria-describedby={describedBy}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded-none border border-navy/30 accent-[#C6A45C]"
                  />
                  <label htmlFor={field.name} className="text-[0.83rem] leading-relaxed text-muted">
                    I understand that the information I provide will be used to respond to this
                    inquiry, as described in the{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold"
                    >
                      Privacy Policy
                    </Link>
                    . <span className="text-navy">(required)</span>
                  </label>
                </div>
                {error ? (
                  <p id={`${field.name}-error`} role="alert" className="mt-2 text-[0.78rem] text-[#B4483C]">
                    {error.message}
                  </p>
                ) : null}
              </div>
            );
          }

          if (field.type === "checkboxes") {
            return (
              <fieldset key={field.name} className="sm:col-span-2">
                <legend className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy">
                  {field.label}
                  {field.required ? <span className="text-gold"> *</span> : null}
                </legend>
                {field.hint ? (
                  <p className="mt-1 text-[0.76rem] text-muted">{field.hint}</p>
                ) : null}
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {field.options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2.5 border border-navy/10 px-3 py-2.5 text-[0.82rem] text-navy transition-colors hover:border-gold/50"
                    >
                      <input
                        type="checkbox"
                        value={option}
                        {...register(field.name)}
                        className="h-3.5 w-3.5 rounded-none border border-navy/30 accent-[#C6A45C]"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
            );
          }

          return (
            <div
              key={field.name}
              className={cn(field.span === "full" ? "sm:col-span-2" : "sm:col-span-1")}
            >
              <label
                htmlFor={field.name}
                className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy"
              >
                {field.label}
                {field.required ? (
                  <span className="text-gold" aria-hidden="true"> *</span>
                ) : (
                  <span className="ml-1.5 text-[0.62rem] font-medium normal-case tracking-normal text-muted">
                    (optional)
                  </span>
                )}
              </label>
              {field.hint ? <p className="mt-1 text-[0.76rem] text-muted">{field.hint}</p> : null}

              {field.type === "select" ? (
                <select {...baseProps} {...register(field.name)} className={cn(baseProps.className, "mt-2")}>
                  <option value="">{field.placeholder || "Select an option"}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  {...baseProps}
                  {...register(field.name)}
                  rows={field.rows || 4}
                  maxLength={field.maxLength}
                  placeholder={field.placeholder || ""}
                  className={cn(baseProps.className, "mt-2 resize-y")}
                />
              ) : (
                <input
                  {...baseProps}
                  {...register(field.name)}
                  type={field.type}
                  inputMode={field.type === "tel" ? "tel" : undefined}
                  maxLength={field.type === "email" ? 180 : field.type === "tel" ? 30 : 200}
                  placeholder={field.placeholder || ""}
                  className={cn(baseProps.className, "mt-2")}
                />
              )}

              {error ? (
                <p id={`${field.name}-error`} role="alert" className="mt-2 text-[0.78rem] text-[#B4483C]">
                  {error.message}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="companyWebsite">Company website (leave blank)</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status.state === "error" ? (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 border border-[#B4483C]/30 bg-[#FFF7F5] p-4"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B4483C]" />
          <div>
            <p className="text-[0.85rem] font-medium text-[#8F3A30]">Message not sent</p>
            <p className="mt-1 text-[0.82rem] leading-relaxed text-[#8F3A30]/85">{status.message}</p>
          </div>
        </div>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 border-t border-navy/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.72rem] leading-relaxed text-muted">
          Required fields are marked with an asterisk. We reply using the contact details you
          provide.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-shine inline-flex items-center justify-center gap-2.5 rounded-[2px] px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            config.submitLabel
          )}
        </button>
      </div>

      <p className="mt-4 text-[0.68rem] leading-relaxed text-muted/80">
        Submissions are delivered by email to our team and are not stored in an application database.
        If email delivery is unavailable, the form will tell you and you can call {siteConfig.phone.display}.
      </p>
    </form>
  );
}
