import React, { useState } from 'react';
import { Menu, X, Truck, BrainCircuit, Home, Database, Info, Mail } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const navLinks = [
    { name: 'Accueil', to: '/', Icon: Home },
    { name: 'Expertise Transport', to: '/transport', Icon: Truck },
    { name: 'Solutions Data & IA', to: '/data', Icon: Database },
    { name: 'À Propos', to: '/about', Icon: Info },
    { name: 'Contact', to: '/contact', Icon: Mail },
  ];


  return (
    <nav className="fixed w-full z-50 bg-sws-blue/95 backdrop-blur-sm text-white shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-sws-orange p-2 rounded-lg">
              <div className="flex gap-1">
                <Truck className="w-6 h-6 text-white" />
                <BrainCircuit className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="font-bold text-2xl tracking-tighter">SWS</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${isActive ? 'text-sws-orange' : 'hover:text-sws-orange'}`
                  }
                >
                  <link.Icon className="w-4 h-4 opacity-90" />
                  <span>{link.name}</span>
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `bg-sws-orange hover:bg-sws-orangeDark text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md transform hover:scale-105 ${isActive ? 'ring-2 ring-white/20' : ''}`}
              >
                Devis Gratuit
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sws-blueLight border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `text-gray-300 ${isActive ? 'text-sws-orange' : 'hover:text-sws-orange'} block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 w-full text-left`}
              >
                <link.Icon className="w-5 h-5" />
                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;