import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Lock, Mail, AlertCircle, Loader2, 
  ChevronLeft, Send, Sparkles, LogIn 
} from 'lucide-react';

// Importation de Firebase Auth
import { auth } from '../services/firebase'; 
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  sendPasswordResetEmail 
} from 'firebase/auth';

import { ChevronRight } from 'lucide-react';


const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // --- LOGIQUE : CONNEXION EMAIL/PASSWORD ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setInfo('');
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      localStorage.setItem('adminAuth', JSON.stringify({
        isAuthenticated: true,
        email: user.email,
        loginTime: new Date().toISOString(),
      }));

      navigate('/admin/dashboard');
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential') {
        setError('Identifiants incorrects. Vérifiez votre email et mot de passe.');
      } else {
        setError('Une erreur est survenue lors de la connexion.');
      }
    } finally {
      setLoading(false);
    }
  };

  // --- LOGIQUE : CONNEXION GOOGLE ---
  const handleGoogleLogin = async () => {
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem('adminAuth', JSON.stringify({
        isAuthenticated: true,
        email: result.user.email,
        loginTime: new Date().toISOString(),
      }));
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Échec de la connexion avec Google.');
    }
  };

  // --- LOGIQUE : MOT DE PASSE OUBLIÉ ---
  const handleForgotPassword = async () => {
    if (!email) {
      setError("Veuillez d'abord saisir votre adresse email dans le champ.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setInfo("Email de réinitialisation envoyé ! Vérifiez votre boîte de réception.");
      setError('');
    } catch (err) {
      setError("Impossible d'envoyer l'email. Vérifiez l'adresse saisie.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Bouton Retour Accueil */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-500 hover:text-[#318ce7] font-black text-xs uppercase tracking-widest transition-colors group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Retour au site
      </button>

      {/* Décoration de fond */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-md w-full relative z-10">
        {/* Header Login */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-[#001529] rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl border-4 border-white">
            <Lock className="w-8 h-8 text-[#318ce7]" />
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Accès SK-Technology</h1>
          <p className="text-slate-500 font-medium mt-2">Identifiez-vous pour gérer l'infrastructure</p>
        </div>

        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative">
          
          {/* Messages d'erreur ou d'info */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 animate-in zoom-in">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-red-700 text-xs font-bold leading-relaxed">{error}</p>
            </div>
          )}
          {info && (
            <div className="mb-6 bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3 animate-in zoom-in">
              <Send className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-blue-700 text-xs font-bold leading-relaxed">{info}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Email Administrateur</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@skyway-tech.com"
                  className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-sm transition-all shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-4">
                 <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mot de passe</label>
                 <button 
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[9px] font-black text-[#318ce7] uppercase hover:underline"
                 >
                   Oublié ?
                 </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-14 pr-6 py-4 bg-slate-50 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#318ce7] outline-none font-bold text-sm transition-all shadow-inner"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-[#318ce7] hover:bg-[#2671ba] text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-400/20 flex items-center justify-center gap-3 disabled:opacity-70 group"
            >
              {loading ? (
                <Loader2 className="animate-spin w-5 h-5" />
              ) : (
                <>
                  Se connecter
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Séparateur */}
          <div className="relative my-10 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <span className="relative bg-white px-4 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Ou continuer avec</span>
          </div>

          {/* Login Google */}
          <button 
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-4 bg-white border-2 border-slate-50 hover:border-slate-200 rounded-2xl flex items-center justify-center gap-4 transition-all group shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5.04c1.9 0 3.51.64 4.85 1.91l3.6-3.6C18.21 1.33 15.38 0 12 0 7.33 0 3.26 2.67 1.2 6.6l4.24 3.29c1-2.97 3.76-4.85 6.56-4.85z"/>
                <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.85 2.98c2.26-2.09 3.57-5.17 3.57-8.8z"/>
                <path fill="#FBBC05" d="M5.44 14.11c-.24-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29L1.2 6.24C.43 7.78 0 9.5 0 11.32s.43 3.54 1.2 5.08l4.24-2.29z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.85-2.98c-1.06.72-2.45 1.16-4.08 1.16-3.15 0-5.81-2.13-6.76-5.01L1.2 17.55C3.26 21.48 7.33 24 12 24z"/>
            </svg>
            <span className="text-xs font-black text-slate-700 uppercase tracking-widest">Compte Google</span>
          </button>
        </div>

        <p className="text-center text-[9px] text-slate-400 mt-10 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
          <Sparkles className="w-3 h-3" />
          Powered by SkyWay Technologies Global
        </p>
      </div>
    </main>
  );
};

export default AdminLogin;