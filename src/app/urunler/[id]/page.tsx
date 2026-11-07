import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import productsData from "@/data/jabra_all_products.json";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, ArrowLeft, Download, ExternalLink, ShieldCheck, FileSpreadsheet, Sparkles } from "lucide-react";

export async function generateStaticParams() {
  return productsData.map((p) => ({
    id: p.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = productsData.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="py-16 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/urunler"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Ürün Kataloğuna Dön</span>
        </Link>

        {/* Hero Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Product Image */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 flex items-center justify-center relative shadow-sm min-h-[380px]">
            {product.badge && (
              <span className="absolute top-6 left-6 text-xs font-black px-3.5 py-1.5 bg-[#FFD100] text-slate-950 rounded-full shadow-sm">
                {product.badge}
              </span>
            )}
            <img
              src={product.imageUrl}
              alt={product.model}
              className="max-h-[340px] w-auto object-contain filter drop-shadow-md"
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-black text-amber-700 bg-amber-100/60 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {product.categoryName}
                </span>
                <span className="text-slate-300">/</span>
                <span className="text-[11px] text-slate-600 font-semibold">{product.subcategory}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {product.model}
              </h1>
              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                {product.fullDescription || product.shortDescription}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#teklif-formu"
                className="flex-1 text-center bg-[#FFD100] hover:bg-[#E6BC00] text-slate-950 font-black text-sm py-4 rounded-xl transition-all shadow-md shadow-[#FFD100]/25 flex items-center justify-center gap-2"
              >
                <FileSpreadsheet className="w-4 h-4 text-slate-950" />
                <span>Bu Ürün İçin Teklif Al</span>
              </a>
              <Link
                href="/karsilastir"
                className="flex-1 text-center bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm py-4 rounded-xl border border-slate-300 transition-colors shadow-sm"
              >
                Karşılaştırmaya Ekle
              </Link>
            </div>

            {/* Official URLs */}
            <div className="flex flex-wrap items-center gap-5 pt-4 text-xs font-semibold">
              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-amber-600 underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Teknik Datasheet (PDF)</span>
                </a>
              )}
              {product.officialUrl && (
                <a
                  href={product.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Jabra Resmi Web Sayfası</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Features & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Features */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Öne Çıkan Kurumsal Yetenekler</span>
            </h3>
            <ul className="space-y-4 text-sm text-slate-700">
              {product.features?.map((f: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specs */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <span>Teknik Spesifikasyonlar</span>
            </h3>
            <div className="divide-y divide-slate-100 text-sm">
              {Object.entries(product.specs).map(([key, val], idx) => (
                <div key={idx} className="py-3 flex justify-between gap-4">
                  <span className="font-semibold text-slate-500">{key}</span>
                  <span className="text-right text-slate-900 font-medium">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Form Section */}
        <div id="teklif-formu" className="pt-8 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <LeadForm
              defaultProduct={product.model}
              badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
