import { Geist, Instrument_Serif } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700"],
});

export const editorial = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-editorial",
  weight: ["400"],
  style: ["normal", "italic"],
});
