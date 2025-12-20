import React from 'react';
import { Award, Target, Users, Lightbulb, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero */}
      <div className="bg-sws-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-bold mb-4">À Propos de SWS</h1>
          <p className="text-xl text-white/90">L'alliance du physique et du numérique au service de votre supply chain</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-sws-orange" />
              <h2 className="text-2xl font-bold text-sws-blue">Notre Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Transformer le secteur du transport et de la logistique en intégrant l'intelligence artificielle et l'analyse de données avancée. Nous aidons les entreprises à optimiser leurs flux, réduire leurs coûts et accélérer leurs opérations.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-sws-orange" />
              <h2 className="text-2xl font-bold text-sws-blue">Notre Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Devenir le leader français des solutions intelligentes de supply chain, en créant un écosystème où la donnée et l'expertise transport convergent pour générer de la valeur durable et mesurable.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-sws-blue">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Excellence', desc: 'Nous livrons des solutions de qualité premium.' },
              { title: 'Innovation', desc: 'Nous investissons en R&D pour rester à la pointe.' },
              { title: 'Intégrité', desc: 'Nous opérons avec transparence et honnêteté.' },
              { title: 'Partnership', desc: 'Nous grandissons en partenariat avec nos clients.' },
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border-l-4 border-sws-orange">
                <h4 className="font-bold text-lg text-gray-900 mb-2">{val.title}</h4>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History/Timeline */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-12 text-sws-blue">Historique</h2>
        <div className="space-y-8">
          {[
            { year: '2020', title: 'Fondation', desc: 'Création de SWS avec la vision de moderniser la supply chain.' },
            { year: '2021', title: 'Expansion', desc: 'Ouverture du premier centre d\'expertise en IA et data analytics.' },
            { year: '2022', title: 'Croissance', desc: '+50 clients, 100+ collaborateurs, certification ISO 27001.' },
            { year: '2024', title: 'Leadership', desc: 'Reconnaissance comme leader innovation dans le transport-logistique.' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sws-orange text-white font-bold">
                  {item.year}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team highlight */}
      <div className="bg-sws-blueLight text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Notre Équipe</h2>
          </div>
          <p className="text-lg mb-6 text-white/90">
            120+ experts passionnés : ingénieurs transport, data scientists, consultants supply chain et développeurs full-stack. Tous animés par la même mission : l'excellence.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Logistique', 'Data Science', 'DevOps', 'Product'].map((dept, idx) => (
              <div key={idx} className="bg-white/10 p-4 rounded-lg text-center">
                <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                <p className="font-bold">{dept}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-sws-blue">Distinctions</h2>
        <div className="space-y-4">
          {[
            'Best Tech Startup 2023 - France Innovation',
            'Top 10 Supply Chain Solutions - European Business Review',
            'ISO 27001 Certifié - Sécurité information',
            'B-Corp Candidate - Impact social & environnemental',
          ].map((award, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
              <Award className="w-6 h-6 text-sws-orange flex-shrink-0" />
              <p className="text-gray-700 font-medium">{award}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
