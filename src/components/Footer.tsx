import React from "react";
import Link from "next/link";
import JabraLogo from "./JabraLogo";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <JabraLogo />
              <div className="border-l border-slate-700 pl-3">
                <span className="text-white font-black text-lg tracking-tight block">Partner B2B</span>
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Kurumsal Portal</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Jabra'nın Türkiye'deki tüm kurumsal ofis kulaklıkları, çağrı merkezi sistemleri, saha çözümleri ve video konferans portföyü için yetkili B2B proje merkezi.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 border border-slate-700 p-2.5 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-[#FFD100] flex-shrink-0" />
              <span>Jabra Resmi Kurumsal Distribütör Ağı</span>
            </div>
          </div>

          {/* Headsets & Contact Center */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Kulaklık Aileleri
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/urunler?cat=office-headset" className="hover:text-[#FFD100] transition-colors">
                  Evolve3 Serisi (AI ClearVoice Kulaklıklar)
                </Link>
              </li>
              <li>
                <Link href="/urunler?cat=office-headset" className="hover:text-[#FFD100] transition-colors">
                  Evolve2 Serisi (85, 75, 65 Flex, 55, Buds)
                </Link>
              </li>
              <li>
                <Link href="/urunler?cat=contact-center" className="hover:text-[#FFD100] transition-colors">
                  Engage Serisi (150m DECT & Engage 50 II)
                </Link>
              </li>
              <li>
                <Link href="/urunler?cat=contact-center" className="hover:text-[#FFD100] transition-colors">
                  Biz 2400 II / 2300 (Kevlar Kablolu Çağrı)
                </Link>
              </li>
              <li>
                <Link href="/urunler?cat=frontline" className="hover:text-[#FFD100] transition-colors">
                  Perform Serisi (Bas-Konuş PTT Saha Kulaklıkları)
                </Link>
              </li>
            </ul>
          </div>

          {/* Video & Audio & Software */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Video, Ses & Yazılım
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/urunler?cat=panacast" className="hover:text-[#FFD100] transition-colors">
                  PanaCast 50 VBS / Room System (180° 4K)
                </Link>
              </li>
              <li>
                <Link href="/urunler?cat=speakerphone" className="hover:text-[#FFD100] transition-colors">
                  Speak2 75 / 55 / 40 Konferans Hoparlörleri
                </Link>
              </li>
              <li>
                <Link href="/urunler?cat=software" className="hover:text-[#FFD100] transition-colors">
                  Jabra+ (Jabra Plus Bulut Filo Yönetimi)
                </Link>
              </li>
              <li>
                <Link href="/karsilastir" className="hover:text-[#FFD100] transition-colors">
                  Yan Yana Model Karşılaştırma Aracı
                </Link>
              </li>
              <li>
                <Link href="/proje-teklifi" className="hover:text-[#FFD100] transition-colors">
                  Kurumsal Demo Cihazı & Proje Kaydı
                </Link>
              </li>
            </ul>
          </div>

          {/* B2B Support Desk */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Kurumsal B2B Masası
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD100]" />
                <span className="text-slate-200">0850 300 JABRA (5227)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD100]" />
                <span className="text-slate-200">b2b@jabrapartner.com.tr</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD100] mt-0.5" />
                <span>Maslak No:1 Plaza, Sarıyer / İstanbul</span>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-800">
              <span className="text-[11px] text-slate-500 block">50+ ve 100+ adetli alımlarda özel proje iskontosu uygulanır.</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} jabrapartner.com.tr — Jabra Türkiye Kurumsal Portföy & B2B Proje Merkezi.</p>
          <div className="flex space-x-6 text-slate-500">
            <span>B2B Satış Şartları</span>
            <span>Gizlilik Politikası</span>
            <span>Garanti & RMA Süreçleri</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
