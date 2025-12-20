import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateAssistantResponse = async (userPrompt: string): Promise<string> => {
  if (!API_KEY) {
    return "Je suis désolé, je n'ai pas accès à ma clé API pour le moment. Veuillez contacter l'équipe directement par téléphone.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `Tu es l'assistant virtuel intelligent de SkyWay Technologies (Smart World Solutions). 
        L'entreprise a deux pôles d'expertise : 
        1. Transport & Logistique (Flotte internationale, dernier kilomètre, frêt sécurisé).
        2. Informatique & Data/IA (Analyse prédictive, développement d'IA sur mesure, cybersécurité).
        
        Ton but est d'aider le client à qualifier son besoin. Sois professionnel, concis, et courtois. 
        Si la demande concerne le transport, demande des détails sur le volume ou la destination si manquant.
        Si la demande concerne la Data/IA, demande le type de données ou l'objectif business.
        Réponds toujours en Français.`,
        temperature: 0.7,
      }
    });

    return response.text || "Désolé, je n'ai pas pu générer une réponse. Veuillez réessayer.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur technique est survenue. Notre équipe a été notifiée.";
  }
};