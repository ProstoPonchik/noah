import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header/Header";
import { headers } from "next/headers";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ttnorms = localFont({
  src: [
    {
      path: "../public/fonts/TTNorms-Thin.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/TTNorms-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/TTNorms-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/TTNorms-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/TTNorms-Heavy.woff2",
      weight: "900",
    },
  ],
  variable: "--font-ttnorms",
});

export const metadata: Metadata = {
  title: "Noah",
  description: "Best LinkedIn promotion agency",
  icons: {
    icon: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get("x-url") || "";
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ttnorms.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
