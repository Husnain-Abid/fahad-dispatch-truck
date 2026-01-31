import { Link } from "wouter";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, href, className }: ServiceCardProps) {
  return (
    <Link href={href} className={cn(
      "group relative flex flex-col p-8 rounded-2xl transition-all duration-500",
      "bg-secondary/20 hover:bg-secondary/40 border border-white/5 hover:border-primary/50",
      "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors mt-auto">
          Learn More 
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
