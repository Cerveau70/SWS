import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Clock, Linkedin, ChevronRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO SECTION AVEC BACKGROUND OFFICE --- */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-5"
            alt="Office background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#318ce7] text-[10px] font-black uppercase mb-6 border border-blue-100">
            <Sparkles className="w-3 h-3 text-orange-500" /> Réponse sous 24h
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-none mb-6">
            Donnons vie à <br />
            <span className="text-orange-500 relative">vos projets.</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Une question technique ou une demande de devis ? Nos experts sont à votre entière disposition.
          </p>
        </div>
      </section>

      {/* --- SECTION CONTACT --- */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Infos (Gauche) */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { icon: Phone, title: 'Téléphone', val: '+225 05 44 98 39 93' },
                { icon: Mail, title: 'Email Expert', val: 'contact@sws-group.com' },
                { icon: MapPin, title: 'Siège Social', val: 'Abidjan, Côte d\'Ivoire' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-[#318ce750] transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#318ce7]" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase text-slate-400">{item.title}</h3>
                    <p className="font-bold text-slate-700 text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
              
              <div className="p-6 bg-[#318ce7] rounded-2xl text-white shadow-xl shadow-blue-200 relative overflow-hidden group">
                <Linkedin className="absolute -right-4 -bottom-4 w-24 h-24 text-white/10 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold mb-2 flex items-center gap-2">SWS sur LinkedIn</h4>
                <p className="text-xs text-blue-50 leading-relaxed max-w-[200px]">Rejoignez notre réseau pour suivre les innovations logistiques.</p>
              </div>
            </div>

            {/* Formulaire (Droite) */}
            <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-2xl shadow-slate-200/50">
              {submitted ? (
                <div className="text-center py-16 animate-in zoom-in">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-8 h-8" /></div>
                  <h3 className="text-2xl font-black text-[#318ce7] mb-2">Message envoyé !</h3>
                  <p className="text-slate-500 text-sm font-medium">Nous vous recontacterons très rapidement.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Nom complet</label>
                      <input type="text" required placeholder="Jean Dupont" className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-sm transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Email Pro</label>
                      <input type="email" required placeholder="jean@entreprise.fr" className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-sm transition-all" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-2">Votre Message</label>
                    <textarea required rows={4} placeholder="Comment pouvons-nous vous aider ?" className="w-full px-5 py-3.5 bg-slate-50/50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-sm transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-[#318ce7] text-white rounded-2xl font-black text-sm hover:bg-orange-500 transition-all shadow-lg shadow-blue-200 hover:shadow-orange-200 flex items-center justify-center gap-2 group">
                    Envoyer le brief <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ MINI --- */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-[#318ce7] mb-10 flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-orange-500" /> FAQ Express
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: 'Diagnostic gratuit ?', a: 'Oui, le premier audit de vos flux est offert.' },
              { q: 'Délais de réponse ?', a: 'Moins de 24h ouvrées pour toute demande.' },
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-left">
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