// ui.js
// Handles UI elements like score, buttons, and interactions.

const scoreElement = document.getElementById("score");
const levelElement = document.getElementById("level");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const restartButton = document.getElementById("restart-btn");
const soundToggleButton = document.getElementById("sound-btn");

let gamePaused = false;

// Function to update score display
function updateScore() {
  scoreElement.textContent = `Score: ${score}`;
}

// Function to update level display
function updateLevel() {
  levelElement.textContent = `Level: ${currentLevelIndex + 1}`;
}

// Function to toggle pause/resume
function togglePause() {
  gamePaused = !gamePaused;
  if (gamePaused) {
    console.log("Game Paused");
  } else {
    console.log("Game Resumed");
  }
}

// Function to restart the game
function restartGame() {
  console.log("Game Restarted");
  resetGame();
}

// Function to toggle sound
function toggleGameSound() {
  toggleSound();
  soundToggleButton.textContent = soundEnabled ? "Sound: ON" : "Sound: OFF";
}

// Event listeners for UI buttons
startButton.addEventListener("click", () => {
  playBackgroundMusic();
  console.log("Game Started");
});

pauseButton.addEventListener("click", togglePause);
restartButton.addEventListener("click", restartGame);
soundToggleButton.addEventListener("click", toggleGameSound);

// Integration note:
// - Call `updateScore()` whenever the score changes.
// - Call `updateLevel()` whenever the level changes.

window.updateScore = updateScore;
window.updateLevel = updateLevel;
window.togglePause = togglePause;
window.restartGame = restartGame;
