import React from 'react';
import { Database, Brain, BarChart3, Zap, Mail, Phone, Sparkles, Cpu, ArrowRight, ChevronRight, Shield } from 'lucide-react';

const DataPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO SECTION AVEC OVERLAY --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.07]"
            alt="Data center background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 backdrop-blur-sm text-[#318ce7] text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                <Sparkles className="w-3 h-3 text-orange-500" />
                IA & Big Data Lab
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-[1.05]">
                L'IA qui décode <br />
                <span className="text-orange-500 relative">vos données.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
                Transformez vos flux d'informations en décisions stratégiques. Nos modèles sur-mesure automatisent votre croissance.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-[#318ce7] text-white rounded-2xl font-black text-sm hover:bg-[#2671ba] transition-all shadow-xl shadow-blue-400/20 flex items-center gap-2 group">
                  Démarrer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-square bg-white/80 backdrop-blur-md border border-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#318ce710_1.5px,transparent_1.5px)] bg-[size:20px_20px]" />
                <Brain className="w-32 h-32 text-[#318ce7] group-hover:scale-110 transition-transform duration-700 relative z-10" />
                <div className="absolute top-8 right-8 bg-white p-3 rounded-2xl shadow-lg border border-slate-50 animate-bounce"><BarChart3 className="text-orange-500 w-6 h-6" /></div>
                <div className="absolute bottom-8 left-8 bg-white p-3 rounded-2xl shadow-lg border border-slate-50"><Database className="text-[#318ce7] w-6 h-6" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS (P'tits Cadres Bijoux) --- */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'Machine Learning', desc: 'Modèles prédictifs pour anticiper vos tendances.' },
              { icon: Cpu, title: 'Data Architecture', desc: 'Infrastructures cloud scalables et fluides.' },
              { icon: BarChart3, title: 'Analytics', desc: 'Visualisation temps réel pour pilotage réactif.' },
              { icon: Shield, title: 'Cybersécurité', desc: 'Protection de vos actifs numériques stratégiques.' },
            ].map((service, idx) => (
              <div key={idx} className="group bg-white p-7 rounded-2xl border border-slate-100 hover:border-[#318ce7] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#318ce7] transition-colors">
                  <service.icon className="w-5 h-5 text-[#318ce7] group-hover:text-white" />
                </div>
                <h3 className="text-md font-black text-slate-800 mb-2">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-xs">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#318ce7] to-[#1e5692] rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-white">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6">Prêt à valoriser <br />vos données ?</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><Phone className="w-5 h-5 text-orange-400" /><span className="font-bold text-sm">+225 05 44 98 39 93</span></div>
                <div className="flex items-center gap-4"><Mail className="w-5 h-5 text-orange-400" /><span className="font-bold text-sm">wongnigaseydous@gmail.com</span></div>
              </div>
            </div>
            <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-2xl border border-white text-slate-800">
              <form className="space-y-4">
                <input type="text" placeholder="Entreprise" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-xs" />
                <input type="email" placeholder="Email pro" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-xs" />
                <button className="w-full py-5 mt-4 bg-orange-500 text-white rounded-2xl font-black text-sm hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group">
                  Lancer l'analyse <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DataPage;