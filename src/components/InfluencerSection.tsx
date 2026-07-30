import React, { useState } from 'react';
import { Users, Video, FileText, ShieldCheck, CheckCircle2, ArrowRight, Zap, Play } from 'lucide-react';

export const InfluencerSection: React.FC = () => {
  const [activePhase, setActivePhase] = useState<'before' | 'during' | 'after'>('before');

  return (
    <section id="influencer" className="py-12 bg-white border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-slate-900 text-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#c85a17] mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
              11 - 15 — Influencer & Script Engine
            </span>
            <span className="font-extrabold text-xs text-orange-400 uppercase tracking-wider">
              Strategic Collaboration Blueprint
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Influencer Briefing & Script Strategy
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
            Local influencer partnerships build trust faster than cold ads because people trust people. We control every script, camera angle, and edit.
          </p>
        </div>

        {/* 3-Phase Timeline Briefing System (Tabbed Square Bento Box) */}
        <div className="bento-card p-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b-2 border-slate-900 pb-4">
            <div>
              <span className="font-black text-xs uppercase text-orange-600">SECTION 12</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 uppercase">
                Influencer Video Briefing System
              </h3>
            </div>

            {/* Phase Selector Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActivePhase('before')}
                className={`font-black text-xs uppercase px-4 py-2.5 border-2 border-slate-900 transition-all ${
                  activePhase === 'before' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                1. Before Shooting
              </button>
              <button
                onClick={() => setActivePhase('during')}
                className={`font-black text-xs uppercase px-4 py-2.5 border-2 border-slate-900 transition-all ${
                  activePhase === 'during' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                2. During Shooting
              </button>
              <button
                onClick={() => setActivePhase('after')}
                className={`font-black text-xs uppercase px-4 py-2.5 border-2 border-slate-900 transition-all ${
                  activePhase === 'after' ? 'bg-orange-600 text-white' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                3. After Shooting
              </button>
            </div>
          </div>

          {/* Phase Content Box */}
          <div className="bg-slate-50 border-2 border-slate-900 p-6">
            {activePhase === 'before' && (
              <div>
                <span className="bg-slate-900 text-white font-extrabold text-xs px-2.5 py-1 uppercase mb-3 inline-block">
                  Phase 1: Pre-Production & Concept Alignment
                </span>
                <h4 className="font-black text-lg text-slate-950 uppercase mb-3">Concept, Storyline & Talking Points</h4>
                <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <li className="flex items-center gap-2 bg-white p-3 border border-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span><strong>Concept & Storyline:</strong> Detailed written script supplied by Brian Marak before site visit.</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white p-3 border border-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span><strong>Brand Tone:</strong> Premium, trustworthy, transparent engineering focus.</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white p-3 border border-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span><strong>Talking Points:</strong> Construction quality, TMT steel grades, foundation depth, and finishing choices.</span>
                  </li>
                </ul>
              </div>
            )}

            {activePhase === 'during' && (
              <div>
                <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-1 uppercase mb-3 inline-block">
                  Phase 2: On-Site Direction & Footage Capture
                </span>
                <h4 className="font-black text-lg text-slate-950 uppercase mb-3">On-Ground Directing by Brian & Aftab</h4>
                <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <li className="flex items-center gap-2 bg-white p-3 border border-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span><strong>Camera Angles:</strong> Aftab operates 4K drone passes while Brian directs ground DSLR angles.</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white p-3 border border-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span><strong>Influencer Performance:</strong> Guiding walk-and-talk pacing, natural reactions, and site inspections.</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white p-3 border border-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span><strong>Shot Checklist:</strong> 10 mandatory B-roll shots of steel, concrete, workers, and safety gear.</span>
                  </li>
                </ul>
              </div>
            )}

            {activePhase === 'after' && (
              <div>
                <span className="bg-slate-900 text-white font-extrabold text-xs px-2.5 py-1 uppercase mb-3 inline-block">
                  Phase 3: Post-Production & Final Polish
                </span>
                <h4 className="font-black text-lg text-slate-950 uppercase mb-3">Post-Production by Geetartha & Vivek</h4>
                <ul className="space-y-2 text-xs sm:text-sm font-semibold text-slate-800">
                  <li className="flex items-center gap-2 bg-white p-3 border border-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span><strong>Cinematic Cuts:</strong> Fast-paced editing in Premiere Pro with color grading.</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white p-3 border border-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span><strong>Brand Overlays:</strong> Subtitles, Cura Tech logo watermark, and WhatsApp call-to-action screen.</span>
                  </li>
                  <li className="flex items-center gap-2 bg-white p-3 border border-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span><strong>Sound Design:</strong> High-energy music track and crisp audio mixing.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* 3-Part Video Script Blueprint & Equation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Script Blueprint (7 cols) */}
          <div className="lg:col-span-7 bento-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 border-b-2 border-slate-900 pb-2">
                <FileText className="w-5 h-5 text-orange-600" />
                <span className="font-black text-xs uppercase text-slate-900">SECTION 13 — Video Script Blueprint</span>
              </div>
              <h3 className="font-black text-xl text-slate-950 uppercase mb-4">The 3-Part High-Converting Script</h3>

              <div className="space-y-3">
                <div className="bg-orange-50 border-2 border-orange-400 p-3">
                  <span className="font-black text-xs text-orange-950 uppercase block">1. The Hook (First 3 Seconds):</span>
                  <p className="text-xs font-semibold text-slate-900 mt-1 italic">
                    "This is how your dream villa actually gets built 👇"
                  </p>
                </div>
                <div className="bg-slate-50 border-2 border-slate-900 p-3">
                  <span className="font-black text-xs text-slate-900 uppercase block">2. The Middle Value (15-30 Seconds):</span>
                  <p className="text-xs font-semibold text-slate-700 mt-1">
                    Site walkthrough, drone aerial reveal, influencer reaction to concrete slab quality, and materials breakdown.
                  </p>
                </div>
                <div className="bg-slate-900 text-white p-3 border-2 border-slate-900">
                  <span className="font-black text-xs text-orange-400 uppercase block">3. The CTA Close (Final 5 Seconds):</span>
                  <p className="text-xs font-semibold text-slate-200 mt-1">
                    "Contact Cura Tech Engineering for your dream home consultation today."
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-slate-600">
              ⚡ Guaranteed 0% random posts — every script is pre-written and client-approved.
            </div>
          </div>

          {/* Brand + Influencer Equation Box (5 cols) */}
          <div className="lg:col-span-5 bento-card-dark p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
                <Zap className="w-5 h-5 text-orange-400" />
                <span className="font-black text-xs uppercase text-orange-400">SECTION 15 — Collaboration Formula</span>
              </div>
              <h3 className="font-black text-xl text-white uppercase mb-4">The Growth Equation</h3>

              <div className="bg-slate-800 p-4 border-2 border-slate-700 text-center mb-4 space-y-2">
                <div className="text-xs font-black text-slate-300 uppercase">Local Influencer Reach</div>
                <div className="text-orange-400 font-extrabold text-lg">+</div>
                <div className="text-xs font-black text-slate-300 uppercase">Cura Tech Build Value</div>
                <div className="text-orange-400 font-extrabold text-lg">=</div>
                <div className="bg-orange-600 text-white font-black text-sm uppercase py-2 border border-slate-900">
                  High-Converting Inquiries
                </div>
              </div>

              <div className="space-y-1.5 text-xs font-bold text-slate-300">
                <div className="flex items-center gap-2">✓ Wider local reach across Guwahati</div>
                <div className="flex items-center gap-2">✓ Faster buyer trust & credibility</div>
                <div className="flex items-center gap-2">✓ Direct inbound WhatsApp inquiries</div>
              </div>
            </div>

            <div className="mt-4 bg-slate-800 p-2.5 text-center text-[11px] font-bold text-orange-400 border border-slate-700 uppercase">
              Targeted Engagement over Raw Follower Count
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
