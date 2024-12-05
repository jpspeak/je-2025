import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import CalComModal from "./(shared)/components/CalComModal";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
  title: "JE Designs",
  description: "",
};

export default function RootLayout({
  children,
  project,
}: Readonly<{
  children: React.ReactNode;
  project: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${gilroy.variable} ${deliciousHandrawn.variable} font-poppins`}
      >
        {children}
        {project}
        <CalComModal />
        <Toaster
          toastOptions={{ className: "w-max right-0" }}
          visibleToasts={1}
        />
      </body>
    </html>
  );
}
