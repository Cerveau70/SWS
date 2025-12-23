import React, { useState, useEffect } from 'react';
import { Menu, X, Truck, BrainCircuit, Home, Database, Info, ChevronRight, Users, Activity } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { db } from '../services/firebase';
import { doc, updateDoc, increment, setDoc, onSnapshot } from 'firebase/firestore';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalVisits, setTotalVisits] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleTrackVisit = async () => {
      const hasVisited = sessionStorage.getItem('SKT_tracked');
      if (!hasVisited) {
        const statsRef = doc(db, "analytics", "overview");
        try {
          await updateDoc(statsRef, { totalVisits: increment(1) });
        } catch (e) {
          await setDoc(statsRef, { totalVisits: 1 }, { merge: true });
        }
        sessionStorage.setItem('SKT_tracked', 'true');
      }
    };
    handleTrackVisit();
    const unsub = onSnapshot(doc(db, "analytics", "overview"), (snap) => {
      if (snap.exists()) setTotalVisits(snap.data().totalVisits);
    });
    return () => unsub();
  }, []);

  const navLinks = [
    { name: 'Accueil', to: '/', Icon: Home },
    { name: 'Transport', to: '/transport', Icon: Truck },
    { name: 'Data & IA', to: '/data', Icon: Database },
    { name: 'Événementiel', to: '/event', Icon: Activity },
    { name: 'À Propos', to: '/about', Icon: Info },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#318ce7]/90 backdrop-blur-md text-white shadow-2xl border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20"> {/* justify-between sépare les deux blocs */}
          
          {/* --- LOGO (Extrême Gauche) --- */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <div className="flex gap-1">
                <Truck className="w-5 h-5 text-white" />
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter leading-none">SkyWay Technologies</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-bold">Solutions</span>
            </div>
          </div>

          {/* --- MENU ET ACTIONS (Extrême Droite) --- */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center space-x-1 mr-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all duration-300
                    ${isActive ? 'text-orange-400 bg-white/5' : 'text-blue-50 hover:text-white hover:bg-white/10'}`
                  }
                >
                  <link.Icon className="w-4 h-4 opacity-70" />
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-3">
                <NavLink
                to="/contact"
                className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 hover:translate-y-[-2px]"
                >
                Contact
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </NavLink>

                {/* --- COMPTEUR VISITEURS (Plus fin) --- */}
                <div className="flex items-center gap-2 bg-white/10 px-2 py-1.5 rounded-xl border border-white/10 min-w-[65px] justify-center">
                    <div className="relative">
                        <Users className="w-3.5 h-3.5 text-orange-400" />
                        <span className="absolute -top-1 -right-1 w-1 h-1 bg-green-400 rounded-full animate-pulse"></span>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-[10px] font-black">
                            {totalVisits !== null ? totalVisits.toLocaleString() : '...'}
                        </span>
                        <span className="text-[6px] uppercase font-bold text-blue-200">Visiteurs</span>
                    </div>
                </div>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-xl bg-white/5 text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#002244] border-t border-white/5">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.to} onClick={() => setIsOpen(false)} className="flex items-center gap-4 px-4 py-3 text-blue-100 font-bold hover:bg-white/5 rounded-xl">
              <link.Icon className="w-5 h-5" />
              <span>{link.name}</span>
            </NavLink>
          ))}
          <div className="pt-4">
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center bg-orange-500 text-white py-4 rounded-xl font-black">
              Démarrer un projet
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;