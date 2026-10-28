import LeadForm from "@/components/forms/LeadForm";

export default function ContactForm({ presetService }) {
  return <LeadForm formType="contact" presetService={presetService} />;
}
