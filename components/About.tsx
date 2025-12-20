import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-sws-orange/10 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/600?image=1033" 
                alt="Equipe SWS au travail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sws-blue/80 to-transparent flex items-end p-8">
                <p className="text-white font-medium italic">"L'innovation est notre moteur, la satisfaction client notre destination."</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sws-orange font-bold uppercase text-sm mb-2">À Propos de SWS</h2>
            <h3 className="text-4xl font-bold text-sws-blue mb-6">Plus qu'un prestataire, un partenaire de croissance.</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Fondée sur la conviction que la logistique moderne ne peut exister sans intelligence des données, SWS fusionne deux mondes souvent séparés. 
              Nos équipes d'ingénieurs en IA travaillent main dans la main avec nos experts logistiques pour offrir des solutions fluides, économiques et prédictives.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Flotte de 150+ véhicules connectés.",
                "Centre de données sécurisé Tier III.",
                "Support client disponible 24/7.",
                "Engagement écologique : -30% d'émissions d'ici 2026."
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sws-orange flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <span className="block text-3xl font-bold text-sws-blue">10+</span>
                <span className="text-sm text-gray-500">Années d'expérience</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-sws-blue">5k+</span>
                <span className="text-sm text-gray-500">Missions réussies</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-sws-blue">98%</span>
                <span className="text-sm text-gray-500">Satisfaction Client</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;