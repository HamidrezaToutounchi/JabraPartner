"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, CheckCircle2, ArrowRight, Building, Briefcase, Headphones, Radio, Video } from "lucide-react";

export default function ProductFinder() {
  const [environment, setEnvironment] = useState<string>("open-office");
  const [connection, setConnection] = useState<string>("bluetooth");
  const [platform, setPlatform] = useState<string>("teams");

  const getRecommendation = () => {
    if (environment === "meeting-room") {
      return {
        model: "Jabra PanaCast 50 VBS + Speak2 75",
        category: "Toplantı Odası Sistemi",
        desc: "180° Panoramik 4K görüntü ve 360° mikrofon kalitesiyle odadaki herkesi eşit kapsayan anahtar teslim çözüm.",
        image: "https://assets2.jabra.com/8/c/4/b/8c4baf973599ca7670ac432ac06a9d9b51ed436b_jabra_panacast_50_video_bar_system.png",
        id: "jabra-panacast-50-vbs",
        badge: "En İdeal Toplantı Çözümü",
      };
    }

    if (environment === "contact-center") {
      if (connection === "dect") {
        return {
          model: "Jabra Engage 75 SE DECT Kablosuz",
          category: "Çağrı Merkezi DECT",
          desc: "150m kablosuz DECT menzil, 256-bit FIPS askeri şifreleme ve aynı anda 5 cihaza eşzamanlı bağlantı.",
          image: "https://assets2.jabra.com/c/c/c/4/ccc404ec906d9c80b3b15373f3132dc75a3e9077_00_Engage_75_Mono_CMF.png",
          id: "jabra-engage-75-se",
          badge: "Dünyanın En Güvenli Çağrı Kulaklığı",
        };
      }
      return {
        model: "Jabra Engage 50 II Dijital Kablolu",
        category: "Çağrı Merkezi Kablolu",
        desc: "Engage+ canlı konuşma analitiği, 3 mikrofonlu yapay zeka gürültü engelleme ve SmartRinger akıllı kontrol ünitesi.",
        image: "https://assets2.jabra.com/5/f/4/3/5f43f4cd2b92b2d9f4716c2bc36e6394288afd2e_Jabra_Engage_50_II_Mono_wLink_Plus_UC_00.png",
        id: "jabra-engage-50-ii",
        badge: "Canlı Konuşma Analitiği",
      };
    }

    if (environment === "frontline") {
      return {
        model: "Jabra Perform 45 SE / Perform 75",
        category: "Saha & Bas-Konuş (PTT)",
        desc: "Kulaklık üzerinde entegre Bas-Konuş tuşu, Microsoft Teams Walkie Talkie ve Zebra uyumlu, dezenfektanla silinebilir gövde.",
        image: "https://assets2.jabra.com/0/a/6/d/0a6db30a2f8fe61f105f4ef6d3f5ae0f5adf7b5c_Jabra_Perform_45se_pic01.png",
        id: "jabra-perform-45-se",
        badge: "Bas-Konuş (Push-to-Talk)",
      };
    }

    if (environment === "hybrid") {
      return {
        model: "Jabra Evolve3 65 Flex (AI ClearVoice)",
        category: "Hibrit Katlanabilir Kulaklık",
        desc: "Mikrofon kolsuz katlanabilir gövde, 60 milyon cümleyle eğitilmiş AI ClearVoice ve 4 mikrofonlu Adaptif ANC.",
        image: "https://www.jabra.com/-/media/Images/Products/Jabra-Evolve3-65-Flex/V1/Videos/Evolve3_65_Flex_Intro_Poster.png",
        id: "jabra-evolve3-65-flex",
        badge: "Yeni Nesil AI & Mobil",
      };
    }

    return {
      model: "Jabra Evolve2 75 & Evolve3 85",
      category: "Açık Ofis Üst Düzey ANC",
      desc: "Gelişmiş Hibrit ANC, 8-10 mikrofonlu arka plan gürültü engelleme ve çift köpüklü konforlu deri yastıklar.",
      image: "https://assets2.jabra.com/4/6/c/2/46c285a2f501c185110159f5432e1250cd2251c8_Evolve2_75_MS_USB_A_01.png",
      id: "jabra-evolve2-75",
      badge: "Açık Ofis Standardı",
    };
  };

  const rec = getRecommendation();

  return (
    <section id="product-finder" className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-xs font-bold text-amber-700 mb-3 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>İnteraktif Ürün Sihirbazı</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
            Çalışma Tarzınıza ve Ekibinize Göre <span className="text-amber-600">En Doğru Cihazı Bulun</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Çalışma ortamınızı, bağlantı tipinizi ve yazılım platformunuzu belirleyin; kurumunuz için en yüksek verimlilik sağlayacak modeli önerelim.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Steps */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1 */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  1. Adım: Çalışma Ortamınızı Seçin
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { id: "open-office", label: "Açık Ofis", icon: Building },
                    { id: "hybrid", label: "Hibrit / Mobil", icon: Briefcase },
                    { id: "contact-center", label: "Çağrı Merkezi", icon: Headphones },
                    { id: "frontline", label: "Mağaza / Depo Saha", icon: Radio },
                    { id: "meeting-room", label: "Toplantı Odası", icon: Video },
                  ].map((env) => {
                    const Icon = env.icon;
                    const isSel = environment === env.id;
                    return (
                      <button
                        key={env.id}
                        onClick={() => setEnvironment(env.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSel
                            ? "bg-amber-50/60 border-amber-400 text-slate-900 shadow-sm scale-[1.02]"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-2 ${isSel ? "text-amber-600" : "text-slate-400"}`} />
                        <span className="text-xs font-black leading-tight">{env.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  2. Adım: Bağlantı Tipi
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "bluetooth", label: "Bluetooth (30m)" },
                    { id: "dect", label: "DECT 150m (Güvenli)" },
                    { id: "usb", label: "USB-A/C Kablolu" },
                    { id: "qd", label: "QD Masa Telefonu" },
                  ].map((conn) => {
                    const isSel = connection === conn.id;
                    return (
                      <button
                        key={conn.id}
                        onClick={() => setConnection(conn.id)}
                        className={`p-3 rounded-xl border text-center text-xs font-bold transition-all ${
                          isSel
                            ? "bg-[#FFD100] text-slate-950 font-black shadow-sm border-amber-300"
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                      >
                        {conn.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  3. Adım: Kullanılan İletişim Platformu
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { id: "teams", label: "Microsoft Teams" },
                    { id: "zoom", label: "Zoom" },
                    { id: "genesys", label: "Genesys Cloud" },
                    { id: "amazon", label: "Amazon Connect" },
                    { id: "cisco", label: "Cisco Webex" },
                  ].map((plat) => {
                    const isSel = platform === plat.id;
                    return (
                      <button
                        key={plat.id}
                        onClick={() => setPlatform(plat.id)}
                        className={`px-3.5 py-2 rounded-lg border text-xs font-bold transition-all ${
                          isSel
                            ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {plat.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Recommendation Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#FFD100] text-slate-950 shadow-sm border border-amber-300">
                    {rec.badge}
                  </span>
                  <span className="text-xs text-amber-700 font-bold">{rec.category}</span>
                </div>

                <div className="relative h-44 flex items-center justify-center my-4 bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <img
                    src={rec.image}
                    alt={rec.model}
                    className="max-h-36 object-contain drop-shadow-md"
                  />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2">{rec.model}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{rec.desc}</p>

                <div className="space-y-1.5 py-3 border-t border-slate-200 text-[11px] text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Seçilen Platform ({platform.toUpperCase()}) ile %100 Uyumlu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Kurumsal Filo Yönetimi (Jabra+ / Xpress) Uyumlu</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                <Link
                  href={`/proje-teklifi?product=${rec.id}&model=${encodeURIComponent(rec.model)}`}
                  className="w-full bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-xs py-3 rounded-xl transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2"
                >
                  <span>Bu Cihaz İçin Proje Fiyatı Al</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/urunler/${rec.id}`}
                  className="w-full text-center bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs py-2.5 rounded-xl border border-slate-200 transition-colors shadow-xs"
                >
                  Teknik Datasheet ve Detay
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
