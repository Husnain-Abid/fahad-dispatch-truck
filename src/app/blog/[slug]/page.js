import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import BlogCard from "@/components/ui/BlogCard";
import { getPost, blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pt-40">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/50" />
          <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
          <div className="shell relative">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.category, href: `/blog/${post.slug}` },
              ]}
            />
            <div className="mt-8 max-w-3xl">
              <p className="eyebrow text-gold">
                <span className="gold-rule" aria-hidden="true" />
                {post.category}
              </p>
              <h1 className="mt-5 text-[clamp(2.1rem,4.8vw,3.6rem)] font-semibold leading-[1.05] text-white">
                {post.title}
              </h1>
              <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-white/65">{post.excerpt}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.7rem] uppercase tracking-[0.14em] text-white/40">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white py-16 sm:py-20">
          <div className="shell grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
            <div className="max-w-3xl">
              <p className="border-l-2 border-gold pl-5 text-[1.05rem] leading-relaxed text-navy">
                {post.intro}
              </p>

              {post.sections.map((section) => (
                <section key={section.heading} className="mt-10">
                  <h2 className="text-[1.4rem] font-semibold text-navy">{section.heading}</h2>
                  <div className="mt-3 space-y-4 text-[0.96rem] leading-relaxed text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-5 space-y-2.5 border-l border-navy/10 pl-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-[0.9rem] text-navy">
                          <Check aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-gold" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <div className="mt-12 border border-navy/10 bg-offwhite p-6">
                <h2 className="text-[1.05rem] font-semibold text-navy">Key takeaways</h2>
                <ul className="mt-4 space-y-3">
                  {post.takeaways.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-navy">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border border-gold/30 bg-gold/[0.06] p-5">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-navy">
                  Publication review note
                </p>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-navy/75">{post.reviewNote}</p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
                >
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                  All articles
                </Link>
                <Button href="/get-a-quote" size="sm">
                  Get a Quote
                </Button>
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 border border-navy/10 bg-offwhite p-6">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  About the author
                </p>
                <p className="mt-3 text-[0.9rem] font-medium text-navy">Prime Nation Haul</p>
                <p className="mt-2 text-[0.83rem] leading-relaxed text-muted">
                  Written by our dispatch team from five years of day-to-day carrier support
                  experience. General information only — not legal or regulatory advice.
                </p>
                <div className="mt-5 border-t border-navy/10 pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy hover:text-gold"
                  >
                    Our services <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="bg-offwhite py-16 sm:py-20">
        <div className="shell">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-[1.4rem] font-semibold text-navy">Related reading</h2>
            <Link
              href="/blog"
              className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-navy hover:text-gold"
            >
              All articles
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Questions?"
        title="Talk with a dispatcher about your operation."
        description="We will confirm what we can support and how pricing works for your fleet."
      />
    </>
  );
}
