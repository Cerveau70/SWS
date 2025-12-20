import React from 'react';
import { Truck, Globe, PackageCheck, ShieldCheck, MapPin, Phone, Mail, ArrowRight, CheckCircle2, Navigation } from 'lucide-react';

const TransportPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        {/* Motif de fond subtil (grille de transport) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#318ce708_1px,transparent_1px),linear-gradient(to_bottom,#318ce708_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-bold mb-8 border border-orange-100 uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Logistique 4.0
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-[1.05] mb-8">
                Le transport, <br />
                <span className="text-orange-500 underline decoration-[#318ce720] underline-offset-8">réinventé.</span>
              </h1>
              <p className="text-xl text-slate-700 mb-10 leading-relaxed max-w-xl font-medium">
                Optimisez votre supply chain avec nos solutions multimodales intelligentes. Rapidité, sécurité et suivi en temps réel de vos flux mondiaux.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <button className="px-10 py-5 bg-[#318ce7] text-white rounded-2xl font-black text-lg hover:bg-[#2671ba] transition-all shadow-xl shadow-blue-400/30 flex items-center gap-3 group">
                  Demander un devis
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 border-2 border-slate-200 text-[#318ce7] rounded-2xl font-black text-lg hover:border-[#318ce7] hover:bg-blue-50 transition-all">
                  Nos tarifs
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 border-t border-slate-100 pt-10">
                {[
                  { val: '150+', label: 'Pays' },
                  { val: '24h/7', label: 'Suivi GPS' },
                  { val: '-25%', label: 'Coûts' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-[#318ce7]">{stat.val}</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Décoration arrière-plan */}
                <div className="absolute -inset-6 bg-orange-50 rounded-[3rem] rotate-3" />
                <div className="absolute -inset-6 bg-[#318ce710] rounded-[3rem] -rotate-3" />
                
                {/* Conteneur Image/Icône Principale */}
                <div className="relative h-full w-full bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#318ce705]" />
                  <Truck className="w-44 h-44 text-[#318ce7] group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Badge flottant "Temps réel" */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200">
                        <Navigation className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Localisation Actuelle</p>
                        <p className="text-[#318ce7] font-black">En transit vers Hub Paris</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION (Fond gris léger pour casser le blanc) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-orange-500 font-black tracking-widest uppercase text-sm mb-4">Expertise Logistique</h2>
            <p className="text-4xl lg:text-5xl font-black text-[#318ce7]">Une couverture totale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'Fret Mondial', desc: 'Expertise routière, maritime et aérienne sans frontières.' },
              { icon: Truck, title: 'Dernier Kilomètre', desc: 'Livraison urbaine ultra-rapide et éco-responsable.' },
              { icon: PackageCheck, title: 'Logistique', desc: 'Gestion d\'entrepôt et picking haute précision.' },
              { icon: ShieldCheck, title: 'Sécurité Maximale', desc: 'Flotte surveillée 24/7 pour marchandises sensibles.' },
            ].map((service, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-3xl border border-slate-200 hover:border-[#318ce7] hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#318ce7] transition-all duration-500">
                  <service.icon className="w-8 h-8 text-[#318ce7] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-4 group-hover:text-[#318ce7]">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AVANTAGES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <h2 className="text-4xl lg:text-5xl font-black text-[#318ce7] leading-tight">Pourquoi choisir <br/><span className="text-orange-500">SWS Logistique ?</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { title: 'IA de Routage', desc: 'Nos algorithmes réduisent les trajets de 15%.' },
                 { title: 'Zéro Carbone', desc: 'Objectif neutralité sur nos livraisons urbaines.' },
                 { title: 'Support 24/7', desc: 'Une équipe humaine toujours à votre écoute.' },
                 { title: 'API Intégrée', desc: 'Connectez votre ERP à nos outils en 5 minutes.' },
               ].map((adv, i) => (
                 <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-800 mb-1">{adv.title}</h4>
                      <p className="text-sm text-slate-500 font-medium">{adv.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#318ce7] rounded-[3.5rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-400/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl lg:text-6xl font-black mb-8">Lancez votre <br />expédition.</h2>
              <p className="text-blue-50 text-xl mb-12 font-medium">Nos experts créent pour vous un plan de transport sur-mesure en moins de 2 heures.</p>
              
              <div className="space-y-8">
                {[
                  { icon: Phone, label: 'Téléphone', val: '+2250544983993' },
                  { icon: Mail, label: 'Email Pro', val: 'wongnigaseydous@gmail.com' },
                  { icon: MapPin, label: 'Siège', val: 'Paris La Défense, France' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-black uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-[#318ce7] font-black text-2xl mb-8">Demande de devis</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="Entreprise" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold" />
                  <input type="email" placeholder="Email" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold" />
                </div>
                <input type="text" placeholder="Type de marchandise" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold" />
                <textarea placeholder="Détails du trajet (Départ - Arrivée)..." rows={3} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold resize-none" />
                <button className="w-full py-5 bg-orange-500 text-white rounded-xl font-black text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
                  Calculer mon tarif
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TransportPage;