# ⚡ Comandi Rapidi - NOCA Green Week

Tutti i comandi e URL che ti servono, in un posto solo.

---

## 🌐 URL del Tuo Sito

**Homepage (Form):**
```
https://[tuo-username].github.io/[nome-repo]/
```

**Personalità Dirette (per Testing):**
```
https://[tuo-username].github.io/[nome-repo]/?p=alchimista-tempo
https://[tuo-username].github.io/[nome-repo]/?p=custode-verde
https://[tuo-username].github.io/[nome-repo]/?p=architetto-futuro
https://[tuo-username].github.io/[nome-repo]/?p=giardiniere-sensoriale
https://[tuo-username].github.io/[nome-repo]/?p=navigatore-etico
https://[tuo-username].github.io/[nome-repo]/?p=cacao-dormiente
```

---

## 🚀 Deploy su GitHub Pages

### Setup Iniziale (una volta sola):
1. GitHub → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: "main", Folder: "/ (root)"
4. Save

### Ogni Aggiornamento:
```bash
git add .
git commit -m "Aggiornamento"
git push origin main
```

⏱️ Aspetta 1-2 minuti → il sito si aggiorna automaticamente

---

## 🧪 Testing Rapido

### Reset Locale (Pulisci Tutto):
**Console Browser (F12):**
```javascript
localStorage.clear()
location.reload()
```

### Verifica localStorage:
1. F12 → **Application** → **Local Storage**
2. Cerca chiavi:
   - `noca_personality`
   - `noca_user_data`
   - `noca-sensory-journey-*`

### Test Nuovo Utente:
```
Ctrl+Shift+N (Win) / Cmd+Shift+N (Mac) → Incognito
Apri il tuo URL → Dovresti vedere il FORM
```

---

## 🔄 Flusso Utente

```
NUOVO UTENTE
    ↓
FORM (5 domande + contatti)
    ↓
SUBMIT
    ↓
CALCOLO PERSONALITÀ (automatico)
    ↓
PERCORSO SENSORIALE (personalizzato)
    ↓
5 ESPERIENZE (Udito → Tatto → Olfatto → Vista → Gusto)
    ↓
TIMBRI COLLEZIONATI
    ↓
"RIFAI TEST" → torna al FORM
```

---

## 🎭 Le 6 Personalità

| ID | Nome | Emoji | Colore Primario |
|----|------|-------|-----------------|
| `alchimista-tempo` | Alchimista del Tempo | ⏳ | Oro #FFD700 |
| `custode-verde` | Custode Verde | 🌱 | Verde Smeraldo #50C878 |
| `architetto-futuro` | Architetto del Futuro | 🏗️ | Blu Elettrico #0080FF |
| `giardiniere-sensoriale` | Giardiniere Sensoriale | 🌾 | Terra #8B4513 |
| `navigatore-etico` | Navigatore Etico | 🧭 | Indaco #4B0082 |
| `cacao-dormiente` | Cacao Dormiente | 😴 | Viola Tenue #9370DB |

---

## 📱 Console Commands per Debug

### Vedi Personalità Salvata:
```javascript
localStorage.getItem('noca_personality')
```

### Vedi Dati Utente:
```javascript
JSON.parse(localStorage.getItem('noca_user_data'))
```

### Vedi Progressi Esperienze:
```javascript
JSON.parse(localStorage.getItem('noca-sensory-journey-custode-verde'))
// Cambia 'custode-verde' con la personalità che vuoi vedere
```

### Forza una Personalità (per test):
```javascript
localStorage.setItem('noca_personality', 'custode-verde')
location.reload()
```

### Reset Completo:
```javascript
localStorage.clear()
location.href = '/'
```

---

## 🛠️ File Chiave del Progetto

```
/App.tsx                    → Entry point, gestisce form/result
/components/NocaForm.tsx    → Form iniziale
/components/PersonalizedSensoryJourney.tsx → Percorso personalizzato
/types/personality.ts       → Definizioni personalità
/styles/globals.css         → Stili globali
```

---

## 🐛 Troubleshooting Veloce

| Problema | Soluzione |
|----------|-----------|
| Pagina bianca | Aspetta 3 min, poi Ctrl+Shift+R |
| Non vedo il form | Pulisci localStorage: F12 → Application → Clear |
| "Rifai Test" non funziona | Verifica App.tsx sia aggiornato |
| Personalità sbagliata | Verifica logica in NocaForm.tsx linee 49-86 |
| Mobile non responsive | Controlla styles/globals.css |
| URL diretto non funziona | Formato: `/?p=nome-personalita` |

---

## 📊 Ordine Fisso delle Esperienze

**L'ordine NON cambia mai:**

1. 👂 **Udito** - La Sinfonia Nascosta
2. ✋ **Tatto** - La Memoria della Texture
3. 👃 **Olfatto** - L'Archivio degli Aromi
4. 👁️ **Vista** - Il Caleidoscopio del Cacao
5. 👅 **Gusto** - La Temperatura del Ricordo

---

## 🔐 localStorage Keys

Tutte le chiavi usate dall'app:

```
noca_personality                      → Personalità assegnata
noca_user_data                        → Dati form utente
noca-sensory-journey-alchimista-tempo
noca-sensory-journey-custode-verde
noca-sensory-journey-architetto-futuro
noca-sensory-journey-giardiniere-sensoriale
noca-sensory-journey-navigatore-etico
noca-sensory-journey-cacao-dormiente
```

---

## 📸 QR Code per l'Evento

Puoi generare un QR code del tuo sito con questi tool:

- **QR Code Generator**: https://www.qr-code-generator.com/
- **QRCode Monkey**: https://www.qrcode-monkey.com/
- **Flowcode**: https://www.flowcode.com/

Inserisci il tuo URL: `https://[username].github.io/[repo]/`

---

## 📝 Workflow Git Rapido

```bash
# Prima volta (setup)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[username]/[repo].git
git push -u origin main

# Aggiornamenti successivi
git add .
git commit -m "Descrizione modifica"
git push

# Verifica stato
git status

# Vedi commit recenti
git log --oneline
```

---

## 🎨 Palette Colori Principali

```css
/* Verde Elettroluminescente */
#A8E6CF
#88D4AB

/* Neutro Panna */
#FFF9F3
#FDF6EE

/* Rosa Tenue */
#FFB8D1
#FF9EC4

/* Logo Noca */
#fffed
```

---

## ⚡ Shortcuts Utili

| Azione | Windows | Mac |
|--------|---------|-----|
| Console Browser | F12 o Ctrl+Shift+I | Cmd+Option+I |
| Incognito | Ctrl+Shift+N | Cmd+Shift+N |
| Hard Refresh | Ctrl+Shift+R | Cmd+Shift+R |
| Salva tutto | Ctrl+S | Cmd+S |
| Trova | Ctrl+F | Cmd+F |

---

## 📞 Quick Links

- **Repository GitHub**: https://github.com/[username]/[repo]
- **GitHub Pages Settings**: https://github.com/[username]/[repo]/settings/pages
- **Actions (Build Status)**: https://github.com/[username]/[repo]/actions
- **Sito Live**: https://[username].github.io/[repo]/

---

## ✅ Checklist Pre-Evento

- [ ] Sito pubblicato su GitHub Pages
- [ ] Testato in incognito (vedo il form)
- [ ] Testato su mobile
- [ ] Tutte le 6 personalità funzionano
- [ ] "Rifai Test" funziona
- [ ] QR code generato e stampato
- [ ] URL condiviso con il team
- [ ] Testato connessione internet nella location

---

## 🎉 Pronto!

Hai tutto quello che ti serve per gestire il sito durante l'evento!

**Buona Green Week! 🌱🍫**
