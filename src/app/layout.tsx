import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Meethi Chaat - Connect & Chat with the World",
  description: "Experience crystal clear voice calls, meet amazing people, and enjoy secure private chats with Meethi Chaat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="antialiased font-sans">
        <Navbar />
        <main className="min-h-screen pt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

