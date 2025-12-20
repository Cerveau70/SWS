import React from 'react';
import { Truck, Globe, PackageCheck, ShieldCheck, Database, Bot, BarChart3, Lock } from 'lucide-react';

const transportFeatures = [
  { title: 'Fret International', description: 'Solutions routières, maritimes et aériennes optimisées.', icon: Globe },
  { title: 'Dernier Kilomètre', description: 'Logistique urbaine agile et écologique.', icon: Truck },
  { title: 'Logistique Contractuelle', description: 'Gestion d\'entrepôt et préparation de commandes.', icon: PackageCheck },
  { title: 'Transport Sécurisé', description: 'Flotte surveillée 24/7 pour marchandises sensibles.', icon: ShieldCheck },
];

const dataFeatures = [
  { title: 'Big Data Analytics', description: 'Transformation de vos données brutes en insights stratégiques.', icon: Database },
  { title: 'IA Générative', description: 'Solutions LLM sur mesure pour automatiser vos processus.', icon: Bot },
  { title: 'Prédiction des Ventes', description: 'Modèles prédictifs pour optimiser vos stocks.', icon: BarChart3 },
  { title: 'Cyber Sécurité', description: 'Protection avancée de vos infrastructures numériques.', icon: Lock },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-orange-500 font-black tracking-[0.2em] uppercase text-xs mb-4">Nos Domaines d'Excellence</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#318ce7] leading-tight">Une Double Expertise Unique</h3>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Nous ne transportons pas seulement vos produits, nous propulsons votre entreprise vers le futur grâce à la donnée.
          </p>
        </div>

        {/* Transport Section */}
        <div id="transport" className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100">
              <Truck className="w-6 h-6 text-orange-500" />
            </div>
            <h4 className="text-2xl font-black text-[#318ce7]">Pôle Transport & Logistique</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 group hover:border-orange-500/30 transition-all">
                <feature.icon className="w-8 h-8 text-[#318ce7] mb-5 group-hover:scale-110 transition-transform" />
                <h5 className="text-lg font-black text-slate-800 mb-2">{feature.title}</h5>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IT Data Section */}
        <div id="data">
          <div className="flex items-center gap-4 mb-10 lg:justify-end">
            <div className="lg:text-right">
              <h4 className="text-2xl font-black text-[#318ce7]">Pôle Informatique & IA</h4>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
              <Bot className="w-6 h-6 text-[#318ce7]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataFeatures.map((feature, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-800 group hover:border-[#318ce7]/50 transition-all">
                <feature.icon className="w-8 h-8 text-blue-400 mb-5 group-hover:scale-110 transition-transform" />
                <h5 className="text-lg font-black text-white mb-2">{feature.title}</h5>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;