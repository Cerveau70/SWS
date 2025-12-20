import React from 'react';
import { 
  Database, Brain, BarChart3, Lock, Zap, Users, Mail, 
  Phone, MapPin, TrendingUp, Sparkles, Cpu, ArrowRight 
} from 'lucide-react';

const DataPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        {/* Grillage en arrière-plan plus visible pour briser le blanc pur */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#318ce70a_1px,transparent_1px),linear-gradient(to_bottom,#318ce70a_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#318ce7] text-sm font-bold mb-8 border border-[#318ce720]">
                <Sparkles className="w-4 h-4 text-orange-500" />
                Intelligence Artificielle & Big Data
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-tight mb-6">
                L'IA qui décode <br />
                <span className="text-orange-500">vos données.</span>
              </h1>
              <p className="text-xl text-slate-700 mb-10 leading-relaxed max-w-xl font-medium">
                Transformez vos données brutes en décisions stratégiques. Nous créons des modèles sur-mesure pour automatiser vos processus et doper votre croissance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#318ce7] text-white rounded-2xl font-bold hover:bg-[#2671ba] transition-all shadow-lg shadow-blue-400/30 flex items-center gap-2 group">
                  Démarrer un projet
                  <Cpu className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                </button>
                <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-[#318ce7] hover:text-[#318ce7] transition-all">
                  Voir les cas d'usage
                </button>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Effet de lueur bleue derrière l'icône */}
                <div className="absolute inset-0 bg-[#318ce720] rounded-full animate-pulse blur-3xl" />
                <div className="relative bg-white border border-slate-100 rounded-[3rem] p-12 shadow-2xl flex items-center justify-center overflow-hidden group">
                  <Brain className="w-48 h-48 text-[#318ce7] relative z-10 group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Éléments flottants orange et bleus */}
                  <div className="absolute top-10 right-10 bg-orange-500 p-4 rounded-2xl shadow-lg shadow-orange-500/20">
                    <BarChart3 className="text-white w-6 h-6" />
                  </div>
                  <div className="absolute bottom-10 left-10 bg-[#318ce7] p-4 rounded-2xl shadow-lg shadow-blue-500/20">
                    <Database className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS SECTION (Fond Gris très léger pour contraste) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Expertise SWS</h2>
              <p className="text-4xl font-black text-[#318ce7]">Nos piliers technologiques</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Brain, title: 'Machine Learning', desc: 'Développement de modèles prédictifs haute précision pour anticiper les tendances.' },
              { icon: Database, title: 'Data Architecture', desc: 'Infrastructures cloud scalables pour une gestion fluide de volumes massifs.' },
              { icon: BarChart3, title: 'Business Intelligence', desc: 'Visualisation de données en temps réel pour un pilotage réactif.' },
              { icon: Zap, title: 'IA Générative', desc: 'Automatisation intelligente des flux de travail pour booster la productivité.' },
            ].map((service, idx) => (
              <div key={idx} className="group bg-white p-10 rounded-3xl border border-slate-200 hover:border-[#318ce7] hover:shadow-xl transition-all duration-300 flex items-start gap-8">
                <div className="p-5 rounded-2xl bg-blue-50 text-[#318ce7] group-hover:bg-[#318ce7] group-hover:text-white transition-all shadow-sm">
                  <service.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#318ce7] transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPACT SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-black text-[#318ce7] mb-6 leading-tight">Des résultats <br />mesurables.</h2>
              <p className="text-slate-700 text-lg mb-8 font-medium italic">"La donnée n'a de valeur que si elle se transforme en profit."</p>
              <button className="flex items-center gap-2 text-orange-500 font-extrabold hover:translate-x-2 transition-all">
                Voir toutes nos études de cas <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { sector: 'Retail', result: '+25%', label: 'Optimisation des stocks', metric: 'Prédiction' },
                { sector: 'Finance', result: '98%', label: 'Détection de fraude', metric: 'IA Temps Réel' },
                { sector: 'Logistique', result: '-20%', label: 'Économie de carburant', metric: 'Routage' },
                { sector: 'E-commerce', result: '+40%', label: 'Taux de conversion', metric: 'Recommandation' },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] border border-slate-200 bg-white hover:border-[#318ce7] hover:shadow-2xl transition-all group">
                  <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">{item.sector}</p>
                  <p className="text-sm text-slate-500 font-bold mb-4">{item.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-[#318ce7]">{item.result}</span>
                    <span className="text-slate-400 font-bold text-sm">via {item.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#318ce7] rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-400/40">
          {/* Cercles de décoration pour casser le bleu uni */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl text-center lg:text-left text-white">
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Prêt à valoriser <br />vos données ?</h2>
              <p className="text-blue-50 text-lg mb-10 font-medium">Réservez une consultation gratuite avec l'un de nos ingénieurs Data.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-lg">+2250544983993</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-lg">wongnigaseydous@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-black/10">
              <h3 className="text-[#318ce7] font-black text-2xl mb-8">Nous contacter</h3>
              <div className="space-y-5">
                <input type="text" placeholder="Entreprise" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-medium" />
                <input type="email" placeholder="Email professionnel" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-medium" />
                <textarea placeholder="Décrivez votre besoin..." rows={3} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-[#318ce7] outline-none font-medium resize-none" />
                <button className="w-full py-5 bg-orange-500 text-white rounded-xl font-black text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
                  Lancer l'analyse
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DataPage;