import React, { useState } from 'react';
import { Menu, X, Truck, BrainCircuit, Home, Database, Info, Mail, ChevronRight, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Accueil', to: '/', Icon: Home },
    { name: 'Expertise Transport', to: '/transport', Icon: Truck },
    { name: 'Solutions Data & IA', to: '/data', Icon: Database },
    { name: 'À Propos', to: '/about', Icon: Info },
    { name: 'Admin', to: '/admin/login', Icon: Shield },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#318ce7]/90 backdrop-blur-md text-white shadow-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* --- LOGO --- */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-2 rounded-xl shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
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

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-1 mr-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2.5 transition-all duration-300 group
                    ${isActive ? 'text-orange-400' : 'text-blue-100 hover:text-white hover:bg-white/5'}`
                  }
                >
                  <link.Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span>{link.name}</span>
                  {/* Barre animée sous l'élément actif */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-[.active]:w-1/2" />
                </NavLink>
              ))}
            </div>

            <NavLink
              to="/contact"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 hover:translate-y-[-2px] active:translate-y-0"
            >
              Contact
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          {/* --- MOBILE BUTTON --- */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#002244] border-t border-white/5 shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `flex items-center gap-4 px-4 py-3 rounded-xl text-base font-bold transition-all
                ${isActive ? 'bg-orange-500/10 text-orange-400' : 'text-blue-100 hover:bg-white/5'}`
              }
            >
              <link.Icon className="w-5 h-5" />
              <span>{link.name}</span>
            </NavLink>
          ))}
          <div className="pt-4">
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white py-4 rounded-xl font-black shadow-lg shadow-orange-500/20"
            >
              Devis Gratuit
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;