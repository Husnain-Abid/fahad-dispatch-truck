import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import CTASection from "@/components/ui/CTASection";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { blogPosts } from "@/data/blog-posts";

export const metadata = {
  title: "Trucking & Dispatching Guides",
  description:
    "Practical educational articles about truck dispatching, load booking, rate negotiation, and carrier preparation from Prime Nation Haul.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Trucking & Dispatching Guides | Prime Nation Haul",
    description:
      "Practical guides on dispatching, load evaluation, and carrier onboarding preparation.",
    url: "/blog",
    images: ["/images/services/dry-van-reefer.jpg"],
  },
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Practical reading for{" "}
            <span className="editorial text-gold">carriers.</span>
          </>
        }
        description="Short, useful articles about dispatch work, load evaluation, and preparing your operation for smoother onboarding. Written to inform, not to sell."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
        image="/images/services/dry-van-reefer.jpg"
        imageAlt="Semi-truck and trailer on an interstate highway"
      >
        <Button href="/get-a-quote" size="lg">
          Get a Quote
        </Button>
        <Button href="/faq" variant="outline" size="lg">
          Read the FAQ
        </Button>
      </PageHero>

      <section className="bg-offwhite py-20 sm:py-24">
        <div className="shell">
          <div className="flex flex-wrap items-center gap-3 border border-gold/30 bg-gold/[0.07] px-5 py-4">
            <span className="border border-gold/50 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-navy">
              Editorial note
            </span>
            <p className="text-[0.82rem] leading-relaxed text-navy/75">
              These articles are general educational drafts. Regulatory and market details should be
              reviewed with the Prime Nation Haul team before publication.
            </p>
          </div>

          <div className="mt-10">
            <SectionHeading
              eyebrow="Latest articles"
              title={
                <>
                  Clear thinking about the{" "}
                  <span className="editorial text-gold">desk work.</span>
                </>
              }
              description="No invented news, no time-sensitive claims — just practical explanations of how dispatching and carrier operations fit together."
            />
          </div>

          <Reveal className="mt-10">
            <BlogCard post={featured} featured />
          </Reveal>

          <RevealGroup className="mt-5 grid gap-5 md:grid-cols-2">
            {rest.map((post) => (
              <RevealItem key={post.slug} className="h-full">
                <BlogCard post={post} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        eyebrow="Beyond the reading"
        title="Questions about your own operation?"
        description="Articles are general. A short conversation gives you answers about your trucks, lanes, and the support you need."
        primaryLabel="Get a Quote"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
