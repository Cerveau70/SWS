import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Phone, Mail, MapPin } from 'lucide-react';
import { generateAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const Contact: React.FC = () => {
  // Chat State
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'IA de SWS. Comment puis-je vous aider aujourd\'hui ? (Transport, Data, Devis...)' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    <section id="contact" className="py-24 bg-sws-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sws-orange font-bold uppercase text-sm mb-2">Contactez-nous</h2>
          <h3 className="text-4xl font-bold">Parlons de votre projet</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info & Standard Form */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <Phone className="w-6 h-6 text-sws-orange mb-3" />
                <h4 className="font-bold mb-1">Téléphone</h4>
                <p className="text-white">+225 0595403964</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <Mail className="w-6 h-6 text-sws-orange mb-3" />
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-white">contact@sws-group.com</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 col-span-1 sm:col-span-2 flex items-center gap-4">
                <MapPin className="w-6 h-6 text-sws-orange flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Siège Social</h4>
                  <p className="text-white">10 Avenue de l'Innovation, 75001 Abobo, Côte d'Ivoire</p>
                </div>
              </div>
            </div>

            <form className="space-y-4 bg-white p-8 rounded-2xl text-slate-900 shadow-xl">
              <h4 className="font-bold text-xl mb-4 text-sws-blue">Formulaire Classique</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nom complet" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sws-orange" />
                <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sws-orange" />
              </div>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sws-orange bg-white">
                <option>Service Transport</option>
                <option>Service Data / IA</option>
                <option>Autre</option>
              </select>
              <textarea placeholder="Votre message..." rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sws-orange"></textarea>
              <button type="button" className="w-full bg-sws-blue hover:bg-slate-800 text-white font-bold py-3 rounded-lg transition-colors">
                Envoyer le message
              </button>
            </form>
          </div>

          {/* AI Assistant */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 flex flex-col h-[600px] shadow-2xl relative">

            {/* Header AI */}
            <div className="bg-slate-900 p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-full relative">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Assistant SWS</h4>
                  <p className="text-xs text-blue-300">Propulsé par Gemini AI</p>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800/50">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-sws-orange' : 'bg-blue-600'}`}>
                      {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user'
                      ? 'bg-sws-orange text-white rounded-br-none'
                      : 'bg-slate-700 text-gray-200 rounded-bl-none'
                      }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="bg-slate-700 p-3 rounded-2xl rounded-bl-none flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-700">
              <form onSubmit={handleSendMessage} className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Décrivez votre besoin (ex: Transport Abobo-Cocody)..."
                  className="w-full bg-slate-800 text-white pl-4 pr-12 py-3 rounded-full border border-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !prompt.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
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