import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Users, Globe, Award, BarChart3 } from "lucide-react";

import { 
  Target, 
  Eye, 
  Heart, 

  Clock,
  CheckCircle2,
  ArrowRight,
  Linkedin
} from "lucide-react";

export default function About() {

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from customer service to load booking.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication and honest dealings with every client, every time.",
  },
  {
    icon: Heart,
    title: "Dedication",
    description: "We're dedicated to your success as if it were our own business on the line.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We see ourselves as an extension of your team, not just a service provider.",
  },
];

const milestones = [
  { year: "2014", title: "Founded", description: "Started with a vision to transform trucking dispatch" },
  { year: "2017", title: "100 Clients", description: "Reached our first major milestone" },
  { year: "2020", title: "24/7 Operations", description: "Expanded to round-the-clock service" },
  { year: "2024", title: "500+ Fleets", description: "Serving fleets across the nation" },
];

const team = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    bio: "20+ years in trucking and logistics. Former fleet owner who understands the challenges firsthand.",
  },
  {
    name: "Maria Garcia",
    role: "Head of Operations",
    bio: "Expert in fleet management and dispatch optimization. Passionate about driver success.",
  },
  {
    name: "David Wilson",
    role: "Lead Dispatcher",
    bio: "10 years of dispatch experience. Known for negotiating the best rates in the industry.",
  },
  {
    name: "Sarah Johnson",
    role: "Client Relations Manager",
    bio: "Dedicated to ensuring every client receives personalized attention and support.",
  },
];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Built on <span className="text-gradient-primary">Trust</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We are a modern logistics partner obsessed with efficiency, transparency, and the success of your supply chain.
          </motion.p>
        </section>

        {/* Mission */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At LogiTech, we believe that logistics shouldn't be a black box. Our mission is to illuminate every mile of the journey through technology and human expertise.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded by industry veterans who saw a need for better communication and reliability, we've grown into a nationwide network connecting shippers with the best carriers on the road.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-background rounded-2xl border border-white/5 shadow-xl">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Dedicated specialists for every account.</p>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-white/5 shadow-xl translate-y-8">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-2">Nationwide</h3>
                  <p className="text-sm text-muted-foreground">Coverage across all 48 contiguous states.</p>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-white/5 shadow-xl">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-2">Top Rated</h3>
                  <p className="text-sm text-muted-foreground">Consistently ranked for service quality.</p>
                </div>
                <div className="p-6 bg-background rounded-2xl border border-white/5 shadow-xl translate-y-8">
                  <BarChart3 className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-xl mb-2">Data Driven</h3>
                  <p className="text-sm text-muted-foreground">Analytics that optimize your spend.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built by Truckers, For <span className="text-primary">Truckers</span> 
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ProDispatch was founded in 2014 by John Smith, a former owner-operator 
                who experienced firsthand the challenges of managing loads, negotiating 
                rates, and handling paperwork while trying to stay on the road.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Frustrated with dispatch services that didn't understand the trucking 
                lifestyle, he built ProDispatch with one goal: create a dispatch company 
                that truly partners with drivers and treats their success as our own.
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-4xl font-bold text-white">500+</p>
                  <p className="text-muted-foreground">Fleets Served</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">10+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white">98%</p>
                  <p className="text-muted-foreground">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full gradient-cta flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-card p-6 rounded-xl border border-border">
                      <span className="text-sm font-medium text-accent">{milestone.year}</span>
                      <h3 className="text-lg font-semibold text-white mt-1">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground">
              Our core values guide everything we do and how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-card rounded-2xl border border-border"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-cta flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Meet the Experts
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team brings decades of combined experience in trucking, logistics, and dispatch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl border border-border overflow-hidden group"
              >
                {/* Avatar Placeholder */}
                <div className="aspect-square bg-secondary/10 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/20">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


        {/* Team CTA */}
        <section className="py-24 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Network</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you are a shipper looking for capacity or a carrier looking for consistent lanes, we have a place for you.
          </p>
          {/* Decorative line */}
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
