import React, { useState } from 'react';
import { ShieldCheck, Phone, Mail, ArrowRight, X, CheckCircle2, Award, Sparkles, MessageCircle } from 'lucide-react';

interface ClosingCTAProps {
  isOpenContactModal: boolean;
  onCloseContactModal: () => void;
  onOpenContactModal: () => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({
  isOpenContactModal,
  onCloseContactModal,
  onOpenContactModal
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onCloseContactModal();
    }, 2500);
  };

  return (
    <section className="py-16 bg-slate-900 text-white border-b-4 border-slate-900 grid-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quality System Summary Card */}
        <div className="bg-slate-800 border-4 border-slate-700 p-8 shadow-[8px_8px_0px_0px_#ea580c] mb-12">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-6 h-6 text-orange-400" />
            <span className="font-extrabold text-xs uppercase text-orange-400 tracking-wider">SECTION 17 — Quality System & Governance</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white mb-6">
            Guaranteed Standards & Client Approval Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900 p-4 border border-slate-700">
              <span className="text-orange-400 font-extrabold text-xs uppercase block mb-1">01. Zero Surprise Posts</span>
              <p className="text-xs text-slate-300 font-semibold">100% of video scripts and designs are pre-approved by Cura Tech leadership before publishing.</p>
            </div>
            <div className="bg-slate-900 p-4 border border-slate-700">
              <span className="text-orange-400 font-extrabold text-xs uppercase block mb-1">02. Brand Alignment</span>
              <p className="text-xs text-slate-300 font-semibold">Strict adherence to Cura Tech's engineering colors, logos, font rules, and tone of voice.</p>
            </div>
            <div className="bg-slate-900 p-4 border border-slate-700">
              <span className="text-orange-400 font-extrabold text-xs uppercase block mb-1">03. On-Time Output</span>
              <p className="text-xs text-slate-300 font-semibold">4-5 reels and daily stories delivered on strict weekly schedules without delay.</p>
            </div>
            <div className="bg-slate-900 p-4 border border-slate-700">
              <span className="text-orange-400 font-extrabold text-xs uppercase block mb-1">04. Metric Accountability</span>
              <p className="text-xs text-slate-300 font-semibold">Monthly performance reports analyzing view reach, WhatsApp leads, and campaign conversion.</p>
            </div>
          </div>
        </div>

        {/* Pitch Conclusion & Call to Action */}
        <div className="bg-white text-slate-950 border-4 border-slate-900 p-8 sm:p-12 shadow-[10px_10px_0px_0px_#0f172a] text-center max-w-4xl mx-auto">
          <div className="inline-block bg-orange-600 text-white font-black text-xs uppercase px-4 py-1.5 border-2 border-slate-900 mb-4">
            Ready to Build Assam's #1 Construction Brand?
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 mb-6 leading-tight">
            LET'S TURN YOUR CONSTRUCTION QUALITY INTO UNMATCHED MARKET DOMINANCE.
          </h2>

          <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed mb-8 max-w-2xl mx-auto">
            We are ready to deploy as your dedicated content, drone, and customer acquisition engine. Let's schedule a formal pitch meeting or site visit walkthrough.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContactModal}
              className="bg-orange-600 hover:bg-orange-700 text-white font-black text-sm uppercase px-8 py-4 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:translate-y-[-2px] transition-all flex items-center gap-3"
            >
              <span>Book Formal Pitch Meeting</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/919365738596?text=Hi%20Brian,%20I'm%20interested%20in%20discussing%20the%20Cura%20Tech%20Media%20pitch."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white font-black text-sm uppercase px-8 py-4 border-2 border-slate-900 shadow-[4px_4px_0px_0px_#c85a17] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-orange-400" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-slate-900 flex flex-wrap items-center justify-center gap-6 text-xs font-black uppercase text-slate-700">
            <span>📍 Guwahati, Assam</span>
            <span>✉️ Brianmarak321@gmail.com</span>
            <span>📞 +91 9365738596 / +91 7637852396</span>
          </div>
        </div>

      </div>

      {/* Interactive Pitch Contact Modal */}
      {isOpenContactModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-950 border-4 border-slate-900 p-6 sm:p-8 max-w-xl w-full shadow-[10px_10px_0px_0px_#ea580c] relative">
            
            <div className="flex items-start justify-between mb-6 border-b-4 border-slate-900 pb-3">
              <div>
                <h4 className="font-black text-2xl uppercase">Book Pitch Walkthrough</h4>
                <p className="text-xs font-bold text-orange-600 uppercase">Cura Tech Media Partnership Proposal</p>
              </div>
              <button 
                onClick={onCloseContactModal}
                className="p-2 bg-slate-900 text-white border-2 border-slate-900 hover:bg-orange-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="bg-orange-50 border-2 border-orange-500 p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-orange-600 mx-auto" />
                <h5 className="font-black text-xl text-slate-950 uppercase">Meeting Request Sent!</h5>
                <p className="text-xs font-semibold text-slate-800">
                  Thank you. Brian Marak and Avanish Sarma will reach out to schedule the pitch presentation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-black uppercase block mb-1 text-slate-900">Your Name / Designation:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Director, Cura Tech Engineering"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-900 p-3 text-xs font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase block mb-1 text-slate-900">Phone / WhatsApp Number:</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 9876543210"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-900 p-3 text-xs font-bold text-slate-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-black uppercase block mb-1 text-slate-900">Preferred Meeting Date / Notes:</label>
                  <textarea
                    rows={3}
                    placeholder="Let us know when you are available for a live pitch presentation..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border-2 border-slate-900 p-3 text-xs font-medium text-slate-900"
                  />
                </div>

                <div className="bg-slate-100 p-3 border border-slate-300 text-[11px] font-bold text-slate-700">
                  ⚡ Or reach out directly: <strong>Brian Marak (+91 9365738596)</strong> | <strong>Avanish Sarma (+91 7637852396)</strong>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onCloseContactModal}
                    className="bg-slate-200 text-slate-900 font-extrabold text-xs uppercase px-5 py-3 border border-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase px-6 py-3 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0f172a]"
                  >
                    Submit Meeting Request
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
