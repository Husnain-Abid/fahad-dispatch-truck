import { Link } from "wouter";
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">
                Logi<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium logistics solutions for the modern world. We deliver excellence, reliability, and speed across every mile.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors group">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold font-display text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                { label: "Dry Van Shipping", href: "/services/dry-van" },
                { label: "Reefer Transport", href: "/services/reefer" },
                { label: "Flatbed Hauling", href: "/services/flatbed" },
                { label: "Power Only", href: "/services/power-only" },
                { label: "Hotshot Services", href: "/services/hotshot" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-bold font-display text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "News & Insights", href: "/news" },
                { label: "Contact Support", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold font-display text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">123 Logistics Blvd, Suite 400<br />Transport City, TC 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+1 (800) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">support@logitech.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} LogiTech Solutions. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground">
            Designed with precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
