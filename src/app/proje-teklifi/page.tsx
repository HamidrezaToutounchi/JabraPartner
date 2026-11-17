"use client";

import React from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { ArrowLeft, CheckCircle2, PhoneCall, Mail } from "lucide-react";

export default function ProjeTeklifiPage() {
  return (
    <div className="py-8 sm:py-16 bg-slate-50 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-600 mb-6 sm:mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <span className="text-[11px] sm:text-xs font-black text-amber-600 uppercase tracking-wider block">
              Yetkili Kurumsal Proje Kaydı
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Kurumsal Proje ve <span className="text-amber-600">Toplu Satış Masası</span>
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              50+ ve 100+ adetli kurumsal kulaklık ve oda sistemi projelerinizde Jabra Türkiye Resmi Distribütör proje koruması ve en yüksek kurumsal iskonto avantajından yararlanın.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200 text-xs text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Resmi Jabra Proje Kaydı (Deal Registration) Koruması</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Şirketinize Özel Ücretsiz Test / Demo Cihaz Paketi</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Toplu Kurumsal Alımlarda Özel Proje İskontosu</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Yerinde POC ve Teknik Kurulum Danışmanlığı</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 mt-6">
              <span className="text-xs font-black text-slate-900 block">Yetkili Partner İletişimi:</span>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <a href="tel:08508500856" className="font-semibold hover:text-amber-600 transition-colors">
                  0850 850 08 56
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-700">
                <Mail className="w-4 h-4 text-amber-600" />
                <a href="mailto:destek@tescom.com.tr" className="font-semibold hover:text-amber-600 transition-colors">
                  destek@tescom.com.tr
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <LeadForm
              defaultProduct="Jabra Kurumsal Evolve3 / Engage Proje Talebi"
              badgeText="Resmi Gold Partner Bilgi & Teklif Masası"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
