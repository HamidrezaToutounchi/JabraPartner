"use client";

import React, { useState } from "react";
import Link from "next/link";
import JabraLogo from "./JabraLogo";
import {
  Headphones,
  PhoneCall,
  Radio,
  Video,
  Mic,
  Cpu,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      title: "Ofis Kulaklıkları",
      subtitle: "Evolve3 & Evolve2",
      icon: Headphones,
      desc: "AI ClearVoice, Adaptif ANC, hibrit ve açık ofis",
      link: "/urunler?cat=office-headset",
    },
    {
      title: "Çağrı Merkezi",
      subtitle: "Engage, Biz & Pro",
      icon: PhoneCall,
      desc: "150m DECT menzil, 256-bit şifreleme, Engage+",
      link: "/urunler?cat=contact-center",
    },
    {
      title: "Saha & Perakende (PTT)",
      subtitle: "Perform Serisi",
      icon: Radio,
      desc: "Bas-Konuş (Push-to-Talk), Teams Walkie Talkie",
      link: "/urunler?cat=frontline",
    },
    {
      title: "Konferans Hoparlörleri",
      subtitle: "Speak2 & Speak",
      icon: Mic,
      desc: "Super-Wideband ses, 360° LED mikrofon halkası",
      link: "/urunler?cat=speakerphone",
    },
    {
      title: "Video Konferans",
      subtitle: "PanaCast Sistemleri",
      icon: Video,
      desc: "180° Panoramik 4K, Android & Windows barlar",
      link: "/urunler?cat=panacast",
    },
    {
      title: "Yazılım & Bulut",
      subtitle: "Jabra+ & Xpress",
      icon: Cpu,
      desc: "Filo yönetimi, analitik ve merkezi güncelleme",
      link: "/urunler?cat=software",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 px-4 py-1.5 text-[11px] font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-semibold text-white">Jabra Türkiye Resmi Partner Masası</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">Kurumsal Proje Koruması & Yetkili İskonto Avantajı</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Destek: <strong className="text-white">0850 300 JABRA (5227)</strong></span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center group">
            <JabraLogo />
            <div className="h-5 w-[1px] bg-slate-200 mx-3"></div>
            <span className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight">
              Partner
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Mega Menu Toggle */}
            <div className="relative">
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                onMouseEnter={() => setMegaMenuOpen(true)}
                className={`text-[13px] font-semibold transition-colors flex items-center gap-1.5 py-2 ${
                  megaMenuOpen ? "text-amber-600" : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <span>Ürün Kategorileri</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div
                  onMouseLeave={() => setMegaMenuOpen(false)}
                  className="absolute left-0 mt-1 w-[680px] bg-white rounded-2xl shadow-xl border border-slate-200 p-5 grid grid-cols-2 gap-3 z-50"
                >
                  {categories.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <Link
                        key={i}
                        href={c.link}
                        onClick={() => setMegaMenuOpen(false)}
                        className="p-3 rounded-xl hover:bg-slate-50 transition-all flex items-start gap-3 group border border-transparent hover:border-slate-200"
                      >
                        <div className="p-2 rounded-lg bg-amber-50 group-hover:bg-[#FFD100] transition-colors flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-slate-800" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                            {c.title}
                          </div>
                          <div className="text-[11px] font-medium text-slate-500">
                            {c.subtitle}
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                            {c.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">31 Kurumsal Jabra Modeli Stokta</span>
                    <Link
                      href="/urunler"
                      onClick={() => setMegaMenuOpen(false)}
                      className="text-amber-700 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Tüm Kataloğu Gör</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#product-finder"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Cihaz Sihirbazı
            </a>

            <Link
              href="/urunler"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Tüm Katalog
            </Link>

            <Link
              href="/karsilastir"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Karşılaştırma
            </Link>

            <Link
              href="/proje-teklifi"
              className="text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors whitespace-nowrap"
            >
              Proje Kaydı
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/proje-teklifi"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFD100] hover:bg-[#FACC15] text-slate-950 font-bold text-xs tracking-wide shadow-xs border border-amber-400/40 transition-all hover:shadow-sm whitespace-nowrap"
            >
              <span>Toplu Proje Teklifi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <Link
            href="/urunler"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Tüm Ürün Kataloğu
          </Link>
          <a
            href="/#product-finder"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Cihaz Sihirbazı
          </a>
          <Link
            href="/karsilastir"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Ürün Karşılaştırma
          </Link>
          <Link
            href="/proje-teklifi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
          >
            Proje Fiyat & Bayi Başvurusu
          </Link>
          <div className="pt-2">
            <Link
              href="/proje-teklifi"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#FFD100] text-slate-950 font-bold text-xs shadow-xs"
            >
              <span>Toplu Proje Teklifi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
