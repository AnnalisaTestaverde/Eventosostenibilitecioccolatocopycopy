# 🚀 Setup Rapido per GitHub Pages

## ⚡ Quick Start (3 minuti)

### 1️⃣ Prepara il Progetto

Questo progetto Figma Make è già configurato e pronto! Esegui questi comandi:

```bash
# Download del progetto (se non l'hai già fatto)
# git clone [url-del-tuo-repo]
# cd [nome-cartella]

# Non serve fare nulla! Il progetto è pronto!
```

### 2️⃣ Deploy Automatico

**Opzione A: Deploy con un Click**

1. Vai su GitHub nel tuo repository
2. Clicca su **Settings** → **Pages**
3. In **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** 
   - Folder: **/ (root)**
4. Clicca **Save**

✅ **Fatto!** GitHub compilerà automaticamente la app React e la pubblicherà.

L'URL sarà: `https://[tuo-username].github.io/[nome-repo]/`

⏱️ Il primo deploy richiede 2-5 minuti.

---

## 📱 Come Funziona

### Per gli Utenti:

```
1. Aprono: https://[username].github.io/[repo]/
                    ↓
2. Vedono il FORM (identico a quello che hai fornito)
                    ↓
3. Compilano le 5 domande + contatti
                    ↓
4. Submit → JavaScript calcola la personalità
                    ↓
5. Visualizzano il PERCORSO SENSORIALE personalizzato
   (con tutti gli effetti, animazioni, colori della personalità)
```

### Personalità Calcolate Automaticamente:

| Emoji | Nome | Trigger |
|-------|------|---------|
| 🌱 | Custode Verde | Eco-anxious + tracciabilità + rituale alto + intent attivo |
| 🏗️ | Architetto del Futuro | GreenTech + tracciabilità + intent attivo/pensando |
| 🌾 | Giardiniere Sensoriale | Foodie + rituale >= 8 |
| 🧭 | Navigatore Etico | Professionista + tracciabilità + intent non basso |
| ⏳ | Alchimista del Tempo | Wellness + rituale >= 9 |
| 😴 | Cacao Dormiente | No tracciabilità + rituale basso + no priorità |

---

## 🎯 Test Direct URL

Puoi testare ogni personalità direttamente:

```
https://[username].github.io/[repo]/?p=custode-verde
https://[username].github.io/[repo]/?p=architetto-futuro
https://[username].github.io/[repo]/?p=giardiniere-sensoriale
https://[username].github.io/[repo]/?p=navigatore-etico
https://[username].github.io/[repo]/?p=alchimista-tempo
https://[username].github.io/[repo]/?p=cacao-dormiente
```

---

## 🔄 Aggiornamenti

Ogni volta che fai un commit su `main`, GitHub Pages si aggiorna automaticamente!

```bash
git add .
git commit -m "Aggiornamento"
git push origin main
```

⏱️ L'aggiornamento richiede 1-2 minuti.

---

## ✅ Checklist Post-Deploy

Dopo il deploy, verifica:

- [ ] URL pubblico accessibile
- [ ] Form visualizzato correttamente
- [ ] Compila il form e verifica calcolo personalità
- [ ] Tutte le 6 personalità funzionanti con URL direct
- [ ] Pulsante "Rifai Test" torna al form
- [ ] Responsive su mobile
- [ ] LocalStorage salva i progressi
- [ ] Esperienze sensoriali cliccabili
- [ ] Modal si apre e chiude correttamente
- [ ] Reset esperienze funziona

---

## 🎨 Cosa Vedranno gli Utenti

### 1. **Pagina Form** (index)
- Header NOCA verde
- Form completo con:
  - 3 campi contatto
  - 5 radio group per persona/tracciabilità/intent
  - 1 slider per rituale (1-10)
  - 1 select per discovery
- Progress bar animata
- Sezione spiegazioni sotto il form
- Submit → calcolo personalità

### 2. **Pagina Risultato** (dopo submit o con ?p=...)
- Header sticky personalizzato
- Hero section con emoji gigante della personalità
- Quote personalizzata
- Card progresso (X/5 esperienze)
- 5 Box sensoriali (Udito, Tatto, Olfatto, Vista, Gusto):
  - Forme uniche per personalità
  - 3 pallini animati in alto dx
  - Decorazione tematica in basso dx
  - Wave accent colorato in alto
  - Effetti hover
  - Sparkle quando completate
- Modal per ogni esperienza
- Sfondo con blob colorati e simboli floating
- Tutto completamente responsive

---

## 📊 Architettura

```
USER
  ↓
GITHUB PAGES (serve file statici)
  ↓
FIGMA MAKE BUILD (React compilato)
  ↓
APP.TSX (gestisce form/result)
  ├─→ NocaForm.tsx (se non completato)
  │    ├─ 5 domande + calcolo
  │    └─ localStorage save
  │
  └─→ PersonalizedSensoryJourney.tsx (se completato)
       ├─ Legge personalità da URL o localStorage
       ├─ Carica colori/stili dalla personality
       ├─ Mostra 5 esperienze sensoriali
       └─ Salva progresso in localStorage
```

---

## 🐛 Problemi Comuni

### La pagina è bianca
- Aspetta 2-3 minuti dopo il primo deploy
- Controlla Settings → Pages → il deploy è completo?
- Forza refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

### Il form non si vede
- Vai su `https://[username].github.io/[repo]/` (senza ?p=...)
- Oppure clicca "Rifai Test" nell'header

### Personalità non calcolata correttamente
- Verifica le regole in `/components/NocaForm.tsx` linea 49-86
- Testa in locale prima: apri la console del browser (F12)

---

## 💡 Tips

### Per Testing
```bash
# Testa URL diretti:
?p=custode-verde
?p=architetto-futuro
?p=giardiniere-sensoriale
?p=navigatore-etico
?p=alchimista-tempo
?p=cacao-dormiente
```

### Per Reset
- Utente: Clicca "Rifai Test" nell'header
- Developer: Cancella localStorage dal browser (F12 → Application → Local Storage)

### Per Condividere
- Link form: `https://[username].github.io/[repo]/`
- Link diretto personalità: `https://[username].github.io/[repo]/?p=custode-verde`

---

## 🎉 Pronto!

Ora hai:
- ✅ Form NOCA funzionante
- ✅ 6 personalità con stili unici
- ✅ Calcolo automatico personalità
- ✅ 5 esperienze sensoriali interattive
- ✅ Animazioni e effetti visual
- ✅ Salvataggio progresso
- ✅ Sistema completo pubblicato su GitHub Pages

**Share e goditi! 🚀🌱**

---

## 📞 Support

Se hai problemi:
1. Controlla la console del browser (F12)
2. Verifica i logs di GitHub Actions (tab Actions nel repo)
3. Leggi `/DEPLOY.md` per troubleshooting dettagliato
