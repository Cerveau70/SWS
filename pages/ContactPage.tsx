import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Clock, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#318ce7] text-xs font-bold mb-6 border border-blue-100">
              <Sparkles className="w-3 h-3 text-orange-500" />
              Réponse sous 24 heures
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-none mb-6">
              Donnons vie à <br />
              <span className="text-orange-500">vos projets.</span>
            </h1>
            <p className="text-lg text-slate-600 font-medium">
              Une question technique ou une demande de devis ? Nos experts sont à votre disposition.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION CONTACT (Cadres Jolie) --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Infos (Gauche) */}
            <div className="lg:col-span-5 space-y-6">
              {[
                { icon: Phone, title: 'Téléphone', val: '+2250544983993', color: 'text-[#318ce7]' },
                { icon: Mail, title: 'Email Expert', val: 'wongnigaseydous@gmail.com', color: 'text-orange-500' },
                { icon: MapPin, title: 'Siège Social', val: 'Paris La Défense, France', color: 'text-[#318ce7]' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100 hover:border-[#318ce720] transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.title}</h3>
                    <p className="font-bold text-slate-700">{item.val}</p>
                  </div>
                </div>
              ))}

              {/* Petit bloc social */}
              <div className="p-6 bg-[#318ce7] rounded-2xl text-white shadow-xl shadow-blue-200">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Linkedin className="w-5 h-5" /> Suivez notre actu
                </h4>
                <p className="text-xs text-blue-50 mb-0 leading-relaxed">
                  Rejoignez plus de 5000 professionnels sur notre réseau LinkedIn.
                </p>
              </div>
            </div>

            {/* Formulaire (Droite - Cadre Modéré) */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 lg:p-10 shadow-2xl shadow-slate-200/50">
              {submitted ? (
                <div className="text-center py-20 animate-in zoom-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#318ce7] mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 text-sm">Nous reviendrons vers vous très rapidement.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase ml-1">Nom complet</label>
                      <input type="text" required placeholder="Jean Dupont" className="w-full px-5 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-500 uppercase ml-1">Email Pro</label>
                      <input type="email" required placeholder="jean@entreprise.fr" className="w-full px-5 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-500 uppercase ml-1">Votre Message</label>
                    <textarea required rows={4} placeholder="Comment pouvons-nous vous aider ?" className="w-full px-5 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-sm resize-none" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#318ce7] text-white rounded-xl font-black text-sm hover:bg-orange-500 transition-all shadow-lg shadow-blue-200 hover:shadow-orange-200 flex items-center justify-center gap-2 group">
                    Lancer la demande
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ MINI (Cadres Compacts) --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-[#318ce7] flex items-center justify-center gap-2">
              <Clock className="w-6 h-6 text-orange-500" /> FAQ express
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: 'Diagnostic gratuit ?', a: 'Oui, le premier audit de vos flux est offert.' },
              { q: 'Secteurs d\'activité ?', a: 'Logistique, Retail, Finance et Industrie.' },
              { q: 'Délais de réponse ?', a: 'Moins de 24h ouvrées pour toute demande.' },
              { q: 'Sécurité data ?', a: 'Chiffrement AES-256 et conformité RGPD.' },
            ].map((faq, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-sm font-black text-[#318ce7] mb-2">{faq.q}</h4>
                <p className="text-xs text-slate-500 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;