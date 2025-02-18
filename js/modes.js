// modes.js
// Implements different game modes and mode-specific initialization and behavior.

// Define available game modes
const gameModes = {
    CLASSIC: 'Classic',
    TIME_ATTACK: 'Time Attack',
    SURVIVAL: 'Survival',
    CHALLENGE: 'Challenge'
  };
  
  // Store the current mode; default to Classic
  let currentMode = gameModes.CLASSIC;
  
  // Variables for mode-specific features (e.g., Time Attack timer)
  let timeAttackTimeLimit = 60; // seconds
  let timeAttackTimer = timeAttackTimeLimit;
  let timeAttackInterval = null;
  
  // Set the game mode and perform any necessary initialization
  function setGameMode(mode) {
    if (Object.values(gameModes).includes(mode)) {
      currentMode = mode;
      console.log(`Game mode set to: ${mode}`);
      
      // Mode-specific initialization
      switch (mode) {
        case gameModes.TIME_ATTACK:
          startTimeAttack();
          break;
        case gameModes.SURVIVAL:
          // Initialize survival mode features (like introducing obstacles over time)
          // For example, reset or adjust obstacles here if desired.
          break;
        case gameModes.CHALLENGE:
          // Initialize challenge mode settings, like pre-defined obstacle layouts.
          break;
        default:
          // For Classic mode, no special initialization is required.
          stopModeTimers();
          break;
      }
    } else {
      console.error(`Invalid game mode: ${mode}`);
    }
  }
  
  // Initialize Time Attack mode by starting a countdown timer
  function startTimeAttack() {
    // Reset timer variables
    timeAttackTimeLimit = 60;
    timeAttackTimer = timeAttackTimeLimit;
    stopModeTimers(); // Ensure any previous timer is cleared
  
    timeAttackInterval = setInterval(() => {
      timeAttackTimer--;
      // Optionally update a timer display element in your UI:
      const timerDisplay = document.getElementById('timer-display');
      if (timerDisplay) {
        timerDisplay.textContent = `Time: ${timeAttackTimer}s`;
      }
  
      if (timeAttackTimer <= 0) {
        clearInterval(timeAttackInterval);
        console.log('Time Attack mode ended: Time is up!');
        // Trigger game over or reset game logic here
        resetGame();
      }
    }, 1000);
  }
  
  // Clear any mode-specific timers or intervals
  function stopModeTimers() {
    if (timeAttackInterval !== null) {
      clearInterval(timeAttackInterval);
      timeAttackInterval = null;
    }
  }
  
  // A function to be called within the main game loop to handle mode-specific updates
  function modeSpecificUpdate() {
    switch (currentMode) {
      case gameModes.SURVIVAL:
        // In Survival mode, you might periodically add obstacles or increase difficulty.
        // For example, every few seconds, call a function to add a new obstacle:
        // addObstacle();
        break;
      case gameModes.CHALLENGE:
        // In Challenge mode, you could enforce level-specific rules or timers.
        break;
      default:
        // For Classic and Time Attack modes, no additional per-frame update may be required.
        break;
    }
  }
  
  // Expose the game mode variables and functions globally if needed.
  window.gameModes = gameModes;
  window.setGameMode = setGameMode;
  window.modeSpecificUpdate = modeSpecificUpdate;
  