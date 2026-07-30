import React, { useState } from 'react';
import { droneShotTypes } from '../data/portfolioData';
import { Globe, Eye, CheckSquare, Star, Play, X, Shield, Award } from 'lucide-react';

export const DroneShowcase: React.FC = () => {
  const [isPlayingModal, setIsPlayingModal] = useState(false);

  const getIcon = (name: string) => {
    switch(name) {
      case 'Globe': return Globe;
      case 'Eye': return Eye;
      case 'CheckSquare': return CheckSquare;
      case 'Star': return Star;
      default: return Globe;
    }
  };

  return (
    <section id="drone" className="py-12 bg-slate-50 border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#0f172a] mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
              06 — Role of Drone in Marketing
            </span>
            <span className="font-extrabold text-xs text-slate-600 uppercase tracking-wider">
              Elevation Builds Perception & Trust
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-950">
            Aerial Drone Videography Engine
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
            Drone content signals scale, ambition, and institutional quality — building buyer confidence before a client ever steps onto the site.
          </p>
        </div>

        {/* 4 Drone Shot Types Grid (Square Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {droneShotTypes.map((item, idx) => {
            const IconComp = getIcon(item.iconName);
            return (
              <div key={idx} className="bento-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 border-b-2 border-slate-900 pb-2">
                    <span className="font-black text-xs bg-slate-900 text-white px-2 py-0.5 uppercase">
                      TYPE 0{idx + 1}
                    </span>
                    <IconComp className="w-6 h-6 text-orange-600" />
                  </div>

                  <h3 className="font-black text-lg text-slate-950 uppercase mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-700 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="bg-orange-50 p-3 border-2 border-orange-300">
                  <span className="text-[10px] font-black text-orange-950 uppercase block">Commercial Value:</span>
                  <span className="text-xs font-bold text-slate-900">{item.commercialValue}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Drone Visual Player Showcase Box */}
        <div className="bento-card-dark p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-orange-500 animate-ping"></span>
                <span className="font-extrabold text-xs text-orange-400 uppercase tracking-widest">PROOF OF CONCEPT VISUAL</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase mb-4">
                High-Definition Site Flythroughs & Construction Footage
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-6">
                Aftab Latif (Photographer & Licensed Drone Operator) brings 4K aerial camera gear to capture daily construction progress, plot boundaries, and finished projects across Assam.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-slate-800 text-orange-400 text-xs font-bold px-3 py-1.5 border border-slate-700">4K 60FPS Video</span>
                <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1.5 border border-slate-700">GPS Waypoint Tracking</span>
                <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1.5 border border-slate-700">Cinematic Color Graded</span>
              </div>

              <button
                onClick={() => setIsPlayingModal(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-black text-sm uppercase px-6 py-3.5 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#020617] flex items-center gap-3 transition-all"
              >
                <Play className="w-5 h-5 fill-white" />
                <span>Play Sample Drone Reel</span>
              </button>
            </div>

            {/* Right Interactive Mockup Container */}
            <div className="lg:col-span-5 relative">
              <div 
                onClick={() => setIsPlayingModal(true)}
                className="relative cursor-pointer border-4 border-white bg-slate-950 aspect-video shadow-[6px_6px_0px_0px_#c85a17] group overflow-hidden flex items-center justify-center"
              >
                {/* Visual Placeholder Graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-orange-600 text-white font-extrabold text-[10px] px-2 py-0.5 uppercase">4K SAMPLE</span>
                    <span className="bg-slate-900/80 text-white font-bold text-[10px] px-2 py-0.5">GUWAHATI SITE</span>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-600 text-white rounded-none border-2 border-white mx-auto flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-7 h-7 fill-white ml-0.5" />
                    </div>
                    <span className="font-extrabold text-xs text-white uppercase tracking-wider block mt-2">Click To Preview Reel</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase">
                    <span>Pilot: Aftab Latif</span>
                    <span>Edit: Vivek Dutta</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Video Modal Popup */}
      {isPlayingModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-4 border-slate-900 p-6 max-w-3xl w-full shadow-[8px_8px_0px_0px_#ea580c] relative">
            <div className="flex items-center justify-between mb-4 border-b-2 border-slate-900 pb-3">
              <div>
                <h4 className="font-black text-lg text-slate-950 uppercase">Sample Construction Reel & Drone Footage</h4>
                <p className="text-xs text-slate-600 font-bold">Cura Tech Media — Content Proof of Concept</p>
              </div>
              <button 
                onClick={() => setIsPlayingModal(false)}
                className="p-2 bg-slate-900 text-white border-2 border-slate-900 hover:bg-orange-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Canvas Container */}
            <div className="bg-slate-900 aspect-video flex flex-col items-center justify-center text-white border-2 border-slate-900 p-6 text-center">
              <Play className="w-16 h-16 text-orange-500 mb-3 animate-pulse" />
              <h5 className="font-black text-xl uppercase mb-2">Cinematic Drone & Progress Reel</h5>
              <p className="text-xs text-slate-300 max-w-md mb-4 font-medium">
                Sample drone flythroughs, foundation pours, and finished luxury villa showcases ready to deploy for Cura Tech Engineering.
              </p>
              <button
                onClick={() => setIsPlayingModal(false)}
                className="bg-orange-600 text-white font-extrabold text-xs uppercase px-5 py-2.5 border border-slate-900"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
