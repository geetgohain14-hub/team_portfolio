import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroVision } from './components/IntroVision';
import { MarketingApproach } from './components/MarketingApproach';
import { ContentStrategy } from './components/ContentStrategy';
import { FunnelSystem } from './components/FunnelSystem';
import { DroneShowcase } from './components/DroneShowcase';
import { TeamRoster } from './components/TeamRoster';
import { UniqueIdeas } from './components/UniqueIdeas';
import { CommercialBenefits } from './components/CommercialBenefits';
import { WorkflowSystem } from './components/WorkflowSystem';
import { InfluencerSection } from './components/InfluencerSection';
import { WeeklyPlanner } from './components/WeeklyPlanner';
import { ClosingCTA } from './components/ClosingCTA';

export function App() {
  const [isOpenContactModal, setIsOpenContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans antialiased selection:bg-orange-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setIsOpenContactModal(true)} />

      {/* Main Pitch Portfolio Content Blocks */}
      <main className="space-y-0">
        <Hero onOpenContact={() => setIsOpenContactModal(true)} />
        <IntroVision />
        <MarketingApproach />
        <ContentStrategy />
        <FunnelSystem />
        <DroneShowcase />
        <TeamRoster />
        <UniqueIdeas />
        <CommercialBenefits />
        <WorkflowSystem />
        <InfluencerSection />
        <WeeklyPlanner />
        <ClosingCTA 
          isOpenContactModal={isOpenContactModal}
          onCloseContactModal={() => setIsOpenContactModal(false)}
          onOpenContactModal={() => setIsOpenContactModal(true)}
        />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white border-t-4 border-slate-900 py-8 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase text-slate-400">
          <div className="flex items-center gap-2">
            <span className="bg-orange-600 text-white font-extrabold px-2 py-0.5 border border-slate-900">CURA TECH MEDIA</span>
            <span>© 2026 Pitch Proposal. All Rights Reserved.</span>
          </div>
          <div>
            Guwahati & Assam · High-Impact Content & Lead Generation Unit
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
