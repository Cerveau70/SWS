import React from 'react';
import { 
  Bus, Map, Users, Settings, 
  MapPin, Phone, Mail, ArrowRight, 
  CheckCircle2, Navigation, Sparkles, 
  Database, Zap, ChevronRight, Code2 
} from 'lucide-react';

const TransportPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO SECTION : LA VILLE CONNECTÉE --- */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-5"
            alt="Urban Mobility Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
        </div>

        {/* Grille technique superposée */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#318ce705_1px,transparent_1px),linear-gradient(to_bottom,#318ce705_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* CÔTÉ GAUCHE : TEXTE STRATÉGIQUE */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 backdrop-blur-sm text-[#318ce7] text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                <Sparkles className="w-3 h-3 text-orange-500" />
                Mobilité Urbaine & Ingénierie Data
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-[1.05]">
                Le transport, <br />
                <span className="text-orange-500 relative">
                  citoyen & intelligent.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#318ce720]" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" /></svg>
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
                SkyWay Technologies opère vos <span className="text-slate-900 font-bold">lignes urbaines communales</span> avec une précision chirurgicale, boostée par un écosystème Big Data de pointe.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#318ce7] text-white rounded-2xl font-black text-sm hover:bg-[#2671ba] transition-all shadow-xl shadow-blue-400/20 flex items-center gap-2 group">
                  Lancer un partenariat communal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* STATS URBAN TECH */}
              <div className="flex gap-8 pt-8 border-t border-slate-200/50">
                {[
                  { val: '12+', label: 'Communes', icon: MapPin },
                  { val: '24h/7', label: 'Monitoring', icon: Zap },
                  { val: 'Data', label: 'Driven', icon: CheckCircle2 }
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

            {/* CÔTÉ DROIT : VISUEL "SMART BUS" */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute -inset-10 bg-gradient-to-tr from-[#318ce710] to-orange-100/30 rounded-full blur-[80px] animate-pulse" />
                
                <div className="relative h-full w-full bg-white/80 backdrop-blur-md rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] border border-white flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(#318ce710_1.5px,transparent_1.5px)] bg-[size:30px_30px]" />
                  
                  <Bus className="w-40 h-40 text-[#318ce7] group-hover:scale-110 transition-transform duration-700 relative z-10" />
                  
                  {/* Badges Flottants */}
                  <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 animate-bounce cursor-default">
                    <Database className="w-5 h-5 text-orange-500" />
                    <span className="text-[10px] font-black text-[#318ce7]">Pipeline Big Data Actif</span>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                      <Navigation className="w-6 h-6 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">Traçabilité</p>
                      <p className="text-[#318ce7] font-black text-sm text-nowrap">Réseau Communal SkyWay</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES : LE DOUBLE PÔLE --- */}
      <section className="py-24 relative bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-black uppercase text-xs tracking-widest mb-3">Nos Services Mobilité & Tech</h2>
            <h3 className="text-3xl font-black text-[#318ce7]">L'expertise multiservice de SkyWay</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Bus, title: 'Lignes Communales', desc: 'Gestion complète et optimisation de réseaux de transport urbain.' },
              { icon: Map, title: 'Optimisation Itinéraires', desc: 'Algorithmes de routage pour réduire le temps d\'attente usager.' },
              { icon: Code2, title: 'Logiciels Métiers', desc: 'Développement d\'ERP et d\'applications mobiles enterprise sur-mesure.' },
              { icon: Users, title: 'Gestion Passagers', desc: 'Systèmes de billetterie et suivi de flux en temps réel.' },
            ].map((service, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-[#318ce7] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 shadow-sm">
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

      {/* --- CONTACT / DEVIS : POUR LES COLLECTIVITÉS & ENTREPRISES --- */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto bg-[#003366] rounded-[4rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl border-8 border-white">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full -mr-64 -mt-64 blur-[120px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter">
                Accélérez votre <br />
                <span className="text-orange-400">digitalisation urbaine.</span>
              </h2>
              <p className="text-blue-100 font-medium max-w-sm text-lg">
                Que vous soyez une mairie ou une entreprise, nous transformons vos flux physiques en opportunités numériques.
              </p>
              <div className="space-y-4 pt-4 border-t border-white/10">
                {[
                  { icon: Phone, val: '+225 05 44 98 39 93' },
                  { icon: Mail, val: 'contact@skyway-tech.com' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-white transition-all duration-300">
                      <item.icon className="w-5 h-5 text-white group-hover:text-[#003366]" />
                    </div>
                    <p className="font-bold text-sm tracking-wide">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulaire Multiservice */}
            <div className="bg-white/95 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-2xl border border-white">
              <h3 className="text-[#318ce7] font-black text-2xl mb-8 tracking-tight">Audit & Devis Express</h3>
              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Type d'entité</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-xs">
                    <option>Commune / Mairie</option>
                    <option>Entreprise Privée</option>
                    <option>Institution publique</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Pôle concerné</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-xs">
                    <option>Transport Urbain & Mobilité</option>
                    <option>Ingénierie Logicielle / Big Data</option>
                    <option>Audit Multiservice</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Email Pro</label>
                  <input type="email" placeholder="contact@votre-structure.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-xs" />
                </div>
                <button className="w-full py-5 mt-4 bg-orange-500 text-white rounded-2xl font-black text-sm hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 group">
                  Lancer l'étude de faisabilité
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