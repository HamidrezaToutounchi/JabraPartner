import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductFinder from "@/components/ProductFinder";
import ProductCard from "@/components/ProductCard";
import LeadForm from "@/components/LeadForm";
import productsData from "@/data/jabra_all_products.json";
import { Headphones, PhoneCall, Video, ArrowRight } from "lucide-react";

export default function Home() {
  const officeProducts = productsData.filter((p) => p.category === "office-headset");
  const callCenterProducts = productsData.filter((p) => p.category === "contact-center");
  const frontlineProducts = productsData.filter((p) => p.category === "frontline");
  const videoAudioProducts = productsData.filter((p) => p.category === "panacast" || p.category === "speakerphone");

  return (
    <div className="bg-white">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Interactive Product Finder Wizard */}
      <ProductFinder />

      {/* 3. Evolve3 & Evolve2 Showcase */}
      <section className="py-24 bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700 mb-3 shadow-sm">
                <Headphones className="w-3.5 h-3.5 text-sky-600" />
                <span>AI Destekli Hibrit Ofis</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Yeni Nesil <span className="text-sky-600">Evolve3</span> ve Evolve2 Serisi
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-2xl">
                60 milyon cümleyle eğitilmiş AI ClearVoice teknolojisi, mikrofon kolsuz katlanabilir tasarımlar ve adaptif hibrit gürültü engelleme.
              </p>
            </div>
            <Link
              href="/urunler?cat=office-headset"
              className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:underline"
            >
              <span>Tüm Ofis Kulaklıklarını Gör ({officeProducts.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeProducts.slice(0, 6).map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Center Engage & Biz Showcase */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 mb-3 shadow-sm">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <span>Çağrı Merkezi Standartları</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Engage DECT, <span className="text-emerald-600">Biz & Pro</span> Serisi
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-2xl">
                150 metreye kadar kablosuz menzil, 256-bit askeri düzey şifreleme ve Engage+ yazılımıyla gerçek zamanlı canlı müşteri konuşma analitiği.
              </p>
            </div>
            <Link
              href="/urunler?cat=contact-center"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:underline"
            >
              <span>Çağrı Merkezi Modelleri ({callCenterProducts.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {callCenterProducts.slice(0, 6).map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Frontline & PanaCast / Speak2 Grid */}
      <section className="py-24 bg-white border-b border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold text-amber-700 mb-3 shadow-sm">
                <Video className="w-3.5 h-3.5 text-amber-500" />
                <span>Video Konferans & Saha İletişimi</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                PanaCast Video, Speak2 Ses & <span className="text-amber-600">Perform Saha</span>
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-2xl">
                Telsiz yerine Microsoft Teams Walkie Talkie destekli Perform serisi ve 180° panoramik toplantı odası sistemleri.
              </p>
            </div>
            <Link
              href="/urunler"
              className="inline-flex items-center gap-2 text-sm font-bold text-amber-600 hover:underline"
            >
              <span>Tüm Portföyü Listele</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...frontlineProducts, ...videoAudioProducts.slice(0, 4)].map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Standardized Lead Form */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            defaultProduct="Jabra Kurumsal Evolve3 / Engage / PanaCast Projesi"
            badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
          />
        </div>
      </section>
    </div>
  );
}
