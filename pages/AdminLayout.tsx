import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, Plus, X, Edit2, Trash2, Save, 
  Truck, BrainCircuit, Users, Settings, 
  LayoutDashboard, Menu, ChevronRight
} from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isAddingPartner, setIsAddingPartner] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState({ name: '', logo: '', description: '' });
  const [newPartner, setNewPartner] = useState({ name: '', logo: '', description: '' });
  const [activeTab, setActiveTab] = useState<'partners' | 'settings'>('partners');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (!auth) {
      navigate('/admin/login');
      return;
    }
    const savedPartners = localStorage.getItem('sws_partners');
    if (savedPartners) setPartners(JSON.parse(savedPartners));
  }, [navigate]);

  const handleAddPartner = () => {
    if (!newPartner.name.trim()) return;
    
    const partner: Partner = {
      id: Date.now().toString(),
      name: newPartner.name,
      logo: newPartner.logo || '🏢',
      description: newPartner.description,
    };
    
    const updated = [...partners, partner];
    setPartners(updated);
    savePartnersToStorage(updated);
    setNewPartner({ name: '', logo: '', description: '' });
    setIsAddingPartner(false);
  };

  const handleStartEdit = (partner: Partner) => {
    setEditingId(partner.id);
    setEditValues({
      name: partner.name,
      logo: partner.logo,
      description: partner.description,
    });
  };

  const handleSaveEdit = (id: string) => {
    const updated = partners.map((p) =>
      p.id === id ? { ...p, ...editValues } : p
    );
    setPartners(updated);
    savePartnersToStorage(updated);
    setEditingId(null);
  };

  const handleDeletePartner = (id: string) => {
    const updated = partners.filter((p) => p.id !== id);
    setPartners(updated);
    savePartnersToStorage(updated);
  };

  const savePartnersToStorage = (updatedPartners: Partner[]) => {
    localStorage.setItem('sws_partners', JSON.stringify(updatedPartners));
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  // --- Sidebar Item Component ---
  const NavItem = ({ id, label, icon: Icon }: { id: any, label: string, icon: any }) => (
    <button
      onClick={() => { setActiveTab(id); setIsMobileMenuOpen(false); }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
        activeTab === id 
        ? 'bg-blue-50 text-[#318ce7] shadow-sm' 
        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      <Icon className={`w-5 h-5 ${activeTab === id ? 'text-[#318ce7]' : 'text-slate-400'}`} />
      <span className="flex-1 text-left">{label}</span>
      {activeTab === id && <ChevronRight className="w-4 h-4" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      
      {/* --- SIDEBAR (Desktop) --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="bg-[#318ce7] p-2 rounded-lg shadow-lg shadow-blue-200 text-white">
              <BrainCircuit size={24} />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 leading-tight">SWS Admin</h1>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Smart Solutions</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <NavItem id="partners" label="Partenaires" icon={Users} />
            <NavItem id="settings" label="Paramètres" icon={Settings} />
          </nav>

          {/* Logout */}
          <div className="pt-6 border-t border-slate-100">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors"
            >
              <LogOut size={20} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header (Mobile Toggle & Title) */}
        <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-slate-200 lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-slate-600">
            <Menu size={24} />
          </button>
          <span className="font-bold text-slate-800">Panel Admin</span>
          <div className="w-8" /> {/* Spacer */}
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-6xl mx-auto">
            
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {activeTab === 'partners' ? 'Gestion des Partenaires' : 'Paramètres du compte'}
                </h2>
                <p className="text-slate-500">
                  {activeTab === 'partners' 
                    ? `Vous avez actuellement ${partners.length} partenaires.` 
                    : 'Gérez vos informations de connexion et préférences.'}
                </p>
              </div>
              
              {activeTab === 'partners' && !isAddingPartner && (
                <button
                  onClick={() => setIsAddingPartner(true)}
                  className="inline-flex items-center justify-center gap-2 bg-[#318ce7] hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold transition-all shadow-md shadow-blue-100"
                >
                  <Plus size={18} />
                  Nouveau partenaire
                </button>
              )}
            </div>

            {/* Content Switcher */}
            {activeTab === 'partners' ? (
              <div className="space-y-6">
                
                {/* Add Partner Form */}
                {isAddingPartner && (
                  <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-bold text-slate-900">Ajouter un partenaire</h3>
                      <button onClick={() => setIsAddingPartner(false)} className="text-slate-400 hover:text-slate-600">
                        <X size={20} />
                      </button>
                    </div>
                    {/* ... Form Inputs (Simplifiés pour le design) ... */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Nom du partenaire"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
                        />
                        <input
                          type="text"
                          placeholder="Logo (URL ou Emoji)"
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          onChange={(e) => setNewPartner({ ...newPartner, logo: e.target.value })}
                        />
                    </div>
                    <textarea
                      placeholder="Description"
                      rows={3}
                      className="w-full mt-4 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      onChange={(e) => setNewPartner({ ...newPartner, description: e.target.value })}
                    />
                    <div className="flex justify-end gap-3 mt-6">
                      <button onClick={() => setIsAddingPartner(false)} className="px-5 py-2 text-slate-600 font-medium">Annuler</button>
                      <button 
                         onClick={handleAddPartner}
                         className="px-6 py-2 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
                      >
                        Créer le partenaire
                      </button>
                    </div>
                  </div>
                )}

                {/* Grid */}
                {partners.length === 0 ? (
                  <div className="bg-white border border-dashed border-slate-300 rounded-3xl p-20 text-center">
                    <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Users className="text-slate-400" />
                    </div>
                    <p className="text-slate-500 font-medium">Aucun partenaire trouvé</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {partners.map((partner) => (
                      <div key={partner.id} className="group bg-white border border-slate-100 p-5 rounded-2xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                        {editingId === partner.id ? (
                          // Mode Édition
                          <div className="space-y-4">
                            <input
                              type="text"
                              value={editValues.name}
                              onChange={(e) => setEditValues({ ...editValues, name: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                            <input
                              type="text"
                              value={editValues.logo}
                              onChange={(e) => setEditValues({ ...editValues, logo: e.target.value })}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                            <textarea
                              value={editValues.description}
                              onChange={(e) => setEditValues({ ...editValues, description: e.target.value })}
                              rows={2}
                              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleSaveEdit(partner.id)}
                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors text-sm"
                              >
                                <Save size={16} />
                                Enregistrer
                              </button>
                              <button
                                onClick={() => setEditingId(null)}
                                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-300 hover:bg-slate-400 text-slate-900 rounded-lg font-semibold transition-colors text-sm"
                              >
                                <X size={16} />
                                Annuler
                              </button>
                            </div>
                          </div>
                        ) : (
                          // Mode Affichage
                          <>
                            <div className="flex justify-between items-start mb-4">
                              <div className="text-4xl bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {partner.logo}
                              </div>
                              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={() => handleStartEdit(partner)}
                                  className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                  <Edit2 size={16} />
                                </button>
                                <button
                                  onClick={() => handleDeletePartner(partner.id)}
                                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg mb-1">{partner.name}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{partner.description}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Settings Section */
              <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm max-w-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100 text-green-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-bold">Compte Administrateur Actif</span>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Adresse Email</label>
                    <p className="text-slate-900 font-semibold text-lg">admin@sws-solutions.com</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <button className="text-[#318ce7] font-bold text-sm hover:underline">Modifier le mot de passe</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Overlay mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;