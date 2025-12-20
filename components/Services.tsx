import React, { useState } from 'react';
import { Truck, Globe, PackageCheck, ShieldCheck, Database, Bot, BarChart3, Lock, UploadCloud } from 'lucide-react';
import { ServiceFeature } from '../types';

const transportFeatures: ServiceFeature[] = [
  { title: 'Fret International', description: 'Solutions routières, maritimes et aériennes optimisées.', icon: Globe },
  { title: 'Dernier Kilomètre', description: 'Logistique urbaine agile et écologique.', icon: Truck },
  { title: 'Logistique Contractuelle', description: 'Gestion d\'entrepôt et préparation de commandes.', icon: PackageCheck },
  { title: 'Transport Sécurisé', description: 'Flotte surveillée 24/7 pour marchandises sensibles.', icon: ShieldCheck },
];

const dataFeatures: ServiceFeature[] = [
  { title: 'Big Data Analytics', description: 'Transformation de vos données brutes en insights stratégiques.', icon: Database },
  { title: 'IA Générative', description: 'Solutions LLM sur mesure pour automatiser vos processus.', icon: Bot },
  { title: 'Prédiction des Ventes', description: 'Modèles prédictifs pour optimiser vos stocks.', icon: BarChart3 },
  { title: 'Cyber Sécurité', description: 'Protection avancée de vos infrastructures numériques.', icon: Lock },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sws-orange font-bold tracking-wide uppercase text-sm mb-2">Nos Domaines d'Excellence</h2>
          <h3 className="text-4xl font-bold text-sws-blue">Une Double Expertise Unique</h3>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Nous ne nous contentons pas de transporter vos produits, nous transportons votre entreprise vers le futur grâce à la donnée.
          </p>
        </div>

        {/* Transport Section */}
        <div id="transport" className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-sws-orange/10 rounded-full">
              <Truck className="w-8 h-8 text-sws-orange" />
            </div>
            <h4 className="text-3xl font-bold text-sws-blue">Pôle Transport & Logistique</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportFeatures.map((feature, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-slate-100 group">
                <feature.icon className="w-10 h-10 text-sws-blue mb-4 group-hover:text-sws-orange transition-colors" />
                <h5 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h5>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IT Data Section */}
        <div id="data">
          <div className="flex items-center gap-4 mb-10 justify-end">
            <div className="text-right">
              <h4 className="text-3xl font-bold text-sws-blue">Pôle Informatique & IA</h4>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataFeatures.map((feature, idx) => (
              <div key={idx} className="bg-slate-900 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-900/20 transition-all border border-slate-800 group">
                <feature.icon className="w-10 h-10 text-white mb-4 group-hover:text-blue-400 transition-colors" />
                <h5 className="text-xl font-bold text-white mb-2">{feature.title}</h5>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;