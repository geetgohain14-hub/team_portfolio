import React, { useState } from 'react';
import { teamMembers, TeamMember } from '../data/teamData';
import { Users, Mail, Phone, MapPin, Award, CheckCircle2, X, ExternalLink, Sparkles } from 'lucide-react';

export const TeamRoster: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-12 bg-white border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-slate-900 text-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#c85a17] mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
                07 — Team Roster
              </span>
              <span className="font-extrabold text-xs text-orange-400 uppercase tracking-wider">
                5 Specialists · 1 Unit
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              The Team Behind The Build Story
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-300 max-w-md">
            Rather than one intern juggling everything, our 5-member specialist unit handles content capture, editing, strategy, 3D previews, and tech automations from day one.
          </p>
        </div>

        {/* 5-Member Team Bento Grid (Square & Rectangular - High-Precision Alignment) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 items-stretch">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bento-card p-6 flex flex-col justify-between group hover:border-orange-600 transition-all"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Photo & Badge */}
                  <div className="relative border-4 border-slate-900 mb-5 bg-slate-100 overflow-hidden aspect-[4/3] shadow-[4px_4px_0px_0px_#0f172a]">
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60';
                      }}
                    />
                    <div className="absolute top-2.5 right-2.5 bg-orange-600 text-white font-black text-[10px] uppercase px-2.5 py-1 border border-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
                      VERIFIED CV
                    </div>
                  </div>

                  {/* Name & Title Block */}
                  <div className="min-h-[72px] mb-3">
                    <h3 className="font-black text-xl text-slate-950 uppercase leading-snug tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-extrabold text-orange-600 uppercase tracking-wide mt-1">
                      {member.role}
                    </p>
                  </div>

                  <div className="border-b-2 border-slate-900 pb-3 mb-4"></div>

                  {/* Short Responsibility */}
                  <p className="text-xs font-semibold text-slate-700 leading-relaxed mb-5 min-h-[44px]">
                    {member.shortResponsibility}
                  </p>
                </div>

                {/* Key Stat Badge Pill */}
                <div className="bg-orange-50 border-2 border-orange-300 p-3 mb-5">
                  <span className="text-[10px] font-black text-orange-950 uppercase block tracking-wider mb-0.5">Proven Metric:</span>
                  <span className="text-xs font-extrabold text-slate-950 block">{member.keyStats[0]}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedMember(member)}
                className="w-full bg-slate-900 hover:bg-orange-600 text-white font-extrabold text-xs uppercase py-3.5 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 mt-auto"
              >
                <span>View Full CV & Profile</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}

          {/* 6th Bento Card: Why 5 Specialists Block */}
          <div className="bento-card-accent p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-orange-600 shrink-0" />
                <span className="font-black text-xs uppercase tracking-wider text-orange-950">Why Hire The Unit?</span>
              </div>
              <h3 className="font-black text-xl text-slate-950 uppercase mb-4 leading-tight">
                5 Specialists vs. 1 Solo Intern
              </h3>
              <ul className="space-y-3 text-xs font-bold text-slate-800 mb-6">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span className="leading-snug"><strong>On-Ground Capture:</strong> Brian & Aftab shoot 4K ground & drone.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span className="leading-snug"><strong>Post-Production:</strong> Vivek & Geetartha edit reels & 3D renders.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span className="leading-snug"><strong>Strategy & Ads:</strong> Avanish runs customer targeting & analytics.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-slate-900 p-4 mt-auto">
              <span className="text-xs font-black text-slate-950 uppercase block mb-1">Instant Deployment:</span>
              <span className="text-[11px] font-semibold text-slate-700 leading-relaxed block">Pre-existing team synergy with 5M+ combined view track record.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Member Full CV Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border-4 border-slate-900 p-6 sm:p-8 max-w-3xl w-full shadow-[10px_10px_0px_0px_#ea580c] relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 border-b-4 border-slate-900 pb-4">
              <div className="flex items-center gap-4">
                <img
                  src={selectedMember.photoUrl}
                  alt={selectedMember.name}
                  className="w-16 h-16 border-2 border-slate-900 object-cover shrink-0"
                />
                <div>
                  <h4 className="font-black text-2xl text-slate-950 uppercase">{selectedMember.name}</h4>
                  <p className="text-xs font-extrabold text-orange-600 uppercase">{selectedMember.role}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedMember(null)}
                className="p-2 bg-slate-900 text-white border-2 border-slate-900 hover:bg-orange-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-xs sm:text-sm text-slate-800">
              
              {/* Profile Bio */}
              <div className="bg-slate-50 border-2 border-slate-900 p-4">
                <span className="font-black text-xs uppercase text-orange-700 block mb-1">Executive Summary:</span>
                <p className="font-semibold leading-relaxed text-slate-900">{selectedMember.bio}</p>
              </div>

              {/* Value to Cura Tech */}
              <div className="bg-orange-50 border-2 border-orange-400 p-4">
                <span className="font-black text-xs uppercase text-orange-950 block mb-1">Direct Value to Cura Tech Engineering:</span>
                <p className="font-semibold text-slate-950 leading-relaxed">{selectedMember.curatechValue}</p>
              </div>

              {/* Key Proven Stats */}
              <div>
                <span className="font-black text-xs uppercase text-slate-900 block mb-2">Key Accomplishments & Track Record:</span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedMember.keyStats.map((stat, idx) => (
                    <div key={idx} className="bg-slate-900 text-white p-2.5 font-extrabold border border-slate-900">
                      ✓ {stat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Matrix */}
              <div>
                <span className="font-black text-xs uppercase text-slate-900 block mb-2">Core Skills & Tools:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill, idx) => (
                    <span key={idx} className="bg-orange-100 text-orange-950 font-extrabold text-xs px-2.5 py-1 border border-orange-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-2 border-slate-900 pt-4 text-xs font-semibold">
                <div>
                  <span className="font-black uppercase text-slate-900 block mb-1">Education:</span>
                  <p>{selectedMember.education}</p>
                  <span className="font-black uppercase text-slate-900 block mt-2 mb-1">Languages:</span>
                  <p>{selectedMember.languages.join(', ')}</p>
                </div>
                <div>
                  <span className="font-black uppercase text-slate-900 block mb-1">Contact Details:</span>
                  <p>📞 {selectedMember.phone}</p>
                  <p>✉️ {selectedMember.email}</p>
                  <p>📍 {selectedMember.location}</p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-6 border-t-2 border-slate-900 pt-4 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="bg-slate-900 text-white font-extrabold text-xs uppercase px-6 py-2.5 border-2 border-slate-900"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
