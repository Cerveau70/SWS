import React from 'react';
import { 
  Database, Code2, LayoutDashboard, Zap, 
  Mail, Phone, Sparkles, Cpu, ArrowRight, 
  ChevronRight, ShieldCheck, BarChart 
} from 'lucide-react';

const DataPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO SECTION : L'INGÉNIERIE DE PRÉCISION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-[0.05]"
            alt="Circuit board background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 backdrop-blur-sm text-[#318ce7] text-[10px] font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                <Sparkles className="w-3 h-3 text-orange-500" />
                Engineering & Data Hub
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-[1.05]">
                Digitalisez votre <br />
                <span className="text-orange-500 relative">entreprise.</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg font-medium">
                SkyWay Technologies déploie un cycle complet de <span className="text-[#318ce7] font-bold">Big Data</span> pour concevoir des applications métiers robustes et des solutions d'entreprise évolutives.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-[#318ce7] text-white rounded-2xl font-black text-sm hover:bg-[#2671ba] transition-all shadow-xl shadow-blue-400/20 flex items-center gap-2 group">
                  Lancer un projet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Illustration Graphique Moderne */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-square bg-white/80 backdrop-blur-md border border-white rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#318ce710_1.5px,transparent_1.5px)] bg-[size:24px_24px]" />
                <div className="p-10 bg-blue-50 rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105">
                   <Code2 className="w-32 h-32 text-[#318ce7]" />
                </div>
                {/* Petits badges flottants */}
                <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-bounce">
                  <BarChart className="text-orange-500 w-6 h-6" />
                </div>
                <div className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-50">
                  <Database className="text-[#318ce7] w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS : CYCLE COMPLET DATA & DEV --- */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-widest mb-3">Nos Pôles Technologiques</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-[#318ce7]">Des solutions bâties sur la donnée</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: LayoutDashboard, 
                title: 'ERP & Logiciels Métiers', 
                desc: 'Digitalisation des processus internes pour une gestion centralisée et efficace.' 
              },
              { 
                icon: Database, 
                title: 'Architecture Big Data', 
                desc: 'Pipeline complet de collecte et traitement massif pour des décisions éclairées.' 
              },
              { 
                icon: Cpu, 
                title: 'Systèmes Scalables', 
                desc: 'Infrastructures Cloud conçues pour supporter la croissance de vos flux.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'Cybersécurité', 
                desc: 'Protection de bout en bout de vos applications et de vos actifs numériques.' 
              },
            ].map((service, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-[#318ce7]/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#318ce7] transition-colors shadow-inner">
                  <service.icon className="w-6 h-6 text-[#318ce7] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-black text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-xs">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA : CONTACT PROFESSIONNEL --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto bg-[#003366] rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl border-8 border-white">
          {/* Déco abstraite */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full -mr-64 -mt-64 blur-[120px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 text-white">
            <div className="max-w-lg">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-8">
                Prêt à moderniser <br />
                votre structure ?
              </h2>
              <p className="text-blue-100 mb-8 font-medium">
                Nos architectes logiciels vous accompagnent dans la définition de votre stratégie digitale.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-lg"><Phone className="w-5 h-5 text-orange-400" /></div>
                  <span className="font-bold text-sm">+225 05 44 98 39 93</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-lg"><Mail className="w-5 h-5 text-orange-400" /></div>
                  <span className="font-bold text-sm">contact@skyway-tech.com</span>
                </div>
              </div>
            </div>

            {/* Formulaire de Lead Rapide */}
            <div className="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl text-slate-800">
              <h4 className="text-xl font-black text-[#318ce7] mb-6">Demander un audit</h4>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nom de l'entreprise" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-xs transition-all" 
                />
                <input 
                  type="email" 
                  placeholder="Email professionnel" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-xs transition-all" 
                />
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-xs text-slate-500">
                  <option>Besoin logiciel principal</option>
                  <option>Développement ERP</option>
                  <option>Audit Big Data</option>
                  <option>Application Mobile</option>
                </select>
                <button className="w-full py-5 mt-4 bg-orange-500 text-white rounded-2xl font-black text-sm hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 group">
                  Lancer l'analyse <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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