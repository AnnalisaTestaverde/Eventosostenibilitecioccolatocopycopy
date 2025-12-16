# ✅ Verifica: Il Sito Parte dal Form

## 🎯 Obiettivo

Assicurarsi che il sito parta SEMPRE dalla compilazione del form per i nuovi utenti.

---

## 🧪 Test Locale (Prima del Deploy)

### Test 1: Primo Accesso (Nuovo Utente)

1. **Apri l'anteprima di Figma Make**
2. **Apri la console del browser** (F12)
3. **Vai su Application → Local Storage**
4. **Cancella TUTTO il Local Storage** (click destro → Clear)
5. **Ricarica la pagina** (F5)

**✅ Risultato Atteso:**
- Dovresti vedere il **Form NOCA** con:
  - Header verde "NOCA GREEN WEEK"
  - Sezione "I tuoi contatti" (Nome, Email, Telefono)
  - 5 domande del form
  - Pulsante "Scopri il tuo profilo NOCA"

**❌ Se vedi invece:**
- Il percorso sensoriale
- Una personalità già assegnata
- Le 5 esperienze (Udito, Tatto, ecc.)

**→ Cancella di nuovo il localStorage e ricarica**

---

### Test 2: Dopo Compilazione Form

1. **Compila il form completamente**
2. **Clicca "Scopri il tuo profilo NOCA"**

**✅ Risultato Atteso:**
- Vedi la tua **personalità assegnata**
- Vedi il **percorso sensoriale** personalizzato
- URL cambia in `/?p=[nome-personalita]`

---

### Test 3: Pulsante "Rifai Test"

1. **Dopo aver completato il form**
2. **Clicca "Rifai Test"** (nell'header in alto)

**✅ Risultato Atteso:**
- Torni al **Form NOCA**
- URL torna a `/`
- Tutto è resettato (puoi ricompilare)

---

### Test 4: Refresh dopo Form Completato

1. **Compila il form**
2. **NON cliccare "Rifai Test"**
3. **Ricarica la pagina** (F5)

**✅ Risultato Atteso:**
- Vedi ancora la **tua personalità** (salvata in localStorage)
- Puoi continuare il percorso da dove hai lasciato

Questo è corretto! Il localStorage deve mantenere la sessione.

---

### Test 5: URL Diretti (per Testing)

Prova ad aprire questi URL direttamente:

```
/?p=alchimista-tempo
/?p=custode-verde
/?p=architetto-futuro
/?p=giardiniere-sensoriale
/?p=navigatore-etico
/?p=cacao-dormiente
```

**✅ Risultato Atteso:**
- Vedi direttamente quella **personalità specifica**
- NON vedi il form

Questo è corretto! Serve per testing e demo.

---

## 🌐 Test dopo Deploy su GitHub Pages

Ripeti gli stessi test sopra, ma sul tuo sito pubblico:

```
https://[tuo-username].github.io/[nome-repo]/
```

### Test Prioritario: Incognito Mode

**Questo è il test più importante!**

1. **Apri una finestra in incognito** (Ctrl+Shift+N o Cmd+Shift+N)
2. **Vai all'URL del tuo sito**
3. **NON dovrebbe esserci localStorage**

**✅ Risultato Atteso:**
- Vedi il **Form NOCA** (pagina iniziale)

**✅ Questo simula un nuovo utente che apre il sito per la prima volta!**

---

## 🔍 Come Verificare il localStorage

### Passo 1: Apri Console
- Windows: `F12` o `Ctrl+Shift+I`
- Mac: `Cmd+Option+I`

### Passo 2: Vai su Application
- Tab **Application** (in alto)
- Sezione **Storage** → **Local Storage**
- Clicca sul tuo sito

### Passo 3: Controlla le Chiavi

**Chiavi che dovresti vedere DOPO aver compilato il form:**
- `noca_personality` → la tua personalità
- `noca_user_data` → i dati del form
- `noca-sensory-journey-[personalita]` → progressi esperienze

**Chiavi che NON dovresti vedere PRIMA di compilare:**
- Nessuna! Il localStorage deve essere vuoto.

---

## 🧹 Come Pulire il localStorage

### Metodo 1: Console (Veloce)
1. Apri console (F12)
2. Vai su **Application** → **Local Storage**
3. Click destro sul tuo sito
4. **Clear**

### Metodo 2: Pulsante "Rifai Test"
1. Clicca **"Rifai Test"** nell'header
2. Pulisce automaticamente tutto

### Metodo 3: JavaScript (Developer)
Console → digita:
```javascript
localStorage.clear()
location.reload()
```

---

## 📋 Checklist Completa

Testa TUTTI questi scenari:

### Scenario A: Nuovo Utente
- [ ] Apro il sito in incognito
- [ ] Vedo il form (NON il percorso)
- [ ] localStorage è vuoto
- [ ] Compilo e invio il form
- [ ] Vedo la personalità assegnata

### Scenario B: Utente Returning
- [ ] Ho già compilato il form
- [ ] Chiudo il browser
- [ ] Riapro il sito (stesso browser)
- [ ] Vedo la mia personalità (salvata)
- [ ] Posso continuare il percorso

### Scenario C: Reset Manuale
- [ ] Clicco "Rifai Test"
- [ ] Torno al form
- [ ] localStorage è vuoto
- [ ] Posso ricompilare

### Scenario D: URL Direct
- [ ] Apro `/?p=custode-verde`
- [ ] Vedo quella personalità
- [ ] Non c'è localStorage salvato
- [ ] È solo visualizzazione temporanea

### Scenario E: Mobile
- [ ] Apro da smartphone
- [ ] Vedo il form responsive
- [ ] Tutto funziona touch-friendly
- [ ] Dopo submit vedo personalità mobile

---

## ✅ Tutto OK se...

- ✅ **Nuovi utenti vedono SEMPRE il form prima**
- ✅ **Dopo compilazione, vedono la personalità**
- ✅ **"Rifai Test" pulisce tutto e torna al form**
- ✅ **localStorage mantiene la sessione tra ricariche**
- ✅ **URL diretti funzionano per testing**
- ✅ **Mobile è completamente responsive**

---

## ❌ Problemi Comuni

### "Vedo sempre il percorso, mai il form"

**Causa:** localStorage contiene dati vecchi

**Soluzione:**
1. F12 → Application → Local Storage
2. Clear
3. F5 (ricarica)

### "Dopo 'Rifai Test' vedo ancora la personalità"

**Causa:** Il reset non ha pulito tutto

**Soluzione:**
1. Verifica che il codice di `handleReturnToForm` in App.tsx chiami `clearAllNocaData()`
2. Controlla che il codice sia aggiornato
3. Clear localStorage manualmente
4. Ripublica su GitHub

### "In locale funziona, su GitHub Pages no"

**Causa:** Cache del browser

**Soluzione:**
1. Apri in incognito
2. Oppure forza refresh: Ctrl+Shift+R (Win) / Cmd+Shift+R (Mac)
3. Aspetta 2-3 minuti dopo il deploy

---

## 🎉 Sei Pronto!

Se tutti i test sopra passano, il tuo sito è **perfettamente configurato**!

**Il flusso è:**
1. Nuovo utente → **Form**
2. Submit → **Personalità + Percorso**
3. Ricarica → **Stessa personalità (salvata)**
4. "Rifai Test" → **Torna al Form**

**Esattamente come deve essere! 🚀**
