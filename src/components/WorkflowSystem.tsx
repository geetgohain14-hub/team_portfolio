import React from 'react';
import { workflowSteps } from '../data/portfolioData';
import { RefreshCw, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';

export const WorkflowSystem: React.FC = () => {
  return (
    <section id="workflow" className="py-12 bg-slate-50 border-b-4 border-slate-900 grid-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_0px_#0f172a] mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-orange-600 text-white font-extrabold text-xs px-2.5 py-0.5 uppercase border border-slate-900">
              10 — Workflow System
            </span>
            <span className="font-extrabold text-xs text-slate-600 uppercase tracking-wider">
              Repeatable Operational Loop
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-950">
            A Systemized Content Machine, Not Improvised Posts
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
            Five clear operational stages ensure content quality remains consistent and output compounds into steady customer leads.
          </p>
        </div>

        {/* 5-Step Horizontal Loop Diagram (Square Bento Blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {workflowSteps.map((step) => (
            <div key={step.stepNumber} className="bento-card p-5 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center justify-between mb-3 border-b-2 border-slate-900 pb-2">
                  <span className="bg-slate-900 text-white font-black text-xs px-2.5 py-1 uppercase">
                    STEP 0{step.stepNumber}
                  </span>
                  <RefreshCw className="w-4 h-4 text-orange-600" />
                </div>

                <h3 className="font-black text-base text-slate-950 uppercase mb-2">
                  {step.name}
                </h3>

                <p className="text-xs font-semibold text-slate-700 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="bg-orange-50 border-2 border-orange-300 p-2.5">
                <span className="text-[10px] font-black text-orange-950 uppercase block">Responsible Owners:</span>
                <span className="text-xs font-extrabold text-slate-950">{step.owner}</span>
              </div>
            </div>
          ))}
        </div>

        {/* System Summary Bar */}
        <div className="bento-card-dark p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cpu className="w-8 h-8 text-orange-400 shrink-0" />
            <div>
              <h4 className="font-black text-lg text-white uppercase">Continuous Production Cycle</h4>
              <p className="text-xs font-medium text-slate-300">Each weekly cycle feeds the next — building a compounding library of high-trust visual assets.</p>
            </div>
          </div>
          <span className="bg-orange-600 text-white font-extrabold text-xs uppercase px-4 py-2 border border-slate-900">
            24-Hour Edit Turnaround
          </span>
        </div>

      </div>
    </section>
  );
};
