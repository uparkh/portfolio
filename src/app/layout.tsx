import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "./_components/navbar";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
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
    <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
