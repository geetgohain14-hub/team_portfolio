import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Play } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'Approach', href: '#approach' },
    { name: 'Strategy', href: '#strategy' },
    { name: 'Funnel', href: '#funnel' },
    { name: 'Drone', href: '#drone' },
    { name: 'Team', href: '#team' },
    { name: 'Ideas', href: '#ideas' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Influencer', href: '#influencer' },
    { name: 'Planner', href: '#planner' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Only Lockup */}
          <a href="#" className="flex items-center group shrink-0">
            <div className="h-12 px-2 border-2 border-slate-900 bg-white flex items-center justify-center shadow-[3px_3px_0px_0px_#0f172a] hover:bg-slate-50 transition-colors">
              <img 
                src="/logo-removebg-preview (1).png" 
                alt="Cura Tech Logo" 
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/team/logo-removebg.png';
                }}
              />
            </div>
          </a>

          {/* Desktop Nav Anchor Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-extrabold uppercase text-slate-800 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-900 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs uppercase px-5 py-3 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] hover:translate-y-[-2px] transition-all flex items-center gap-2"
            >
              <span>Book Pitch Walkthrough</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-slate-900 bg-white shadow-[2px_2px_0px_0px_#0f172a]"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t-2 border-slate-900 p-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="p-2 text-center text-xs font-extrabold uppercase bg-slate-100 hover:bg-orange-600 hover:text-white border-2 border-slate-900"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenContact();
            }}
            className="w-full bg-orange-600 text-white font-extrabold text-sm uppercase py-3 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a] flex items-center justify-center gap-2"
          >
            <span>Book Pitch Walkthrough</span>
            <Phone className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
