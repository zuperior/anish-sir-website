import type { Metadata } from "next";
import "./globals.css";
import { clashDisplay, clashGrotesk, delicious, geistSans, kronaOne, nataSans, raleway } from "./_fonts";
import Navbar from "../components/Navbar";
import { LenisWrapper } from "../components/LenisWrapper";
import { Analytics} from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
  title: "Anish Singh Thakur",
  description: "Explore the professional work and journey of Anish Singh Thakur.",
  icons: {
    icon: "/favicon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.className} ${geistSans.variable} ${kronaOne.variable} ${clashGrotesk.variable} ${clashDisplay.variable} ${nataSans.variable} ${raleway.variable} ${delicious.variable}`}
    >
      <body className="antialiased">
        <LenisWrapper>
          <Navbar />
          {children}
        </LenisWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
