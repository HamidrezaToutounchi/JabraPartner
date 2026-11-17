import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased overflow-x-hidden selection:bg-amber-300 selection:text-slate-950 pb-16 md:pb-0">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar
          phone="0850 850 08 56"
          telNumber="08508500856"
          whatsappText="Merhaba, Jabra kurumsal kulaklık ve video sistemleri için proje fiyat teklifi almak istiyorum."
          formUrl="/proje-teklifi"
        />
      </body>
    </html>
  );
}
