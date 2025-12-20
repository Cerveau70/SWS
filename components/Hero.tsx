import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Box, Cpu, Sparkles, ShieldCheck } from 'lucide-react';
import logisImg from '../img/asc.jpg';
import bigImg from '../img/bigdata.jpg';
import cardLogis from '../img/logis.jpg';
import cardBig from '../img/big.png';

const Typewriter: React.FC = () => {
  const fullText = 'Bougez vos Biens.\nValorisez vos Données.';
  const [len, setLen] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pause' | 'erasing'>('typing');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    if (phase === 'typing') {
      if (len < fullText.length) {
        timeoutRef.current = window.setTimeout(() => setLen(l => l + 1), 50);
      } else {
        timeoutRef.current = window.setTimeout(() => setPhase('pause'), 1500);
      }
    } else if (phase === 'pause') {
      timeoutRef.current = window.setTimeout(() => setPhase('erasing'), 1000);
    } else if (phase === 'erasing') {
      if (len > 0) {
        timeoutRef.current = window.setTimeout(() => setLen(l => l - 1), 30);
      } else {
        timeoutRef.current = window.setTimeout(() => setPhase('typing'), 500);
      }
    }
    return () => { if (timeoutRef.current) window.clearTimeout(timeoutRef.current); };
  }, [len, phase]);

  const displayed = fullText.slice(0, len);
  const lines = displayed.split('\n');

  return (
    <div className="min-h-[140px] lg:min-h-[180px]">
      <span className="text-white block tracking-tighter">
        {lines[0] || ''}
      </span>
      <span className="text-[#318ce7] block tracking-tighter">
        {lines[1] || ''}
        <span className="inline-block w-1.5 h-10 lg:h-14 bg-orange-500 ml-3 animate-pulse align-middle" />
      </span>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{ backgroundImage: `url(${logisImg})` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${bigImg})` }}
        />
        {/* Gradient pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* --- LEFT CONTENT --- */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-2xl">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">L'alliance physique & numérique</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05]">
              <Typewriter />
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 max-w-lg leading-relaxed font-medium">
              SWS synchronise votre <span className="text-white font-bold">logistique réelle</span> avec la puissance de l'<span className="text-[#318ce7] font-bold">Intelligence Artificielle</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-orange-500/20">
                Démarrer un projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold transition-all">
                Nos expertises
              </button>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4 text-green-400" /> Certifié ISO 27001
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping" /> Flux sécurisés 24/7
                </div>
            </div>
          </div>

          {/* --- RIGHT VISUALS (Pretty frames) --- */}
          <div className="relative h-[550px] hidden lg:flex items-center justify-center">
            
            {/* Card 1: Logistique (Le cadre "P'tit & Joli") */}
            <div className="absolute top-12 left-0 w-64 bg-white rounded-3xl p-5 shadow-2xl transform -rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 z-20 border border-slate-100">
              <div className="h-36 rounded-2xl mb-4 overflow-hidden relative">
                <img src={cardLogis} alt="Transport" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-50 rounded-xl">
                  <Box className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-black text-slate-900">Transport</h3>
              </div>
              <p className="text-[11px] font-bold text-slate-500 leading-snug">Routage multimodal et traçabilité temps réel de vos actifs.</p>
            </div>

            {/* Card 2: AI Intelligence */}
            <div className="absolute bottom-12 right-0 w-64 bg-[#003366] rounded-3xl p-5 shadow-2xl shadow-blue-500/20 transform rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 z-10 border border-blue-400/20">
              <div className="h-36 rounded-2xl mb-4 overflow-hidden relative">
                <img src={cardBig} alt="AI" className="object-cover w-full h-full opacity-80 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#318ce7]/20" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-[#318ce7] rounded-xl">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-black text-white">Intelligence</h3>
              </div>
              <p className="text-[11px] font-medium text-blue-100/70 leading-snug">Algorithmes prédictifs pour l'optimisation des flux massifs.</p>
            </div>

            {/* Déco : Cercle lumineux central */}
            <div className="absolute w-80 h-80 bg-[#318ce7]/10 rounded-full blur-[100px] animate-pulse" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;