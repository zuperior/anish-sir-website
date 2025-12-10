import type { Metadata } from "next";
import "./globals.css";
import { clashDisplay, clashGrotesk, delicious, geistSans, kronaOne, nataSans, raleway } from "./_fonts";
import Navbar from "../components/Navbar";
import { LenisWrapper } from "../components/LenisWrapper";

export const metadata: Metadata = {
  title: "Passion. Purpose. Progress.",
  description: "Explore the professional work and journey of Anish Singh Thakur."
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
      </body>
    </html>
  );
}
