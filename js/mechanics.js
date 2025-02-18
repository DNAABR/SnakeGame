// mechanics.js
// Advanced game mechanics including scoring, dynamic difficulty scaling,
// and collision detection with walls and obstacles.

// --- Scoring Mechanics ---

// Global score variable
let score = 0;

// Called when the snake eats food.
function updateScore() {
  score++;

  // Update the UI score display
  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.textContent = `Score: ${score}`;
  }

  // Adjust the game difficulty based on the new score.
  adjustDifficulty();
}

// --- Dynamic Difficulty Scaling ---

// Base speed (frames per second) and current speed variables.
// currentSpeed can be used by your engine.js (or game loop) to control the update rate.
let baseSpeed = 5;
let currentSpeed = baseSpeed;
const maxSpeed = 10;

// Increase game speed every 5 points, up to a maximum speed.
function adjustDifficulty() {
  const newSpeed = baseSpeed + Math.floor(score / 5);
  currentSpeed = Math.min(newSpeed, maxSpeed);
  console.log(`Difficulty adjusted: ${currentSpeed} FPS`);
}

// --- Advanced Collision Detection ---

// Function to detect collisions with walls.
// This function is optional if you prefer the snake to wrap around edges.
// To use it, call checkWallCollision(head) in your game.js update function.
function checkWallCollision(head) {
  const tileCountX = canvas.width / gridSize;
  const tileCountY = canvas.height / gridSize;

  if (head.x < 0 || head.x >= tileCountX || head.y < 0 || head.y >= tileCountY) {
    console.log('Wall collision detected!');
    resetGame();
    return true;
  }
  return false;
}

// Example: Collision detection with obstacles.
// Define obstacles as an array of objects with x and y properties.
// You can dynamically add obstacles to this array.
let obstacles = []; // e.g., obstacles.push({ x: 10, y: 10 });

function checkObstacleCollision(head) {
  for (let obstacle of obstacles) {
    if (head.x === obstacle.x && head.y === obstacle.y) {
      console.log('Obstacle collision detected!');
      resetGame();
      return true;
    }
  }
  return false;
}

// --- Integration Note ---
//
// In your game.js update function, you can integrate these mechanics:
//
// 1. When the snake eats food, call updateScore():
//    if (head.x === food.x && head.y === food.y) {
//      updateScore();
//      placeFood();
//    }
//
// 2. If you want wall collisions (instead of wrapping), call checkWallCollision(head)
//    before adding the new head to the snake body:
//
//    if (checkWallCollision(head)) return;
//
// 3. Similarly, check for collisions with obstacles by calling checkObstacleCollision(head).
//
// The currentSpeed variable (updated in adjustDifficulty) can be used in your game engine
// to modify the frame rate or update intervals for increased difficulty.

// If using a module system, you can export the functions:
// export { updateScore, adjustDifficulty, checkWallCollision, checkObstacleCollision, obstacles };
