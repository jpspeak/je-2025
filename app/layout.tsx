import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import CalComModal from "./(shared)/components/CalComModal";
import { Toaster } from "sonner";
import NavbarMobile from "./(shared)/components/NavbarMobile";

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
  metadataBase: new URL("https://je.designs.com"),
  title: {
    template: "%s - Jeremy Ellsworth Designs",
    default: "Jeremy Ellsworth Designs",
  },
  description:
    "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
  openGraph: {
    title: "Jeremy Ellsworth Designs",
    description:
      "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
    siteName: "Jeremy Ellsworth Designs",
    url: "https://je.designs.com", // Replace with your website URL
    images: [
      {
        url: "https://jedesigns.com/assets/images/je-banner.png",
        width: 1200,
        height: 630,
        alt: "Jeremy Ellsworth Designs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jnellsworth_", // Replace with your Twitter handle
    title: "Jeremy Ellsworth Designs",
    description:
      "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
    images: ["https://je.designs.com/assets/images/je-banner.png"],
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
      </body>
    </html>
  );
}
