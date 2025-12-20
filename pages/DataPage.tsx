import React from 'react';
import { Database, Brain, BarChart3, Lock, Zap, Users, Mail, Phone, MapPin } from 'lucide-react';

const DataPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-sws-blue to-sws-blueLight text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-bold mb-4">Intelligence Artificielle & Big Data</h1>
          <p className="text-xl text-white/90">Transformez vos données en insights stratégiques avec nos solutions IA et analytics avancées.</p>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-sws-blue">Nos Solutions IA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Brain, title: 'Apprentissage Automatique', desc: 'Modèles ML sur mesure pour prédiction, classification et segmentation client.' },
            { icon: Database, title: 'Data Warehouse', desc: 'Infrastructure scalable pour consolidation et exploration de vos données.' },
            { icon: BarChart3, title: 'Analytics Avancée', desc: 'Tableaux de bord temps réel et rapports décisionnels personnalisés.' },
            { icon: Zap, title: 'Automatisation IA', desc: 'RPA et workflows intelligents pour optimiser vos processus.' },
          ].map((service, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow">
              <service.icon className="w-10 h-10 text-sws-orange mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-sws-blue">Avantages Technologiques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-sws-orange mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Sécurité & Conformité</h4>
                <p className="text-gray-600">RGPD, ISO 27001, chiffrement end-to-end pour vos données sensibles.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-sws-orange mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Performance Scalable</h4>
                <p className="text-gray-600">Cloud natif pour traitement de millions de requêtes par seconde.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-sws-orange mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Support Expert</h4>
                <p className="text-gray-600">Équipe data scientists et ML engineers à votre écoute 24/7.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BarChart3 className="w-6 h-6 text-sws-orange mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">ROI Mesurable</h4>
                <p className="text-gray-600">Gains d'efficacité documentés : 30-50% réduction de coûts opérationnels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case studies */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-sws-blue">Cas d'Usage</h2>
        <div className="space-y-6">
          {[
            { sector: 'Retail', result: 'Prédiction de demande : +25% d\'optimisation stock' },
            { sector: 'Finance', result: 'Détection fraude : 98% de précision, perte zéro' },
            { sector: 'Supply Chain', result: 'Routage IA : -20% coûts transport' },
            { sector: 'E-commerce', result: 'Recommandations IA : +40% conversion' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 border-l-4 border-sws-orange">
              <h4 className="font-bold text-lg text-sws-blue">{item.sector}</h4>
              <p className="text-gray-700">{item.result}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-sws-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Parlons de vos données</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Téléphone</h4>
                <p className="text-white/90">+33 (0)1 XX XX XX XX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-white/90">data@sws.fr</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Adresse</h4>
                <p className="text-white/90">Paris, France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DataPage;
