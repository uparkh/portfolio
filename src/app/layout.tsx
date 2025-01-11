import { StrictMode } from "react";
import type { Metadata } from "next";
import { Raleway, Montserrat, Open_Sans, Overpass } from "next/font/google";
import Navbar from "./_components/navbar";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upanshu Parekh",
  description: "Upanshu Parekh's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <StrictMode>
        <body
          className={`${raleway.variable} ${montserrat.variable} ${open_sans.variable} ${overpass.variable} antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </StrictMode>
    </html>
  );
}
