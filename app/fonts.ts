import { Roboto, Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const logoFont = localFont({
  src: "../public/fonts/Dune_Rise.woff2",
  weight: "900",
  style: "normal",
  variable: "--logo-font",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  variable: "--main-font",
});

export const montserrat = Montserrat({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  variable: "--title-font",
});
