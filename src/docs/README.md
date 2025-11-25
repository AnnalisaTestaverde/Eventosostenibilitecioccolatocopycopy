# NOCA - Percorso Sensoriale Personalizzato

Sistema completo di form e visualizzazione personalizzata per l'evento Green Week di NOCA.

## 🚀 Come Funziona

### 1️⃣ **Form Iniziale** (`index.html`)
L'utente compila il form con:
- Dati di contatto (nome, email, telefono)
- 5 domande strategiche di segmentazione

### 2️⃣ **Calcolo Personalità**
Il JavaScript calcola automaticamente la personalità in base alle risposte:

| Personalità | Condizioni |
|-------------|------------|
| **Alchimista del Tempo** ⏳ | `persona === 'wellness'` E `rituale >= 9` |
| **Giardiniere Sensoriale** 🌾 | `persona === 'foodie'` E `rituale >= 8` |
| **Custode Verde** 🌱 | `persona === 'eco_anxious'` E `tracciabilita === 'si'` E `rituale >= 7` E `intent === 'attivo'` |
| **Architetto del Futuro** 🏗️ | `persona === 'greentech'` E `tracciabilita === 'si'` E (`intent === 'attivo'` O `intent === 'pensando'`) |
| **Navigatore Etico** 🧭 | `persona === 'professionista'` E `tracciabilita === 'si'` E `intent !== 'nonprioritario'` |
| **Cacao Dormiente** 😴 | `tracciabilita === 'no'` E `rituale <= 3` E `intent === 'nonprioritario'` |
| **Fallback** | Alchimista del Tempo |

### 3️⃣ **Redirect** 
L'utente viene reindirizzato a `result.html?p=[personalità]`

### 4️⃣ **Visualizzazione Personalizzata** (`result.html`)
Ogni personalità ha:
- **Palette colori unica** (primary, accent, glow)
- **Forme box diverse** (arrotondate, geometriche, asimmetriche)
- **Decorazioni tematiche** (foglie, tech, onde, alchemiche, etc.)
- **Quote personalizz ata**
- **5 esperienze sensoriali** (Udito, Tatto, Olfatto, Vista, Gusto)

## 📁 Struttura File

```
docs/
├── index.html          # Form iniziale
├── result.html         # Pagina risultato
├── styles.css          # CSS principale
├── personalities.js    # Definizioni 6 personalità
├── app.js             # Logica applicazione
└── README.md          # Questa guida
```

## 🌐 Deploy su GitHub Pages

1. **Carica i file** nella cartella `/docs` del tuo repository
2. **Vai su Settings** → Pages
3. **Seleziona** Branch: `main`, Folder: `/docs`
4. **Salva** e attendi il deploy
5. **URL pubblico**: `https://[tuo-username].github.io/[repo-name]/`

## 🧪 Test Locale

```bash
# Apri index.html in un browser
# Oppure usa un server locale:
python -m http.server 8000
# Poi vai su http://localhost:8000/docs/
```

## 🎨 Le 6 Personalità

### 🌱 Il Custode Verde
**Colori**: Verde foresta + smeraldo + giada  
**Quote**: "Ogni gesto di cura è un seme per il futuro"  
**Forma**: Organica floreale asimmetrica

### 🏗️ L'Architetto del Futuro
**Colori**: Blu elettrico + ciano + viola digitale  
**Quote**: "Il futuro si costruisce oggi, foglia dopo foglia, bit dopo bit"  
**Forma**: Geometrica tech

### 🌾 Il Giardiniere Sensoriale
**Colori**: Ambra + arancio dorato + giallo caldo  
**Quote**: "Coltivo sapori come si coltivano ricordi: con tempo e dedizione"  
**Forma**: Organica calda

### 🧭 Il Navigatore Etico
**Colori**: Blu oceano + cielo intenso + azzurro brillante  
**Quote**: "Ogni scelta è una direzione, ogni azione una rotta verso il mio nord"  
**Forma**: Fluida come onde

### ⏳ L'Alchimista del Tempo
**Colori**: Verde menta + rosa tenue (palette originale NOCA)  
**Quote**: "Ogni istante è una pozione da distillare con cura"  
**Forma**: Morbida rilassata

### 😴 Il Cacao Dormiente
**Colori**: Marrone cacao + cioccolato + ambra miele  
**Quote**: "Nel silenzio del riposo, il cacao aspetta il momento giusto"  
**Forma**: Molto morbida/rilassata

## 🔧 Personalizzazione

### Modificare i Colori
Edita `personalities.js` → sezione `colors`

### Modificare le Regole di Calcolo
Edita `index.html` → funzione `calculatePersonality()`

### Aggiungere Esperienze Sensoriali
Edita `personalities.js` → array `SENSORY_EXPERIENCES`

## 💾 LocalStorage

Il sistema usa `localStorage` per salvare:
- `noca_user_data`: Dati form utente
- `noca_personality`: Personalità calcolata
- `noca-sensory-journey-[id]`: Progresso esperienze per personalità

## 🎯 Funzionalità

- ✅ Form completo con validazione
- ✅ Barra progresso dinamica
- ✅ Calcolo automatico personalità
- ✅ 6 personalità uniche con stili diversi
- ✅ 5 esperienze sensoriali da collezionare
- ✅ Salvataggio automatico progresso
- ✅ Pulsante "Rifai Test"
- ✅ Reset esperienze
- ✅ Modal per ogni esperienza
- ✅ Animazioni fluide
- ✅ Responsive mobile-first
- ✅ 100% HTML/CSS/JS puro (no build, no framework)

## 📱 Compatibilità

- ✅ Chrome/Edge (moderno)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers
- ⚠️ IE11 non supportato

## 🆘 Support

Per problemi o domande, controlla:
1. Console del browser (F12) per errori JavaScript
2. Verifica che tutti i file siano nella stessa cartella
3. Controlla che `localStorage` sia abilitato

## 📄 Licenza

Proprietà di NOCA Brand. Tutti i diritti riservati.
