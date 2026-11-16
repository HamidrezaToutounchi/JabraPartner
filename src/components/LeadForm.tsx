"use client";

import React, { useState } from "react";
import { Package, User, Building2, Mail, Phone, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function LeadForm({
  defaultProduct = "Jabra Kurumsal Kulaklık & Video Çözümleri",
  badgeText = "Resmi Gold Partner Bilgi & Teklif Masası",
}: {
  defaultProduct?: string;
  badgeText?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [partnerType, setPartnerType] = useState<"end-user" | "dealer">("end-user");
  const [formData, setFormData] = useState({
    product: defaultProduct,
    quantity: "10 - 50 Adet",
    name: "",
    company: "",
    email: "",
    phone: "",
    infrastructure: "Belirsiz / Santral Önerisi İstiyorum",
    kvkkAccepted: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkkAccepted) {
      alert("Lütfen KVKK Aydınlatma Metni'ni onaylayınız.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-black text-slate-900">Kurumsal Proje Kaydınız Alındı!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Kurumsal proje yöneticimiz en geç <strong>2 iş saati</strong> içinde sizinle iletişime geçerek kurumsal iskonto tablosu ve demo cihaz planlamasını iletecektir.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 bg-[#FFD100] text-slate-950 font-bold text-xs rounded-full hover:bg-[#E6BC00] transition-colors"
        >
          Yeni Form Gönder
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-8 lg:p-10 shadow-lg sm:shadow-xl text-slate-800">
      {/* Top Header Row with Badge & Clean Partner Type Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[11px] font-bold text-red-600">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badgeText}</span>
        </div>

        {/* Clean, high-contrast toggle */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
          <button
            type="button"
            onClick={() => setPartnerType("end-user")}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              partnerType === "end-user"
                ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Kurumsal Müşteri
          </button>
          <button
            type="button"
            onClick={() => setPartnerType("dealer")}
            className={`px-3 py-1 rounded-lg font-bold transition-all ${
              partnerType === "dealer"
                ? "bg-[#FFD100] text-slate-950 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Alt Bayi / Entegratör
          </button>
        </div>
      </div>

      <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight mb-6 sm:mb-8">
        Ürün Bilgi, Fiyat Teklifi & Proje Başvuru Formu
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-8">
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Bilgi Almak İstediğiniz Ürün veya Çözüm Paketi
            </label>
            <div className="relative">
              <Package className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                placeholder="Ürün seçin veya yazın (örn. Evolve3 65 Flex, Engage 75 SE)..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FFD100] focus:ring-2 focus:ring-[#FFD100]/20 transition-all"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Tahmini Adet / Ölçek
            </label>
            <select
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FFD100] focus:ring-2 focus:ring-[#FFD100]/20 transition-all"
            >
              <option value="1 - 10 Adet">1 - 10 Adet</option>
              <option value="10 - 50 Adet">10 - 50 Adet</option>
              <option value="50 - 100 Adet">50 - 100 Adet (Özel İskonto)</option>
              <option value="100+ Adet">100+ Adet (Kurumsal Proje)</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Adınız Soyadınız *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ad Soyad"
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FFD100] focus:ring-2 focus:ring-[#FFD100]/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Firma / Kurum Adı *
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Firma veya Kurum Ünvanı"
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FFD100] focus:ring-2 focus:ring-[#FFD100]/20 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Kurumsal E-Posta Adresi *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ornek@firma.com"
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FFD100] focus:ring-2 focus:ring-[#FFD100]/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1.5">
              Telefon Numarası *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="05XX XXX XX XX"
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FFD100] focus:ring-2 focus:ring-[#FFD100]/20 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1.5">
            Mevcut / Planlanan Santral Altyapısı
          </label>
          <select
            value={formData.infrastructure}
            onChange={(e) => setFormData({ ...formData, infrastructure: e.target.value })}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#FFD100] focus:ring-2 focus:ring-[#FFD100]/20 transition-all"
          >
            <option value="Belirsiz / Santral Önerisi İstiyorum">Belirsiz / Santral Önerisi İstiyorum</option>
            <option value="Microsoft Teams / Teams Phone">Microsoft Teams / Teams Phone</option>
            <option value="Zoom / Zoom Phone">Zoom / Zoom Phone</option>
            <option value="Cisco Webex / CallManager">Cisco Webex / CallManager</option>
            <option value="Genesys Cloud CX">Genesys Cloud CX</option>
            <option value="Amazon Connect">Amazon Connect</option>
            <option value="Klasik Analog / QD Masa Telefonu Santrali">Klasik Analog / QD Masa Telefonu Santrali</option>
          </select>
        </div>

        {/* KVKK */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="kvkk-partner"
            checked={formData.kvkkAccepted}
            onChange={(e) => setFormData({ ...formData, kvkkAccepted: e.target.checked })}
            className="mt-1 w-4 h-4 rounded text-red-500 border-slate-300 focus:ring-red-400 cursor-pointer"
          />
          <label htmlFor="kvkk-partner" className="text-xs text-slate-600 cursor-pointer select-none">
            <span className="text-red-600 font-bold underline">KVKK Aydınlatma Metni</span>&apos;ni okudum ve anladım. *
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-black text-sm py-4 rounded-xl transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 transform active:scale-[0.99]"
        >
          <Send className="w-4 h-4" />
          <span>Fiyat Teklifi ve Bilgi Talebini Gönder</span>
        </button>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Verileriniz 256-bit SSL şifreleme ve KVKK güvencesiyle korunur.</span>
        </div>
      </form>
    </div>
  );
}
