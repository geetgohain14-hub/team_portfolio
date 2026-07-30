import React from 'react';
import { contentPillars, postingCadence } from '../data/portfolioData';
import { Calendar, Video, Layers, TrendingUp, BookOpen, Heart, Award, ArrowUpRight } from 'lucide-react';

export const ContentStrategy: React.FC = () => {
  const getIcon = (name: string) => {
    switch(name) {
      case 'Video': return Video;
      case 'Layers': return Layers;
      case 'TrendingUp': return TrendingUp;
      case 'BookOpen': return BookOpen;
      case 'Heart': return Heart;
      case 'Award': return Award;
      default: return Video;
    }
  };

  return (
    <section id="strategy" className="py-12 bg-slate-50 border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#0f172a] mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
              04 — Content Strategy
            </span>
            <span className="font-extrabold text-xs text-slate-600 uppercase tracking-wider">
              6 Content Pillars & Posting Cadence
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-950">
            Engineered Content Pillars & Rhythm
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
            Every piece of content serves a purpose: Reels drive algorithmic reach, Stories build daily intimacy, and Flagship Videos anchor flagship sales.
          </p>
        </div>

        {/* 6 Content Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {contentPillars.map((pillar) => {
            const IconComp = getIcon(pillar.iconName);
            return (
              <div key={pillar.id} className="bento-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b-2 border-slate-900 pb-2">
                    <span className="bg-slate-900 text-white font-extrabold text-[10px] px-2 py-0.5 uppercase">
                      {pillar.category}
                    </span>
                    <IconComp className="w-6 h-6 text-orange-600" />
                  </div>
                  
                  <h3 className="font-black text-lg text-slate-950 uppercase mb-2">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-slate-700 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-slate-200 pt-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-500 uppercase text-[10px]">Impact:</span>
                    <span className="font-extrabold text-orange-950 text-right">{pillar.impact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-500 uppercase text-[10px]">Format:</span>
                    <span className="bg-orange-100 text-orange-900 font-bold px-2 py-0.5 border border-orange-300">{pillar.format}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Posting Cadence Component Table (Square Bento Box Style) */}
        <div className="bento-card-dark p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b-2 border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-5 h-5 text-orange-400" />
                <span className="font-black text-xs uppercase tracking-wider text-orange-400">Weekly Posting Rhythm</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                Always-On Publishing Cadence Table
              </h3>
            </div>
            <span className="bg-orange-600 text-white font-extrabold text-xs px-3 py-1.5 uppercase border border-slate-900">
              Multi-Platform Output
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white text-xs uppercase font-extrabold border-b-2 border-slate-700">
                  <th className="p-4 border-r border-slate-700">Format</th>
                  <th className="p-4 border-r border-slate-700">Frequency</th>
                  <th className="p-4 border-r border-slate-700">Target Platforms</th>
                  <th className="p-4">Strategic Objective</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-xs sm:text-sm font-medium">
                {postingCadence.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/60 transition-colors">
                    <td className="p-4 border-r border-slate-800 font-black text-white uppercase flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500"></span>
                      {item.format}
                    </td>
                    <td className="p-4 border-r border-slate-800">
                      <span className={`inline-block font-extrabold text-xs px-2.5 py-1 border border-slate-900 ${item.badgeColor}`}>
                        {item.frequency}
                      </span>
                    </td>
                    <td className="p-4 border-r border-slate-800 text-slate-300 font-semibold">
                      {item.targetPlatform}
                    </td>
                    <td className="p-4 text-slate-300">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
