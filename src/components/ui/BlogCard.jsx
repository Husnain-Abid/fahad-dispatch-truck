import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function BlogCard({ post, featured = false }) {
  return (
    <article
      className={
        featured
          ? "group grid gap-0 overflow-hidden border border-navy/10 bg-white lg:grid-cols-2"
          : "group flex h-full flex-col overflow-hidden border border-navy/10 bg-white transition-colors hover:border-gold/50"
      }
    >
      <Link
        href={`/blog/${post.slug}`}
        className={featured ? "relative block aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[22rem]" : "relative block aspect-[16/10] overflow-hidden"}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
      </Link>
      <div className={featured ? "flex flex-col justify-center p-7 sm:p-9" : "flex flex-1 flex-col p-6"}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.64rem] font-semibold uppercase tracking-[0.16em]">
          <span className="text-gold">{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-navy/25" aria-hidden="true" />
          <span className="text-muted">{post.readTime}</span>
        </div>
        <h3
          className={
            featured
              ? "mt-4 text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-snug text-navy"
              : "mt-3 text-[1.08rem] font-semibold leading-snug text-navy"
          }
        >
          <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-gold">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-[0.88rem] leading-relaxed text-muted">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-navy/10 pt-4">
          <time dateTime={post.publishedAt} className="text-[0.7rem] uppercase tracking-[0.12em] text-muted/80">
            {formatDate(post.publishedAt)}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy transition-colors group-hover:text-gold"
          >
            Read article
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
