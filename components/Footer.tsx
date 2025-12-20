import React from 'react';
import { Truck, BrainCircuit, Linkedin, Twitter, Facebook, MessageSquare, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-orange-300 border-t border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#318ce7] p-2 rounded-xl shadow-lg shadow-blue-500/20">
                  <div className="flex gap-1">
                    <Truck className="w-5 h-5 text-white" />
                    <BrainCircuit className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <span className="font-black text-2xl text-[#318ce7] tracking-tighter">SkyWay Technologies</span>
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Smart World Solutions</div>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                Connecter le monde physique et numérique pour créer une logistique intelligente et durable.
              </p>
            </div>

            {[
              { title: 'Services', links: ['Transport Routier', 'Fret Aérien', 'Analyse Big Data', 'Solutions IA'] },
              { title: 'Entreprise', links: ['À Propos', 'Carrières', 'Blog', 'Mentions Légales'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-slate-800 font-black mb-6 uppercase text-xs tracking-widest">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map(link => (
                    <li key={link}><a href="#" className="text-sm font-bold text-slate-500 hover:text-[#318ce7] transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-slate-800 font-black mb-6 uppercase text-xs tracking-widest">Suivez-nous</h4>
              <div className="flex gap-3">
                {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#318ce7] hover:bg-orange-500 hover:text-white transition-all shadow-sm">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed left-8 bottom-8 z-50 flex flex-col gap-4">
        {/* Contact Button */}
        <a href="#contact" className="bg-orange-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform shadow-orange-500/40">
          <MessageSquare className="w-6 h-6" />
        </a>
        
        {/* Admin Button - Discret */}
        <Link to="/admin/login" className="bg-slate-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform shadow-slate-700/40 hover:bg-slate-700" title="Espace Admin">
          <Lock className="w-6 h-6" />
        </Link>
      </div>
    </>
  );
};

export default Footer;