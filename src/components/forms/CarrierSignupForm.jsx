import LeadForm from "@/components/forms/LeadForm";

export default function CarrierSignupForm({ presetService }) {
  return <LeadForm formType="carrier" presetService={presetService} />;
}
