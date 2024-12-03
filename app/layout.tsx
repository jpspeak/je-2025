import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./(shared)/components/Header";
import localFont from "next/font/local";

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

export const metadata: Metadata = {
  title: "JE Designs",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${gilroy.variable} font-poppins`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
