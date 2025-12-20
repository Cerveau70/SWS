import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, X, Edit2, Trash2, Save, Truck, BrainCircuit, Users, Settings, BarChart3 } from 'lucide-react';

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

  // Load partners and check auth on mount
  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (!auth) {
      navigate('/admin/login');
      return;
    }

    const savedPartners = localStorage.getItem('sws_partners');
    if (savedPartners) {
      setPartners(JSON.parse(savedPartners));
    }
  }, [navigate]);

  const savePartnersToStorage = (updatedPartners: Partner[]) => {
    localStorage.setItem('sws_partners', JSON.stringify(updatedPartners));
  };

  const handleAddPartner = (e: React.FormEvent) => {
    e.preventDefault();
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

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* --- ADMIN HEADER --- */}
      <nav className="fixed w-full z-50 bg-[#318ce7]/90 backdrop-blur-md text-white shadow-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/admin/dashboard')}>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-2 rounded-xl shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                <div className="flex gap-1">
                  <Truck className="w-5 h-5 text-white" />
                  <BrainCircuit className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter leading-none">Admin Panel</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-orange-400 font-bold">Smart World Solutions</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => setActiveTab('partners')}
                className={`relative px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2.5 transition-all duration-300 group
                  ${activeTab === 'partners' ? 'text-orange-400' : 'text-blue-100 hover:text-white hover:bg-white/5'}`}
              >
                <Users className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>Partenaires</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`relative px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2.5 transition-all duration-300 group
                  ${activeTab === 'settings' ? 'text-orange-400' : 'text-blue-100 hover:text-white hover:bg-white/5'}`}
              >
                <Settings className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>Paramètres</span>
              </button>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="group bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-red-500/20 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Déconnexion
            </button>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden pt-20">
        {/* Mobile Navigation */}
        <div className="md:hidden bg-[#318ce7]/95 text-white border-b border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('partners')}
              className={`flex-1 px-4 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                activeTab === 'partners' ? 'bg-white/20 text-orange-400' : 'text-blue-100 hover:bg-white/10'
              }`}
            >
              <Users className="w-4 h-4" />
              Partenaires
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 px-4 py-3 text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                activeTab === 'settings' ? 'bg-white/20 text-orange-400' : 'text-blue-100 hover:bg-white/10'
              }`}
            >
              <Settings className="w-4 h-4" />
              Paramètres
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8">
          {activeTab === 'partners' ? (
            <div>
              {/* PARTNERS TAB */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-black text-slate-900">Gestion des Partenaires</h1>
                    <p className="text-slate-500 mt-1">{partners.length} partenaire(s) enregistré(s)</p>
                  </div>
                  {!isAddingPartner && (
                    <button
                      onClick={() => setIsAddingPartner(true)}
                      className="flex items-center gap-2 bg-[#318ce7] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-lg"
                    >
                      <Plus className="w-5 h-5" />
                      Ajouter un Partenaire
                    </button>
                  )}
                </div>

                {/* Add Partner Form */}
                {isAddingPartner && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border-l-4 border-orange-500">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Nouveau Partenaire</h2>
                    <form onSubmit={handleAddPartner} className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Nom</label>
                        <input
                          type="text"
                          value={newPartner.name}
                          onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
                          placeholder="Nom du partenaire"
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#318ce7]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Logo (emoji ou URL)</label>
                        <input
                          type="text"
                          value={newPartner.logo}
                          onChange={(e) => setNewPartner({ ...newPartner, logo: e.target.value })}
                          placeholder="Ex: 🏢 ou https://..."
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#318ce7]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
                        <textarea
                          value={newPartner.description}
                          onChange={(e) => setNewPartner({ ...newPartner, description: e.target.value })}
                          placeholder="Description du partenaire"
                          rows={3}
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#318ce7]"
                        />
                      </div>
                      <div className="flex gap-3">
                        <button
                          type="submit"
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold transition-colors"
                        >
                          Enregistrer
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsAddingPartner(false);
                            setNewPartner({ name: '', logo: '', description: '' });
                          }}
                          className="flex-1 bg-slate-300 hover:bg-slate-400 text-slate-900 px-4 py-2 rounded-lg font-bold transition-colors"
                        >
                          Annuler
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Partners Grid */}
                {partners.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                    <Users className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500 text-lg">Aucun partenaire pour le moment</p>
                    <button
                      onClick={() => setIsAddingPartner(true)}
                      className="mt-4 inline-flex items-center gap-2 bg-[#318ce7] hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Ajouter le premier partenaire
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {partners.map((partner) => (
                      <div key={partner.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
                        {editingId === partner.id ? (
                          // Edit Mode
                          <div className="p-6 space-y-4">
                            <input
                              type="text"
                              value={editValues.name}
                              onChange={(e) => setEditValues({ ...editValues, name: e.target.value })}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#318ce7]"
                            />
                            <input
                              type="text"
                              value={editValues.logo}
                              onChange={(e) => setEditValues({ ...editValues, logo: e.target.value })}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#318ce7]"
                            />
                            <textarea
                              value={editValues.description}
                              onChange={(e) => setEditValues({ ...editValues, description: e.target.value })}
                              rows={2}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#318ce7]"
                            />
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleSaveEdit(partner.id)}
                                className="flex-1 flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-bold transition-colors text-sm"
                              >
                                <Save className="w-4 h-4" />
                                Enregistrer
                              </button>
                              <button
                                onClick={() => setEditingId(null)}
                                className="flex-1 flex items-center justify-center gap-1 bg-slate-300 hover:bg-slate-400 text-slate-900 px-3 py-2 rounded-lg font-bold transition-colors text-sm"
                              >
                                <X className="w-4 h-4" />
                                Annuler
                              </button>
                            </div>
                          </div>
                        ) : (
                          // View Mode
                          <>
                            <div className="p-6">
                              <div className="text-4xl mb-3">{partner.logo}</div>
                              <h3 className="text-lg font-bold text-slate-900 mb-2">{partner.name}</h3>
                              <p className="text-sm text-slate-600 line-clamp-2">{partner.description}</p>
                            </div>
                            <div className="px-6 pb-4 flex gap-2">
                              <button
                                onClick={() => handleStartEdit(partner)}
                                className="flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold transition-colors text-sm"
                              >
                                <Edit2 className="w-4 h-4" />
                                Modifier
                              </button>
                              <button
                                onClick={() => handleDeletePartner(partner.id)}
                                className="flex-1 flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold transition-colors text-sm"
                              >
                                <Trash2 className="w-4 h-4" />
                                Supprimer
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            // SETTINGS TAB
            <div>
              <h1 className="text-3xl font-black text-slate-900 mb-6">Paramètres</h1>
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Informations Administrateur</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <p className="text-slate-600 font-medium">
                      {(() => {
                        try {
                          const auth = localStorage.getItem('adminAuth');
                          const parsed = JSON.parse(auth || '{}');
                          return parsed.email || 'Non disponible';
                        } catch {
                          return 'Non disponible';
                        }
                      })()}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Statut</label>
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Connecté
                    </span>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-slate-500">
                      Pour modifier vos identifiants, contactez le support technique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
