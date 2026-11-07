"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "@/data/jabra_all_products.json";
import LeadForm from "@/components/LeadForm";
import { ArrowLeft, Plus, X, ArrowRight, Check } from "lucide-react";

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "jabra-evolve3-65-flex",
    "jabra-evolve2-75",
    "jabra-engage-75-se",
    "jabra-speak2-75",
  ]);

  const selectedProducts = selectedIds
    .map((id) => productsData.find((p) => p.id === id))
    .filter(Boolean) as any[];

  const handleRemove = (id: string) => {
    setSelectedIds(selectedIds.filter((item) => item !== id));
  };

  const handleAdd = (id: string) => {
    if (selectedIds.length < 4 && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="py-16 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black text-amber-600 uppercase tracking-wider block mb-2">
            Yan Yana Karşılaştırma Aracı
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            4 Ürüne Kadar <span className="text-amber-600">Karşılaştırın</span>
          </h1>
          <p className="mt-3 text-slate-600 text-sm">
            Farklı kulaklık, hoparlör ve video sistemlerinin teknik özelliklerini karşılaştırmalı tablodan detaylıca inceleyin.
          </p>
        </div>

        {/* Product selector dropdown bar */}
        {selectedIds.length < 4 && (
          <div className="mb-8 p-4 bg-white border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <span className="text-xs text-slate-700 font-bold">
              Karşılaştırmaya Ürün Ekle ({selectedIds.length}/4 seçili):
            </span>
            <select
              onChange={(e) => {
                if (e.target.value) handleAdd(e.target.value);
              }}
              defaultValue=""
              className="bg-slate-50 border border-slate-300 text-xs text-slate-900 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="" disabled>
                Listeden bir ürün seçin...
              </option>
              {productsData
                .filter((p) => !selectedIds.includes(p.id))
                .map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.model} ({p.subcategory})
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* Side-by-side Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm mb-16">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-4 font-bold text-slate-600 w-44">Ürün Görseli & Model</th>
                {selectedProducts.map((p) => (
                  <th key={p.id} className="p-4 font-bold text-slate-900 min-w-[220px] relative">
                    <button
                      onClick={() => handleRemove(p.id)}
                      className="absolute top-2 right-2 p-1 text-slate-400 hover:text-red-500 rounded-md transition-colors"
                      title="Kaldır"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="h-28 flex items-center justify-center p-2 mb-2 bg-slate-100/70 rounded-xl border border-slate-200/50">
                      <img src={p.imageUrl} alt={p.model} className="max-h-24 object-contain" />
                    </div>
                    <div className="text-sm font-black text-slate-900">{p.model}</div>
                    <div className="text-[10px] text-amber-600 font-bold mt-0.5">{p.subcategory}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 font-semibold text-slate-500 bg-slate-50/60">Kategori</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-slate-800 font-medium">
                    {p.categoryName}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-500 bg-slate-50/60">Kısa Açıklama</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-xs text-slate-600 leading-relaxed">
                    {p.shortDescription}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-500 bg-slate-50/60">Öne Çıkan Yetenekler</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-xs text-slate-700">
                    <ul className="space-y-1">
                      {p.features?.slice(0, 3).map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-500 bg-slate-50/60">Teknik Özellikler</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-xs text-slate-700 space-y-1">
                    {Object.entries(p.specs).map(([k, v], i) => (
                      <div key={i} className="border-b border-slate-100 pb-1">
                        <span className="text-slate-400 block text-[10px]">{k}</span>
                        <span className="text-slate-900 font-semibold">{String(v)}</span>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-slate-50 border-t border-slate-200">
                <td className="p-4 font-semibold text-slate-600">Proje Teklifi</td>
                {selectedProducts.map((p) => (
                  <td key={p.id} className="p-4">
                    <Link
                      href={`/proje-teklifi?product=${p.id}&model=${encodeURIComponent(p.model)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FFD100] text-slate-950 font-black text-xs rounded-xl hover:bg-[#E6BC00] shadow-sm transition-all"
                    >
                      <span>Proje Fiyatı Al</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Embedded Lead Form */}
        <div className="max-w-3xl mx-auto">
          <LeadForm
            defaultProduct="Karşılaştırma Listesi Üzerinden Çoklu Ürün Proje Talebi"
            badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
          />
        </div>
      </div>
    </div>
  );
}
