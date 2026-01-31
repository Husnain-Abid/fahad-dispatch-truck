import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Truck, Shield, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Data mapping for different service types
const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}> = {
  "dry-van": {
    title: "Dry Van Shipping",
    subtitle: "Reliable Enclosed Transport",
    description: "Our Dry Van service offers the ultimate protection for your non-perishable goods. We provide a massive network of 53' trailers perfect for retail, electronics, textiles, and non-hazardous materials. Whether you need full truckload (FTL) or less-than-truckload (LTL), we have the capacity.",
    features: [
      "Weather-proof enclosed trailers",
      "Real-time GPS tracking on every load",
      "Drop trailer programs available",
      "Expedited team service options"
    ],
    specs: [
      { label: "Max Weight", value: "45,000 lbs" },
      { label: "Length", value: "53 ft" },
      { label: "Width", value: "102 in" },
      { label: "Door Height", value: "110 in" }
    ]
  },
  "reefer": {
    title: "Refrigerated Transport",
    subtitle: "Temperature-Controlled Excellence",
    description: "Maintain the integrity of your cold chain with our state-of-the-art reefer units. From frozen foods to pharmaceuticals, we monitor temperature constantly to ensure compliance and freshness upon delivery.",
    features: [
      "Precision temperature control (-20°F to 70°F)",
      "Remote temperature monitoring",
      "FDA Food Safety Modernization Act (FSMA) compliant",
      "Multi-temp trailers available"
    ],
    specs: [
      { label: "Max Weight", value: "44,000 lbs" },
      { label: "Temp Range", value: "-20°F to 70°F" },
      { label: "Length", value: "53 ft" },
      { label: "Capacity", value: "3,500 cu ft" }
    ]
  },
  "flatbed": {
    title: "Flatbed & Open Deck",
    subtitle: "Heavy & Oversized Hauling",
    description: "For cargo that doesn't fit in a box, our flatbed division provides the expertise you need. We handle machinery, steel, lumber, and construction materials with safety as our top priority.",
    features: [
      "Chains, straps, and tarping included",
      "Oversize load permits handling",
      "Side and rear loading capability",
      "Experienced drivers for securement"
    ],
    specs: [
      { label: "Max Weight", value: "48,000 lbs" },
      { label: "Deck Length", value: "48-53 ft" },
      { label: "Max Height", value: "8.5 ft" },
      { label: "Max Width", value: "8.5 ft" }
    ]
  },
  "power-only": {
    title: "Power Only",
    subtitle: "Flexible Traction",
    description: "Need a driver and a truck to move your trailers? Our Power Only service maximizes efficiency for peak seasons, trailer relocation, or dedicated lanes using your own equipment.",
    features: [
      "Scalable capacity for peak seasons",
      "Driver-only deployment",
      "Compatible with any trailer type",
      "Cost-effective fleet augmentation"
    ],
    specs: [
      { label: "Tractor", value: "Class 8 Heavy Duty" },
      { label: "Hitch", value: "Standard 5th Wheel" },
      { label: "Availability", value: "Nationwide" },
      { label: "Tracking", value: "Included" }
    ]
  },
  "hotshot": {
    title: "Hotshot Delivery",
    subtitle: "Time-Critical Expedited",
    description: "When tomorrow is too late, our Hotshot service delivers. Using smaller, faster trucks for lighter loads, we bypass distribution centers to get your urgent freight directly to its destination.",
    features: [
      "Direct point-to-point delivery",
      "Minimal handling reduces damage risk",
      "24/7 dispatch availability",
      "Ideal for construction & oil field parts"
    ],
    specs: [
      { label: "Max Weight", value: "15,000 lbs" },
      { label: "Deck Length", value: "20-40 ft" },
      { label: "Speed", value: "Expedited" },
      { label: "Cost", value: "Premium" }
    ]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug || "dry-van";
  const service = servicesData[slug as keyof typeof servicesData] || servicesData["dry-van"];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Header */}
        <section className="relative py-20 bg-secondary/10 border-b border-white/5 overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
           
           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <Link href="/#services" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 text-sm font-medium">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
             </Link>
             
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
             >
               <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">{service.title}</h1>
               <p className="text-xl text-primary font-medium">{service.subtitle}</p>
             </motion.div>
           </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start p-4 rounded-xl bg-secondary/20 border border-white/5">
                      <Check className="w-5 h-5 text-primary mr-3 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ready to ship via {service.title}?</h3>
                    <p className="text-muted-foreground">Our logistics experts are ready to build your quote.</p>
                  </div>
                  <Button asChild size="lg" className="shrink-0">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar Specs */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="p-6 rounded-2xl bg-secondary/30 border border-white/10 backdrop-blur-md">
                  <h3 className="text-lg font-bold mb-6 flex items-center">
                    <Truck className="w-5 h-5 mr-2 text-primary" />
                    Specifications
                  </h3>
                  <div className="space-y-4">
                    {service.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center pb-4 border-b border-white/5 last:border-0 last:pb-0">
                        <span className="text-muted-foreground text-sm">{spec.label}</span>
                        <span className="font-semibold text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-secondary/10 border border-white/5">
                   <h3 className="text-lg font-bold mb-4">Why LogiTech?</h3>
                   <ul className="space-y-4">
                     <li className="flex items-center text-sm text-muted-foreground">
                       <Shield className="w-4 h-4 mr-3 text-primary" />
                       Fully Insured & Bonded
                     </li>
                     <li className="flex items-center text-sm text-muted-foreground">
                       <Clock className="w-4 h-4 mr-3 text-primary" />
                       24/7 Dispatch Support
                     </li>
                     <li className="flex items-center text-sm text-muted-foreground">
                       <Check className="w-4 h-4 mr-3 text-primary" />
                       99.8% On-Time Delivery
                     </li>
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
