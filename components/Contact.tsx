import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { generateAssistantResponse } from '../services/geminiService';

const Contact: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([{ role: 'model', text: 'Bonjour ! Je suis l\'intelligence SkyWay Technologies. Posez-moi vos questions sur nos tarifs, nos trajets ou nos solutions IA.' }]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    const userMsg = prompt;
    setPrompt('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    const response = await generateAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-blue-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-black uppercase text-xs tracking-widest mb-4">Contact & IA</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#318ce7]">Parlons de votre projet</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-2 shadow-sm hover:border-[#318ce7]/30 transition-all">
                <Phone className="w-5 h-5 text-orange-500" />
                <h4 className="font-black text-sm text-[#318ce7]">Téléphone</h4>
                <p className="text-sm font-bold text-slate-600">+225 05 44 98 39 93</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col gap-2 shadow-sm hover:border-[#318ce7]/30 transition-all">
                <Mail className="w-5 h-5 text-orange-500" />
                <h4 className="font-black text-sm text-[#318ce7]">Email Pro</h4>
                <p className="text-sm font-bold text-slate-600">contact@SkyWay Technologies-group.com</p>
              </div>
            </div>

            <form className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-2xl shadow-slate-200/50 space-y-4">
              <h4 className="font-black text-xl text-[#318ce7] mb-4">Demande de devis</h4>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nom complet" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold text-sm" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold text-sm" />
              </div>
              <textarea placeholder="Décrivez votre besoin..." rows={4} className="w-full p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold text-sm resize-none" />
              <button type="button" className="w-full bg-[#318ce7] text-white py-4 rounded-xl font-black text-sm hover:bg-orange-500 transition-all flex items-center justify-center gap-2">
                Envoyer le message <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="bg-[#003366] rounded-[2rem] overflow-hidden flex flex-col h-[600px] shadow-2xl relative border-8 border-white">
            <div className="bg-[#002244] p-5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-[#318ce7] rounded-xl flex items-center justify-center animate-pulse shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-white text-sm">Assistant SkyWay Technologies IA</h4>
                  <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">En ligne</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-[#001a33]/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-4 rounded-2xl max-w-[85%] text-sm font-medium leading-relaxed ${
                    msg.role === 'user' ? 'bg-orange-500 text-white rounded-tr-none' : 'bg-white/10 text-blue-50 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl flex gap-1.5"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span><span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span><span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-5 bg-[#002244] border-t border-white/5">
              <form onSubmit={handleSendMessage} className="relative">
                <input
                  type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Posez une question à l'IA..."
                  className="w-full bg-white/5 text-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 font-bold text-sm"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;