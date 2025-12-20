import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Box, Cpu } from 'lucide-react';
import logisImg from '../img/asc.jpg';
import bigImg from '../img/bigdata.jpg';
import cardLogis from '../img/logis.jpg';
import cardBig from '../img/big.png';
import '/index.css';

const Typewriter: React.FC = () => {
  const fullText = 'Bougez vos Biens.\nValorisez vos Données.';
  const [len, setLen] = useState(0);
  const [phase, setPhase] = useState<'typing'|'pause'|'erasing'>('typing');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    if (phase === 'typing') {
      if (len < fullText.length) {
        timeoutRef.current = window.setTimeout(() => setLen(l => l + 1), 60);
      } else {
        timeoutRef.current = window.setTimeout(() => setPhase('pause'), 900);
      }
    } else if (phase === 'pause') {
      timeoutRef.current = window.setTimeout(() => setPhase('erasing'), 800);
    } else if (phase === 'erasing') {
      if (len > 0) {
        timeoutRef.current = window.setTimeout(() => setLen(l => l - 1), 24);
      } else {
        // restart typing
        timeoutRef.current = window.setTimeout(() => setPhase('typing'), 400);
      }
    }

    return () => { if (timeoutRef.current) window.clearTimeout(timeoutRef.current); };
  }, [len, phase]);

  const displayed = fullText.slice(0, len);
  const lines = displayed.split('\n');

  return (
    <>
      <span className="typewriter-line text-white font-semibold text-4xl lg:text-6xl">
        {lines[0] || ''}
      </span>
      <br />
      <span className="typewriter-line text-blue-400 font-semibold text-4xl lg:text-6xl">
        {lines[1] || ''}
      </span>
      <span className="typewriter-caret" />
    </>
  );
};

const Hero: React.FC = () => {
  // no vehicle animation (removed per request)
  return (
    <div id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background: base image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${logisImg})` }}
      />
      {/* Overlay image (semi-transparent) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-150 mix-blend-overlay z-20"
        style={{ backgroundImage: `url(${bigImg})` }}
      />
      {/* Background overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 z-20"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sws-orange rounded-full blur-[128px] opacity-20 z-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full border border-white/20 shadow-sm">
              <span className="w-3 h-3 rounded-full bg-sws-orange animate-pulse" />
              <span className="text-sm font-mono font-semibold text-green-300 tracking-wide">L'alliance du physique et du numérique</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <Typewriter />
            </h1>

            <p className="text-xl text-white max-w-lg">
              SWS est le partenaire unique qui synchronise votre logistique physique avec la puissance de l'Intelligence Artificielle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group flex items-center justify-center gap-2 bg-sws-orange hover:bg-sws-orangeDark text-white px-8 py-4 rounded-lg font-bold transition-all">
                Démarrer un projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Découvrir nos services
              </a>
            </div>
          </div>

          {/* Visuals */}
          <div className="relative h-[500px] hidden lg:block">
            {/* Card 1: Transport */}
            <div className="absolute top-10 left-0 w-72 h-80 bg-slate-800 rounded-2xl p-6 border border-gray-700 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
              <div className="h-40 bg-gray-700 rounded-xl mb-4 overflow-hidden relative">
                <img src={cardLogis} alt="Transport" className="object-cover w-full h-full opacity-80" />
                <div className="absolute inset-0 bg-sws-orange/20 mix-blend-overlay"></div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-sws-orange rounded-lg">
                  <Box className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Logistique</h3>
              </div>
              <p className="text-sm text-gray-400">Transport multimodal sécurisé et traçabilité temps réel.</p>
            </div>

            {/* Card 2: AI */}
            <div className="absolute bottom-10 right-0 w-72 h-80 bg-slate-900 rounded-2xl p-6 border border-blue-500/30 shadow-2xl shadow-blue-500/10 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="h-40 bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
                <img src={cardBig} alt="AI" className="object-cover w-full h-full opacity-80" />
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Data Intelligence</h3>
              </div>
              <p className="text-sm text-gray-400">Algorithmes prédictifs pour optimiser vos flux.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;