import React from 'react';
import { Truck, Globe, PackageCheck, ShieldCheck, MapPin, Phone, Mail, ArrowRight, CheckCircle2, Navigation, Sparkles, Box, Zap, ChevronRight } from 'lucide-react';

const TransportPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO SECTION AVEC IMAGE DE FOND --- */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Image de fond avec masque de dégradé pour rester "propre" */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-4"
            alt="Background Logistics"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
        </div>

        {/* Grille technique superposée */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#318ce708_1px,transparent_1px),linear-gradient(to_bottom,#318ce708_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* CÔTÉ GAUCHE : TEXTE */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 backdrop-blur-sm text-[#318ce7] text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                <Sparkles className="w-3 h-3 text-orange-500" />
                L'intelligence en mouvement
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-[1.05]">
                Le transport, <br />
                <span className="text-orange-500 relative">
                  réinventé.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#318ce720]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" /></svg>
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
                Solutions multimodales intelligentes. Nous synchronisons votre logistique avec la puissance du numérique pour une rapidité sans faille.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#318ce7] text-white rounded-2xl font-black text-sm hover:bg-[#2671ba] transition-all shadow-xl shadow-blue-400/20 flex items-center gap-2 group">
                  Demander un devis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/50 backdrop-blur-sm border-2 border-slate-100 text-[#318ce7] rounded-2xl font-black text-sm hover:border-[#318ce7] transition-all">
                  Consulter les tarifs
                </button>
              </div>

              {/* STATS */}
              <div className="flex gap-8 pt-8 border-t border-slate-200/50">
                {[
                  { val: '150+', label: 'Pays', icon: Globe },
                  { val: '24h/7', label: 'Suivi', icon: Zap },
                  { val: '-25%', label: 'Coûts', icon: CheckCircle2 }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                       <stat.icon className="w-4 h-4 text-orange-500" />
                       <span className="text-2xl font-black text-[#318ce7]">{stat.val}</span>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CÔTÉ DROIT : VISUEL "BIJOU" */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square">
                {/* Lueur d'ambiance */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-[#318ce715] to-orange-100/50 rounded-full blur-[80px] animate-pulse" />
                
                <div className="relative h-full w-full bg-white/80 backdrop-blur-md rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] border border-white flex items-center justify-center overflow-hidden group">
                   {/* Image interne subtile */}
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.03] group-hover:scale-110 transition-transform duration-1000"
                    alt="Warehouse"
                  />
                  
                  <Truck className="w-40 h-40 text-[#318ce7] group-hover:scale-110 transition-transform duration-700 relative z-10" />
                  
                  {/* Badges Flottants */}
                  <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 animate-bounce cursor-default">
                    <Box className="w-5 h-5 text-orange-500" />
                    <span className="text-[10px] font-black text-[#318ce7]">SkyWay Technologies Express</span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                      <Navigation className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Position Actuelle</p>
                      <p className="text-[#318ce7] font-black text-sm">Hub Logistique SkyWay Technologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES AVEC FOND LÉGÈREMENT TEXTURÉ --- */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-slate-50/50 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Fret Mondial', desc: 'Maritime, aérien et routier sans limites.' },
              { icon: Truck, title: 'Dernier KM', desc: 'Livraison urbaine agile et éco-responsable.' },
              { icon: PackageCheck, title: 'Logistique', desc: 'Gestion d\'entrepôt connectée et précise.' },
              { icon: ShieldCheck, title: 'Sécurité', desc: 'Surveillance active 24/7 de vos biens.' },
            ].map((service, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-[#318ce7] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#318ce7] transition-colors">
                  <service.icon className="w-6 h-6 text-[#318ce7] group-hover:text-white" />
                </div>
                <h3 className="text-lg font-black text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-xs">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / DEVIS SECTION --- */}
      <section className="py-24 px-6 relative">
         {/* Background image pour le bas de page */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-5"
            alt="Logistic background"
          />
        </div>

        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#318ce7] via-[#2671ba] to-[#1e5692] rounded-[3.5rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-blue-500/30">
          {/* Formes décoratives */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter">
                Prêt pour le <br />
                <span className="text-orange-400">décollage ?</span>
              </h2>
              <p className="text-blue-100 font-medium max-w-sm text-lg">
                Confiez-nous vos flux, nous nous occupons du reste avec une précision chirurgicale.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone, val: '+225 05 44 98 39 93' },
                  { icon: Mail, val: 'contact@SkyWay Technologies-group.com' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-white transition-all duration-300">
                      <item.icon className="w-5 h-5 text-white group-hover:text-[#318ce7]" />
                    </div>
                    <p className="font-bold text-sm tracking-wide">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulaire Épuré */}
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-2xl border border-white">
              <h3 className="text-[#318ce7] font-black text-2xl mb-8 tracking-tight">Devis instantané</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Entreprise</label>
                    <input type="text" placeholder="SkyWay Technologies Solutions" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#318ce7] focus:bg-white outline-none font-bold text-xs transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Email</label>
                    <input type="email" placeholder="pro@domaine.com" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#318ce7] focus:bg-white outline-none font-bold text-xs transition-all" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Type de Fret</label>
                  <input type="text" placeholder="Maritime, Routier, Aérien..." className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#318ce7] focus:bg-white outline-none font-bold text-xs transition-all" />
                </div>
                <button className="w-full py-5 mt-4 bg-orange-500 text-white rounded-2xl font-black text-sm hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 group">
                  Calculer mon tarif
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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