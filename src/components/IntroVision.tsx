import React from 'react';
import { Target, Compass, AlertCircle, CheckCircle2 } from 'lucide-react';

export const IntroVision: React.FC = () => {
  return (
    <section id="vision" className="py-12 bg-slate-50 border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Hook Section */}
        <div className="bg-white border-4 border-slate-900 p-8 shadow-[6px_6px_0px_0px_#0f172a] mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-1 uppercase border border-slate-900">
              01 — Introduction
            </span>
            <span className="font-extrabold text-xs text-slate-600 uppercase tracking-wider">
              The Market Opportunity
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
            Great Construction Deserves A Great Story.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t-2 border-slate-900">
            
            {/* The Industry Problem */}
            <div className="bg-orange-50 border-2 border-orange-400 p-5">
              <div className="flex items-center gap-2 font-black text-sm uppercase text-orange-950 mb-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                The Common Industry Flaw
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                Most construction companies deliver quality structures, but their story rarely reaches prospective clients. They lack defined branding, consistent storytelling, and active digital presence — leaving high-value projects invisible in the market.
              </p>
            </div>

            {/* Cura Tech's Edge */}
            <div className="bg-slate-900 text-white border-2 border-slate-900 p-5 shadow-[3px_3px_0px_0px_#c85a17]">
              <div className="flex items-center gap-2 font-black text-sm uppercase text-orange-400 mb-2">
                <CheckCircle2 className="w-5 h-5 text-orange-400" />
                Cura Tech's Opportunity
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                Homeowners research online long before booking a builder. By combining cinematic drone footage with transparent site progress, Cura Tech becomes the most trusted and recognized builder in Assam before clients even step onto a site.
              </p>
            </div>

          </div>
        </div>

        {/* Vision & Mission Dual Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Vision Card */}
          <div className="bento-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-slate-900 text-white font-extrabold text-xs px-3 py-1 border border-slate-900 uppercase">
                  02 — Our Vision
                </span>
                <Compass className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase mb-3">
                From Local Builder to Regional Category Leader
              </h3>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed bg-slate-50 p-4 border-l-4 border-orange-600 mb-4">
                "To transform Cura Tech into a premium, highly-trusted construction brand — one that clients recognize, respect, and recommend before ever visiting a site."
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-300 p-3">
              <span className="text-xs font-bold text-orange-950 uppercase block">Strategic Goal:</span>
              <span className="text-xs font-semibold text-slate-800">Position Cura Tech as Guwahati's #1 modern residential & commercial developer.</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bento-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-orange-600 text-white font-extrabold text-xs px-3 py-1 border border-slate-900 uppercase">
                  02 — Our Mission
                </span>
                <Target className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase mb-3">
                Turn Every Post into Proof & Every Build into Leads
              </h3>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed bg-slate-50 p-4 border-l-4 border-slate-900 mb-4">
                "To grow Cura Tech's brand through transparent storytelling, cinematic drone visuals, and educational content — turning every project milestone into proof of craftsmanship."
              </p>
            </div>

            <div className="bg-slate-100 border border-slate-300 p-3">
              <span className="text-xs font-bold text-slate-900 uppercase block">Execution Strategy:</span>
              <span className="text-xs font-semibold text-slate-800">4K reels + daily stories + direct WhatsApp conversion funnel.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
