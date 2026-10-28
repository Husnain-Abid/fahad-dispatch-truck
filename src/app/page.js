import Hero from "@/components/sections/Hero";
import {
  IntroSection,
  ServicesOverview,
  ExperienceStrip,
  TruckTypesSection,
  WhyUsSection,
  ProcessSection,
  BenefitsSection,
  TestimonialsPreview,
  FaqPreview,
} from "@/components/sections/HomeSections";
import CTASection from "@/components/ui/CTASection";

export const metadata = {
  title: "Truck Dispatching & Carrier Support for US Carriers",
  description:
    "Prime Nation Haul provides truck dispatching, load booking, rate negotiation, and carrier support for owner-operators, small fleets, and large fleets across the United States. Five years of dispatching experience.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Prime Nation Haul | Smarter Dispatching. Stronger Hauling.",
    description:
      "Reliable truck dispatching and carrier support for owner-operators and fleets across the United States.",
    url: "/",
    images: ["/images/hero-interstate.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ExperienceStrip />
      <ServicesOverview />
      <TruckTypesSection />
      <WhyUsSection />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsPreview />
      <FaqPreview />
      <CTASection
        eyebrow="Ready when you are"
        title="Your next load deserves a clearer conversation."
        description="Tell us about your trucks and lanes. We will walk you through the services, the process, and pricing for your operation — no automated quotes, no pressure."
      />
    </>
  );
}
