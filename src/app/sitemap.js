import { serviceDetails } from "@/data/services";
import { blogPosts } from "@/data/blog-posts";
import { siteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date("2025-06-01T00:00:00.000Z");

  const coreRoutes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/pricing", priority: 0.8 },
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/get-a-quote", priority: 0.9 },
    { path: "/carrier-signup", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    { path: "/testimonials", priority: 0.4 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-of-service", priority: 0.3 },
  ];

  const serviceRoutes = serviceDetails.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.7,
  }));

  const postRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
  }));

  return [...coreRoutes, ...serviceRoutes, ...postRoutes].map((route) => ({
    url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.priority >= 0.8 ? "monthly" : "yearly",
    priority: route.priority,
  }));
}
