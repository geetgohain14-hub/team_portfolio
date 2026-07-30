import React from 'react';
import { commercialBenefits } from '../data/portfolioData';
import { TrendingUp, ShieldCheck, Award, Target, CheckCircle2 } from 'lucide-react';

export const CommercialBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-12 bg-white border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-slate-900 text-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#c85a17] mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
                09 — Commercial ROI
              </span>
              <span className="font-extrabold text-xs text-orange-400 uppercase tracking-wider">
                Measurable Business Outcomes
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              What This Partnership Delivers To Cura Tech
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-300 max-w-md">
            This is not an expense — it is an investment in Cura Tech's top-line revenue, lead pipeline, and long-term brand equity.
          </p>
        </div>

        {/* 5 Benefits Stat Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {commercialBenefits.map((item, idx) => (
            <div key={idx} className="bento-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 border-b-2 border-slate-900 pb-2">
                  <span className="text-3xl sm:text-4xl font-black text-orange-600">
                    {item.metric}
                  </span>
                  <span className="bg-slate-900 text-white font-extrabold text-[10px] px-2 py-0.5 uppercase">
                    OUTCOME 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-black text-xl text-slate-950 uppercase mb-2">
                  {item.label}
                </h3>

                <p className="text-xs font-semibold text-slate-700 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="bg-orange-50 border-2 border-orange-300 p-3">
                <span className="text-[10px] font-black text-orange-950 uppercase block">Commercial Shift:</span>
                <span className="text-xs font-bold text-slate-900">{item.detail}</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Partnership Commitment */}
          <div className="bento-card-dark p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
                <span className="font-black text-xs text-orange-400 uppercase">Long-Term Engine</span>
              </div>
              <h3 className="font-black text-xl text-white uppercase mb-3">
                Operational Longevity
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                Once approved, this exact site becomes Cura Tech's working dashboard — content calendar, video library, and lead tracker.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 p-3">
              <span className="text-xs font-bold text-white uppercase block">Target Timeline:</span>
              <span className="text-[11px] font-semibold text-orange-400">Immediate deployment upon agreement signing.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
