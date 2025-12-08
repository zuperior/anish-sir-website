import { Delicious_Handrawn, Geist, Krona_One, Nata_Sans, Raleway } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const kronaOne = Krona_One({
  variable: "--font-krona-one",
  subsets: ["latin"],
  weight: "400",
});

export const clashDisplay = localFont({
  src: [
    { path: "./ClashDisplay/ClashDisplay-Extralight.woff2", weight: "200", style: "normal" },
    { path: "./ClashDisplay/ClashDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "./ClashDisplay/ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "./ClashDisplay/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./ClashDisplay/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./ClashDisplay/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "./ClashDisplay/ClashDisplay-Variable.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});

export const clashGrotesk = localFont({
  src: [
    { path: "./ClashGrostek/ClashGrotesk-Extralight.woff2", weight: "200", style: "normal" },
    { path: "./ClashGrostek/ClashGrotesk-Light.woff2", weight: "300", style: "normal" },
    { path: "./ClashGrostek/ClashGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "./ClashGrostek/ClashGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "./ClashGrostek/ClashGrotesk-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./ClashGrostek/ClashGrotesk-Bold.woff2", weight: "700", style: "normal" },
    { path: "./ClashGrostek/ClashGrotesk-Variable.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
});

export const nataSans = Nata_Sans({
  variable: "--font-nata-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

export const delicious = Delicious_Handrawn({
  weight: "400",
  variable: "--font-delicious",
  subsets: ["latin"],
});