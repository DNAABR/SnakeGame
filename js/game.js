// game.js
// Core game logic: Initializes the canvas, creates the snake and food,
// and implements the game loop to update game state and render the scene.

// Get the canvas and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Define the grid size (each cell in the grid)
const gridSize = 20;
const tileCountX = canvas.width / gridSize;
const tileCountY = canvas.height / gridSize;

// Define the snake object
let snake = {
  body: [{ x: 5, y: 5 }],         // Starting position
  direction: { x: 1, y: 0 },       // Initial movement direction (right)
  nextDirection: { x: 1, y: 0 }    // Buffer for the next direction change (updated via controls)
};

// Define the food object at a random position
let food = {
  x: Math.floor(Math.random() * tileCountX),
  y: Math.floor(Math.random() * tileCountY)
};

// Main game loop function
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Update game state: move the snake, check for collisions, handle food consumption
function update() {
  // Update snake's direction
  snake.direction = snake.nextDirection;

  // Calculate the new head position based on the current direction
  let head = { 
    x: snake.body[0].x + snake.direction.x, 
    y: snake.body[0].y + snake.direction.y 
  };

  // Wrap the snake around the edges (you can change this to wall collision if desired)
  if (head.x < 0) head.x = tileCountX - 1;
  if (head.x >= tileCountX) head.x = 0;
  if (head.y < 0) head.y = tileCountY - 1;
  if (head.y >= tileCountY) head.y = 0;

  // Check for self-collision: if the snake runs into itself, reset the game
  for (let segment of snake.body) {
    if (head.x === segment.x && head.y === segment.y) {
      console.log("Collision detected! Resetting game...");
      resetGame();
      return;
    }
  }

  // Add the new head to the snake body
  snake.body.unshift(head);

  // Check if the snake has eaten the food
  if (head.x === food.x && head.y === food.y) {
    console.log("Food eaten!");
    placeFood();
    // You can update the score here or trigger other events via ui.js
  } else {
    // Remove the tail segment if no food is eaten (maintaining snake length)
    snake.body.pop();
  }
}

// Draw the game: clear the canvas and render the snake and food
function draw() {
  // Clear the canvas
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  ctx.fillStyle = '#0f0';
  for (let segment of snake.body) {
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1);
  }

  // Draw the food
  ctx.fillStyle = '#f00';
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);
}

// Place food at a random location on the grid
function placeFood() {
  food.x = Math.floor(Math.random() * tileCountX);
  food.y = Math.floor(Math.random() * tileCountY);
}

// Reset the game (called when the snake collides with itself)
function resetGame() {
  snake.body = [{ x: 5, y: 5 }];
  snake.direction = { x: 1, y: 0 };
  snake.nextDirection = { x: 1, y: 0 };
  placeFood();
}
let gameInterval; // Store the interval ID

function gameLoop() {
  update();
  draw();
}

function startGameLoop(speed) {
  clearInterval(gameInterval); // Clear any existing interval
  gameInterval = setInterval(gameLoop, 1000 / speed); // Set the new interval
}

function initGame() {
  startGameLoop(baseSpeed); // Start with the initial speed
}

// Expose the initGame function if needed by other modules
// (For a module-based setup you could use export. Here, we assume a global namespace.)
// window.initGame = initGame;
