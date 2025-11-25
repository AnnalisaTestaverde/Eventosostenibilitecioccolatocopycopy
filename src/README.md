# 🌱 NOCA Green Week - Percorso Sensoriale

App React completa per l'evento Green Week di NOCA con sistema di personalizzazione basato su 6 personalità diverse.

## 🎯 Flusso Garantito

✅ **L'utente PARTE dal FORM** e arriva fino alla fine del percorso:

```
FORM → Submit → Calcolo Personalità → Percorso Sensoriale → Completamento
```

## 📖 Guide Complete

- **[FLUSSO-COMPLETO.md](./FLUSSO-COMPLETO.md)** → 📍 **LEGGI QUESTA!** Flusso dettagliato Form → Percorso
- **[GITHUB-PAGES-SETUP.md](./GITHUB-PAGES-SETUP.md)** → ⚡ Setup rapido 3 minuti
- **[DEPLOY.md](./DEPLOY.md)** → 🚀 Guida deploy dettagliata

## 🏗️ Struttura

```
/
├── App.tsx                                    # App principale (gestisce Form ↔ Percorso)
├── components/
│   ├── NocaForm.tsx                          # Form iniziale + calcolo personalità
│   ├── PersonalizedSensoryJourney.tsx        # Percorso sensoriale personalizzato
│   └── ...
├── types/
│   └── personality.ts                        # 6 personalità + colori + stili
└── styles/
    └── globals.css                           # Stili globali
```

## 🎨 6 Personalità

| Emoji | Nome | Colori | Forma |
|-------|------|--------|-------|
| 🌱 | Custode Verde | Verde foresta | Organico |
| 🏗️ | Architetto del Futuro | Blu tech | Geometrico |
| 🌾 | Giardiniere Sensoriale | Ambra dorato | Morbido |
| 🧭 | Navigatore Etico | Blu oceano | Pulito |
| ⏳ | Alchimista del Tempo | Verde menta + rosa | Fluido |
| 😴 | Cacao Dormiente | Marrone cacao | Semplice |

Ogni personalità ha:
- Palette colori unica (primary + accent + glow)
- Forme specifiche per le box
- Decorazioni tematiche animate
- Quote personalizzata
- Simboli distintivi

## 🚀 Deploy su GitHub Pages

### Setup Rapido (3 minuti):

1. **Push su GitHub**
   ```bash
   git add .
   git commit -m "Deploy NOCA"
   git push origin main
   ```

2. **Attiva GitHub Pages**
   - Vai su **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** → **/ (root)**
   - Clicca **Save**

3. **Done!** Aspetta 2-3 minuti

**URL finale:** `https://[username].github.io/[repo]/`

## 📱 Come Funziona

### 1️⃣ **Primo Accesso**
Utente apre l'URL → Vede il **FORM NOCA**

### 2️⃣ **Compila Form**
- 3 campi contatto (nome, email, telefono)
- Chi sei? (5 opzioni radio)
- Tracciabilità importante? (Si/No)
- Rituale cioccolato (slider 1-10)
- Sostenibilità per te? (3 opzioni)
- Come ci hai conosciuto? (select)

### 3️⃣ **Submit → Calcolo Personalità**
JavaScript calcola automaticamente quale delle 6 personalità in base alle risposte

### 4️⃣ **Visualizza Percorso Sensoriale**
- Header personalizzato con emoji e colori
- Progress card (X/5 esperienze)
- 5 box interattive in ordine: **Udito → Tatto → Olfatto → Vista → Gusto**
- Ogni box con stile unico della personalità

### 5️⃣ **Completa Esperienze**
- Click su box → Modal si apre
- "Completa Esperienza" → Segna come vissuta
- Progress aumenta
- Box si aggiorna con sparkle ✨
- Tutto salvato in localStorage

### 6️⃣ **Completamento**
5/5 esperienze → Badge "Avventura completata!"

## 🎮 Test Direct URL

Per testare ogni personalità direttamente (senza form):

```
/?p=custode-verde
/?p=architetto-futuro
/?p=giardiniere-sensoriale
/?p=navigatore-etico
/?p=alchimista-tempo
/?p=cacao-dormiente
```

## 💾 Persistenza

Tutti i dati sono salvati in **localStorage**:

- `noca_user_data` → Dati form
- `noca_personality` → Personalità calcolata
- `noca-sensory-journey-[personalità]` → Progresso esperienze

**Importante:** Ogni personalità ha il suo progresso separato!

## 🔄 Reset

- **"Rifai Test"** (header) → Cancella tutto e torna al form
- **"Reset Esperienze"** (header) → Azzera solo le esperienze, mantiene la personalità

## 🧪 Test Post-Deploy

Dopo il deploy su GitHub Pages, verifica:

```bash
✅ URL base mostra il FORM
✅ Form completabile
✅ Submit calcola personalità
✅ Mostra percorso personalizzato
✅ 5 box cliccabili
✅ Modal si apre/chiude
✅ "Completa Esperienza" funziona
✅ Progress bar si aggiorna
✅ localStorage salva
✅ Chiudi e riapri → dati persistono
✅ "Rifai Test" torna al form
✅ URL diretti funzionano
✅ Responsive su mobile
```

## 🛠️ Development

```bash
# Installa dipendenze
npm install

# Dev server
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## 📐 Tech Stack

- **React 18** + TypeScript
- **Tailwind CSS** v4.0
- **Motion** (ex Framer Motion) per animazioni
- **Lucide React** per icone
- **Vite** per build
- **GitHub Pages** per deploy

## 🎨 Design System

- **Palette base**: Verde elettroluminescente (#A8E6CF, #88D4AB)
- **Neutro**: Panna (#FFF9F3, #FDF6EE)
- **Accent**: Rosa tenue (#FFB8D1, #FF9EC4)
- **Logo NOCA**: #fffed
- **Estetica**: Cyber-botanica futuristica ma accogliente
- **Layout**: 3 + 2 grid per le esperienze

## 📁 File Chiave

| File | Scopo |
|------|-------|
| `App.tsx` | Gestisce switch Form ↔ Percorso |
| `NocaForm.tsx` | Form + logica calcolo personalità |
| `PersonalizedSensoryJourney.tsx` | Visualizzazione percorso |
| `personality.ts` | Definizioni 6 personalità |
| `globals.css` | Stili globali + tokens |

## 🐛 Troubleshooting

### La pagina è bianca
- Aspetta 2-3 minuti dopo il primo deploy
- Controlla Settings → Pages (deploy completato?)
- Forza refresh: Ctrl+Shift+R / Cmd+Shift+R

### Non vedo il form
- Vai su URL base (senza `?p=...`)
- Oppure clicca "Rifai Test" nell'header

### Personalità non calcolata correttamente
- Verifica le regole in `NocaForm.tsx` linea 49-86
- Controlla console browser (F12)

### Dati non salvati
- Verifica localStorage abilitato
- Controlla console per errori
- Testa in incognito (localStorage pulito)

## 📞 Support

Hai problemi? Controlla:

1. **Console del browser** (F12 → Console)
2. **GitHub Actions logs** (tab Actions nel repo)
3. **FLUSSO-COMPLETO.md** → Flusso dettagliato
4. **GITHUB-PAGES-SETUP.md** → Setup e troubleshooting

## ✨ Features

- ✅ Form completo con validazione
- ✅ Calcolo automatico personalità
- ✅ 6 personalità uniche con stili diversi
- ✅ 5 esperienze sensoriali interattive
- ✅ Animazioni fluide e moderne
- ✅ Glass morphism e effetti visivi
- ✅ Progress tracking in tempo reale
- ✅ Persistenza localStorage
- ✅ Reset e "rifai test"
- ✅ Responsive mobile + desktop
- ✅ URL diretti per testing
- ✅ Deploy su GitHub Pages pronto

## 🎉 Ready to Deploy!

**Il flusso è completo e testato:**

```
Form → Calcolo → Percorso → Completamento ✅
```

Segui **GITHUB-PAGES-SETUP.md** per pubblicare in 3 minuti! 🚀

---

**Made with ❤️ for NOCA Green Week 🌱**
