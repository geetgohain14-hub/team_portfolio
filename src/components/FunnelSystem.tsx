import React, { useState } from 'react';
import { leadFunnel } from '../data/portfolioData';
import { ArrowRight, MessageSquare, ShieldCheck, MapPin, Target, CheckCircle2 } from 'lucide-react';

export const FunnelSystem: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="funnel" className="py-12 bg-white border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-slate-900 text-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#c85a17] mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
              05 — Lead Generation System
            </span>
            <span className="font-extrabold text-xs text-orange-400 uppercase tracking-wider">
              Customer Acquisition Funnel
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Turning Social Views Into Signed Contracts
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
            We don't post for vanity likes — every video, story, and ad is built with a direct conversion path to WhatsApp and site meetings.
          </p>
        </div>

        {/* 4-Step Horizontal Funnel Diagram (Square Bento Flow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {leadFunnel.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 border-4 border-slate-900 transition-all relative ${
                  isSelected 
                    ? 'bg-orange-50 border-orange-600 shadow-[6px_6px_0px_0px_#ea580c] translate-y-[-2px]' 
                    : 'bg-white hover:bg-slate-50 shadow-[4px_4px_0px_0px_#0f172a]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-black text-xs px-2.5 py-1 border-2 border-slate-900 uppercase ${
                    isSelected ? 'bg-orange-600 text-white' : 'bg-slate-900 text-white'
                  }`}>
                    STAGE 0{item.step}
                  </span>
                  <span className="font-bold text-xs text-slate-500 uppercase">{item.keyAction}</span>
                </div>

                <h3 className="font-black text-lg text-slate-950 uppercase mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-orange-700 uppercase mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs font-semibold text-slate-700 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="bg-slate-100 p-2 border border-slate-300 text-[11px] font-extrabold text-slate-900">
                  <span className="text-slate-500 block uppercase text-[9px]">Tool Used:</span>
                  {item.toolUsed}
                </div>

                {idx < leadFunnel.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-slate-900 text-white p-1 border border-slate-900">
                    <ArrowRight className="w-4 h-4 text-orange-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Callout Box */}
        <div className="bento-card p-6 bg-slate-900 text-white border-4 border-slate-900 shadow-[6px_6px_0px_0px_#c85a17] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-orange-400" />
              <span className="font-extrabold text-xs uppercase text-orange-400">Deep Dive Strategy: Stage 0{leadFunnel[activeStep].step}</span>
            </div>
            <h4 className="text-xl font-black text-white uppercase mb-2">
              {leadFunnel[activeStep].title} — {leadFunnel[activeStep].subtitle}
            </h4>
            <p className="text-xs sm:text-sm font-medium text-slate-300 leading-relaxed">
              {leadFunnel[activeStep].description} By tailoring messaging to Guwahati's homebuying demographic, we remove hesitation and guide prospects directly into a private consultation.
            </p>
          </div>

          <div className="bg-slate-800 p-4 border-2 border-slate-700 flex flex-col justify-between">
            <div className="flex items-center gap-2 font-bold text-xs text-orange-400 uppercase mb-2">
              <MapPin className="w-4 h-4" />
              Guwahati & Assam Focus
            </div>
            <p className="text-xs text-slate-300 font-semibold mb-3">
              Hyper-local geo-fencing ads targeting high-income residential zones (Zoo Road, Six Mile, VIP Road, Beltola).
            </p>
            <div className="bg-orange-600 text-white text-center font-extrabold text-xs uppercase py-2 border border-slate-900">
              Active Funnel Pipeline
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
