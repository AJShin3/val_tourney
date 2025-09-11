import type { Metadata } from "next";
import { Inter_Font } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Champions Paris Stats",
  description: "Fan made Champions Paris 2025 Valorant stats site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Inter_Font.variable} antialiased bg-val-black`}>
        {children}
      </body>
    </html>
  );
}
