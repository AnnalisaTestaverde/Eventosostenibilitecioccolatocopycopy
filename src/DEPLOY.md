# 🚀 Deploy su GitHub Pages

Guida completa per pubblicare la NOCA Green Week App su GitHub Pages.

## 📋 Prerequisiti

- Node.js installato (v18 o superiore)
- Account GitHub
- Repository GitHub creato

## 🔧 Setup Iniziale

### 1. Installa le dipendenze

```bash
npm install
```

### 2. Configura Vite per GitHub Pages

Il file `vite.config.ts` è già configurato. Assicurati che la riga `base` sia impostata correttamente:

```typescript
export default defineConfig({
  base: '/nome-del-tuo-repo/', // Cambia con il nome del tuo repository
  plugins: [react()],
})
```

### 3. Aggiungi script di deploy a package.json

Aggiungi questi script al tuo `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### 4. Installa gh-pages

```bash
npm install --save-dev gh-pages
```

## 🚀 Deploy

### Metodo 1: Deploy Automatico (Consigliato)

```bash
npm run deploy
```

Questo comando:
1. Compila la app React
2. Crea la cartella `dist/` con i file statici
3. Publica automaticamente su GitHub Pages

### Metodo 2: Deploy Manuale

1. **Build della app:**
```bash
npm run build
```

2. **Carica su GitHub:**
```bash
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push origin main
```

3. **Configura GitHub Pages:**
   - Vai su Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Salva

### Metodo 3: GitHub Actions (Automatico al Push)

Crea il file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

Con questa configurazione, ogni push su `main` farà automaticamente il deploy!

## 🌐 URL Finale

Dopo il deploy, la tua app sarà disponibile su:

```
https://[tuo-username].github.io/[nome-repo]/
```

## 📁 Struttura File per GitHub Pages

```
.
├── dist/                  # Cartella build (non committare)
├── src/
│   ├── components/
│   │   ├── NocaForm.tsx          # Form iniziale
│   │   ├── PersonalizedSensoryJourney.tsx
│   │   └── ...
│   ├── types/
│   │   └── personality.ts        # 6 personalità
│   ├── App.tsx                   # App principale
│   └── main.tsx
├── index.html
├── vite.config.ts               # Configurato per GitHub Pages
└── package.json
```

## 🎯 Flusso Completo

### Per l'utente:

1. **Apre la app** → `https://[username].github.io/[repo]/`
2. **Compila il form** → 5 domande + contatti
3. **Submit** → Calcolo automatico personalità
4. **Visualizza** → Percorso sensoriale personalizzato!

### Personalità disponibili:

- 🌱 **Custode Verde** - Verde foresta
- 🏗️ **Architetto del Futuro** - Blu tech
- 🌾 **Giardiniere Sensoriale** - Ambra dorato
- 🧭 **Navigatore Etico** - Blu oceano
- ⏳ **Alchimista del Tempo** - Verde menta + rosa
- 😴 **Cacao Dormiente** - Marrone cacao

## 🔄 Aggiornamenti

Per aggiornare la app pubblicata:

```bash
# 1. Fai le modifiche al codice
# 2. Testa in locale
npm run dev

# 3. Deploy
npm run deploy
```

## 🐛 Troubleshooting

### La pagina è bianca

1. Verifica che `base` in `vite.config.ts` sia corretto
2. Controlla la console del browser per errori
3. Assicurati che il branch `gh-pages` sia selezionato in Settings

### Errori 404 per le risorse

Verifica che il path in `vite.config.ts` corrisponda al nome del repository:
```typescript
base: '/noca-green-week/', // Deve corrispondere al nome repo
```

### Il form non funziona

1. Controlla che localStorage sia abilitato nel browser
2. Verifica la console per errori JavaScript
3. Testa in locale con `npm run dev`

## ✅ Checklist Deploy

- [ ] Dipendenze installate (`npm install`)
- [ ] `vite.config.ts` configurato con il nome repo corretto
- [ ] Build funzionante in locale (`npm run build`)
- [ ] Preview locale ok (`npm run preview`)
- [ ] Deploy effettuato (`npm run deploy`)
- [ ] GitHub Pages attivato in Settings
- [ ] URL pubblico accessibile
- [ ] Form funzionante
- [ ] Tutte le 6 personalità testabili
- [ ] Responsive su mobile

## 📱 Test Post-Deploy

Testa questi scenari:

1. **Form completo** → Compila e verifica calcolo personalità
2. **Test direct URL** → `?p=custode-verde`, `?p=architetto-futuro`, etc.
3. **Mobile** → Verifica responsive
4. **LocalStorage** → Chiudi e riapri, deve ricordare
5. **Pulsante "Rifai Test"** → Deve tornare al form
6. **Esperienze sensoriali** → Completa e verifica salvataggio

## 🎨 Personalizzazione Post-Deploy

Per modificare colori o testi:

1. Edita `/src/types/personality.ts` per le personalità
2. Edita `/src/components/NocaForm.tsx` per il form
3. Edita `/src/styles/globals.css` per stili globali
4. Run `npm run deploy` per aggiornare

## 📊 Monitoraggio

GitHub Pages fornisce statistiche di base:
- Settings → Pages → Insights
- Google Analytics (opzionale, da integrare)

## 🔒 Sicurezza

⚠️ **IMPORTANTE**: I dati salvati in localStorage rimangono nel browser dell'utente. Per dati sensibili, implementa un backend.

## 🆘 Supporto

Se hai problemi:
1. Controlla la console del browser (F12)
2. Verifica i logs di GitHub Actions
3. Controlla che tutti i file siano committati
4. Prova con `npm run preview` per debug locale

---

✅ **Pronto per il deploy! Buona fortuna con NOCA Green Week! 🌱**
