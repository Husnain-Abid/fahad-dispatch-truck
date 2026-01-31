import { motion } from "framer-motion";
import { Link } from "wouter";
import { Truck, Package, Shield, Anchor, ArrowRight } from "lucide-react";
import { CheckCircle2, Headphones, Zap, Award, Users, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Hero3D } from "@/components/Hero3D";
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const features = [
  {
    icon: Headphones,
    title: "24/7 Live Support",
    description: "Real dispatchers available around the clock. No automated systems — just expert human support when you need it.",
  },
  {
    icon: Zap,
    title: "Fast Load Booking",
    description: "Average load booking time under 2 hours. We work quickly to keep your trucks moving and earning.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "10+ years of experience in trucking dispatch. We understand the industry inside and out.",
  },
  {
    icon: Users,
    title: "Dedicated Dispatchers",
    description: "Your own dedicated dispatcher who knows your lanes, preferences, and business goals.",
  },
];

const stats = [
  { value: "500+", label: "Fleets Served" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const compatibleSystems = [
  "McLeod",
  "Samsara",
  "Motive",
  "DAT",
  "Truckstop",
  "123Loadboard",
];
const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "Owner-Operator",
    company: "Rodriguez Trucking LLC",
    content: "ProDispatch transformed my business. Their night dispatch service means my truck never sits idle. Revenue is up 30% since I started working with them.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Fleet Manager",
    company: "Mitchell Transport Inc.",
    content: "Managing 25 trucks used to be a nightmare. ProDispatch handles all our dispatching and paperwork. Now I can focus on growing the business instead of putting out fires.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Owner-Operator",
    company: "Thompson Hauling",
    content: "The dedicated dispatcher assigned to me knows exactly what lanes I prefer and what rates I need. It's like having a business partner who truly cares about my success.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <Hero3D />

        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background z-1 pointer-events-none" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Logistics Solutions
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 leading-tight">
              Moving the World <br />
              <span className="text-gradient-primary">With Precision</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the future of freight. From dry van to heavy haul, we deliver reliability, transparency, and speed for your supply chain.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-sm hover:-translate-y-1 transition-all">
                <Link href="/about">Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="border-y border-white/5 bg-secondary/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "On-Time Delivery", value: "99.8%" },
              { label: "Carriers in Network", value: "15k+" },
              { label: "Loads Delivered", value: "2.5M" },
              { label: "States Covered", value: "48" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core Logistics Services</h2>
            <p className="text-muted-foreground text-lg">
              Tailored transportation solutions designed to meet the complex demands of modern supply chains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Dry Van"
              description="Secure, enclosed transport for palletized freight. The standard for retail and industrial shipping."
              icon={Truck}
              href="/services/dry-van"
            />
            <ServiceCard
              title="Reefer"
              description="Temperature-controlled units for perishables, pharmaceuticals, and sensitive cargo."
              icon={Package}
              href="/services/reefer"
            />
            <ServiceCard
              title="Flatbed"
              description="Open-deck trailers for oversized loads, machinery, and construction materials."
              icon={Anchor}
              href="/services/flatbed"
            />
            <ServiceCard
              title="Power Only"
              description="Flexible tractor capacity for pre-loaded trailers. Efficient drop-and-hook operations."
              icon={Shield}
              href="/services/power-only"
            />
            <ServiceCard
              title="Hotshot"
              description="Expedited delivery for time-critical, smaller loads. Speed when you need it most."
              icon={Truck}
              href="/services/hotshot"
            />
            <ServiceCard
              title="Step Deck"
              description="Specialized trailers for taller equipment that exceeds standard flatbed height limits."
              icon={ArrowRight}
              href="/services/step-deck"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="border-0 ml-4 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-24 bg-secondary/10 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Industry Leaders Choose <span className="text-primary">LogiTech</span></h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just move freight; we optimize your entire logistics ecosystem with technology-driven insights and unwavering commitment.
              </p>

              <ul className="space-y-6">
                {[
                  "Real-time tracking and advanced telemetry",
                  "Dedicated account management available 24/7",
                  "Vetted carrier network with 99.8% safety rating",
                  "Transparent pricing with no hidden fees"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="mt-10 h-12 px-8 rounded-full">
                <Link href="/about">More About Us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="aspect-[4/3] relative bg-secondary/30">
                {/* Placeholder for "Dashboard or Operations Center" - using a gradient abstract representation */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background opacity-90" />

                {/* Abstract UI Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-background/50 backdrop-blur-md rounded-xl border border-white/10 p-6">
                  <div className="h-4 w-1/3 bg-white/10 rounded mb-4" />
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-white/5 rounded" />
                    <div className="h-2 w-5/6 bg-white/5 rounded" />
                    <div className="h-2 w-4/6 bg-white/5 rounded" />
                  </div>
                  <div className="mt-8 flex gap-4">
                    <div className="h-24 w-1/2 bg-primary/10 rounded border border-primary/20" />
                    <div className="h-24 w-1/2 bg-white/5 rounded border border-white/10" />
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The ProDispatch Advantage
            </h2>
            <p className="text-lg text-muted-foreground">
              We're not just dispatchers — we're your partners in success. Here's what
              sets us apart from the competition.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-6 p-6 bg-card rounded-2xl border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/80 text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TMS Compatibility */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>No Training Required — We're Ready Day 1</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Compatible With Your Systems
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We work with all major TMS and load board platforms. Seamless integration
              means no disruption to your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {compatibleSystems.map((system) => (
                <div
                  key={system}
                  className="px-6 py-3 bg-card rounded-lg border border-border text-white font-medium"
                >
                  {system}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>





      {/* Testimonials SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what fleet owners and
              owner-operators have to say about working with ProDispatch.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative bg-card rounded-2xl border border-border p-8 hover:shadow-card transition-shadow"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 pt-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-lg font-semibold text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to Ship?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Get a competitive quote in minutes. Our team is standing by to optimize your lane strategy.
          </p>
          <Button asChild size="lg" className="h-16 px-10 text-xl rounded-full shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
            <Link href="/contact">Start Your Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
