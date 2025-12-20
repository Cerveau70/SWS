import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#318ce7]/5 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/800/600?image=1033" 
                alt="Equipe SWS" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-bold italic">"L'innovation est notre moteur, la satisfaction client notre destination."</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-orange-500 font-black uppercase text-xs tracking-widest mb-4">À Propos de SWS</h2>
            <h3 className="text-4xl font-black text-[#318ce7] mb-6 leading-tight">Plus qu'un prestataire, un partenaire de croissance.</h3>
            <p className="text-slate-600 mb-8 text-lg font-medium leading-relaxed">
              SWS fusionne deux mondes : le transport physique et l'intelligence des données. 
              Nos ingénieurs IA collaborent avec nos experts logistiques pour offrir des solutions fluides, économiques et prédictives.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "150+ véhicules connectés",
                "Data Center Tier III",
                "Support Expert 24/7",
                "Émissions réduites de 30%"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                  <span className="text-slate-800 font-bold text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-8 pt-8 border-t border-slate-200">
              <div className="text-left">
                <span className="block text-3xl font-black text-[#318ce7]">10+</span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">Ans d'expérience</span>
              </div>
              <div className="text-left">
                <span className="block text-3xl font-black text-[#318ce7]">5k+</span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">Missions réussies</span>
              </div>
              <div className="text-left">
                <span className="block text-3xl font-black text-orange-500">98%</span>
                <span className="text-xs font-black text-slate-400 uppercase tracking-tighter">Satisfaction</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;