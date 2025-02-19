// =============== Game Variables ===============
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

const gridSize = 20;
let snake = [{ x: 200, y: 200 }];
let food = { x: 100, y: 100 };
let direction = "RIGHT";
let score = 0;
let gameRunning = false;
let gamePaused = false;

// =============== Levels & Obstacles ===============
const levels = [
    { name: "Level 1", obstacles: [] },
    { name: "Level 2", obstacles: [{ x: 100, y: 100 }, { x: 200, y: 200 }] }
];
let currentLevelIndex = 0;

// =============== Audio ===============
const sounds = {
    eat: new Audio("assets/sounds/eat.mp3"),
    crash: new Audio("assets/sounds/crash.mp3"),
    background: new Audio("assets/sounds/background.mp3")
};
let soundEnabled = true;

// =============== Controls ===============
window.addEventListener("keydown", (e) => {
    if (["ArrowUp", "w"].includes(e.key) && direction !== "DOWN") direction = "UP";
    if (["ArrowDown", "s"].includes(e.key) && direction !== "UP") direction = "DOWN";
    if (["ArrowLeft", "a"].includes(e.key) && direction !== "RIGHT") direction = "LEFT";
    if (["ArrowRight", "d"].includes(e.key) && direction !== "LEFT") direction = "RIGHT";
});

// =============== Game Loop ===============
function gameLoop() {
    if (!gameRunning || gamePaused) return;

    setTimeout(() => {
        moveSnake();
        checkCollisions();
        drawGame();
        gameLoop();
    }, 100);
}

// =============== Game Functions ===============
function moveSnake() {
    let head = { ...snake[0] };

    if (direction === "UP") head.y -= gridSize;
    if (direction === "DOWN") head.y += gridSize;
    if (direction === "LEFT") head.x -= gridSize;
    if (direction === "RIGHT") head.x += gridSize;

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        updateScore();
        placeFood();
        playSound("eat");
    } else {
        snake.pop();
    }
}

function checkCollisions() {
    let head = snake[0];

    if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height || 
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOver();
    }
}

function gameOver() {
    gameRunning = false;
    playSound("crash");
    alert("Game Over!");
}

function placeFood() {
    food = { 
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize, 
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize 
    };
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, gridSize, gridSize);

    ctx.fillStyle = "lime";
    snake.forEach(segment => ctx.fillRect(segment.x, segment.y, gridSize, gridSize));
}

function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
}

function playSound(sound) {
    if (soundEnabled) sounds[sound].play();
}

// =============== UI Controls ===============
document.getElementById("start-btn").addEventListener("click", () => {
    if (!gameRunning) {
        gameRunning = true;
        playSound("background");
        gameLoop();
    }
});

document.getElementById("pause-btn").addEventListener("click", () => {
    gamePaused = !gamePaused;
});

document.getElementById("restart-btn").addEventListener("click", () => {
    location.reload();
});

document.getElementById("sound-btn").addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    document.getElementById("sound-btn").textContent = soundEnabled ? "Sound: ON" : "Sound: OFF";
});

// =============== Tutorial ===============
const tutorialSteps = [
    "Welcome to Snake Game!",
    "Use Arrow Keys or WASD to move.",
    "Eat food to grow and score points.",
    "Avoid crashing into walls and yourself!",
    "Good luck!"
];
let tutorialStep = 0;
document.getElementById("tutorial-next-btn").addEventListener("click", () => {
    if (tutorialStep < tutorialSteps.length - 1) {
        document.getElementById("tutorial-text").textContent = tutorialSteps[++tutorialStep];
    } else {
        document.getElementById("tutorial-overlay").style.display = "none";
    }
});
document.getElementById("tutorial-overlay").style.display = "flex";
