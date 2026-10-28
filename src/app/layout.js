import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/analytics/CookieConsent";
import AnalyticsScripts from "@/components/analytics/AnalyticsScripts";
import { geist, editorial } from "@/lib/fonts";
import { siteConfig, siteUrl } from "@/lib/site-config";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prime Nation Haul | Truck Dispatching & Carrier Support",
    template: "%s | Prime Nation Haul",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "truck dispatching services",
    "owner-operator dispatching",
    "freight dispatch services",
    "truck dispatching for small fleets",
    "load booking and rate negotiation",
    "carrier support",
    "US truck dispatching",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: "Prime Nation Haul | Truck Dispatching & Carrier Support",
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero-interstate.png",
        width: 1200,
        height: 630,
        alt: "Semi-truck traveling on an interstate highway at dusk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Nation Haul | Truck Dispatching & Carrier Support",
    description: siteConfig.description,
    images: ["/images/hero-interstate.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "transportation",
};

export const viewport = {
  themeColor: "#0A1220",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteUrl,
  description: siteConfig.description,
  telephone: siteConfig.phone.e164,
  areaServed: "United States",
  knowsAbout: [
    "Truck dispatching",
    "Load booking",
    "Rate negotiation",
    "Carrier support",
    "Electronic logging device setup",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${editorial.variable}`}>
      <body className="font-sans">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
        <AnalyticsScripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
