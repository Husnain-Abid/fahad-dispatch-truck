import Image from "next/image";
import { Check } from "lucide-react";

export default function TruckTypeCard({ truck }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-ink/60 transition-colors duration-500 hover:border-gold/40">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={truck.image}
          alt={truck.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{truck.name}</h3>
        <p className="mt-2.5 text-[0.86rem] leading-relaxed text-white/55">{truck.summary}</p>
        <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
          {truck.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-[0.8rem] text-white/70">
              <Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
