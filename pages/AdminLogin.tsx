import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, AlertCircle } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Simple authentication (demo only)
    if (email === 'admin@sws.fr' && password === 'admin123') {
      localStorage.setItem('adminAuth', JSON.stringify({
        isAuthenticated: true,
        email: email,
        loginTime: new Date().toISOString(),
      }));
      navigate('/admin/dashboard');
    } else {
      setError('Email ou mot de passe incorrect. Essayez: admin@sws.fr / admin123');
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#318ce7] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-black text-[#318ce7] mb-2">Espace Admin</h1>
          <p className="text-gray-600">Authentification sécurisée requise</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-50 p-10 rounded-3xl border border-gray-200 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-black text-[#318ce7] mb-3">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#318ce7] opacity-50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@sws.fr"
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#318ce7] focus:border-transparent outline-none font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-black text-[#318ce7] mb-3">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#318ce7] opacity-50" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Votre mot de passe"
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#318ce7] focus:border-transparent outline-none font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#318ce7] hover:bg-[#2671ba] text-white font-black rounded-xl transition-all shadow-lg shadow-blue-400/30 hover:shadow-lg hover:shadow-blue-500/40"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8 font-medium">
          Démo: admin@sws.fr / admin123
        </p>
      </div>
    </main>
  );
};

export default AdminLogin;
