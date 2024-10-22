import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FacebookPixel from "../components/commonComponents/FacebookPixel";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BALANCE BOARD",
  description:
    "Überraschen Sie Ihr Baby mit einer neuen Erfahrung mit dem geraden Balancer von The Carvers! Es wird Ihrem Kind helfen, Korrdination und Gleichgewichtssinn zu entwickeln.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="verify-paysera"
          content="b8930c795faeb510fce313fb4ddacfef"
        />
      </head>
      <body className={inter.className}>
        {children}
        <FacebookPixel />
        <Analytics />
      </body>
    </html>
  );
}
