import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import CalComModal from "./(shared)/components/CalComModal";
import { Toaster } from "sonner";
import NavbarMobile from "./(shared)/components/NavbarMobile";
import Script from "next/script";
import PathTracker from "./(shared)/components/PathTracker";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const funnelSans = localFont({
  variable: "--font-funnel-sans",
  src: [
    {
      path: "./(shared)/fonts/FunnelSans.ttf",
      style: "normal",
    },
  ],
});

const gilroy = localFont({
  variable: "--font-gilroy",
  src: [
    {
      path: "./(shared)/fonts/gilroy-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
const deliciousHandrawn = localFont({
  variable: "--font-delicious-handrawn",
  src: [
    {
      path: "./(shared)/fonts/DeliciousHandrawn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://je.design"),
  title: {
    template: "%s | Jeremy Ellsworth Designs LLC",
    default: "Jeremy Ellsworth Designs LLC",
  },
  description:
    "Transform your brand with Jeremy Ellsworth Designs LLC. Expert brand identity, logo design, and vehicle wrap services that make your business stand out.",
  keywords: [
    "brand design agency",
    "logo design services",
    "vehicle wrap design",
    "Jeremy Ellsworth Designs",
    "brand identity specialist",
    "professional logo designer",
    "custom vehicle wraps",
    "USA design agency",
    "creative branding solutions",
    "graphic design services",
  ],
  alternates: {
    canonical: "https://je.design",
  },
  openGraph: {
    title: "Jeremy Ellsworth Designs LLC",
    description:
      "Transform your brand with Jeremy Ellsworth Designs LLC. Expert brand identity, logo design, and vehicle wrap services that make your business stand out.",
    siteName: "Jeremy Ellsworth Designs LLC",
    url: "https://je.design",
    images: [
      {
        url: "https://je.design/assets/images/je-banner.png",
        width: 1200,
        height: 630,
        alt: "Jeremy Ellsworth Designs LLC - Brand Design Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jnellsworth_",
    title: "Jeremy Ellsworth Designs LLC",
    description:
      "Transform your brand with Jeremy Ellsworth Designs LLC. Expert brand identity, logo design, and vehicle wrap services that make your business stand out.",
    images: ["https://je.design/assets/images/je-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
  project,
}: Readonly<{
  children: React.ReactNode;
  project: React.ReactNode;
  recording: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content="Jeremy Ellsworth Designs LLC" />
        <Script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Jeremy Ellsworth Designs LLC",
              alternateName: "JE Designs",
              url: "https://je.design",
            }),
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Jeremy Ellsworth Designs LLC",
              image: "https://je.design/assets/images/je-banner.png",
              "@id": "https://je.design",
              url: "https://je.design",
              telephone: "+1 603-267-0081",
              address: {
                "@type": "PostalAddress",
                streetAddress: "25 Cherry St",
                addressLocality: "Belmont",
                addressRegion: "NH",
                postalCode: "03220",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.4443,
                longitude: -71.4773,
              },
              priceRange: "$$",
              description:
                "Transform your brand with Jeremy Ellsworth Designs LLC. Expert brand identity, logo design, and vehicle wrap services that make your business stand out.",
              sameAs: [
                "https://twitter.com/jnellsworth_",
                // Add other social media URLs
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${funnelSans.variable} ${gilroy.variable} ${deliciousHandrawn.variable} font-funnel-sans overflow-x-hidden`}
      >
        {children}
        {project}
        <CalComModal />
        <Toaster
          toastOptions={{ className: "w-max right-0" }}
          visibleToasts={1}
        />
        <NavbarMobile />
        <PathTracker />
        <SpeedInsights />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
    </html>
  );
}
