import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Terms of Service",
  description:
    "Draft terms of service for the Prime Nation Haul website, covering website use, inquiries, communication, service descriptions, and limitations.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Acceptance of these terms",
    paragraphs: [
      "These terms describe the rules for using the Prime Nation Haul website. By browsing the site or submitting an inquiry, you agree to the practices described here. If you do not agree, please do not use the site.",
      "This is a draft prepared for the website launch. It requires review by Prime Nation Haul and legal counsel before it is treated as a final agreement.",
    ],
  },
  {
    title: "Purpose of the website",
    paragraphs: [
      "This website provides general information about Prime Nation Haul's truck dispatching and carrier support services and allows carriers to request information. Content on the site is informational and does not constitute legal, insurance, tax, financial, or regulatory advice.",
    ],
  },
  {
    title: "Inquiries do not create an agreement",
    paragraphs: [
      "Submitting a contact, quote request, or carrier signup form starts a conversation. It does not create a dispatch agreement, a carrier account, a fiduciary relationship, or any obligation for either party to begin work.",
      "Any dispatching arrangement, its scope, pricing, term, and notice expectations will be confirmed directly in writing between Prime Nation Haul and the carrier. The website does not publish contractual dispatch fees, cancellation rules, or service commitments.",
    ],
  },
  {
    title: "Services and scope",
    paragraphs: [
      "Descriptions of load booking, rate negotiation, dispatch support, ELD assistance, DOT compliance assistance, insurance assistance, factoring assistance, permits assistance, and paperwork assistance are summaries. Actual scope is agreed with each carrier.",
      "Prime Nation Haul is not a law firm, insurance provider, insurance agency, factoring company, permit issuing authority, or government agency, and does not provide legal, coverage, funding, permitting, or regulatory decisions. Those decisions remain with you and the licensed providers or authorities you engage.",
    ],
  },
  {
    title: "No guarantees of outcomes",
    paragraphs: [
      "Freight availability, rates, and market conditions vary. Nothing on this website is a guarantee of a specific load volume, rate, revenue, savings, timeline, or business result. We do not publish performance statistics that have not been verified.",
    ],
  },
  {
    title: "Acceptable use",
    paragraphs: [
      "You agree not to misuse this website, including by submitting false information, attempting to disrupt the site, sending spam or automated submissions, attempting to access restricted systems, or using the site for unlawful purposes. We may restrict access where we reasonably believe misuse has occurred.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "The Prime Nation Haul name, logo, page content, and original visual assets are owned by Prime Nation Haul or used with permission. You may view and share links to the site for legitimate business purposes. Republishing content or imagery without written permission is not permitted.",
    ],
  },
  {
    title: "Third-party links and services",
    paragraphs: [
      "The site may reference third-party services such as email delivery or analytics providers, or link to external resources. Those services operate under their own terms and policies. Prime Nation Haul is not responsible for third-party content, availability, or practices.",
    ],
  },
  {
    title: "Website availability and disclaimers",
    paragraphs: [
      "We work to keep the site accurate and available, but it is provided on an as-is and as-available basis. To the extent permitted by applicable law, we disclaim implied warranties regarding the site, its availability, and the accuracy of general informational content.",
      "Any limitation of liability, governing law, and dispute resolution language is pending client and legal review and will be confirmed before launch.",
    ],
  },
  {
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms as the website or our services change. The version posted on this page is the current draft.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      `Questions about these terms can be directed to Prime Nation Haul by phone at ${siteConfig.phone.display}. A public contact email address is published on the Contact page when configured.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The ground rules for using the Prime Nation Haul website, submitting an inquiry, and understanding the scope of the information published here."
        breadcrumbs={[{ label: "Terms of Service", href: "/terms-of-service" }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-gold/35 bg-gold/[0.07] p-5">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-navy">
                Draft — client and legal review required
              </p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-navy/75">
                These terms are a working draft. Governing law, limitation of liability, and dispute
                resolution provisions must be confirmed by counsel before launch.
              </p>
            </div>
            <nav aria-label="Terms sections" className="mt-6 hidden lg:block">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-muted">
                On this page
              </p>
              <ul className="mt-3 space-y-2 border-l border-navy/10 pl-4">
                {sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#term-${index + 1}`}
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
              <section key={section.title} id={`term-${index + 1}`} className="mt-9 scroll-mt-28">
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
                <Link href="/privacy-policy" className="text-navy underline decoration-gold/60 underline-offset-2 hover:text-gold">
                  Privacy Policy
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
