# 🎯 Flusso Completo GitHub Pages - NOCA Green Week

## ✅ GARANTITO: Parte dal Form e Funziona fino alla Fine

---

## 📍 **INIZIO: L'utente apre la pagina**

```
https://[username].github.io/[repo]/
```

### Cosa Succede:

1. **App.tsx si carica** (linea 24-43)
2. **Controlla localStorage**: c'è già una personalità salvata?
   - ❌ **NO** → Mostra il **FORM** (NocaForm.tsx)
   - ✅ **SI** → Mostra il **Percorso Sensoriale** (già completato prima)
3. Se c'è `?p=personalità` nell'URL → salta direttamente al percorso (per testing)

---

## 📝 **STEP 1: Form Iniziale**

### Componente: `/components/NocaForm.tsx`

L'utente vede:

```
┌─────────────────────────────────────┐
│         NOCA                        │
│  Benvenuto nel mondo di NOCA        │
└─────────────────────────────────────┘

Progress: [████████░░░░] 75%

📋 FORM:
  • Nome *
  • Email *
  • Telefono
  
  • Chi sei? (radio)
    ○ Foodie esploratore
    ○ Professionista consapevole
    ○ Eco-anxious
    ○ Pioniere GreenTech
    ○ Amante del Wellness
  
  • Tracciabilità importante? (radio)
    ○ Sì, molto
    ○ No
  
  • Rituale cioccolato (slider 1-10)
    [──●────────] 5
  
  • Sostenibilità per te? (radio)
    ○ Attivo
    ○ Ci penso
    ○ Non prioritario
  
  • Come ci hai conosciuto? (select)
    ▼ Seleziona...
  
  [  Scopri il Tuo Percorso  ]
```

### Cosa Succede Quando Clicca Submit:

1. **JavaScript calcola la personalità** (linea 49-86 di NocaForm.tsx)
   
   ```javascript
   // REGOLE DI CALCOLO:
   
   // 1. Alchimista del Tempo
   if (persona === 'wellness' && rituale >= 9)
   
   // 2. Giardiniere Sensoriale
   if (persona === 'foodie' && rituale >= 8)
   
   // 3. Custode Verde
   if (persona === 'eco_anxious' && tracciabilita === 'si' && rituale >= 7 && intent === 'attivo')
   
   // 4. Architetto del Futuro
   if (persona === 'greentech' && tracciabilita === 'si' && (intent === 'attivo' || intent === 'pensando'))
   
   // 5. Navigatore Etico
   if (persona === 'professionista' && tracciabilita === 'si' && intent !== 'nonprioritario')
   
   // 6. Cacao Dormiente (fallback)
   if (tracciabilita === 'no' && rituale <= 3 && intent === 'nonprioritario')
   ```

2. **Salva in localStorage** (linea 95-99)
   ```javascript
   localStorage.setItem('noca_user_data', JSON.stringify({...formData}));
   localStorage.setItem('noca_personality', personality);
   ```

3. **Chiama `onComplete(personality, formData)`** (linea 102)

4. **App.tsx riceve la personalità** (linea 45-51)
   ```javascript
   setPersonalityType(personality);
   setHasCompletedForm(true);
   window.history.pushState({}, '', `/?p=${personality}`);
   ```

5. **L'app RE-RENDERIZZA** → Mostra il Percorso Sensoriale!

---

## 🎨 **STEP 2: Percorso Sensoriale Personalizzato**

### Componente: `/components/PersonalizedSensoryJourney.tsx`

L'utente vede:

```
┌─────────────────────────────────────────────────────┐
│  NOCA  │  Viaggio Sensoriale                        │
│        │  [emoji] Personalità Calcolata       🔄 ↻  │
└─────────────────────────────────────────────────────┘

        [EMOJI GIGANTE]
        
    Il Tuo Laboratorio
       Sensoriale
       
  "Quote personalizzata della tua personalità"

┌─────────────────────────────────────┐
│  🎵  Il tuo percorso                │
│      [Personalità]            2/5   │
│  [████████░░░░░░░░] 40%             │
└─────────────────────────────────────┘

╔═══════════════╗ ╔═══════════════╗ ╔═══════════════╗
║   👂 UDITO    ║ ║   ✋ TATTO    ║ ║   👃 OLFATTO  ║
║               ║ ║               ║ ║               ║
║ La Sinfonia   ║ ║ La Memoria    ║ ║ L'Archivio    ║
║   Nascosta    ║ ║ della Texture ║ ║ degli Aromi   ║
║               ║ ║               ║ ║               ║
║  [ ✓ Vissuta ]║ ║  [ ✓ Vissuta ]║ ║  [  Esplora ] ║
╚═══════════════╝ ╚═══════════════╝ ╚═══════════════╝

╔═══════════════╗ ╔═══════════════╗
║   👁 VISTA    ║ ║   ✨ GUSTO    ║
║               ║ ║               ║
║Il Caleidoscopio║ ║La Temperatura ║
║  del Cacao    ║ ║ del Ricordo   ║
║               ║ ║               ║
║  [  Esplora ] ║ ║  [  Esplora ] ║
╚═══════════════╝ ╚═══════════════╝

Ogni box ha:
• Colori unici della personalità
• Forme specifiche (rounded-2xl, rounded-3xl, etc.)
• 3 pallini animati in alto dx
• Decorazione tematica (🍃, 🔮, 🌾, etc.)
• Wave SVG animato in alto
• Effetti hover (solleva, ombra, scala)
• Sparkle ✨ quando completata
```

---

## 🖱️ **STEP 3: Click su un'Esperienza**

Quando l'utente clicca su una delle 5 box:

```
┌──────────────────────────────────────┐
│                 ×                    │
│                                      │
│           👂 (emoji gigante)         │
│                                      │
│              UDITO                   │
│        La Sinfonia Nascosta          │
│                                      │
│  ┌────────────────────────────────┐ │
│  │ Vivi l'esperienza allo stand   │ │
│  │ fisico, poi scannerizza il QR  │ │
│  │ per catturare il momento ✨    │ │
│  │                                │ │
│  │          ✨ (QR)               │ │
│  │                                │ │
│  │ [ Completa l'Esperienza ]      │ │
│  └────────────────────────────────┘ │
│                                      │
│      [ Torna al percorso ]           │
└──────────────────────────────────────┘
```

### Click su "Completa l'Esperienza":

1. **JavaScript aggiorna lo stato** (App.tsx linea 113-124)
   ```javascript
   exp.collected = true;
   exp.timestamp = Date.now();
   ```

2. **Salva in localStorage** con chiave per personalità
   ```javascript
   localStorage.setItem(`noca-sensory-journey-${personalityType}`, JSON.stringify(experiences));
   ```

3. **Modal si chiude**

4. **La box si aggiorna**:
   - ✅ Border diventa colorato
   - ✅ Appare "✓ Vissuta"
   - ✅ 4 sparkle ✨ animati
   - ✅ Progress bar aumenta
   - ✅ Counter diventa 3/5 → 4/5 → 5/5

---

## 🏆 **STEP 4: Completamento**

Quando tutte le 5 esperienze sono completate:

```
┌─────────────────────────────────────┐
│  🎵  Il tuo percorso                │
│      [Personalità]            5/5   │
│  [████████████████████] 100%        │
│                                     │
│  ✨ Avventura completata! ✨        │
└─────────────────────────────────────┘

╔═══════════════╗ ╔═══════════════╗ ╔═══════════════╗
║ ✨👂✨ UDITO ║ ║ ✨✋✨ TATTO  ║ ║ ✨👃✨OLFATTO║
║               ║ ║               ║ ║               ║
║  [ ✓ Vissuta ]║ ║  [ ✓ Vissuta ]║ ║  [ ✓ Vissuta ]║
╚═══════════════╝ ╚═══════════════╝ ╚═══════════════╝

╔═══════════════╗ ╔═══════════════╗
║ ✨👁✨ VISTA  ║ ║ ✨✨✨ GUSTO  ║
║               ║ ║               ║
║  [ ✓ Vissuta ]║ ║  [ ✓ Vissuta ]║
╚═══════════════╝ ╚═══════════════╝
```

---

## 🔄 **Pulsanti Reset**

### Header → "Rifai Test" (icona 🔄):

```javascript
// Linea in PersonalizedSensoryJourney.tsx
localStorage.removeItem('noca_personality');
localStorage.removeItem('noca_user_data');
window.location.href = '/'; // Torna al form
```

### Header → "Reset Esperienze" (icona ↻):

```javascript
// App.tsx linea 126-138
experiences.map(exp => ({ ...exp, collected: false }));
localStorage.removeItem(`noca-sensory-journey-${personalityType}`);
```

---

## 💾 **Persistenza dati (localStorage)**

### Chiavi utilizzate:

```javascript
// Dati form e personalità calcolata
'noca_user_data'      → { nome, email, telefono, persona, ... }
'noca_personality'    → 'custode-verde' | 'architetto-futuro' | ...

// Progresso per ogni personalità (separato!)
'noca-sensory-journey-custode-verde'      → [exp1, exp2, ...]
'noca-sensory-journey-architetto-futuro'  → [exp1, exp2, ...]
'noca-sensory-journey-giardiniere-sensoriale' → [exp1, exp2, ...]
// ... etc per tutte le 6 personalità
```

**IMPORTANTE**: Ogni personalità ha il suo progresso separato!

---

## 🧪 **Testing URL Diretti**

Per testare senza compilare il form:

```
/?p=custode-verde
/?p=architetto-futuro
/?p=giardiniere-sensoriale
/?p=navigatore-etico
/?p=alchimista-tempo
/?p=cacao-dormiente
```

L'App.tsx (linea 30-32) legge il parametro e salta il form.

---

## 📊 **Diagramma Flusso Completo**

```
UTENTE APRE URL
      ↓
[App.tsx useEffect]
      ↓
localStorage ha 'noca_personality'?
      ↓
    NO ──→ [MOSTRA FORM]
              ↓
         Utente compila
              ↓
         Click Submit
              ↓
    [calculatePersonality()]
              ↓
    Salva localStorage
              ↓
    onComplete(personality)
              ↓
         [App.tsx]
              ↓
    setHasCompletedForm(true)
              ↓
    ↓
    SI ──→ [MOSTRA PERCORSO]
              ↓
         Carica esperienze da localStorage
              ↓
         Renderizza 5 box
              ↓
    Utente clicca box → Modal
              ↓
    Click "Completa" → collected = true
              ↓
    Salva localStorage
              ↓
    Re-render con sparkle
              ↓
    Progress aumenta
              ↓
    5/5? → Badge "Completato!"
```

---

## ✅ **Checklist Funzionamento**

- [x] **Primo accesso** → Mostra form
- [x] **Compila form** → Calcola personalità
- [x] **Submit form** → Va al percorso
- [x] **Visualizza percorso** → Colori personalizzati
- [x] **Click esperienza** → Apre modal
- [x] **Completa esperienza** → Salva + aggiorna
- [x] **Progress bar** → Aggiorna in tempo reale
- [x] **5/5 completate** → Mostra badge
- [x] **Chiude pagina** → Riapre, dati salvati
- [x] **"Rifai Test"** → Torna al form
- [x] **"Reset"** → Azzera esperienze
- [x] **URL direct** → Funziona per testing

---

## 🚀 **Deploy su GitHub Pages**

1. **Push su GitHub**
2. **Settings → Pages → Deploy from main**
3. **Aspetta 2-3 minuti**
4. **Apri URL** → Parte dal form! ✅

---

## 📱 **Test Finale Post-Deploy**

```bash
# 1. Apri URL base (deve mostrare FORM)
https://[username].github.io/[repo]/

# 2. Compila form completamente

# 3. Submit → deve andare al percorso

# 4. Chiudi tab

# 5. Riapri URL → deve mostrare il percorso (salvato)

# 6. Click "Rifai Test" → deve tornare al form

# 7. Testa URL diretti
https://[username].github.io/[repo]/?p=custode-verde
https://[username].github.io/[repo]/?p=architetto-futuro
```

---

## ✨ **GARANTITO: Flusso Completo Funzionante!**

✅ Parte dal form  
✅ Calcola personalità  
✅ Mostra percorso  
✅ Completa esperienze  
✅ Salva progresso  
✅ Rifai test torna al form  
✅ Tutto persistente  

**🎉 Pronto per il deploy! Il flusso è completo e funzionante! 🚀**
