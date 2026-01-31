import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Truck, Package, Anchor, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" }, // Anchor link for simplicity on SPA
    { name: "About", href: "/about" },
  ];

  const services = [
    { name: "Dry Van", icon: Truck, href: "/services/dry-van" },
    { name: "Reefer", icon: Package, href: "/services/reefer" },
    { name: "Flatbed", icon: Anchor, href: "/services/flatbed" },
    { name: "Power Only", icon: Shield, href: "/services/power-only" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/40 py-4 shadow-lg shadow-black/5"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group cursor-pointer">
          <div className="relative w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
            <Truck className="w-6 h-6 text-primary-foreground" />
            <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-lg -z-10 group-hover:bg-primary/40 transition-colors"></div>
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-foreground">
            Logi<span className="text-primary">Tech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/" ? "text-primary" : "text-muted-foreground")}>
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none">
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-secondary/95 backdrop-blur-xl border-border/50 text-foreground p-2 rounded-xl shadow-2xl animate-in fade-in-0 zoom-in-95">
              {services.map((service) => (
                <DropdownMenuItem key={service.name} asChild className="focus:bg-primary/20 focus:text-primary rounded-lg cursor-pointer">
                  <Link href={service.href} className="flex items-center px-3 py-2 w-full">
                    <service.icon className="w-4 h-4 mr-2 opacity-70" />
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/about" ? "text-primary" : "text-muted-foreground")}>
            About Us
          </Link>

          <Button asChild size="default" className="ml-4 font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 shadow-2xl animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-foreground hover:text-primary px-4 py-2 rounded-lg hover:bg-secondary/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-2">
              <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Services</p>
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <service.icon className="w-5 h-5 mr-3 text-primary" />
                  {service.name}
                </Link>
              ))}
            </div>
            <Button asChild className="w-full mt-4 font-bold h-12 text-lg shadow-xl shadow-primary/20">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Request Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
