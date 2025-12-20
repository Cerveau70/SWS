import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero */}
      <div className="bg-sws-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-white/90">Nous sommes ici pour répondre à vos questions et explorer de nouvelles opportunités.</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 text-center">
            <Phone className="w-12 h-12 text-sws-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Téléphone</h3>
            <p className="text-gray-600 mb-2">+33 (0)1 XX XX XX XX</p>
            <p className="text-sm text-gray-500">Lun-Ven: 9h-18h</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 text-center">
            <Mail className="w-12 h-12 text-sws-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
            <p className="text-gray-600 mb-2">contact@sws.fr</p>
            <p className="text-sm text-gray-500">Réponse sous 24h</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 text-center">
            <MapPin className="w-12 h-12 text-sws-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Siège</h3>
            <p className="text-gray-600 mb-2">123 Avenue Paris</p>
            <p className="text-sm text-gray-500">75001 Paris, France</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-sws-blue text-center">Envoyez-nous un message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sws-orange"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sws-orange"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sws-orange"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="transport">Solutions Transport</option>
                <option value="data">Solutions IA & Data</option>
                <option value="partnership">Partenariat</option>
                <option value="general">Question générale</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sws-orange resize-none"
                placeholder="Décrivez votre demande..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-sws-orange hover:bg-orange-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Send className="w-5 h-5" />
              Envoyer le message
            </button>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
                ✓ Merci! Votre message a été envoyé avec succès. Nous vous recontacterons rapidement.
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Social section */}
      <div className="bg-sws-blueLight text-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <MessageSquare className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Suivez-nous</h2>
          <p className="text-lg text-white/90 mb-6">
            Découvrez nos dernières actualités, études de cas et innovations en ligne
          </p>
          <div className="flex justify-center gap-6">
            {['LinkedIn', 'Twitter', 'GitHub'].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-sws-blue">Questions Fréquentes</h2>
        <div className="space-y-4">
          {[
            { q: 'Quels délais pour un premier diagnostic?', a: 'Une semaine pour une évaluation initiale de vos besoins.' },
            { q: 'Travaillez-vous avec les PME?', a: 'Oui! 40% de nos clients sont des PME et ETI.' },
            { q: 'Avez-vous des certifications?', a: 'ISO 27001, RGPD compliant, et certifications cloud.' },
            { q: 'Quel est votre SLA?', a: '99.5% uptime garanti, support 24/7 pour les clients premium.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-lg border-l-4 border-sws-orange">
              <h4 className="font-bold text-gray-900 mb-2">{item.q}</h4>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
