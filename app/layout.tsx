import type { Metadata } from "next";
import { Bebas_Neue, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  variable: "--font-atkinson",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Papcio Chmiel Science Center - Comic, Space and Imagination",
  description: "A digital-first science and imagination center inspired by Papcio Chmiel's legacy and the world of Tytus, Romek, and A'Tomek. Developed within the District.org ecosystem.",
  openGraph: {
    title: "Papcio Chmiel Science Center",
    description: "A digital-first science and comic center. Enter the world where comics become an imagination laboratory.",
    images: [{ url: "/images/hero-building.jpg", width: 1200, height: 630, alt: "Papcio Chmiel Science Center" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Papcio Chmiel Science Center",
    description: "A digital-first science and comic center.",
    images: ["/images/hero-building.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${atkinson.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0A09] text-black font-sans selection:bg-[#FFD84D] selection:text-black">
        {/* Halftone / Comic dots grid pattern overlay */}
        <div className="absolute inset-0 -z-30 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000000_15%,transparent_16%)] bg-[size:16px_16px]" />
        {children}
      </body>
    </html>
  );
}
