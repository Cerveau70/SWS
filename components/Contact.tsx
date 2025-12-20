import React, { useState } from 'react';
import { Phone, Mail, ChevronRight, Loader2, CheckCircle, Database, Cpu, Globe, ShieldCheck, Activity, Share2 } from 'lucide-react';
// Importation de Firestore
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', pole: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: "nouveau"
      });
      setIsSuccess(true);
      setFormData({ name: '', email: '', pole: '', description: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Erreur Firestore:", error);
      alert("Une erreur est survenue lors de l'envoi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      
      {/* --- EFFETS DE FOND UNIFIÉS --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#318ce7 1.5px, transparent 1.5px), linear-gradient(90deg, #318ce7 1.5px, transparent 1.5px)`, backgroundSize: '60px 60px' }} 
      />
      
      {/* Halos lumineux positionnés stratégiquement */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-[#318ce7]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- CÔTÉ GAUCHE : INFOS & FORMULAIRE (7/12) --- */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-orange-500 font-black uppercase text-xs tracking-[0.4em] mb-4">Contact Hub</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-[#318ce7] tracking-tighter leading-none">
                Donnons vie à <br /> votre projet.
              </h3>
            </div>

            {/* Cartes de contact compactes */}
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px] bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:bg-[#318ce7] transition-colors">
                    <Phone className="w-4 h-4 text-[#318ce7] group-hover:text-white" />
                </div>
                <p className="text-sm font-bold text-slate-700 tracking-tight">+225 05 44 98 39 93</p>
              </div>
              <div className="flex-1 min-w-[200px] bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md group-hover:bg-[#318ce7] transition-colors">
                    <Mail className="w-4 h-4 text-[#318ce7] group-hover:text-white" />
                </div>
                <p className="text-sm font-bold text-slate-700 tracking-tight">contact@skyway-tech.com</p>
              </div>
            </div>

            {/* Formulaire réduit et aligné à gauche */}
            <form onSubmit={handleFormSubmit} className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl space-y-6 relative overflow-hidden max-w-2xl">
              {isSuccess && (
                  <div className="bg-blue-50 text-[#318ce7] p-5 rounded-2xl flex items-center gap-4 border border-blue-100 animate-in zoom-in mb-4">
                    <CheckCircle size={24} className="shrink-0" />
                    <span className="font-bold text-xs leading-tight uppercase tracking-tighter">Requête transmise. Un expert SKT revient vers vous.</span>
                  </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-3">Structure</label>
                    <input type="text" required placeholder="Mairie, Entreprise..." value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-4 bg-slate-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-[#318ce7] font-bold text-sm shadow-inner" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase ml-3">Email</label>
                    <input type="email" required placeholder="nom@domaine.com" value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-4 bg-slate-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-[#318ce7] font-bold text-sm shadow-inner" 
                    />
                  </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-3">Pôle d'expertise</label>
                <select required value={formData.pole}
                    onChange={(e) => setFormData({...formData, pole: e.target.value})}
                    className="w-full p-4 bg-slate-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-[#318ce7] font-bold text-sm text-slate-600 shadow-inner appearance-none"
                >
                    <option value="">Choisir un service SWS...</option>
                    <option value="transport">Mobilité Urbaine Communale</option>
                    <option value="software">Développement Application Métier</option>
                    <option value="bigdata">Infrastructure & Analyse Big Data</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-400 uppercase ml-3">Votre Brief</label>
                <textarea required placeholder="Décrivez votre besoin..." rows={3} value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-4 bg-slate-50 border-none rounded-xl outline-none focus:ring-2 focus:ring-[#318ce7] font-bold text-sm resize-none shadow-inner" 
                />
              </div>

              <button type="submit" disabled={isSubmitting}
                  className="w-full bg-[#318ce7] text-white py-5 rounded-xl font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-900 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-100 disabled:opacity-50 group"
              >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <>Envoyer le Brief <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
              </button>
            </form>
          </div>

          {/* --- CÔTÉ DROIT : SHOWCASE TECHNOLOGIQUE (5/12) --- */}
          <div className="lg:col-span-5 relative h-full min-h-[450px] hidden lg:flex items-center justify-center">
            
            {/* Visual Hub central */}
            <div className="relative">
                {/* Anneaux décoratifs animés */}
                <div className="absolute inset-0 -m-8 border border-[#318ce7]/20 rounded-full animate-pulse" />
                <div className="absolute inset-0 -m-16 border border-[#318ce7]/10 rounded-full animate-ping [animation-duration:3s]" />
                
                {/* Hub Central SKT */}
                <div className="w-40 h-40 bg-[#001529] rounded-[2.5rem] flex items-center justify-center shadow-[0_40px_80px_-15px_rgba(0,21,41,0.5)] border border-white/10 z-10 relative">
                    <Cpu size={60} className="text-[#318ce7]" />
                </div>

                {/* Icônes Satellites (Positions absolues autour du hub) */}
                {/* Top Left: Database */}
                <div className="absolute -top-12 -left-12 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-bounce [animation-duration:4s]">
                    <Database size={24} className="text-[#318ce7]" />
                </div>

                {/* Top Right: Connectivity */}
                <div className="absolute -top-4 -right-16 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-pulse">
                    <Share2 size={20} className="text-orange-500" />
                </div>

                {/* Bottom Left: Security */}
                <div className="absolute -bottom-6 -left-16 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-pulse [animation-delay:1.5s]">
                    <ShieldCheck size={20} className="text-green-500" />
                </div>

                {/* Bottom Right: Analytics */}
                <div className="absolute -bottom-12 -right-8 w-18 h-18 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-bounce [animation-duration:5s]">
                    <Activity size={24} className="text-[#318ce7]" />
                </div>
            </div>

            {/* Labels flottants SKT */}
            <div className="absolute top-10 right-0 bg-[#318ce7]/5 backdrop-blur-md px-4 py-2 rounded-full border border-[#318ce7]/10">
                <span className="text-[10px] font-black text-[#318ce7] uppercase tracking-widest">SWS Core Engine v2.4</span>
            </div>
            <div className="absolute bottom-10 right-4 bg-slate-900/5 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200/20">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Digital City Ready</span>
            </div>
          </div>

        </div>

        {/* Footer badges de réassurance */}
        <div className="mt-16 flex flex-wrap gap-8 justify-start opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#318ce7]"/> <span className="text-[9px] font-black uppercase tracking-widest">ISO 27001 Certified</span></div>
            <div className="flex items-center gap-2"><Globe size={14} className="text-[#318ce7]"/> <span className="text-[9px] font-black uppercase tracking-widest">Cloud Agnostic</span></div>
            <div className="flex items-center gap-2"><Activity size={14} className="text-[#318ce7]"/> <span className="text-[9px] font-black uppercase tracking-widest">99.9% Uptime</span></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;