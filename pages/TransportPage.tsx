import React from 'react';
import { Truck, Globe, PackageCheck, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

const TransportPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero section */}
      <div className="bg-sws-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-bold mb-4">Expertise Transport & Logistique</h1>
          <p className="text-xl text-white/90">Solutions complètes pour vos besoins de transport multimodal et logistique sécurisée.</p>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-sws-blue">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: Globe, title: 'Fret International', desc: 'Solutions routières, maritimes et aériennes optimisées pour vos exports.' },
            { icon: Truck, title: 'Dernier Kilomètre', desc: 'Logistique urbaine agile et écologique pour la livraison finale.' },
            { icon: PackageCheck, title: 'Logistique Contractuelle', desc: 'Gestion complète d\'entrepôt et préparation de commandes.' },
            { icon: ShieldCheck, title: 'Transport Sécurisé', desc: 'Flotte surveillée 24/7 pour marchandises sensibles et précieuses.' },
          ].map((service, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-lg border border-slate-100 hover:shadow-lg transition-shadow">
              <service.icon className="w-10 h-10 text-sws-orange mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages */}
      <div className="bg-sws-blueLight text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Avantages SWS</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ Couverture internationale avec partenaires fiables</li>
            <li>✓ Suivi temps réel de vos expéditions</li>
            <li>✓ Assurance complète et gestion des sinistres</li>
            <li>✓ Coûts optimisés grâce à l'IA et l'analyse des flux</li>
          </ul>
        </div>
      </div>

      {/* Contact section */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-sws-blue">Contactez notre équipe Transport</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-sws-orange mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold mb-1">Téléphone</h4>
              <p className="text-gray-600">+33 (0)1 XX XX XX XX</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-sws-orange mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold mb-1">Email</h4>
              <p className="text-gray-600">transport@sws.fr</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-sws-orange mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold mb-1">Adresse</h4>
              <p className="text-gray-600">Paris, France</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TransportPage;
