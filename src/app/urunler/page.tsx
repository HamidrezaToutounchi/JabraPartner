"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/jabra_all_products.json";
import { Filter, Headphones, PhoneCall, Radio, Video, Mic, Cpu, Check, Layers } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filterAnc, setFilterAnc] = useState<boolean>(false);
  const [filterDect, setFilterDect] = useState<boolean>(false);
  const [filterBt, setFilterBt] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "Tüm Portföy" },
    { id: "office-headset", label: "Ofis (Evolve3 / Evolve2)" },
    { id: "contact-center", label: "Çağrı Merkezi (Engage / Biz)" },
    { id: "frontline", label: "Saha & PTT (Perform)" },
    { id: "panacast", label: "Video Sistemleri (PanaCast)" },
    { id: "speakerphone", label: "Hoparlörler (Speak2)" },
    { id: "software", label: "Yazılımlar (Jabra+)" },
  ];

  const filtered = productsData.filter((product) => {
    // Category filter
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false;
    }

    // ANC filter
    if (filterAnc) {
      const hasAnc =
        product.shortDescription.toLowerCase().includes("anc") ||
        product.fullDescription.toLowerCase().includes("anc") ||
        JSON.stringify(product.specs).toLowerCase().includes("anc");
      if (!hasAnc) return false;
    }

    // DECT filter
    if (filterDect) {
      const hasDect =
        product.shortDescription.toLowerCase().includes("dect") ||
        product.fullDescription.toLowerCase().includes("dect") ||
        JSON.stringify(product.specs).toLowerCase().includes("dect");
      if (!hasDect) return false;
    }

    // Bluetooth filter
    if (filterBt) {
      const hasBt =
        product.shortDescription.toLowerCase().includes("bluetooth") ||
        product.fullDescription.toLowerCase().includes("bluetooth") ||
        JSON.stringify(product.specs).toLowerCase().includes("bluetooth");
      if (!hasBt) return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match =
        product.model.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.subcategory.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  return (
    <div className="py-10 sm:py-16 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-amber-600" />
            <span>Jabra Türkiye Kurumsal Portföyü</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Tüm Kurumsal <span className="text-amber-600">Jabra Modelleri</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base">
            Gelişmiş dinamik filtreleme ile ofis, çağrı merkezi, toplantı odası ve saha cihazlarını anında listeleyin.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-xs sm:shadow-sm space-y-4 sm:space-y-6">
          {/* Search bar */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-stretch sm:items-center">
            <input
              type="text"
              placeholder="Model adı veya özellik ara (örn: Evolve3, Speak2 75, DECT, ANC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:max-w-md bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <div className="text-xs text-slate-500 text-right sm:text-left">
              Gösterilen Ürün: <strong className="text-slate-900">{filtered.length}</strong> / {productsData.length}
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-slate-100">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all ${
                  selectedCategory === c.id
                    ? "bg-[#FFD100] text-slate-950 shadow-xs sm:shadow-md shadow-[#FFD100]/25 font-black"
                    : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Feature Checkbox Chips */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 text-xs border-t border-slate-100">
            <span className="text-slate-500 font-semibold mr-1 text-[11px] sm:text-xs">Filtreler:</span>
            <button
              onClick={() => setFilterAnc(!filterAnc)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 transition-all ${
                filterAnc ? "bg-sky-50 border-sky-300 text-sky-700" : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              {filterAnc && <Check className="w-3.5 h-3.5" />}
              <span>Aktif Gürültü Önleme (ANC)</span>
            </button>
            <button
              onClick={() => setFilterDect(!filterDect)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 transition-all ${
                filterDect ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              {filterDect && <Check className="w-3.5 h-3.5" />}
              <span>DECT 150m</span>
            </button>
            <button
              onClick={() => setFilterBt(!filterBt)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 transition-all ${
                filterBt ? "bg-amber-50 border-amber-300 text-amber-700" : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              {filterBt && <Check className="w-3.5 h-3.5" />}
              <span>Bluetooth</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filtered.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
