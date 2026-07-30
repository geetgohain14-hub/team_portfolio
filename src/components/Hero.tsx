import React from 'react';
import { ArrowRight, Play, Award, Eye, Users, ChevronRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative bg-white grid-bg-white border-b-4 border-slate-900 pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Bar */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="bg-slate-900 text-white font-extrabold text-xs px-3 py-1 border border-slate-900 flex items-center gap-1.5 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            INVESTOR PITCH & TEAM SPEC 2026
          </span>
          <span className="bg-orange-100 text-orange-900 border border-orange-400 font-extrabold text-xs px-3 py-1 uppercase">
            Designed for Cura Tech Engineering (Guwahati, Assam)
          </span>
        </div>

        {/* High Density Bento Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Headline Block (Left - 7 Cols) */}
          <div className="lg:col-span-7 bg-white border-4 border-slate-900 p-8 shadow-[8px_8px_0px_0px_#0f172a] flex flex-col justify-between">
            <div>
              <div className="inline-block bg-orange-600 text-white font-black text-xs uppercase px-3 py-1 border-2 border-slate-900 mb-4">
                Social Media Marketing & Content Production Engine
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight leading-[1.08] mb-6">
                WE DON'T JUST MANAGE SOCIAL MEDIA — <span className="text-orange-600 bg-orange-50 px-2 border-b-4 border-orange-600">WE BUILD YOUR BRAND</span> AND BRING YOU CUSTOMERS.
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed mb-8 border-l-4 border-slate-900 pl-4 bg-slate-50 py-2">
                A complete storytelling, drone visual, and customer acquisition partnership built specifically for <strong>Cura Tech Engineering</strong> to dominate the homebuilding market across Guwahati and Assam.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 border-t-2 border-slate-900">
              <button
                onClick={onOpenContact}
                className="bg-orange-600 hover:bg-orange-700 text-white font-black text-sm uppercase px-8 py-4 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-[-2px] transition-all flex items-center gap-3"
              >
                <span>Book Pitch Walkthrough</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#team"
                className="bg-white hover:bg-slate-900 text-slate-900 hover:text-white font-black text-sm uppercase px-8 py-4 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] transition-all flex items-center gap-2"
              >
                <span>Meet the Team</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Visual Bento Blocks (5 Cols - Filled, No whitespace) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Stat Box 1: Views */}
            <div className="bg-orange-50 border-3 border-slate-900 p-5 shadow-[4px_4px_0px_0px_#0f172a]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-xs uppercase text-orange-900 bg-orange-200 px-2 py-0.5 border border-orange-400">Track Record</span>
                <Eye className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-950">5,000,000+</div>
              <p className="text-xs font-bold text-slate-700 uppercase mt-1">Organic Views Generated</p>
            </div>

            {/* Stat Box 2: Specialists */}
            <div className="bg-slate-900 text-white border-3 border-slate-900 p-5 shadow-[4px_4px_0px_0px_#c85a17]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-extrabold text-xs uppercase bg-orange-600 text-white px-2 py-0.5 border border-slate-900">Unit Capability</span>
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white">5 Dedicated</div>
              <p className="text-xs font-bold text-slate-300 uppercase mt-1">Specialists In 1 Team</p>
            </div>

            {/* Featured Team Badge Box */}
            <div className="sm:col-span-2 bg-white border-3 border-slate-900 p-5 shadow-[4px_4px_0px_0px_#0f172a] flex items-center gap-4">
              <div className="flex -space-x-3 overflow-hidden shrink-0">
                <img src="/images/team/brian.jpg" alt="Brian" className="w-12 h-12 border-2 border-slate-900 object-cover" />
                <img src="/images/team/avanish.jpg" alt="Avanish" className="w-12 h-12 border-2 border-slate-900 object-cover" />
                <img src="/images/team/aftab.jpg" alt="Aftab" className="w-12 h-12 border-2 border-slate-900 object-cover" />
                <img src="/images/team/geetartha.jpg" alt="Geetartha" className="w-12 h-12 border-2 border-slate-900 object-cover" />
                <img src="/images/team/vivek.jpg" alt="Vivek" className="w-12 h-12 border-2 border-slate-900 object-cover" />
              </div>
              <div>
                <h4 className="font-black text-sm text-slate-950 uppercase">Ready-To-Deploy Media Unit</h4>
                <p className="text-xs text-slate-700 font-semibold">Content Capture, Video Editing, Strategy, 3D Previews & AI Tech</p>
              </div>
            </div>

            {/* Drone Aerial Banner Box */}
            <div className="sm:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 text-white border-3 border-slate-900 p-5 shadow-[4px_4px_0px_0px_#0f172a] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 bg-orange-500 animate-pulse"></span>
                  <span className="font-extrabold text-xs uppercase tracking-wider text-orange-400">Cinematic 4K Drone Aerials</span>
                </div>
                <p className="text-xs font-bold text-slate-200">Site overview flythroughs & progress tracking angles</p>
              </div>
              <a href="#drone" className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase px-3 py-2 border border-slate-900 shrink-0">
                View Drone Spec
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Ticker Bar */}
        <div className="mt-8 bg-slate-900 text-white border-4 border-slate-900 p-4 shadow-[4px_4px_0px_0px_#c85a17] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="border-r border-slate-800 last:border-0">
            <span className="block font-black text-xl text-orange-400">307+ DAYS</span>
            <span className="text-[11px] font-bold uppercase text-slate-300">Cumulative Watch Time</span>
          </div>
          <div className="border-r border-slate-800 last:border-0">
            <span className="block font-black text-xl text-white">4-5 REELS/WK</span>
            <span className="text-[11px] font-bold uppercase text-slate-300">Target Social Rhythm</span>
          </div>
          <div className="border-r border-slate-800 last:border-0">
            <span className="block font-black text-xl text-orange-400">4-STEP FUNNEL</span>
            <span className="text-[11px] font-bold uppercase text-slate-300">WhatsApp Lead System</span>
          </div>
          <div>
            <span className="block font-black text-xl text-white">GUWAHATI & ASSAM</span>
            <span className="text-[11px] font-bold uppercase text-slate-300">Hyper-Local Targeting</span>
          </div>
        </div>

      </div>
    </section>
  );
};
