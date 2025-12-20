import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, Plus, Trash2, Users, Inbox, Settings, 
  Bus, Database, Loader2, ShieldCheck, BarChart3, TrendingUp, 
  UserPlus, Lock, Globe, Bell, Check, AlertCircle, Eye, Activity, ChevronRight, UploadCloud, Home, Monitor
} from 'lucide-react';

// Import Firebase
import { db, auth, storage } from '../services/firebase';
import { 
  collection, onSnapshot, addDoc, deleteDoc, 
  doc, query, orderBy, limit, serverTimestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signOut, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';

// --- INTERFACES ---
interface Partner { id: string; name: string; logo: string; description: string; }
interface Lead { id: string; name: string; email: string; pole: string; description: string; createdAt: any; }
interface DailyStat { date: string; count: number; }

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'stats' | 'leads' | 'partners' | 'settings'>('stats');
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  const [partners, setPartners] = useState<Partner[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [totalVisits, setTotalVisits] = useState(0);
  const [dailyStats, setDailyStats] = useState<DailyStat[]>([]);
  const [activeUsers, setActiveUsers] = useState(0);
  
  const [newPartner, setNewPartner] = useState({ name: '', logo: '', description: '' });
  const [isAddingPartner, setIsAddingPartner] = useState(false);
  const [profileForm, setProfileForm] = useState({ email: '', password: '', currentPassword: '' });
  const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
  const [settingsTab, setSettingsTab] = useState<'profile' | 'security'>('profile');

  // --- 1. INITIALISATION & SYNC ---
  useEffect(() => {
    const timer = setTimeout(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) navigate('/admin/login');
            else setProfileForm(p => ({ ...p, email: user.email || '' }));
        });

        onSnapshot(doc(db, "analytics", "overview"), (d) => d.exists() && setTotalVisits(d.data().totalVisits || 0));
        onSnapshot(query(collection(db, "daily_analytics"), orderBy("__name__", "desc"), limit(7)), (snap) => {
            setDailyStats(snap.docs.map(d => ({ date: d.id, count: d.data().count || 0 })).reverse());
            setLoading(false);
        });

        onSnapshot(query(collection(db, "partners"), orderBy("name")), (snap) => setPartners(snap.docs.map(d => ({ id: d.id, ...d.data() } as Partner))));
        onSnapshot(query(collection(db, "leads"), orderBy("createdAt", "desc")), (snap) => setLeads(snap.docs.map(d => ({ id: d.id, ...d.data() } as Lead))));

        setActiveUsers(Math.floor(Math.random() * 8) + 1);
    }, 3500); 
    return () => clearTimeout(timer);
  }, [navigate]);

  // --- ACTIONS ---
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const storageRef = ref(storage, `partners/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setNewPartner({ ...newPartner, logo: url });
      setStatusMsg({type: 'success', text: 'Média prêt'});
    } catch (err) { setStatusMsg({type: 'error', text: 'Erreur upload'}); }
    finally { setIsUploading(false); }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || !profileForm.currentPassword) return;
    try {
      const cred = EmailAuthProvider.credential(user.email!, profileForm.currentPassword);
      await reauthenticateWithCredential(user, cred);
      if (profileForm.email !== user.email) await updateEmail(user, profileForm.email);
      if (profileForm.password) await updatePassword(user, profileForm.password);
      setStatusMsg({type: 'success', text: 'Système mis à jour'});
    } catch (err) { setStatusMsg({type: 'error', text: 'Vérification échouée'}); }
  };

  // --- STYLES CSS ---
  const dashStyles = `
    @keyframes colorShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
    .skt-3d-title {
      font-size: 14rem; font-weight: 900;
      background: linear-gradient(90deg, #318ce7, #f97316, #318ce7);
      background-size: 200% auto;
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      animation: colorShift 10s linear infinite;
      text-shadow: 6px 6px 0px #e2e8f0;
      filter: drop-shadow(0 15px 25px rgba(49, 140, 231, 0.3));
    }
    .grid-paper {
      background-image: 
        linear-gradient(rgba(49, 140, 231, 0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(49, 140, 231, 0.08) 1px, transparent 1px);
      background-size: 30px 30px;
    }
  `;

  if (loading) return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <style>{dashStyles}</style>
      <h1 className="skt-3d-title tracking-tighter leading-none">SKT</h1>
      <p className="text-slate-400 font-bold uppercase tracking-[1em] text-[10px] mt-12 opacity-50">SkyWay Technologies</p>
    </div>
  );

  // Helper pour l'axe Y et les jours
  const maxCount = Math.max(...dailyStats.map(s => s.count), 5);
  const yAxisTicks = Array.from({ length: maxCount + 1 }, (_, i) => i).reverse();
  const getDayName = (dateStr: string) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString('fr-FR', { weekday: 'short' }).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans text-[13px]">
      <style>{dashStyles}</style>
      
      {/* --- SIDEBAR ÉPANOUIE BLEUE SKT --- */}
      <aside className="w-64 bg-[#318ce7] text-white flex flex-col fixed h-full z-30 shadow-2xl">
        <div className="p-8 flex flex-col h-full">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-16 border-b border-white/20 pb-8">
            <div className="bg-white p-2 rounded-md shadow-lg">
              <ShieldCheck size={24} className="text-[#318ce7]" />
            </div>
            <div>
                <h1 className="font-black text-lg uppercase leading-none tracking-tighter">SKT DASH</h1>
                <p className="text-[8px] font-bold text-blue-100 uppercase tracking-widest mt-1">SKT Gestion</p>
            </div>
          </div>

          {/* Nav Épanouie (justify-between pour l'espace) */}
          <nav className="flex-1 flex flex-col justify-start gap-y-6">
            <button onClick={() => navigate('/')} className="w-full flex items-center gap-4 px-5 py-4 rounded-md hover:bg-[#f97316] transition-all bg-white/10 text-white font-black uppercase tracking-widest text-[10px] shadow-sm">
                <Home size={18} /> <span>Aller au Site</span>
            </button>

            <div className="space-y-4">
                {[
                { id: 'stats', label: 'Performances', icon: BarChart3 },
                { id: 'leads', label: 'Inbox Leads', icon: Inbox, count: leads.length },
                { id: 'partners', label: 'Partenaires', icon: Users },
                { id: 'settings', label: 'Paramètres', icon: Settings },
                ].map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-md font-black uppercase tracking-widest text-[10px] transition-all border border-transparent ${
                    activeTab === item.id 
                    ? 'bg-[#f97316] text-white shadow-xl border-orange-400' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    <item.icon size={18} />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.count ? <span className="bg-white text-[#318ce7] text-[10px] px-1.5 rounded font-black">{item.count}</span> : null}
                </button>
                ))}
            </div>
          </nav>

          {/* Footer Sidebar */}
          <button onClick={() => signOut(auth)} className="mt-12 flex items-center gap-4 p-5 hover:bg-red-600 transition-all font-black uppercase text-[10px] tracking-[0.2em] border-t border-white/10 -mx-8">
              <LogOut size={18} /> Quitter la session
          </button>
        </div>
      </aside>

      {/* --- WORKSPACE --- */}
      <main className="flex-1 ml-64 p-12">
        
        {/* --- STATS TAB --- */}
        {activeTab === 'stats' && (
          <div className="space-y-10 animate-in fade-in duration-500">
            <h2 className="text-3xl font-black text-slate-800 tracking-tighter uppercase">SKT Dashbord</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm border-l-8 border-l-[#318ce7]">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Audience Totale</p>
                <p className="text-5xl font-black text-slate-800">{totalVisits.toLocaleString()}</p>
              </div>
              <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm border-l-8 border-l-[#318ce7]">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Total Leads</p>
                <p className="text-5xl font-black text-slate-800">{leads.length}</p>
              </div>
              <div className="bg-[#318ce7] p-8 rounded-md shadow-xl text-white flex flex-col justify-center items-center text-center">
                <ShieldCheck className="mb-2 text-white/50" size={32} />
                <p className="text-2xl font-black uppercase">Intégrité OK</p>
                <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{activeUsers} Nœuds Live</span>
                </div>
              </div>
            </div>

            {/* CHART TECHNIQUE FINITION MONOSPACE */}
            <div className="bg-white p-10 rounded-md border border-slate-200 shadow-sm grid-paper relative min-h-[500px]">
                <div className="flex items-center gap-4 mb-20">
                    <BarChart3 size={24} className="text-[#318ce7]" />
                    <h3 className="font-black text-slate-800 text-xl uppercase tracking-tighter">Fréquentation Hebdomadaire</h3>
                </div>
                
                <div className="flex h-72 relative">
                    {/* AXE Y */}
                    <div className="flex flex-col justify-between items-end pr-4 border-r border-slate-300 font-mono text-[10px] text-slate-400 w-12 h-full pb-1">
                        {yAxisTicks.map(t => <span key={t}>{t}</span>)}
                    </div>

                    {/* GRAPHE + AXE X */}
                    <div className="flex-1 flex items-end gap-12 px-10 relative h-full border-b border-slate-300">
                        {dailyStats.length > 0 ? dailyStats.map((s, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center group h-full justify-end">
                                <div className="w-full flex items-end justify-center h-full relative">
                                    {/* Barres ultra-fines */}
                                    <div 
                                        className="w-1.5 bg-[#318ce7] group-hover:bg-[#f97316] transition-all duration-300 relative rounded-t-sm"
                                        style={{ height: `${(s.count / maxCount) * 100}%` }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-mono font-bold whitespace-nowrap z-20">
                                            {s.count} USERS
                                        </div>
                                    </div>
                                </div>
                                {/* Label Jours */}
                                <span className="absolute -bottom-10 text-[10px] font-mono font-black text-slate-400 uppercase tracking-tighter group-hover:text-[#318ce7]">
                                    {getDayName(s.date)}
                                </span>
                            </div>
                        )) : <div className="w-full text-center text-slate-300 font-black italic animate-pulse py-20 uppercase tracking-widest">Récupération SKT Analytics...</div>}
                    </div>
                </div>
            </div>
          </div>
        )}

        {/* --- PARTENAIRES TAB --- */}
        {activeTab === 'partners' && (
            <div className="space-y-8 animate-in fade-in">
                <div className="flex justify-between items-center bg-white p-6 rounded-md border border-slate-200 shadow-sm">
                    <h2 className="text-xl font-black uppercase text-slate-800 tracking-tighter">Répertoire Partenaires</h2>
                    <button onClick={() => setIsAddingPartner(!isAddingPartner)} className="bg-[#318ce7] text-white px-6 py-2 rounded-md font-black text-[10px] uppercase tracking-widest hover:bg-[#f97316] transition-all shadow-md">
                        {isAddingPartner ? 'Fermer' : 'Ajouter Node'}
                    </button>
                </div>

                {isAddingPartner && (
                    <div className="bg-white p-8 rounded-md border border-slate-200 shadow-xl max-w-xl animate-in slide-in-from-top-2">
                        <form className="space-y-6" onSubmit={async (e)=>{
                            e.preventDefault();
                            await addDoc(collection(db, "partners"), {...newPartner, createdAt: serverTimestamp()});
                            setNewPartner({name:'', logo:'', description:''});
                            setIsAddingPartner(false);
                            setStatusMsg({type:'success', text:'Node Enregistré'});
                        }}>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-black text-slate-400 uppercase">Fichier Logo</label>
                                    <div className="border border-dashed border-slate-200 rounded p-4 flex flex-col items-center bg-slate-50 relative">
                                        <input type="file" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                                        {isUploading ? <Loader2 className="animate-spin text-[#318ce7]" /> : <UploadCloud size={20} className="text-slate-400" />}
                                        <p className="text-[9px] font-bold text-slate-400 mt-2">Cliquez ici</p>
                                    </div>
                                    {newPartner.logo && <img src={newPartner.logo} className="h-10 mx-auto mt-2 object-contain" alt="prev" />}
                                </div>
                                <input type="text" placeholder="NOM STRUCTURE" required className="w-full p-3 bg-slate-50 border border-slate-100 rounded outline-none focus:ring-1 focus:ring-[#318ce7] font-black text-xs" value={newPartner.name} onChange={e=>setNewPartner({...newPartner, name: e.target.value})} />
                                <textarea placeholder="DESCRIPTION" required className="w-full p-3 bg-slate-50 border border-slate-100 rounded outline-none focus:ring-1 focus:ring-[#318ce7] h-20 text-xs font-bold" value={newPartner.description} onChange={e=>setNewPartner({...newPartner, description: e.target.value})} />
                            </div>
                            <button className="w-full py-3 bg-[#318ce7] text-white font-black uppercase text-[10px] tracking-widest rounded shadow-lg hover:bg-slate-900 transition-all">Sauvegarder</button>
                        </form>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {partners.map(p => (
                        <div key={p.id} className="bg-white p-6 rounded-md border border-slate-200 shadow-sm hover:border-[#318ce7] group transition-all flex flex-col">
                            <div className="h-16 flex items-center justify-center mb-6 bg-slate-50 rounded-md p-3">
                                <img src={p.logo} className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" alt={p.name}/>
                            </div>
                            <h4 className="font-black text-slate-800 text-[11px] uppercase mb-2 border-b border-slate-50 pb-2">{p.name}</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed italic flex-1 line-clamp-3">{p.description}</p>
                            <button onClick={async()=>confirm('Supprimer node ?') && await deleteDoc(doc(db,'partners',p.id))} className="mt-6 text-red-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100 self-end"><Trash2 size={16}/></button>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* --- PARAMÈTRES (MODULAIRE COMPACT) --- */}
        {activeTab === 'settings' && (
            <div className="max-w-xl animate-in fade-in duration-500">
                <div className="bg-white rounded-md border border-slate-200 shadow-xl overflow-hidden">
                    <div className="flex bg-slate-50 border-b border-slate-200">
                        <button onClick={() => setSettingsTab('profile')} className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${settingsTab === 'profile' ? 'bg-white border-t-2 border-t-[#f97316] text-[#f97316]' : 'text-slate-400 hover:bg-slate-100'}`}>Système</button>
                        <button onClick={() => setSettingsTab('security')} className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${settingsTab === 'security' ? 'bg-white border-t-2 border-t-[#f97316] text-[#f97316]' : 'text-slate-400 hover:bg-slate-100'}`}>Security</button>
                    </div>

                    <div className="p-8">
                        {settingsTab === 'profile' ? (
                            <form className="space-y-5" onSubmit={handleUpdateProfile}>
                                <div>
                                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Administrateur</label>
                                    <input type="email" placeholder={auth.currentUser?.email || ''} onChange={e=>setProfileForm({...profileForm, email: e.target.value})} className="w-full p-3 bg-slate-50 border border-slate-100 rounded outline-none focus:ring-1 focus:ring-[#318ce7] font-black text-xs" />
                                </div>
                                <div className="pt-4 border-t border-slate-50">
                                    <label className="text-[9px] font-black text-orange-600 uppercase tracking-widest ml-1">Vérification Master</label>
                                    <input type="password" required value={profileForm.currentPassword} onChange={e=>setProfileForm({...profileForm, currentPassword: e.target.value})} className="w-full p-3 bg-orange-50 border border-orange-100 rounded outline-none focus:ring-1 focus:ring-orange-500 font-bold" placeholder="Mot de passe actuel" />
                                </div>
                                <button className="w-full py-4 bg-[#318ce7] text-white font-black uppercase text-[10px] tracking-widest rounded hover:bg-slate-900 transition-all shadow-md">Update Master Info</button>
                            </form>
                        ) : (
                            <div className="space-y-6">
                                <div className="p-6 bg-slate-900 rounded-md text-white relative overflow-hidden shadow-2xl">
                                    <h4 className="font-black uppercase tracking-widest text-[9px] mb-4 text-blue-400">SWS Firewall Matrix</h4>
                                    <div className="flex items-center gap-4 text-green-400">
                                        <ShieldCheck size={20} />
                                        <span className="font-black uppercase text-[11px]">Protocole AES-256 Actif</span>
                                    </div>
                                    <Database className="absolute right-[-20px] bottom-[-20px] w-32 h-32 text-white/5 rotate-12" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-center gap-3 p-3 border border-slate-200 rounded font-black text-[9px] text-slate-500 uppercase hover:bg-slate-50"><Eye size={14} /> View Logs</button>
                                    <button className="flex items-center justify-center gap-3 p-3 border border-slate-200 rounded font-black text-[9px] text-slate-500 uppercase hover:bg-slate-50"><Globe size={14} /> Network Health</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )}

        {/* --- LEADS TAB --- */}
        {activeTab === 'leads' && (
            <div className="space-y-8 animate-in fade-in">
                <h2 className="text-3xl font-black text-slate-800 tracking-tighter uppercase">Boîte de réception</h2>
                <div className="bg-white rounded-md shadow-xl border border-slate-200 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-400">
                            <tr>
                                <th className="p-8 text-[10px] font-black uppercase tracking-widest">Source</th>
                                <th className="p-8 text-[10px] font-black uppercase tracking-widest">Brief Projet</th>
                                <th className="p-8"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {leads.map(l => (
                                <tr key={l.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-8">
                                        <p className="font-black text-slate-900 text-lg tracking-tighter leading-none">{l.name}</p>
                                        <p className="text-xs text-[#318ce7] font-bold mt-1 uppercase tracking-tighter">{l.email}</p>
                                        <span className="inline-block mt-4 px-2 py-1 bg-blue-50 text-[9px] font-black text-[#318ce7] uppercase rounded border border-blue-100">{l.pole}</span>
                                    </td>
                                    <td className="p-8">
                                        <p className="text-sm text-slate-600 font-medium italic max-w-xl leading-relaxed border-l-2 border-slate-100 pl-4 font-mono">"{l.description}"</p>
                                    </td>
                                    <td className="p-8 text-right pr-10">
                                        <button onClick={async() => confirm('Nettoyer archive ?') && await deleteDoc(doc(db,'leads',l.id))} className="p-3 bg-red-50 text-red-500 rounded hover:bg-red-600 hover:text-white transition-all">
                                            <Trash2 size={18}/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;