import React from 'react';
import { Truck, BrainCircuit, Linkedin, Twitter, Facebook, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-sws-blueLight text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4 text-white">
                <div className="bg-sws-orange p-2 rounded-md shadow-md">
                  <div className="flex gap-1 items-center">
                    <Truck className="w-5 h-5 text-white" />
                    <BrainCircuit className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <span className="font-bold text-xl tracking-tighter">SWS</span>
                  <div className="text-xs text-white/80">Smart World Solutions</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/90">
                Connecter le monde physique et numérique pour créer une logistique intelligente et durable.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#transport" className="hover:text-sws-orange transition-colors">Transport Routier</a></li>
                <li><a href="#transport" className="hover:text-sws-orange transition-colors">Fret Aérien</a></li>
                <li><a href="#data" className="hover:text-sws-orange transition-colors">Analyse Big Data</a></li>
                <li><a href="#data" className="hover:text-sws-orange transition-colors">Solutions IA</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm">Entreprise</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-sws-orange transition-colors">À Propos</a></li>
                <li><a href="#" className="hover:text-sws-orange transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-sws-orange transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-sws-orange transition-colors">Mentions Légales</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm">Suivez-nous</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-sws-orange hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-sws-orange hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-sws-orange hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Floating chat button bottom-left */}
      <a href="#contact" className="fixed left-6 bottom-6 z-50 bg-sws-orange p-3 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center" aria-label="Chat">
        <MessageSquare className="w-5 h-5 text-white" />
      </a>
    </>
  );
};

export default Footer;