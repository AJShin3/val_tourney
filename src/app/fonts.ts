import { Inter } from "next/font/google";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import "./fonts.ts";

export const Inter_Font = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const Rajdhani_Font = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
