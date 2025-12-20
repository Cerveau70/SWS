import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, X, Edit2, Trash2, Save } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
}

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isAddingPartner, setIsAddingPartner] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newPartner, setNewPartner] = useState({ name: '', logo: '', description: '' });

  // Load partners from localStorage on mount
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

  const handleEditPartner = (id: string, updatedPartner: Partner) => {
    const updated = partners.map((p) => (p.id === id ? updatedPartner : p));
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
    <main className="min-h-screen pt-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-black text-[#318ce7] mb-2">Tableau de Bord Admin</h1>
            <p className="text-gray-600">Gérez les partenaires et les contenus du site</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            Déconnexion
          </button>
        </div>

        {/* Partenaires Section */}
        <div className="bg-white rounded-3xl border border-gray-200 p-10 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-[#318ce7]">Gestion des Partenaires</h2>
            {!isAddingPartner && (
              <button
                onClick={() => setIsAddingPartner(true)}
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20"
              >
                <Plus className="w-5 h-5" />
                Ajouter un partenaire
              </button>
            )}
          </div>

          {/* Add Partner Form */}
          {isAddingPartner && (
            <form onSubmit={handleAddPartner} className="mb-10 p-8 bg-slate-50 rounded-2xl border border-gray-200 space-y-4">
              <h3 className="text-lg font-bold text-[#318ce7] mb-6">Nouveau Partenaire</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#318ce7] mb-2">Nom du partenaire</label>
                  <input
                    type="text"
                    value={newPartner.name}
                    onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
                    placeholder="Ex: Acme Corp"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318ce7] outline-none font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#318ce7] mb-2">Logo/Emoji</label>
                  <input
                    type="text"
                    value={newPartner.logo}
                    onChange={(e) => setNewPartner({ ...newPartner, logo: e.target.value })}
                    placeholder="🏢 ou lien URL"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318ce7] outline-none font-medium"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#318ce7] mb-2">Description</label>
                <textarea
                  value={newPartner.description}
                  onChange={(e) => setNewPartner({ ...newPartner, description: e.target.value })}
                  placeholder="Décrivez ce partenaire..."
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318ce7] outline-none font-medium resize-none"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#318ce7] hover:bg-[#2671ba] text-white font-bold rounded-lg transition-all"
                >
                  Ajouter
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingPartner(false);
                    setNewPartner({ name: '', logo: '', description: '' });
                  }}
                  className="px-8 py-3 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold rounded-lg transition-all"
                >
                  Annuler
                </button>
              </div>
            </form>
          )}

          {/* Partners List */}
          {partners.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg mb-6 font-medium">Aucun partenaire ajouté pour le moment.</p>
              <button
                onClick={() => setIsAddingPartner(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all"
              >
                <Plus className="w-5 h-5" />
                Ajouter le premier partenaire
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner) => (
                <div key={partner.id} className="bg-slate-50 border border-gray-200 rounded-2xl p-6 hover:border-[#318ce7] transition-all">
                  {editingId === partner.id ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={partner.name}
                        onChange={(e) => setPartners(partners.map((p) => (p.id === partner.id ? { ...p, name: e.target.value } : p)))}
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318ce7] outline-none font-bold"
                      />
                      <input
                        type="text"
                        value={partner.logo}
                        onChange={(e) => setPartners(partners.map((p) => (p.id === partner.id ? { ...p, logo: e.target.value } : p)))}
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318ce7] outline-none font-medium text-sm"
                      />
                      <textarea
                        value={partner.description}
                        onChange={(e) => setPartners(partners.map((p) => (p.id === partner.id ? { ...p, description: e.target.value } : p)))}
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#318ce7] outline-none font-medium text-sm resize-none"
                        rows={2}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditPartner(partner.id, partner)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#318ce7] hover:bg-[#2671ba] text-white font-bold rounded-lg transition-all"
                        >
                          <Save className="w-4 h-4" />
                          Sauvegarder
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="flex-1 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold rounded-lg transition-all"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="text-5xl mb-4">{partner.logo}</div>
                      <h3 className="text-xl font-bold text-[#318ce7] mb-2">{partner.name}</h3>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{partner.description}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingId(partner.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all"
                        >
                          <Edit2 className="w-4 h-4" />
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDeletePartner(partner.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all"
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
    </main>
  );
};

export default AdminDashboard;
