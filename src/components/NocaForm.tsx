import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import type { PersonalityType } from '../types/personality';

interface FormData {
  nome: string;
  email: string;
  telefono: string;
  persona: string;
  tracciabilita: string;
  rituale: number;
  intent: string;
  discovery: string;
}

interface NocaFormProps {
  onComplete: (personality: PersonalityType, formData: FormData) => void;
}

export function NocaForm({ onComplete }: NocaFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefono: '',
    persona: '',
    tracciabilita: '',
    rituale: 5,
    intent: '',
    discovery: ''
  });
  
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Calcola progresso
    let filled = 0;
    const required = 6; // nome, email, persona, tracciabilita, intent, discovery
    
    if (formData.nome) filled++;
    if (formData.email) filled++;
    if (formData.persona) filled++;
    if (formData.tracciabilita) filled++;
    if (formData.intent) filled++;
    if (formData.discovery) filled++;
    
    setProgress((filled / required) * 100);
  }, [formData]);
  
  const calculatePersonality = (data: FormData): PersonalityType => {
    const { persona, tracciabilita, rituale, intent } = data;
    
    // REGOLE IN ORDINE DI PRIORITÀ
    
    // 1. Alchimista del Tempo
    if (persona === 'wellness' && rituale >= 9) {
      return 'alchimista-tempo';
    }
    
    // 2. Giardiniere Sensoriale
    if (persona === 'foodie' && rituale >= 8) {
      return 'giardiniere-sensoriale';
    }
    
    // 3. Custode Verde
    if (persona === 'eco_anxious' && tracciabilita === 'si' && rituale >= 7 && intent === 'attivo') {
      return 'custode-verde';
    }
    
    // 4. Architetto del Futuro
    if (persona === 'greentech' && tracciabilita === 'si' && (intent === 'attivo' || intent === 'pensando')) {
      return 'architetto-futuro';
    }
    
    // 5. Navigatore Etico
    if (persona === 'professionista' && tracciabilita === 'si' && intent !== 'nonprioritario') {
      return 'navigatore-etico';
    }
    
    // 6. Cacao Dormiente
    if (tracciabilita === 'no' && rituale <= 3 && intent === 'nonprioritario') {
      return 'cacao-dormiente';
    }
    
    // FALLBACK: Alchimista del Tempo
    return 'alchimista-tempo';
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calcola personalità
    const personality = calculatePersonality(formData);
    
    // Salva in localStorage
    localStorage.setItem('noca_user_data', JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString()
    }));
    localStorage.setItem('noca_personality', personality);
    
    // Callback
    onComplete(personality, formData);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7f5] to-[#e8ebe8]">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#2d5016] to-[#4a7c2c] text-white rounded-2xl p-8 mb-6 text-center shadow-xl"
        >
          <h1 className="text-4xl mb-2 tracking-wider font-light">NOCA</h1>
          <p className="text-lg opacity-90">Benvenuto nel mondo di NOCA</p>
        </motion.div>
        
        {/* Progress Bar */}
        <div className="bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
          <motion.div
            className="bg-[#4a7c2c] h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* SEZIONE CONTATTI */}
            <div>
              <h2 className="text-xl text-[#2d5016] mb-6 pb-3 border-b-2 border-gray-100 font-semibold">
                I tuoi contatti
              </h2>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Nome e Cognome <span className="text-[#4a7c2c]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4a7c2c] focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Email <span className="text-[#4a7c2c]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4a7c2c] focus:outline-none transition-colors"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Useremo questa email per inviarti aggiornamenti esclusivi
                  </p>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Numero di telefono (opzionale)
                  </label>
                  <input
                    type="tel"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4a7c2c] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
            
            {/* DOMANDA 1: PERSONA */}
            <div>
              <h2 className="text-xl text-[#2d5016] mb-6 pb-3 border-b-2 border-gray-100 font-semibold">
                Conosciamoci meglio
              </h2>
              
              <label className="block text-gray-700 mb-3 font-medium">
                Quale descrizione ti rappresenta meglio? <span className="text-[#4a7c2c]">*</span>
              </label>
              
              <div className="space-y-3">
                {[
                  { value: 'eco_anxious', label: 'Eco-Anxious - Sono preoccupato per la crisi ambientale e cerco azioni concrete' },
                  { value: 'greentech', label: 'GreenTech Enthusiast - Mi affascina la tecnologia applicata alla sostenibilità' },
                  { value: 'foodie', label: 'Mindful Foodie - Amo il cibo di qualità e la connessione con le sue origini' },
                  { value: 'professionista', label: 'Professionista Etico - Cerco coerenza tra valori personali e scelte professionali' },
                  { value: 'wellness', label: 'Wellness Seeker - Priorità al benessere personale e alle scelte consapevoli' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.persona === option.value
                        ? 'border-[#4a7c2c] bg-[#f9fdf9]'
                        : 'border-gray-200 hover:border-[#4a7c2c] hover:bg-[#f9fdf9]'
                    }`}
                  >
                    <input
                      type="radio"
                      required
                      value={option.value}
                      checked={formData.persona === option.value}
                      onChange={(e) => setFormData({ ...formData, persona: e.target.value })}
                      className="w-5 h-5 text-[#4a7c2c] mr-3"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* DOMANDA 2: TRACCIABILITÀ */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                La tracciabilità del prodotto è importante nelle tue decisioni d'acquisto? <span className="text-[#4a7c2c]">*</span>
              </label>
              <p className="text-sm text-gray-500 mb-3">
                Sapere da dove proviene un prodotto e come è stato realizzato
              </p>
              
              <div className="space-y-3">
                {[
                  { value: 'si', label: 'Sì, è importante per me' },
                  { value: 'no', label: 'No, non è una priorità' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.tracciabilita === option.value
                        ? 'border-[#4a7c2c] bg-[#f9fdf9]'
                        : 'border-gray-200 hover:border-[#4a7c2c] hover:bg-[#f9fdf9]'
                    }`}
                  >
                    <input
                      type="radio"
                      required
                      value={option.value}
                      checked={formData.tracciabilita === option.value}
                      onChange={(e) => setFormData({ ...formData, tracciabilita: e.target.value })}
                      className="w-5 h-5 text-[#4a7c2c] mr-3"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* DOMANDA 3: RITUALE (SLIDER) */}
            <div>
              <label className="block text-gray-700 mb-4 font-medium">
                Quanto tempo dedichi normalmente a goderti un momento per te stesso? <span className="text-[#4a7c2c]">*</span>
              </label>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600 gap-4">
                  <span className="text-center">Non mi fermo mai: il "per me" viene sempre dopo</span>
                  <span className="text-center">Il tempo per me è sacro: lo proteggo e lo vivo appieno</span>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.rituale}
                  onChange={(e) => setFormData({ ...formData, rituale: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#4a7c2c]"
                  style={{
                    background: `linear-gradient(to right, #4a7c2c 0%, #4a7c2c ${(formData.rituale - 1) * 11.11}%, #e5e7eb ${(formData.rituale - 1) * 11.11}%, #e5e7eb 100%)`
                  }}
                />
                
                <div className="text-center text-3xl font-semibold text-[#4a7c2c]">
                  {formData.rituale}
                </div>
              </div>
            </div>
            
            {/* DOMANDA 4: INTENT */}
            <div>
              <label className="block text-gray-700 mb-3 font-medium">
                Stai attualmente cercando di cambiare le tue abitudini di consumo verso scelte più sostenibili? <span className="text-[#4a7c2c]">*</span>
              </label>
              
              <div className="space-y-3">
                {[
                  { value: 'attivo', label: 'Sì, attivamente' },
                  { value: 'pensando', label: 'Ci sto pensando' },
                  { value: 'soddisfatto', label: 'No, sono già soddisfatto delle mie scelte' },
                  { value: 'nonprioritario', label: 'Non è una mia priorità al momento' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.intent === option.value
                        ? 'border-[#4a7c2c] bg-[#f9fdf9]'
                        : 'border-gray-200 hover:border-[#4a7c2c] hover:bg-[#f9fdf9]'
                    }`}
                  >
                    <input
                      type="radio"
                      required
                      value={option.value}
                      checked={formData.intent === option.value}
                      onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                      className="w-5 h-5 text-[#4a7c2c] mr-3"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* DOMANDA 5: DISCOVERY */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Come hai scoperto NOCA? <span className="text-[#4a7c2c]">*</span>
              </label>
              
              <select
                required
                value={formData.discovery}
                onChange={(e) => setFormData({ ...formData, discovery: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4a7c2c] focus:outline-none transition-colors"
              >
                <option value="">Seleziona un'opzione</option>
                <option value="passaparola">Passaparola</option>
                <option value="social">Social media</option>
                <option value="ricerca">Ricerca online</option>
                <option value="evento">Questo evento</option>
                <option value="altro">Altro</option>
              </select>
            </div>
            
            {/* SUBMIT BUTTON */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] text-white py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Scopri il tuo profilo NOCA
            </motion.button>
          </form>
        </motion.div>
        
        {/* Spiegazioni */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-[#f9fdf9] rounded-2xl p-8"
        >
          <h2 className="text-2xl text-[#2d5016] mb-6 text-center font-semibold">
            Perché queste domande?
          </h2>
          
          <div className="space-y-4">
            {[
              {
                emoji: '📧',
                title: 'Sezione Contatti',
                text: 'Identità base per personalizzazione e follow-up post-evento.'
              },
              {
                emoji: '🎯',
                title: 'Domanda 1: Master Segmentation',
                text: 'Permette di inviare contenuti personalizzati per ogni tipo di audience.'
              },
              {
                emoji: '✅',
                title: 'Domanda 2: Value Alignment',
                text: 'Identifica se i valori di NOCA risuonano con te.'
              },
              {
                emoji: '⏰',
                title: 'Domanda 3: Psychographic Profiling',
                text: 'Comprende il tuo rapporto con il tempo per te stesso.'
              },
              {
                emoji: '🔄',
                title: 'Domanda 4: Intent Detection',
                text: 'Identifica la fase del tuo percorso di consapevolezza.'
              },
              {
                emoji: '📍',
                title: 'Domanda 5: Attribution',
                text: 'Capisce come ci hai conosciuto per migliorare la comunicazione.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white p-5 rounded-lg border-l-4 border-[#4a7c2c]"
              >
                <h3 className="text-[#2d5016] mb-2 font-medium">
                  {item.emoji} {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
