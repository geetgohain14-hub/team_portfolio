import React from 'react';
import { Video, Globe, TrendingUp, BookOpen, Heart, CheckCircle2 } from 'lucide-react';

export const MarketingApproach: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Cinematic Video Content",
      desc: "Film-grade visuals that make every residential & commercial build look premium and architectural.",
      icon: Video,
      badge: "High-Production Quality"
    },
    {
      num: "02",
      title: "Drone-Based Visuals",
      desc: "Aerial perspectives that instantly signal project scale, plot boundaries, and engineering capability.",
      icon: Globe,
      badge: "Aerial Scale Credibility"
    },
    {
      num: "03",
      title: "Real Progress Documentation",
      desc: "Authentic, weekly site footage — not staged ads — building trust through complete transparency.",
      icon: TrendingUp,
      badge: "Authentic Build Velocity"
    },
    {
      num: "04",
      title: "Educational, Trust-Building Content",
      desc: "Answering tough construction questions, material specs, and cement tests to position Cura Tech as expert.",
      icon: BookOpen,
      badge: "Market Expert Authority"
    },
    {
      num: "05",
      title: "Customer-Focused Storytelling",
      desc: "Centering the client's homeowning journey, handover excitement, and emotional pride of owning a dream home.",
      icon: Heart,
      badge: "Emotional Connection"
    }
  ];

  return (
    <section id="approach" className="py-12 bg-white border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-slate-900 text-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#c85a17] mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
                03 — Marketing Strategy
              </span>
              <span className="font-extrabold text-xs text-orange-400 uppercase tracking-wider">
                5 Strategic Pillars
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Our Unique Marketing Approach
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-300 max-w-md">
            Built to separate Cura Tech Engineering from legacy contractors through high-density visual proof and emotional storytelling.
          </p>
        </div>

        {/* 5 Pillars Bento Block Layout (Full Width, No Gaps) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pillars.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.num} className="bento-card p-5 flex flex-col justify-between hover:bg-orange-50/50">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b-2 border-slate-900 pb-2">
                    <span className="font-black text-lg text-orange-600">{item.num}</span>
                    <div className="p-2 bg-slate-900 text-white border border-slate-900">
                      <IconComponent className="w-5 h-5 text-orange-400" />
                    </div>
                  </div>
                  
                  <span className="inline-block bg-orange-100 text-orange-950 font-extrabold text-[10px] px-2 py-0.5 border border-orange-300 uppercase mb-2">
                    {item.badge}
                  </span>
                  
                  <h3 className="font-black text-sm uppercase text-slate-950 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-slate-900">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                  <span>Cura Tech Spec</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
