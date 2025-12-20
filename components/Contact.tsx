import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { generateAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const Contact: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'intelligence SWS. Posez-moi vos questions sur nos tarifs, nos trajets ou nos solutions IA.' }
  ]);
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
    <section id="contact" className="py-24 bg-white text-[#003366]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-orange-500 font-black uppercase text-sm tracking-[0.2em] mb-4">Contact & IA</h2>
          <h3 className="text-5xl font-black mb-6">Prêt à transformer vos flux ?</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">Choisissez votre méthode : un formulaire classique pour un devis officiel, ou notre assistant IA pour une réponse instantanée.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* --- CÔTÉ GAUCHE : INFOS & FORM --- */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, label: 'Téléphone', val: '+225 05 95 40 39 64', color: 'bg-blue-50 text-[#003366]' },
                { icon: Mail, label: 'Email Pro', val: 'contact@sws-group.com', color: 'bg-orange-50 text-orange-600' }
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-[2rem] ${item.color} border border-transparent hover:border-white transition-all`}>
                  <item.icon className="w-6 h-6 mb-4" />
                  <h4 className="font-bold text-sm uppercase opacity-60 mb-1">{item.label}</h4>
                  <p className="font-black">{item.val}</p>
                </div>
              ))}
            </div>

            <form className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
               
               <h4 className="font-black text-2xl mb-8">Devis Classique</h4>
               <div className="space-y-5">
                 <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Nom complet" className="w-full px-6 py-4 bg-white rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500 shadow-sm" />
                    <input type="email" placeholder="Email" className="w-full px-6 py-4 bg-white rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500 shadow-sm" />
                 </div>
                 <select className="w-full px-6 py-4 bg-white rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500 shadow-sm appearance-none cursor-pointer">
                    <option>Service Transport & Fret</option>
                    <option>Service IA & Big Data</option>
                    <option>Partenariat Stratégique</option>
                 </select>
                 <textarea placeholder="Décrivez votre besoin..." rows={4} className="w-full px-6 py-4 bg-white rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500 shadow-sm resize-none"></textarea>
                 <button className="w-full py-5 bg-[#003366] text-white rounded-2xl font-black text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                   Envoyer ma demande <ChevronRight className="w-5 h-5" />
                 </button>
               </div>
            </form>
          </div>

          {/* --- CÔTÉ DROIT : AI ASSISTANT --- */}
          <div className="flex flex-col h-[700px] bg-[#003366] rounded-[3rem] shadow-2xl overflow-hidden relative border-8 border-slate-50">
            {/* AI Header */}
            <div className="p-6 bg-[#002244] border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-black text-white">SWS Assistant</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">En ligne • Gemini AI v2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-orange-500' : 'bg-blue-600'}`}>
                      {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                    </div>
                    <div className={`p-5 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' ? 'bg-orange-500 text-white rounded-tr-none' : 'bg-white/10 text-blue-50 border border-white/5 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start animate-in fade-in">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center"><Bot className="w-5 h-5 text-white" /></div>
                    <div className="bg-white/5 p-4 rounded-2xl flex gap-1.5 items-center">
                       <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                       <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                       <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* AI Input Area */}
            <div className="p-6 bg-[#002244]/50 border-t border-white/5">
              <form onSubmit={handleSendMessage} className="relative group">
                <input
                  type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Posez-moi une question..."
                  disabled={isLoading}
                  className="w-full bg-white/10 text-white px-6 py-5 rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-blue-200/50 transition-all pr-16"
                />
                <button type="submit" disabled={isLoading || !prompt.trim()} className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-30 disabled:grayscale">
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
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