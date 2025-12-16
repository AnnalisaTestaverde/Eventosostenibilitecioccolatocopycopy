# 🚀 Guida Deploy GitHub Pages - NOCA Green Week

## ✅ Il Tuo Sito è Pronto!

Il codice è già configurato correttamente. Segui questi passaggi per pubblicarlo.

---

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere:
- [ ] Account GitHub
- [ ] Repository GitHub creato per questo progetto
- [ ] Codice caricato sul repository (branch `main`)

---

## 🎯 Deploy in 3 Passi

### Passo 1: Vai su GitHub Pages Settings

1. Apri il tuo repository su GitHub
2. Clicca su **Settings** (in alto a destra)
3. Nel menu a sinistra, clicca su **Pages**

### Passo 2: Configura il Deploy

Nella sezione "Build and deployment":

1. **Source**: Seleziona **"Deploy from a branch"**
2. **Branch**: Seleziona **"main"** 
3. **Folder**: Seleziona **"/ (root)"**
4. Clicca **Save**

### Passo 3: Aspetta il Build

⏱️ Il primo deploy richiede 2-5 minuti.

Puoi vedere il progresso:
- Vai sulla tab **Actions** del repository
- Vedrai un workflow chiamato "pages build and deployment"
- Quando diventa verde ✅, il sito è online!

---

## 🌐 URL del Tuo Sito

Il sito sarà disponibile a:

```
https://[tuo-username].github.io/[nome-repository]/
```

**Esempio:**
Se il tuo username è `mariobianchi` e il repo è `noca-green-week`:
```
https://mariobianchi.github.io/noca-green-week/
```

---

## ✨ Come Funziona per gli Utenti

### 🎬 Flusso Utente:

1. **Arrivano al sito** → Vedono il **Form NOCA**
2. **Compilano 5 domande** + contatti
3. **Cliccano "Scopri il tuo profilo NOCA"**
4. **Vedono la loro personalità** (una delle 6)
5. **Iniziano il percorso sensoriale** con 5 esperienze interattive
6. **Collezionano i timbri** completando le esperienze
7. **Possono rifare il test** cliccando "Rifai Test"

### 🎭 Le 6 Personalità:

| Emoji | Nome | Colori Primari |
|-------|------|----------------|
| ⏳ | Alchimista del Tempo | Oro/Ambra |
| 🌱 | Custode Verde | Verde Smeraldo |
| 🏗️ | Architetto del Futuro | Blu Elettrico/Argento |
| 🌾 | Giardiniere Sensoriale | Terra/Muschio |
| 🧭 | Navigatore Etico | Indaco/Grigio |
| 😴 | Cacao Dormiente | Viola Tenue |

---

## 🧪 Test Direct Link

Puoi testare ogni personalità direttamente con questi URL:

```
https://[tuo-sito]/?p=alchimista-tempo
https://[tuo-sito]/?p=custode-verde
https://[tuo-sito]/?p=architetto-futuro
https://[tuo-sito]/?p=giardiniere-sensoriale
https://[tuo-sito]/?p=navigatore-etico
https://[tuo-sito]/?p=cacao-dormiente
```

---

## 🔄 Aggiornare il Sito

Ogni volta che fai modifiche:

```bash
git add .
git commit -m "Descrizione modifica"
git push origin main
```

⏱️ GitHub Pages si aggiorna automaticamente in 1-2 minuti.

---

## 🐛 Risoluzione Problemi

### Problema: Pagina Bianca

**Soluzione:**
1. Aspetta 3-5 minuti dopo il primo deploy
2. Forza il refresh: `Ctrl+Shift+R` (Win) o `Cmd+Shift+R` (Mac)
3. Verifica in Actions che il deploy sia completato (✅ verde)

### Problema: Non vedo il Form, vedo direttamente il percorso

**Soluzione:**
1. Apri la console del browser (F12)
2. Vai su **Application** → **Local Storage**
3. Trova il tuo sito nell'elenco
4. **Cancella tutte le voci che iniziano con "noca_"**
5. Ricarica la pagina

**Oppure:**
Clicca sul pulsante **"Rifai Test"** nell'header (se visibile)

### Problema: Il sito funziona in locale ma non su GitHub Pages

**Soluzione:**
1. Verifica che il branch sia `main` (non `master`)
2. Controlla che i file siano nella root del repository
3. Verifica che non ci siano errori nella tab Actions

---

## 📱 Checklist Post-Deploy

Dopo il deploy, verifica che funzioni tutto:

- [ ] **URL pubblico accessibile**
- [ ] **Form visibile alla prima apertura**
- [ ] **Compila il form e verifica il calcolo della personalità**
- [ ] **Testa tutte le 6 personalità con URL diretti**
- [ ] **Pulsante "Rifai Test" torna al form**
- [ ] **Responsive su mobile** (apri da telefono)
- [ ] **Le 5 esperienze sensoriali sono cliccabili**
- [ ] **Le modal si aprono e chiudono**
- [ ] **I timbri si collezionano correttamente**
- [ ] **Reset esperienze funziona**

---

## 🎨 Caratteristiche del Sito

### 📱 Completamente Responsive
- Design ottimizzato per mobile
- Animazioni fluide su tutti i dispositivi

### 🎭 Personalizzazione Avanzata
- 6 personalità uniche con:
  - Colori dedicati
  - Forme organiche specifiche
  - Decorazioni animate
  - Quote personalizzate

### 💾 Salvataggio Automatico
- Progressi salvati in localStorage
- Gli utenti possono chiudere e riprendere
- Reset completo con "Rifai Test"

### ✨ Esperienze Interattive
- 5 stanze sensoriali in ordine fisso:
  1. 👂 Udito
  2. ✋ Tatto
  3. 👃 Olfatto
  4. 👁️ Vista
  5. 👅 Gusto

---

## 📊 Analytics (Opzionale)

Se vuoi tracciare le visite, puoi aggiungere:

- **Google Analytics**
- **Plausible Analytics** (privacy-friendly)
- **Umami Analytics** (open source)

---

## 🎉 Sei Pronto!

Il tuo sito è ora:
- ✅ Online e accessibile pubblicamente
- ✅ Parte sempre dal form per nuovi utenti
- ✅ Salva i progressi degli utenti
- ✅ Completamente funzionante su mobile e desktop
- ✅ Pronto per l'evento Green Week!

**Condividi il link e buon evento! 🌱🍫**

---

## 💡 Tips per l'Evento

### Prima dell'Evento:
- [ ] Testa il sito su più dispositivi
- [ ] Prepara QR code con l'URL
- [ ] Testa la connessione internet nella location

### Durante l'Evento:
- Mostra il QR code all'ingresso
- Incoraggia le persone a completare il form
- Usa i link diretti per demo veloci

### Dopo l'Evento:
- Controlla localStorage degli utenti (se possibile)
- Raccogli feedback
- I dati salvati possono essere esportati per analisi

---

## 📞 Supporto

Se hai problemi:
1. Controlla la console del browser (F12)
2. Verifica i logs nella tab Actions di GitHub
3. Rileggi questa guida
4. Controlla `/GITHUB-PAGES-SETUP.md` per dettagli tecnici

**Buon Deploy! 🚀**
