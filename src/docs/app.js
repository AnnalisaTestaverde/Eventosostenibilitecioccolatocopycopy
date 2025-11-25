// Ottieni personalità da URL
function getPersonalityFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('p') || 'cacao-dormiente';
}

// Carica esperienze dal localStorage
function loadExperiences() {
  const personalityId = getPersonalityFromUrl();
  const storageKey = `noca-sensory-journey-${personalityId}`;
  const saved = localStorage.getItem(storageKey);
  
  if (saved) {
    return JSON.parse(saved);
  }
  
  // Default: tutte non completate
  return SENSORY_EXPERIENCES.map(exp => ({
    ...exp,
    collected: false
  }));
}

// Salva esperienze nel localStorage
function saveExperiences(experiences) {
  const personalityId = getPersonalityFromUrl();
  const storageKey = `noca-sensory-journey-${personalityId}`;
  localStorage.setItem(storageKey, JSON.stringify(experiences));
}

// Variabili globali
let currentPersonality = null;
let experiences = [];
let selectedExperience = null;

// Inizializza app
function initApp() {
  const personalityId = getPersonalityFromUrl();
  currentPersonality = PERSONALITIES[personalityId];
  
  if (!currentPersonality) {
    currentPersonality = PERSONALITIES['cacao-dormiente'];
  }
  
  experiences = loadExperiences();
  
  renderApp();
  addEventListeners();
}

// Render completo dell'app
function renderApp() {
  const app = document.getElementById('app');
  
  const collectedCount = experiences.filter(e => e.collected).length;
  const totalCount = experiences.length;
  const progressPercent = (collectedCount / totalCount) * 100;
  const isComplete = collectedCount === totalCount;
  
  const topExperiences = experiences.slice(0, 3);
  const bottomExperiences = experiences.slice(3, 5);
  
  app.innerHTML = `
    <!-- Background decorativo -->
    <div class="bg-decorative">
      <div class="blob blob-1" style="background: ${currentPersonality.colors.primary}"></div>
      <div class="blob blob-2" style="background: ${currentPersonality.colors.accent}"></div>
      <div class="blob blob-3" style="background: ${currentPersonality.colors.glow}"></div>
      
      ${[0, 1, 2, 3, 4].map(i => `
        <div class="floating-symbol" style="left: ${20 + i * 15}%; top: ${10 + i * 20}%; animation-delay: ${i * 0.5}s">
          ${currentPersonality.illustration}
        </div>
      `).join('')}
    </div>
    
    <!-- Header -->
    <header class="header">
      <div class="header-accent" style="background: linear-gradient(to right, ${currentPersonality.colors.primary}, ${currentPersonality.colors.accent}, ${currentPersonality.colors.primary})"></div>
      
      <div class="header-content">
        <div class="header-left">
          <div class="logo" style="color: ${currentPersonality.colors.primary}">NOCA</div>
          <div class="header-title">
            <h1 style="color: ${currentPersonality.colors.text}">Viaggio Sensoriale</h1>
            <p class="header-subtitle" style="color: ${currentPersonality.colors.primary}">
              ${currentPersonality.emoji} ${currentPersonality.title}
            </p>
          </div>
        </div>
        
        <div class="header-buttons">
          <button class="btn btn-reset" onclick="rifaiTest()" style="color: ${currentPersonality.colors.primary}" title="Rifai il test">
            🔄 Rifai Test
          </button>
          <button class="btn" onclick="resetExperiences()" style="color: ${currentPersonality.colors.accent}" title="Reset esperienze">
            ↻
          </button>
        </div>
      </div>
    </header>
    
    <!-- Main Content -->
    <main class="main-content">
      <!-- Hero -->
      <section class="hero">
        <div class="hero-emoji" style="filter: drop-shadow(0 0 20px ${currentPersonality.colors.glow})">
          ${currentPersonality.emoji}
        </div>
        <h2 style="color: ${currentPersonality.colors.text}">
          Il Tuo Laboratorio
          <span class="hero-highlight" style="color: ${currentPersonality.colors.primary}">Sensoriale</span>
        </h2>
        <p class="hero-quote" style="color: ${currentPersonality.colors.text}">
          ${currentPersonality.quote}
        </p>
      </section>
      
      <!-- Progress Card -->
      <div class="progress-card">
        <div style="background: ${currentPersonality.colors.accent}30; position: absolute; top: 0; right: 0; width: 150px; height: 150px; border-radius: 0 0 0 100%;"></div>
        
        <div class="progress-header">
          <div class="progress-left">
            <div class="progress-icon">
              <svg width="50" height="50" viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="22" fill="none" stroke="${currentPersonality.colors.primary}" stroke-width="2" stroke-dasharray="3,3" />
                <circle cx="25" cy="25" r="15" fill="none" stroke="${currentPersonality.colors.accent}" stroke-width="2" />
                <circle cx="25" cy="25" r="8" fill="${currentPersonality.colors.glow}" opacity="0.6" />
              </svg>
            </div>
            <div class="progress-text">
              <p style="color: ${currentPersonality.colors.primary}; font-weight: 500;">Il tuo percorso</p>
              <p style="color: ${currentPersonality.colors.text}; opacity: 0.7; font-size: 0.75rem;">${currentPersonality.title}</p>
            </div>
          </div>
          
          <div class="progress-count">
            <span class="progress-count-big" style="color: ${currentPersonality.colors.text}">${collectedCount}</span>
            <span class="progress-count-small" style="color: ${currentPersonality.colors.primary}">/${totalCount}</span>
          </div>
        </div>
        
        <div class="progress-bar-container" style="background: ${currentPersonality.colors.primary}20; border-color: ${currentPersonality.colors.primary}30">
          <div class="progress-bar-fill" style="width: ${progressPercent}%; background: linear-gradient(to right, ${currentPersonality.colors.primary}, ${currentPersonality.colors.accent}, ${currentPersonality.colors.glow})">
            <div class="progress-bar-shine"></div>
          </div>
        </div>
        
        ${isComplete ? `
          <div class="completion-badge" style="background: linear-gradient(to right, ${currentPersonality.colors.primary}30, ${currentPersonality.colors.accent}30)">
            <span style="color: ${currentPersonality.colors.text}">✨ Avventura completata! ✨</span>
          </div>
        ` : ''}
      </div>
      
      <!-- Top 3 Experiences -->
      <div class="experiences-top">
        ${topExperiences.map((exp, index) => renderExperienceCard(exp, index)).join('')}
      </div>
      
      <!-- Bottom 2 Experiences -->
      <div class="experiences-bottom">
        ${bottomExperiences.map((exp, index) => renderExperienceCard(exp, index + 3)).join('')}
      </div>
      
      <!-- Bottom Message -->
      <div class="bottom-message">
        <div style="position: absolute; top: 1rem; left: 1rem; font-size: 2.5rem; opacity: 0.2;">${currentPersonality.illustration}</div>
        <div style="position: absolute; bottom: 1rem; right: 1rem; font-size: 2.5rem; opacity: 0.2;">✨</div>
        
        <div class="bottom-message-emoji">${currentPersonality.emoji}</div>
        <p style="color: ${currentPersonality.colors.text}; font-weight: 500;">
          Un laboratorio pensato per te
        </p>
        <p class="bottom-message-highlight" style="color: ${currentPersonality.colors.primary}">
          Dove ogni senso racconta<br/>la tua storia unica
        </p>
      </div>
    </main>
    
    <!-- Modal -->
    <div id="modal" class="modal">
      <div class="modal-content" style="border: 4px solid ${currentPersonality.colors.primary}30">
        <button class="modal-close" onclick="closeModal()">×</button>
        <div id="modal-inner" class="modal-inner"></div>
      </div>
    </div>
  `;
}

// Render singola card esperienza
function renderExperienceCard(exp, index) {
  const borderColor = exp.collected 
    ? `${currentPersonality.colors.primary}60` 
    : 'rgba(255, 255, 255, 0.5)';
  
  const textColor = exp.collected 
    ? currentPersonality.colors.text 
    : currentPersonality.colors.primary;
  
  const descColor = exp.collected 
    ? `${currentPersonality.colors.text}cc` 
    : `${currentPersonality.colors.primary}cc`;
  
  const statusBg = exp.collected
    ? `${currentPersonality.colors.primary}20`
    : `${currentPersonality.colors.accent}15`;
  
  const statusBorder = exp.collected
    ? `${currentPersonality.colors.primary}40`
    : `${currentPersonality.colors.accent}30`;
  
  const statusColor = exp.collected
    ? currentPersonality.colors.text
    : currentPersonality.colors.accent;
  
  const statusDotBg = exp.collected
    ? `linear-gradient(to right, ${currentPersonality.colors.primary}, ${currentPersonality.colors.accent})`
    : `linear-gradient(to right, ${currentPersonality.colors.accent}, ${currentPersonality.colors.glow})`;
  
  return `
    <div class="experience-card ${exp.collected ? 'collected' : ''}" 
         onclick="openExperienceModal('${exp.id}')"
         style="animation-delay: ${index * 0.15}s">
      <div class="experience-card-inner" style="border-color: ${borderColor}; border-radius: ${currentPersonality.shape}">
        
        <!-- Wave accent -->
        <svg class="card-wave" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient-${exp.id}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="${currentPersonality.colors.primary}" />
              <stop offset="50%" stop-color="${currentPersonality.colors.accent}" />
              <stop offset="100%" stop-color="${currentPersonality.colors.primary}" />
            </linearGradient>
          </defs>
          <path d="M0,6 Q25,3 50,6 T100,6 L100,12 L0,12 Z" fill="url(#gradient-${exp.id})" />
        </svg>
        
        <!-- Dots -->
        <div class="card-dots">
          ${[0, 1, 2].map(i => `
            <div class="card-dot" style="background: linear-gradient(135deg, ${currentPersonality.colors.accent}, ${currentPersonality.colors.glow}); animation-delay: ${i * 0.3}s"></div>
          `).join('')}
        </div>
        
        <!-- Decoration -->
        <div class="card-decoration card-decoration-main">${currentPersonality.decorationIcon}</div>
        <div class="card-decoration card-decoration-secondary">${currentPersonality.illustration}</div>
        
        <!-- Content -->
        <div class="experience-content">
          <div class="experience-icon">${exp.icon}</div>
          
          <div class="experience-text">
            <h3 class="experience-name" style="color: ${textColor}">${exp.name}</h3>
            <p class="experience-description" style="color: ${descColor}">${exp.description}</p>
            
            <div class="experience-status" style="background: ${statusBg}; border-color: ${statusBorder}">
              <div class="status-dot" style="background: ${statusDotBg}"></div>
              <span style="color: ${statusColor}">${exp.collected ? 'Vissuta' : 'Esplora'}</span>
            </div>
          </div>
        </div>
        
        <!-- Sparkles if collected -->
        ${exp.collected ? `
          <div class="sparkles">
            ${[0, 1, 2, 3].map(i => `
              <div class="sparkle" style="top: ${20 + i * 20}%; left: ${i % 2 === 0 ? '10%' : '90%'}; animation-delay: ${i * 0.7}s">✨</div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// Apri modal esperienza
function openExperienceModal(expId) {
  selectedExperience = experiences.find(e => e.id === expId);
  if (!selectedExperience) return;
  
  const modal = document.getElementById('modal');
  const modalInner = document.getElementById('modal-inner');
  
  modalInner.innerHTML = `
    <div class="modal-icon">${selectedExperience.icon}</div>
    
    <h3 class="modal-title" style="color: ${currentPersonality.colors.text}">
      ${selectedExperience.name}
    </h3>
    
    <p class="modal-description" style="color: ${currentPersonality.colors.primary}">
      ${selectedExperience.description}
    </p>
    
    ${!selectedExperience.collected ? `
      <div class="modal-box" style="border-color: ${currentPersonality.colors.accent}30">
        <p style="color: ${currentPersonality.colors.text}">
          Vivi l'esperienza allo stand fisico,<br/>
          poi scannerizza il QR per catturare il momento ✨
        </p>
        
        <div class="modal-qr" style="color: ${currentPersonality.colors.accent}">✨</div>
        
        <button class="modal-button" onclick="completeExperience()" 
                style="background: linear-gradient(135deg, ${currentPersonality.colors.primary}, ${currentPersonality.colors.accent}, ${currentPersonality.colors.glow})">
          Completa l'Esperienza
        </button>
      </div>
    ` : `
      <div class="modal-completed" style="background: ${currentPersonality.colors.primary}20; border-color: ${currentPersonality.colors.primary}40; color: ${currentPersonality.colors.text}">
        ✨ Esperienza vissuta con successo! ✨
      </div>
    `}
    
    <button class="modal-button-secondary" onclick="closeModal()" style="color: ${currentPersonality.colors.primary}">
      Torna al percorso
    </button>
  `;
  
  modal.classList.add('active');
}

// Chiudi modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  selectedExperience = null;
}

// Completa esperienza
function completeExperience() {
  if (!selectedExperience) return;
  
  experiences = experiences.map(exp => 
    exp.id === selectedExperience.id 
      ? { ...exp, collected: true, timestamp: Date.now() }
      : exp
  );
  
  saveExperiences(experiences);
  closeModal();
  renderApp();
}

// Reset esperienze
function resetExperiences() {
  if (confirm('Vuoi resettare tutte le esperienze?')) {
    experiences = experiences.map(exp => ({ ...exp, collected: false }));
    saveExperiences(experiences);
    renderApp();
  }
}

// Rifai test
function rifaiTest() {
  if (confirm('Vuoi rifare il test della personalità?')) {
    localStorage.removeItem('noca_personality');
    localStorage.removeItem('noca_user_data');
    window.location.href = 'index.html';
  }
}

// Event listeners
function addEventListeners() {
  // Chiudi modal con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // Chiudi modal cliccando fuori
  const modal = document.getElementById('modal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Inizializza quando il DOM è pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
