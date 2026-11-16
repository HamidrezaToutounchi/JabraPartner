import React from "react";
import Link from "next/link";
import { ArrowRight, FileSpreadsheet, Compass, Headphones, Video, Mic, Radio, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-amber-50/20 to-white pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-slate-200 text-slate-900">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[180px] sm:h-[300px] bg-amber-200/25 blur-[90px] sm:blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-amber-300 shadow-xs text-[11px] sm:text-xs font-bold text-slate-800 text-center flex-wrap justify-center">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping flex-shrink-0" />
            <span className="text-amber-700 font-black">Jabra Türkiye Resmi Partner Portalı</span>
            <span className="hidden xs:inline text-slate-300">|</span>
            <span className="hidden xs:inline text-slate-600">Tüm Kurumsal Portföy</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-snug sm:leading-[1.15] text-slate-900 break-words">
            Jabra Kurumsal Portföyü,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">
              Proje Fiyatlandırması ve Kurumsal Çözüm Merkezi
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            AI destekli yeni nesil <strong>Evolve3 & Evolve2</strong> ofis kulaklıklarından, 150m menzilli <strong>Engage</strong> çağrı merkezine, <strong>PanaCast</strong> 180° video sistemlerinden <strong>Speak2</strong> hoparlörlerine kadar tüm Jabra ekosistemi tek çatı altında.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <Link
            href="/proje-teklifi"
            className="w-full sm:w-auto bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 text-center"
          >
            <FileSpreadsheet className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Toplu Teklif & Özel Proje Kaydı</span>
          </Link>
          <a
            href="#product-finder"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full transition-all flex items-center justify-center gap-2 shadow-xs text-center"
          >
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            <span>Cihaz Seçici Sihirbazı</span>
          </a>
          <Link
            href="/urunler"
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-full border border-slate-300 shadow-xs transition-all text-center"
          >
            Tüm Kataloğu İncele
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 hover:border-amber-400 hover:shadow-lg transition-all shadow-xs">
            <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
              <Headphones className="w-5 h-5 text-sky-600 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-black text-slate-900 uppercase">Hibrit Ofis</span>
            </div>
            <div className="text-xs sm:text-sm font-black text-slate-800">Evolve3 & Evolve2</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 font-medium">AI ClearVoice & ANC</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 hover:border-amber-400 hover:shadow-lg transition-all shadow-xs">
            <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
              <PhoneCall className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-black text-slate-900 uppercase">Çağrı Merkezi</span>
            </div>
            <div className="text-xs sm:text-sm font-black text-slate-800">Engage, Biz & Pro</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 font-medium">150m DECT Güvenlik</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 hover:border-amber-400 hover:shadow-lg transition-all shadow-xs">
            <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
              <Video className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-black text-slate-900 uppercase">Toplantı Odası</span>
            </div>
            <div className="text-xs sm:text-sm font-black text-slate-800">PanaCast & Speak2</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 font-medium">180° 4K & Stüdyo Ses</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 hover:border-amber-400 hover:shadow-lg transition-all shadow-xs">
            <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
              <Radio className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-black text-slate-900 uppercase">Saha / Mağaza</span>
            </div>
            <div className="text-xs sm:text-sm font-black text-slate-800">Perform PTT Serisi</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 font-medium">Bas-Konuş Walkie Talkie</div>
          </div>
        </div>
      </div>
    </section>
  );
}
