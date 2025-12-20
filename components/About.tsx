import React from 'react';
import { CheckCircle2, Zap, BarChart, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- PARTIE VISUELLE (GAUCHE) --- */}
          <div className="relative">
            {/* Décoration d'arrière-plan */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#318ce7]/10 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl opacity-50"></div>
            
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
              <img 
                src="/img/datat.png" 
                alt="SkyWay Technologies Smart City" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay avec Citation */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/20 to-transparent flex items-end p-10">
                <div className="space-y-2">
                  <div className="w-12 h-1 bg-orange-500 mb-4"></div>
                  <p className="text-white text-xl lg:text-2xl font-bold italic leading-tight">
                    "Fluidifier la cité, optimiser l'entreprise par la puissance de la donnée."
                  </p>
                </div>
              </div>
            </div>

            {/* Badge Flottant */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
               <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Performance</p>
                    <p className="text-lg font-bold text-slate-900 text-nowrap">Temps Réel</p>
                  </div>
               </div>
            </div>
          </div>

          {/* --- PARTIE TEXTE (DROITE) --- */}
          <div className="space-y-8">
            <div>
              <h2 className="text-orange-500 font-black uppercase text-xs tracking-[0.3em] mb-4">À Propos de SkyWay Technologies</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-[#318ce7] mb-6 leading-[1.1]">
                L'architecte de vos flux <span className="text-slate-900">physiques</span> et <span className="text-slate-900">numériques</span>.
              </h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                SkyWay Technologies se positionne comme un acteur multiservices de référence. 
                D'un côté, nous opérons un réseau de <span className="text-slate-900 font-bold underline decoration-orange-500 decoration-2 underline-offset-4">transport urbain communal</span> de haute précision. 
                De l'autre, notre pôle ingénierie conçoit des <span className="text-[#318ce7] font-bold">solutions d'entreprise</span> sur-mesure, propulsées par une architecture Big Data robuste.
              </p>
            </div>

            {/* Liste de points clés */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: "Réseau urbain interconnecté", icon: Globe },
                { text: "Ingénierie logicielle Full-Stack", icon: BarChart },
                { text: "Analyse Big Data temps réel", icon: CheckCircle2 },
                { text: "Partenaire des collectivités", icon: CheckCircle2 }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  {typeof item.icon === 'string' ? (
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  ) : (
                    <item.icon className="w-5 h-5 text-orange-500 shrink-0" />
                  )}
                  <span className="text-slate-800 font-bold text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Statistiques / KPIs */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-200">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#318ce7]">24/7</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Service Urbain</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#318ce7]">100%</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Data Driven</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black text-orange-500">Hub</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Multiservice</span>
              </div>
            </div>

            {/* Bouton d'action optionnel */}
            <div className="pt-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-[#318ce7] transition-all shadow-xl shadow-slate-200">
                Découvrir notre vision
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;