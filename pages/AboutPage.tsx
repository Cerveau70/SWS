import React, { useState, useEffect } from 'react';
import { Award, Target, Users, Lightbulb, CheckCircle, Rocket, ShieldCheck, BarChart, Star, Activity, ChevronRight, Plus, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [partners, setPartners] = useState<Array<{ id: string; name: string; logo: string; description: string }>>([]);

  useEffect(() => {
    const savedPartners = localStorage.getItem('sws_partners');
    if (savedPartners) {
      setPartners(JSON.parse(savedPartners));
    }
  }, []);
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO AVEC IMAGE COLLABORATIVE --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-5"
            alt="Team background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#318ce7] text-[10px] font-black uppercase border border-blue-100">
                <Activity className="w-3 h-3 text-orange-500" /> Innovation SkyWay Technologies
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-tight">
                L'intelligence <br />
                <span className="text-orange-500">en partage.</span>
              </h1>
              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                SkyWay Technologies est née d'une vision : supprimer la barrière entre le transport physique et l'analyse de données. Nous construisons le futur de la logistique, un algorithme à la fois.
              </p>
              <div className="flex gap-4">
                <div className="px-5 py-4 bg-slate-50 border-l-4 border-orange-500 rounded-r-2xl shadow-sm">
                   <p className="font-black text-[#318ce7] text-sm italic">"Donner du sens au mouvement."</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-gradient-to-br from-[#318ce7] to-blue-700 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                   <Rocket className="w-16 h-16 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
                   <p className="text-xl font-bold italic">Piloter le changement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALEURS (Cadres Modérés) --- */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 text-[#318ce7] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#318ce7] group-hover:text-white transition-all">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#318ce7] mb-4">Notre Mission</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Simplifier la supply chain mondiale en connectant chaque actif physique à un cerveau numérique ultra-performant.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 group">
              <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#318ce7] mb-4">Notre Vision</h3>
              <p className="text-slate-600 font-medium leading-relaxed">Devenir le partenaire indispensable de toute entreprise souhaitant transformer sa logistique en levier de profit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHIFFRES CLÉS (P'tits Bijoux) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Experts IA', val: '45', icon: ShieldCheck },
              { label: 'Clients B2B', val: '200+', icon: Users },
              { label: 'Pays Couverts', val: '150', icon: Star },
              { label: 'Taux de Succès', val: '99%', icon: Activity },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-slate-100 text-center hover:-translate-y-2 transition-all group">
                <stat.icon className="w-6 h-6 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-black text-[#318ce7] mb-1">{stat.val}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DISTINCTIONS --- */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-center text-3xl font-black text-[#318ce7] mb-12">Nos Engagements</h2>
          <div className="space-y-4">
            {[
              { title: 'Innovation Technologique 2024', org: 'Silicon Valley Awards', icon: Award },
              { title: 'Certification ISO 27001', org: 'Security Standard', icon: ShieldCheck },
              { title: 'Engagement Carbone Zéro', org: 'Green Logistics', icon: Star },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-[#318ce750] transition-colors">
                <div className="flex items-center gap-5">
                  <item.icon className="w-6 h-6 text-orange-500" />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.org}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTENAIRES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-[#318ce7] mb-2">Nos Partenaires</h2>
              <p className="text-gray-600 font-medium">Les acteurs clés de notre écosystème</p>
            </div>
            <a
              href="/admin/login"
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20"
            >
              <Plus className="w-5 h-5" />
              Ajouter
            </a>
          </div>

          {partners.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-6" />
              <p className="text-gray-500 text-lg mb-6 font-medium max-w-lg mx-auto">
                Aucun partenaire pour le moment. Connectez-vous à l'espace admin pour en ajouter.
              </p>
              <a
                href="/admin/login"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#318ce7] hover:bg-[#2671ba] text-white font-bold rounded-xl transition-all"
              >
                <Shield className="w-5 h-5" />
                Aller à l'Admin
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#318ce7] transition-all group"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{partner.logo}</div>
                  <h3 className="text-xl font-bold text-[#318ce7] mb-3 group-hover:text-orange-500 transition-colors">{partner.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;