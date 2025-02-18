/* ==========================================================================
   Global Variables & Base Styles
   ========================================================================== */
:root {
  --base-width: 60vw;
  --max-width: 800px;
  --padding: clamp(1rem, 4vw, 2rem);
  --aspect-ratio: 4 / 3;
  --border-radius: 10px;
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --font-color: white;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  color: var(--font-color);
}

/* A common container for overlay‐style pages */
.common-container {
  width: var(--base-width);
  max-width: var(--max-width);
  aspect-ratio: var(--aspect-ratio);
  padding: var(--padding);
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

/* ==========================================================================
   Display (In–Game) Styles
   ========================================================================== */
/* Apply these styles on the “game” page (e.g. wrap in an element with class “display-page”) */
.display-page {
  background: #1a1a1a;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-container {
  position: relative;
  width: var(--base-width);
  max-width: var(--max-width);
  aspect-ratio: var(--aspect-ratio);
  background: var(--secondary-color);
  overflow: hidden;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
}

/* Heads-up Display (HUD) */
.hud-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 2px solid var(--primary-color);
  z-index: 10;
  font-size: clamp(0.7rem, 1.5vw, 1rem);
}

.health-bar {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 120px;
}

.health-bar span {
  margin-right: 0.5rem;
  white-space: nowrap;
}

.health-bar div {
  width: clamp(60px, 15vw, 100px);
  height: 8px;
  background: #444;
  border-radius: 5px;
  overflow: hidden;
}

.health-bar .health-fill {
  height: 100%;
  background: #e74c3c;
  width: 70%;
}

.score-time {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  white-space: nowrap;
}

.pause-icon {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  font-size: clamp(1rem, 2vw, 1.2rem);
  cursor: pointer;
}

.game-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem, 4vw, 2rem);
  padding-top: 15%;
}

/* Responsive adjustments for game HUD */
@media (max-width: 600px) {
  .hud-container {
    padding: 0.25rem 0.5rem;
  }
  .health-bar {
    min-width: 80px;
  }
  .score-time {
    flex-direction: column;
    gap: 0.2rem;
  }
}

/* ==========================================================================
   Main Menu Styles
   ========================================================================== */
/* Wrap main menu content in an element with class “menu-page” */
.menu-page {
  background: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding);
}

.menu-container {
  /* Inherits common container styles */
  /* (Alternatively add both classes: class="common-container menu-container") */
  width: var(--base-width);
  max-width: var(--max-width);
  aspect-ratio: var(--aspect-ratio);
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  font-size: clamp(2rem, 8vw, 4rem);
  margin: clamp(0.5rem, 2vw, 1rem);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.title {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: clamp(1rem, 4vw, 2rem);
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 2vw, 1rem);
  width: 100%;
  max-width: min(80%, 300px);
}

/* Scope the main menu button styles to .menu-container */
.menu-container .menu-button {
  width: 100%;
  padding: clamp(0.5rem, 2vw, 1rem);
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  background: var(--primary-color);
  color: var(--font-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
}

.menu-container .menu-button:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.menu-container .menu-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.menu-links {
  margin-top: clamp(1rem, 4vw, 2rem);
  display: flex;
  gap: clamp(0.5rem, 2vw, 1rem);
  justify-content: center;
  flex-wrap: wrap;
}

.menu-links a {
  color: #95a5a6;
  text-decoration: none;
  cursor: pointer;
  font-size: clamp(0.7rem, 2vw, 0.9rem);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 0.5rem;
}

.menu-links a:hover {
  color: #ffffff;
  transform: translateY(-1px);
}

@media (max-width: 480px) {
  .menu-container {
    width: 90vw;
    padding: 1rem;
  }
  .menu-links {
    flex-direction: column;
    gap: 0.5rem;
  }
  .menu-links a {
    padding: 0.3rem;
  }
}

@media (max-height: 600px) {
  .logo {
    margin: 0.5rem;
  }
  .title {
    margin-bottom: 0.5rem;
  }
  .menu-links {
    margin-top: 0.5rem;
  }
}

/* ==========================================================================
   Pause Styles
   ========================================================================== */
/* Wrap pause screen content in an element with class “pause-page” */
.pause-page {
  background: rgba(0, 0, 0, 0.85);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pause-container {
  /* Inherits common container styles */
  width: var(--base-width);
  max-width: var(--max-width);
  aspect-ratio: var(--aspect-ratio);
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: rgba(20, 20, 20, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.pause-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary-color);
}

/* Scope the pause screen button styles */
.pause-container .menu-button {
  width: 80%;
  padding: clamp(0.5rem, 2vw, 1rem);
  margin: 0.5rem auto;
  background: linear-gradient(to right, var(--primary-color), #2980b9);
  color: var(--font-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pause-container .menu-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  background: linear-gradient(to right, #2980b9, #2475a7);
}

.pause-container .menu-button:active {
  transform: translateY(1px);
}

/* ==========================================================================
   Level Select Styles
   ========================================================================== */
/* Wrap level select content in an element with class “select-page” */
.select-page {
  background: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.select-container {
  /* Inherits common container styles */
  width: var(--base-width);
  max-width: var(--max-width);
  aspect-ratio: var(--aspect-ratio);
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.7);
}

.select-container h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);
}

.level-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100px, 100%), 1fr));
  gap: clamp(0.5rem, 2vw, 1rem);
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
}

.level-icon {
  background: var(--primary-color);
  border-radius: var(--border-radius);
  padding: clamp(0.5rem, 2vw, 1rem);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, background-color 0.2s;
}

.level-icon:not(.locked):hover {
  transform: scale(1.05);
}

.level-icon.locked {
  background: #555;
  cursor: default;
}

.level-icon.locked::before {
  content: "\f023";
  font-family: "FontAwesome";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(1.2rem, 4vw, 2rem);
  color: rgba(255, 255, 255, 0.7);
}

.level-icon.completed {
  background: #2ecc71;
}

.level-number {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.level-info {
  font-size: clamp(0.8rem, 2vw, 1rem);
  opacity: 0.8;
}

.completion-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: clamp(6px, 1.5vw, 10px);
  background: rgba(0, 0, 0, 0.3);
}

.completion-progress {
  height: 100%;
  background: #f39c12;
  width: 75%;
  transition: width 0.3s ease;
}

.scroll-buttons {
  display: flex;
  justify-content: center;
  gap: clamp(0.5rem, 2vw, 1rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);
}

.scroll-button {
  background: var(--primary-color);
  color: var(--font-color);
  border: none;
  border-radius: 5px;
  padding: clamp(0.4rem, 1.5vw, 0.8rem) clamp(0.8rem, 2vw, 1.2rem);
  font-size: clamp(0.8rem, 2vw, 1rem);
  cursor: pointer;
  transition: background-color 0.2s;
}

.scroll-button:hover {
  background: #2980b9;
}

/* Scope the “back” button for level select */
.select-container .back-button {
  background: #e74c3c;
  color: var(--font-color);
  border: none;
  border-radius: 5px;
  padding: clamp(0.4rem, 1.5vw, 0.8rem) clamp(0.8rem, 2vw, 1.2rem);
  font-size: clamp(0.8rem, 2vw, 1rem);
  cursor: pointer;
  transition: background-color 0.2s;
}

.select-container .back-button:hover {
  background: #c0392b;
}

.rewards {
  margin-top: clamp(1rem, 3vw, 2rem);
  padding-top: clamp(1rem, 2vw, 1.5rem);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.rewards h3 {
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
}

.rewards p {
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  opacity: 0.9;
}

@media (max-width: 480px) {
  .select-container {
    width: 90%;
    padding: 1rem;
  }
  .level-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ==========================================================================
   Settings Styles
   ========================================================================== */
/* Wrap settings content in an element with class “settings-page” */
.settings-page {
  background: #1a1a1a;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding);
}

.settings-container {
  /* Inherits common container styles */
  width: var(--base-width);
  max-width: var(--max-width);
  aspect-ratio: var(--aspect-ratio);
  padding: var(--padding);
  border-radius: var(--border-radius);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.85);
  overflow-y: auto;
  backdrop-filter: blur(5px);
  /* Custom scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) rgba(0, 0, 0, 0.5);
}

.settings-container::-webkit-scrollbar {
  width: 8px;
}

.settings-container::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.settings-container::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, var(--primary-color), #2980b9);
  border-radius: 10px;
}

.settings-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2980b9, #2475a7);
}

.settings-container .title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: clamp(1rem, 3vw, 2rem);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary-color);
  text-align: center;
}

.settings-section {
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
  text-align: left;
}

.settings-section h2 {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
}

.slider-container {
  margin: 1rem 0;
}

.slider-container label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.slider {
  width: 100%;
  margin: 0.5rem 0;
}

/* Settings & controls buttons */
.settings-container .settings-button,
.settings-container .controls-button {
  width: 100%;
  padding: clamp(0.5rem, 2vw, 1rem);
  margin: 0.5rem 0;
  background: linear-gradient(to right, var(--primary-color), #2980b9);
  color: var(--font-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.settings-container .settings-button:hover,
.settings-container .controls-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  background: linear-gradient(to right, #2980b9, #2475a7);
}

.settings-container .settings-button:active,
.settings-container .controls-button:active {
  transform: translateY(1px);
}

.difficulty-buttons {
  display: flex;
  gap: clamp(0.3rem, 1vw, 0.5rem);
  margin: 1rem 0;
}

.difficulty-button {
  flex: 1;
  padding: clamp(0.4rem, 1.5vw, 0.75rem);
  background: #34495e;
  border: none;
  border-radius: 8px;
  color: var(--font-color);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(0.8rem, 1.8vw, 0.9rem);
  text-transform: uppercase;
}

.difficulty-button.active {
  background: var(--primary-color);
  box-shadow: 0 2px 10px rgba(52, 152, 219, 0.3);
}

.difficulty-button:hover {
  transform: translateY(-1px);
  background: #2980b9;
}

.checkbox-container {
  margin: 1rem 0;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

/* Scope the “back” button for settings */
.settings-container .back-button {
  width: 100%;
  padding: clamp(0.5rem, 2vw, 1rem);
  margin-top: clamp(1rem, 3vw, 2rem);
  background: linear-gradient(to right, #e74c3c, #c0392b);
  color: var(--font-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 2vw, 1rem);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.settings-container .back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
  background: linear-gradient(to right, #c0392b, #a93226);
}

@media (max-width: 768px) {
  .settings-container {
    width: 85vw;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .settings-container {
    width: 95vw;
  }
  .difficulty-buttons {
    flex-direction: column;
  }
  .difficulty-button {
    width: 100%;
  }
}
