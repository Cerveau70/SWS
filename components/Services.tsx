import React from 'react';
import { Bus, Map, Users, Settings, Database, Code2, LayoutDashboard, Share2 } from 'lucide-react';

const transportFeatures = [
  { title: 'Lignes Communales', description: 'Maillage complet du territoire pour un transport urbain fluide.', icon: Bus },
  { title: 'Optimisation de Trajets', description: 'Planification intelligente des circuits de transport commun.', icon: Map },
  { title: 'Mobilité Citoyenne', description: 'Solutions adaptées aux flux de passagers quotidiens.', icon: Users },
  { title: 'Gestion de Flotte', description: 'Maintenance prédictive et suivi temps réel des véhicules.', icon: Settings },
];

const dataFeatures = [
  { title: 'Pipeline Big Data', description: 'Collecte et traitement massif de données pour aide à la décision.', icon: Database },
  { title: 'Apps Mobiles & Web', description: 'Développement de solutions sur-mesure pour votre entreprise.', icon: Code2 },
  { title: 'ERP & Solutions Métiers', description: 'Digitalisation complète de vos processus administratifs.', icon: LayoutDashboard },
  { title: 'Interconnexion API', description: 'Systèmes communicants pour une infrastructure agile.', icon: Share2 },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-orange-500 font-black tracking-[0.2em] uppercase text-xs mb-4">Expertises Multiservices</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#318ce7] leading-tight">Transport Urbain & Ingénierie Data</h3>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            De la mobilité physique de vos usagers à la transformation digitale de votre structure, nous maîtrisons l'ensemble de la chaîne de valeur.
          </p>
        </div>

        {/* Transport Section */}
        <div id="transport" className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100">
              <Bus className="w-6 h-6 text-orange-500" />
            </div>
            <h4 className="text-2xl font-black text-[#318ce7]">Pôle Mobilité Urbaine</h4>
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
              <h4 className="text-2xl font-black text-[#318ce7]">Pôle Solutions Enterprise</h4>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
              <Database className="w-6 h-6 text-[#318ce7]" />
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