import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingDownloadBar from "@/components/FloatingDownloadBar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yaroapp.in'),
  title: "Yaro - Connect, Voice Chat & Live Entertainment",
  description: "Experience crystal-clear 1-on-1 voice calls, live 9-seat audio party rooms, 3D animated virtual gifts, and fast creator earnings with Yaro.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="antialiased font-sans">
        <Navbar />
        <main className="min-h-screen pt-10">
          {children}
        </main>
        <FloatingDownloadBar />
        <Footer />
      </body>
    </html>
  );
}
