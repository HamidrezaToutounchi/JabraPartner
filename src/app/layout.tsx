import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jabra Türkiye Partner & Proje Portalı — Tüm Kurumsal Portföy",
  description:
    "Evolve3, Evolve2, Engage, Biz, Perform, PanaCast ve Speak2 serisi Jabra kurumsal kulaklık ve video konferans sistemleri resmi bayi ve proje kayıt platformu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-[#0B0F19] text-[#F8FAFC] min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
