import { useState } from "react";
import { motion } from "framer-motion";

import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  company: z.string().max(100).optional(),
  fleetSize: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "1-800-555-0123",
    subtext: "Toll-free, 24/7",
    href: "tel:+1-800-555-0123",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@prodispatch.com",
    subtext: "We respond within 2 hours",
    href: "mailto:info@prodispatch.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Dispatch Center Drive",
    subtext: "Houston, TX 77001",
    href: null,
  },
  {
    icon: Clock,
    title: "Hours",
    value: "24/7 Dispatch",
    subtext: "Office: Mon-Fri 8AM-6PM CST",
    href: null,
  },
];

const fleetSizes = [
  { value: "1-5", label: "1-5 trucks" },
  { value: "6-20", label: "6-20 trucks" },
  { value: "21-50", label: "21-50 trucks" },
  { value: "50+", label: "50+ trucks" },
];

const services = [
  { value: "night-dispatch", label: "Night/After-Hours Dispatch" },
  { value: "full-dispatch", label: "Full Dispatch Service" },
  { value: "specialized", label: "Specialized Hauling" },
  { value: "fleet", label: "Fleet Management" },
  { value: "billing", label: "Billing & Invoicing" },
  { value: "compliance", label: "Compliance Support" },
  { value: "other", label: "Other / Multiple Services" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    fleetSize: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 2 hours.",
    });
  };

  if (isSubmitted) {
    return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-24">
              <section className="pt-32 pb-24 min-h-screen flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto rounded-full gradient-cta flex items-center justify-center mb-8">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Thank You!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your message has been received. One of our dispatch specialists 
                will contact you within 2 hours to discuss your needs.
              </p>
              <div className="bg-card p-6 rounded-xl border border-border">
                <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
                <a
                  href="tel:+1-800-555-0123"
                  className="text-xl font-semibold text-accent hover:underline"
                >
                  Call 1-800-555-0123
                </a>
              </div>
            </div>
          </div>
        </section>
        </main>
      
            <Footer />
          </div>
    );
  }



  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Get a Quote</h1>
                <p className="text-xl text-muted-foreground">
                  Ready to move your freight? Fill out the form and our team will get back to you within 15 minutes.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-secondary/10 border border-white/5">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Speak directly with a logistics expert.</p>
                    <a href="tel:+18005550123" className="text-primary font-semibold hover:underline">+1 (800) 555-0123</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-secondary/10 border border-white/5">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-muted-foreground mb-2">For general inquiries and support.</p>
                    <a href="mailto:quotes@logitech.com" className="text-primary font-semibold hover:underline">quotes@logitech.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-secondary/10 border border-white/5">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Visit HQ</h3>
                    <p className="text-muted-foreground">
                      123 Logistics Blvd, Suite 400<br />
                      Transport City, TC 90210
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary/20 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm"
            >

   <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you with a customized 
                  dispatch solution for your fleet.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name (Optional)</Label>
                      <Input
                        id="company"
                        placeholder="Your Company LLC"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>

                    {/* Fleet Size */}
                    <div className="space-y-2">
                      <Label htmlFor="fleetSize">Fleet Size</Label>
                      <Select
                        value={formData.fleetSize}
                        onValueChange={(value) => handleChange("fleetSize", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select fleet size" />
                        </SelectTrigger>
                        <SelectContent>
                          {fleetSizes.map((size) => (
                            <SelectItem key={size.value} value={size.value}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Service Interest */}
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange("service", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your dispatch needs, current challenges, or any questions you have..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-cta hover:opacity-90 text-white border-0"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    By submitting this form, you agree to be contacted by ProDispatch 
                    regarding your inquiry.
                  </p>
                </form>
              </div>

      
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
