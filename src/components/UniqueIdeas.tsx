import React from 'react';
import { campaignIdeas } from '../data/portfolioData';
import { Sparkles, Lightbulb, Zap, CheckCircle2 } from 'lucide-react';

export const UniqueIdeas: React.FC = () => {
  return (
    <section id="ideas" className="py-12 bg-slate-50 border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#0f172a] mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
              08 — Unique Ideas & Advantage
            </span>
            <span className="font-extrabold text-xs text-slate-600 uppercase tracking-wider">
              Ideas Competitors Aren't Using Yet
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-950">
            Innovative Campaign Concepts For Cura Tech
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
            Five tailored marketing formats that position Cura Tech as a futuristic, high-tech, and approachable builder.
          </p>
        </div>

        {/* 5 Campaign Ideas Bento Grid (Full Width Alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {campaignIdeas.map((idea, idx) => (
            <div key={idx} className="bento-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b-2 border-slate-900 pb-2">
                  <span className="bg-orange-600 text-white font-extrabold text-[10px] px-2 py-0.5 uppercase">
                    CONCEPT 0{idx + 1}
                  </span>
                  <Lightbulb className="w-6 h-6 text-orange-600" />
                </div>

                <h3 className="font-black text-lg text-slate-950 uppercase mb-2">
                  {idea.title}
                </h3>

                <p className="text-xs font-semibold text-slate-800 leading-relaxed bg-slate-50 p-3 border-l-4 border-slate-900 mb-4">
                  {idea.concept}
                </p>

                <div className="space-y-2 text-xs font-medium text-slate-700 mb-4">
                  <div>
                    <span className="font-extrabold text-slate-950 uppercase text-[10px] block">Execution Pipeline:</span>
                    <span>{idea.execution}</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-2 border-orange-300 p-3 mt-2">
                <span className="text-[10px] font-black text-orange-950 uppercase block">Expected Impact:</span>
                <span className="text-xs font-bold text-slate-900">{idea.impact}</span>
              </div>
            </div>
          ))}

          {/* 6th Bento Card: Competitive Moat */}
          <div className="bento-card-dark p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-orange-400" />
                <span className="font-black text-xs text-orange-400 uppercase">Competitive Moat</span>
              </div>
              <h3 className="font-black text-xl text-white uppercase mb-3">
                Zero Copycat Content
              </h3>
              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                While legacy builders rely on static newspaper ads, Cura Tech will deploy 3D renders overlaid on drone land passes and live site walkthroughs.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 p-3">
              <span className="text-xs font-bold text-white uppercase block">Market Position:</span>
              <span className="text-[11px] font-semibold text-orange-400">Guwahati's most digitally forward construction company.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
