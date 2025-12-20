import React from 'react';
import { 
  Award, Target, Users, Lightbulb, CheckCircle, 
  Rocket, ShieldCheck, BarChart, Star, Activity 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#318ce7] text-xs font-bold mb-6 border border-blue-100">
                <Activity className="w-3 h-3" />
                Innovation continue
              </div>
              <h1 className="text-4xl lg:text-6xl font-black text-[#318ce7] leading-tight mb-6">
                L'intelligence au service de la <span className="text-orange-500">Supply Chain.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                SWS fusionne l'expertise logistique et la puissance de l'IA pour créer un écosystème où chaque donnée génère de la valeur.
              </p>
              
              <div className="flex gap-4">
                <div className="px-4 py-3 bg-slate-50 border-l-4 border-orange-500 rounded-r-xl">
                  <p className="font-black text-[#318ce7]">Physique</p>
                  <p className="text-xs text-slate-500 italic">Transport & Logistique</p>
                </div>
                <div className="px-4 py-3 bg-slate-50 border-l-4 border-[#318ce7] rounded-r-xl">
                  <p className="font-black text-[#318ce7]">Numérique</p>
                  <p className="text-xs text-slate-500 italic">IA & Big Data</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-gradient-to-br from-[#318ce7] to-blue-600 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                <Users className="absolute -bottom-10 -right-10 w-48 h-48 text-white/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                   <Rocket className="w-16 h-16 text-orange-400 mb-6" />
                   <p className="text-white text-xl font-bold italic leading-snug">"Piloter le flux, <br/> ne jamais le subir."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION (Cadres Modérés) --- */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-[#318ce7] transition-all group">
              <div className="w-12 h-12 bg-blue-50 text-[#318ce7] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#318ce7] group-hover:text-white transition-all">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#318ce7] mb-4">Notre Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Transformer les contraintes logistiques en avantages compétitifs grâce à des algorithmes de routage intelligents.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-orange-500 transition-all group">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#318ce7] mb-4">Notre Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Devenir le standard de la supply chain durable en optimisant chaque kilomètre pour le bien du business et de la planète.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHIFFRES CLÉS (P'tits Cadres) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Experts Tech', val: '45', icon: ShieldCheck },
              { label: 'Projets IA', val: '120+', icon: BarChart },
              { label: 'Pays Connectés', val: '150', icon: Star },
              { label: 'Collaborateurs', val: '250', icon: Users },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100 text-center hover:translate-y-[-5px] transition-all">
                <stat.icon className="w-6 h-6 text-orange-500 mx-auto mb-3" />
                <p className="text-3xl font-black text-[#318ce7]">{stat.val}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AWARDS (Lignes Fines) --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#318ce7] mb-12 text-center">Nos Distinctions</h2>
          <div className="space-y-4">
            {[
              { title: 'Innovation Supply Chain 2023', org: 'France Tech', icon: Award },
              { title: 'Certification ISO 27001', org: 'Sécurité Data', icon: ShieldCheck },
              { title: 'Top 10 Logistique Européenne', org: 'EU Business', icon: Star },
            ].map((award, i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4">
                  <award.icon className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-bold text-slate-700 text-sm">{award.title}</p>
                    <p className="text-xs text-slate-400">{award.org}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#318ce7]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;