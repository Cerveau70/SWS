import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle, 
  Sparkles, Clock, Linkedin, ChevronRight, 
  Bus, Database, Users
} from 'lucide-react';
import { createLead } from '../services/leads';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pole, setPole] = useState<'transport' | 'bigdata' | 'event' | ''>('');
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });

  return (
    <main className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- HERO SECTION : VISION MULTISERVICE --- */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557426272-fc759fbbad60?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-5"
            alt="City and Tech background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#318ce7] text-[10px] font-black uppercase mb-6 border border-blue-100 shadow-sm">
            <Sparkles className="w-3 h-3 text-orange-500" /> Hub Multiservices SkyWay
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#318ce7] leading-[1.1] mb-6">
            Bâtissons le futur <br />
            <span className="text-orange-500 relative">urbain et digital.</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Partenariat communal pour le transport ou architecture logicielle Big Data ? <br className="hidden md:block"/>
            Nos pôles d'expertise répondent à vos enjeux stratégiques.
          </p>
        </div>
      </section>

      {/* --- SECTION CONTACT & FORMULAIRE --- */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Infos de contact (Gauche) */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { icon: Phone, title: 'Ligne Directe', val: '+225 05 44 98 39 93' },
                { icon: Mail, title: 'Email Expertise', val: 'contact@skyway-tech.com' },
                { icon: MapPin, title: 'Direction Générale', val: 'Abidjan, Côte d\'Ivoire' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/30 hover:border-[#318ce750] transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-[#318ce7] transition-colors">
                    <item.icon className="w-6 h-6 text-[#318ce7] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{item.title}</h3>
                    <p className="font-bold text-slate-800 text-sm mt-1">{item.val}</p>
                  </div>
                </div>
              ))}
              
              {/* Carte LinkedIn Premium */}
              <div className="p-8 bg-[#003366] rounded-[2rem] text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden group border border-white/5">
                <Linkedin className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                <div className="relative z-10">
                  <h4 className="font-black text-lg mb-2 flex items-center gap-2">SkyWay sur LinkedIn</h4>
                  <p className="text-xs text-blue-100/70 leading-relaxed max-w-[240px] font-medium">
                    Suivez nos innovations en transport communal et nos déploiements Big Data à travers l'Afrique.
                  </p>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-[10px] font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Voir le profil
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire Intelligent (Droite) */}
            <div className="lg:col-span-7 bg-white rounded-[3rem] border border-slate-100 p-8 lg:p-12 shadow-2xl shadow-slate-200/40 relative">
              {submitted ? (
                <div className="text-center py-20 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-[#318ce7] mb-3">Brief reçu avec succès !</h3>
                  <p className="text-slate-500 text-lg font-medium max-w-sm mx-auto leading-relaxed">
                    Un consultant SkyWay (Pôle Mobilité ou Tech) vous recontactera sous 24 heures.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-black text-[#318ce7] hover:underline"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!pole) return;
                    setIsSubmitting(true);
                    try {
                      await createLead({
                        name: formData.name,
                        email: formData.email,
                        pole:
                          pole === 'transport'
                            ? 'transport'
                            : pole === 'bigdata'
                            ? 'bigdata'
                            : 'event',
                        description: formData.description,
                        source: 'contact-page',
                      });
                      setSubmitted(true);
                      setFormData({ name: '', email: '', description: '' });
                      setPole('');
                    } catch (err) {
                      console.error('Erreur Firestore:', err);
                      alert("Une erreur est survenue lors de l'envoi.");
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase ml-2 tracking-widest">Identité / Structure</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Mairie de... ou Entreprise SAS"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#318ce7] focus:border-transparent outline-none font-bold text-sm transition-all shadow-inner"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase ml-2 tracking-widest">Email Professionnel</label>
                      <input
                        type="email"
                        required
                        placeholder="contact@votre-domaine.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#318ce7] focus:border-transparent outline-none font-bold text-sm transition-all shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase ml-2 tracking-widest">Pôle de compétence souhaité</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setPole('transport')}
                        className={`flex items-center gap-3 p-4 border-2 rounded-2xl transition-all text-left group ${
                          pole === 'transport'
                            ? 'border-[#318ce7] bg-blue-50'
                            : 'border-slate-100 hover:border-[#318ce7]'
                        }`}
                      >
                        <Bus className="text-slate-300 group-hover:text-orange-500" size={20} />
                        <span className="text-xs font-black text-slate-600">Transport Communal</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPole('bigdata')}
                        className={`flex items-center gap-3 p-4 border-2 rounded-2xl transition-all text-left group ${
                          pole === 'bigdata'
                            ? 'border-[#318ce7] bg-blue-50'
                            : 'border-slate-100 hover:border-[#318ce7]'
                        }`}
                      >
                        <Database className="text-slate-300 group-hover:text-[#318ce7]" size={20} />
                        <span className="text-xs font-black text-slate-600">Ingénierie Big Data</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPole('event')}
                        className={`flex items-center gap-3 p-4 border-2 rounded-2xl transition-all text-left group ${
                          pole === 'event'
                            ? 'border-[#318ce7] bg-blue-50'
                            : 'border-slate-100 hover:border-[#318ce7]'
                        }`}
                      >
                        <Users className="text-slate-300 group-hover:text-orange-500" size={20} />
                        <span className="text-xs font-black text-slate-600">
                          Événementiel & logistique
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-slate-400 uppercase ml-2 tracking-widest">Votre Brief Projet</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Décrivez votre besoin : déploiement de réseau urbain, développement d'ERP métier, audit de données, dispositif événementiel..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#318ce7] focus:border-transparent outline-none font-bold text-sm transition-all shadow-inner resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !pole}
                    className="w-full py-5 bg-[#318ce7] text-white rounded-[1.2rem] font-black text-sm hover:bg-orange-600 transition-all shadow-xl shadow-blue-200 hover:shadow-orange-200 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        Envoi en cours...
                        <ChevronRight className="w-5 h-5 animate-pulse" />
                      </>
                    ) : (
                      <>
                        Lancer la collaboration
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ MINI : EXPERTISE MULTISERVICE --- */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#318ce7] mb-12 flex items-center justify-center gap-4 text-center">
            <Clock className="w-8 h-8 text-orange-500" /> Réponses d'Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                q: 'Accompagnement des communes ?', 
                a: 'Oui, nous proposons des audits complets pour structurer vos réseaux de transport en mode communal.' 
              },
              { 
                q: 'Ingénierie sur-mesure ?', 
                a: 'Nos développeurs conçoivent des applications ERP et mobiles basées sur vos besoins métiers spécifiques.' 
              },
              { 
                q: 'Cycle Big Data complet ?', 
                a: 'De la captation des données à l\'analyse prédictive, nous gérons l\'ensemble du pipeline technologique.' 
              },
              { 
                q: 'Disponibilité du support ?', 
                a: 'Une équipe technique dédiée est disponible 24/7 pour nos solutions d\'entreprise et réseaux urbains.' 
              },
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm text-left hover:shadow-lg transition-all border-l-4 border-l-[#318ce7]">
                <h4 className="text-sm font-black text-[#318ce7] mb-3 leading-tight">{faq.q}</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;