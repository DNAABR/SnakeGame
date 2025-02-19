// levels.js
// Manages level design, obstacles, and progression.

const levels = [
    {
      name: "Level 1",
      obstacles: [] // No obstacles in the first level
    },
    {
      name: "Level 2",
      obstacles: [
        { x: 5, y: 5 },
        { x: 6, y: 5 },
        { x: 7, y: 5 }
      ]
    },
    {
      name: "Level 3",
      obstacles: [
        { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 },
        { x: 10, y: 10 }, { x: 11, y: 10 }, { x: 12, y: 10 }
      ]
    }
  ];
  
  let currentLevelIndex = 0;
  let currentLevel = levels[currentLevelIndex];
  
  // Function to load a level
  function loadLevel(index) {
    if (index < levels.length) {
      currentLevelIndex = index;
      currentLevel = levels[index];
      console.log(`Loaded ${currentLevel.name}`);
    } else {
      console.log("No more levels! You've completed the game.");
    }
  }
  
  // Function to check if the snake collides with obstacles
  function checkObstacleCollision(head) {
    return currentLevel.obstacles.some(obstacle => obstacle.x === head.x && obstacle.y === head.y);
  }
  
  // Function to progress to the next level when reaching a score threshold
  function checkLevelProgression() {
    if (score >= (currentLevelIndex + 1) * 10) {
      loadLevel(currentLevelIndex + 1);
    }
  }
  
  // Integration note:
  // - Call `checkObstacleCollision(head)` after updating the snake’s position in `game.js`.
  // - Call `checkLevelProgression()` after increasing the score.
  
  window.loadLevel = loadLevel;
  window.checkObstacleCollision = checkObstacleCollision;
  window.checkLevelProgression = checkLevelProgression;
  