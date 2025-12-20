import React, { useState, useEffect } from 'react';
import { 
  Award, Target, Users, Lightbulb, 
  Rocket, ShieldCheck, Activity, ChevronRight, 
  Bus, Database, Code2, MapPin 
} from 'lucide-react';

// Import Firebase
import { db } from '../services/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  // --- ÉCOUTE TEMPS RÉEL DES PARTENAIRES ---
  useEffect(() => {
    const q = query(collection(db, "partners"), orderBy("name"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const partnersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Partner[];
      
      setPartners(partnersData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO : L'ALLIANCE URBAINE & DIGITALE --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-10"
            alt="Urban Mobility background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#318ce7] text-[10px] font-black uppercase border border-blue-100 shadow-sm">
                <Activity className="w-3 h-3 text-orange-500" /> SkyWay Technologies : Hub Multiservices
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-[1.1]">
                L'intelligence <br />
                <span className="text-orange-500 underline decoration-blue-100 decoration-8 underline-offset-8">urbaine & data.</span>
              </h1>
              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                SkyWay Technologies est née d'une vision hybride : fluidifier la mobilité urbaine communale tout en offrant aux entreprises des solutions logicielles de pointe basées sur un cycle Big Data complet.
              </p>
              <div className="flex gap-4">
                <div className="px-5 py-4 bg-slate-50 border-l-4 border-[#318ce7] rounded-r-2xl shadow-sm">
                   <p className="font-black text-slate-700 text-sm italic">"Connecter les citoyens, propulser les entreprises."</p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-gradient-to-br from-[#318ce7] to-blue-800 rounded-[3.5rem] shadow-2xl overflow-hidden border-8 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  alt="Tech and Transport"
                />
                <div className="absolute inset-0 bg-[#003366]/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                   <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl mb-6">
                      <Rocket className="w-12 h-12 text-orange-400 group-hover:animate-bounce" />
                   </div>
                   <p className="text-2xl font-black tracking-tight leading-tight">Catalyseur de <br/>modernité urbaine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSIONS (La Dualité) --- */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 group hover:border-[#318ce7]/30 transition-all">
              <div className="w-16 h-16 bg-blue-50 text-[#318ce7] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#318ce7] group-hover:text-white transition-all shadow-inner">
                <Bus className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Mobilité Communale</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Opérer des réseaux de transport urbain intelligents pour désengorger les villes et offrir un service de mobilité fiable et moderne aux citoyens.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-100 group hover:border-orange-500/30 transition-all">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-inner">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Ingénierie Logicielle</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Développer des applications métiers et des infrastructures Big Data complexes pour transformer les données brutes en décisions stratégiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHIFFRES CLÉS --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Experts Data & Dev', val: '25+', icon: Code2 },
              { label: 'Communes Desservies', val: '12', icon: MapPin },
              { label: 'Solutions Enterprise', val: '50+', icon: Target },
              { label: 'Flux Big Data (To)', val: '100+', icon: Activity },
            ].map((stat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-slate-100/50 text-center hover:-translate-y-2 transition-all group">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-50 transition-colors">
                  <stat.icon className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-4xl font-black text-[#318ce7] mb-1">{stat.val}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTENAIRES --- */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-10">
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Notre Écosystème</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Communes partenaires et leaders technologiques</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[#318ce7]">
              <Users className="w-10 h-10 opacity-20" />
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#318ce7]"></div>
            </div>
          ) : partners.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-6 opacity-50" />
              <p className="text-gray-500 text-lg font-semibold max-w-lg mx-auto">
                Extension de notre réseau en cours...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center"
                >
                  <div className="w-28 h-28 mb-8 flex justify-center items-center bg-slate-50 rounded-3xl group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4 shadow-inner">
                    {partner.logo.startsWith('http') ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-5xl">{partner.logo}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#318ce7] transition-colors">{partner.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">{partner.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;