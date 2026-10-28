import LeadForm from "@/components/forms/LeadForm";

export default function QuoteForm({ presetService }) {
  return <LeadForm formType="quote" presetService={presetService} />;
}
