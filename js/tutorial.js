// tutorial.js
// Handles interactive tutorial for new players.

const tutorialOverlay = document.getElementById("tutorial-overlay");
const tutorialText = document.getElementById("tutorial-text");
const tutorialNextButton = document.getElementById("tutorial-next-btn");
const tutorialSkipButton = document.getElementById("tutorial-skip-btn");

let tutorialStep = 0;
const tutorialSteps = [
  "Welcome to Snake Game! Let's go through the basics.",
  "Use Arrow Keys or WASD to control the snake.",
  "Eat the food to grow and score points.",
  "Avoid crashing into walls and yourself!",
  "Collect power-ups for special effects.",
  "Progress through levels by scoring more points.",
  "You're ready! Press 'Start' to begin your game."
];

// Function to show the tutorial
function showTutorial() {
  tutorialOverlay.style.display = "flex";
  tutorialText.textContent = tutorialSteps[tutorialStep];
}

// Function to go to the next tutorial step
function nextTutorialStep() {
  tutorialStep++;
  if (tutorialStep < tutorialSteps.length) {
    tutorialText.textContent = tutorialSteps[tutorialStep];
  } else {
    closeTutorial();
  }
}

// Function to skip the tutorial
function skipTutorial() {
  localStorage.setItem("tutorialCompleted", "true");
  closeTutorial();
}

// Function to close the tutorial
function closeTutorial() {
  tutorialOverlay.style.display = "none";
}

// Check if the tutorial was already completed
if (!localStorage.getItem("tutorialCompleted")) {
  showTutorial();
}

// Event listeners for tutorial buttons
tutorialNextButton.addEventListener("click", nextTutorialStep);
tutorialSkipButton.addEventListener("click", skipTutorial);

window.showTutorial = showTutorial;
