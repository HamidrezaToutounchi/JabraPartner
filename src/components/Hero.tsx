import React from "react";
import Link from "next/link";
import { ArrowRight, FileSpreadsheet, Compass, Headphones, Video, Mic, Radio, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-white pt-14 pb-20 border-b border-slate-200 text-slate-900">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-200/25 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 shadow-sm text-xs font-bold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span className="text-amber-700 font-black">Jabra Türkiye Resmi B2B Portalı</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Tüm Kurumsal Portföy & Özel Proje İskontoları</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
            Jabra Kurumsal Portföyü,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
              Proje Fiyatlandırması ve B2B Çözüm Merkezi
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            AI destekli yeni nesil <strong>Evolve3 & Evolve2</strong> ofis kulaklıklarından, 150m menzilli <strong>Engage</strong> çağrı merkezine, <strong>PanaCast</strong> 180° video sistemlerinden <strong>Speak2</strong> hoparlörlerine kadar tüm Jabra ekosistemi tek çatı altında.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/proje-teklifi"
            className="w-full sm:w-auto bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-base px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-amber-400/25 flex items-center justify-center gap-3"
          >
            <FileSpreadsheet className="w-5 h-5" />
            <span>Toplu Teklif & Özel Proje Kaydı</span>
          </Link>
          <a
            href="#product-finder"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
          >
            <Compass className="w-5 h-5 text-amber-400" />
            <span>Çalışma Tarzına Göre Cihaz Seç</span>
          </a>
          <Link
            href="/urunler"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-8 py-4 rounded-full border border-slate-300 shadow-sm transition-all text-center"
          >
            Tüm Kataloğu İncele
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-400 hover:shadow-lg transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Headphones className="w-6 h-6 text-sky-600" />
              <span className="text-xs font-black text-slate-900 uppercase">Hibrit Ofis</span>
            </div>
            <div className="text-sm font-black text-slate-800">Evolve3 & Evolve2</div>
            <div className="text-[11px] text-slate-500 mt-1 font-medium">AI ClearVoice & Adaptif ANC</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-400 hover:shadow-lg transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <PhoneCall className="w-6 h-6 text-emerald-600" />
              <span className="text-xs font-black text-slate-900 uppercase">Çağrı Merkezi</span>
            </div>
            <div className="text-sm font-black text-slate-800">Engage, Biz & Pro</div>
            <div className="text-[11px] text-slate-500 mt-1 font-medium">150m DECT, 256-bit Şifreleme</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-400 hover:shadow-lg transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Video className="w-6 h-6 text-amber-600" />
              <span className="text-xs font-black text-slate-900 uppercase">Toplantı Odası</span>
            </div>
            <div className="text-sm font-black text-slate-800">PanaCast & Speak2</div>
            <div className="text-[11px] text-slate-500 mt-1 font-medium">180° Panoramik 4K & Stüdyo Ses</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-400 hover:shadow-lg transition-all shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Radio className="w-6 h-6 text-purple-600" />
              <span className="text-xs font-black text-slate-900 uppercase">Saha / Mağaza</span>
            </div>
            <div className="text-sm font-black text-slate-800">Perform PTT Serisi</div>
            <div className="text-[11px] text-slate-500 mt-1 font-medium">Bas-Konuş & Teams Walkie Talkie</div>
          </div>
        </div>
      </div>
    </section>
  );
}
