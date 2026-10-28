import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Draft privacy policy for the Prime Nation Haul website, covering form submissions, email processing, analytics, and contact information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Overview",
    paragraphs: [
      "This policy explains how Prime Nation Haul handles information submitted through this website. It is a draft prepared for the website launch and requires review by Prime Nation Haul and its legal counsel before it is relied upon as a final policy.",
      "The site is intended for businesses and commercial carriers in the United States. It is not directed to consumers or children.",
    ],
  },
  {
    title: "Information you provide through forms",
    paragraphs: [
      "Our contact, quote request, and carrier signup forms ask for the details needed to respond to your inquiry. Depending on the form, this can include your name, email address, phone number, company name, carrier role, truck type, fleet size, optional MC and DOT numbers, preferred services, and any message you choose to include.",
      "These forms do not request Social Security numbers, bank account or card details, passwords, or identity documents. Please do not submit sensitive personal information through them.",
    ],
  },
  {
    title: "How the information is used",
    paragraphs: [
      "Inquiry information is used to respond to your message, evaluate whether our services fit your operation, and communicate with you about your request. If we begin a dispatch arrangement, we may use your contact details to support that working relationship.",
      "We do not sell your information. We do not use form submissions to send unrelated marketing messages.",
    ],
  },
  {
    title: "Email delivery and storage",
    paragraphs: [
      "Form submissions are delivered as email notifications through Resend, a third-party transactional email provider, to the inbox configured by Prime Nation Haul. The website itself does not store submissions in an application database. The resulting email is retained in the company inbox according to our normal business practices and any applicable legal obligations.",
      "The customer email address provided in a form is used as the reply-to value on the notification so our team can respond directly. It is not used as the sender identity.",
    ],
  },
  {
    title: "Analytics",
    paragraphs: [
      "This site can use Google Analytics 4 when a measurement ID is configured. Analytics is loaded only after a visitor grants consent through the on-page analytics banner. Analytics events are limited to interactions such as a successful form submission, a click-to-call action, or a call-to-action click. Names, phone numbers, email addresses, and free-text form content are not sent to analytics.",
      "If a visitor declines analytics, the Google Analytics script is not loaded. The consent choice is stored in the browser's local storage so the banner does not reappear on every visit.",
    ],
  },
  {
    title: "Service providers",
    paragraphs: [
      "We use third-party services to operate this website: Resend for email delivery, our hosting provider for site delivery, and Google Analytics when consent is granted. These providers process technical data according to their own terms and privacy policies. Links to third-party websites are provided for convenience, and we are not responsible for their content or practices.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use reasonable technical measures to protect information submitted through this site, including server-side validation, rate limiting, and access controls on company email. No method of transmission over the internet is completely secure, which is why we ask that you avoid sending sensitive personal, banking, or identity information through website forms.",
    ],
  },
  {
    title: "Your choices and requests",
    paragraphs: [
      "You can contact us to ask about the information associated with your inquiry, to correct it, or to request that we stop communicating with you. We will review requests consistent with applicable law and our recordkeeping obligations. Reach us at the phone number below.",
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "This website is intended for commercial audiences and is not directed to children. We do not knowingly collect information from children through this site.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this draft as the website or our services change. The current version will always be posted on this page. Because this document is pending legal review, specific retention periods and jurisdiction-specific rights will be confirmed before launch.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `Questions about this policy can be directed to our team by phone at ${siteConfig.phone.display}. A public contact email address is published on the Contact page when configured for the site.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How information submitted through the Prime Nation Haul website is handled, including form submissions, email processing, and analytics."
        breadcrumbs={[{ label: "Privacy Policy", href: "/privacy-policy" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-gold/35 bg-gold/[0.07] p-5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy">
                Draft — client review required
              </p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-navy/75">
                This policy is a working draft for the Prime Nation Haul website. It must be reviewed
                by the client and legal counsel before launch. It does not claim compliance with any
                specific privacy law.
              </p>
            </div>
            <nav aria-label="Policy sections" className="mt-6 hidden lg:block">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-muted">
                On this page
              </p>
              <ul className="mt-3 space-y-2 border-l border-navy/10 pl-4">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#section-${index + 1}`}
                      className="text-[0.8rem] text-muted transition-colors hover:text-gold"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="max-w-3xl">
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              Draft version · Pending legal review
            </p>
            {sections.map((section, index) => (
              <section key={section.title} id={`section-${index + 1}`} className="mt-9 scroll-mt-28">
                <h2 className="text-[1.25rem] font-semibold text-navy">
                  <span className="mr-2 text-gold">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-[0.92rem] leading-relaxed text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
            <div className="mt-12 border-t border-navy/10 pt-6">
              <p className="text-[0.8rem] leading-relaxed text-muted">
                See also our{" "}
                <Link href="/terms-of-service" className="text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold">
                  Terms of Service
                </Link>
                . For questions about this draft, call {siteConfig.phone.display}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
