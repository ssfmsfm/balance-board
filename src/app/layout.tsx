import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FacebookPixel from "../components/commonComponents/FacebookPixel";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const GTM_ID = process.env.GTM_ID || "";

export const metadata: Metadata = {
  title: "BALANCE BOARD",
  description:
    "Überraschen Sie Ihr Baby mit einer neuen Erfahrung mit dem geraden Balancer von RP and Partners! Es wird Ihrem Kind helfen, Korrdination und Gleichgewichtssinn zu entwickeln.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={GTM_ID} />
      <body className={inter.className}>
        {children}
        <FacebookPixel />
        <Analytics />
      </body>
    </html>
  );
}
