// powerups.js
// Handles power-up spawning, collection, and effects.

// Define different power-up types
const powerUpTypes = {
    SPEED_BOOST: 'speed_boost',
    SLOW_MOTION: 'slow_motion',
    EXTRA_POINTS: 'extra_points',
    SHRINK: 'shrink'
  };
  
  // Global power-up variable
  let activePowerUp = null;
  
  // Function to generate a random position for a power-up
  function getRandomPosition() {
    return {
      x: Math.floor(Math.random() * (canvas.width / gridSize)),
      y: Math.floor(Math.random() * (canvas.height / gridSize))
    };
  }
  
  // Function to spawn a new power-up
  function spawnPowerUp() {
    if (activePowerUp) return; // Only one power-up at a time
  
    const powerUpKeys = Object.keys(powerUpTypes);
    const randomType = powerUpTypes[powerUpKeys[Math.floor(Math.random() * powerUpKeys.length)]];
  
    activePowerUp = {
      type: randomType,
      position: getRandomPosition(),
      duration: 5000 // 5 seconds before disappearing
    };
  
    console.log(`Spawned power-up: ${randomType} at (${activePowerUp.position.x}, ${activePowerUp.position.y})`);
  
    // Remove the power-up after its duration if not collected
    setTimeout(() => {
      if (activePowerUp) {
        console.log('Power-up expired!');
        activePowerUp = null;
      }
    }, activePowerUp.duration);
  }
  
  // Function to check if the snake has collected a power-up
  function checkPowerUpCollision(head) {
    if (activePowerUp && head.x === activePowerUp.position.x && head.y === activePowerUp.position.y) {
      applyPowerUpEffect(activePowerUp.type);
      activePowerUp = null; // Remove the collected power-up
    }
  }
  
  // Function to apply power-up effects
  function applyPowerUpEffect(type) {
    switch (type) {
      case powerUpTypes.SPEED_BOOST:
        console.log('Speed Boost Activated!');
        currentSpeed = Math.min(currentSpeed + 2, maxSpeed);
        break;
        
      case powerUpTypes.SLOW_MOTION:
        console.log('Slow Motion Activated!');
        currentSpeed = Math.max(currentSpeed - 2, 2);
        break;
        
      case powerUpTypes.EXTRA_POINTS:
        console.log('Extra Points Awarded!');
        score += 3;
        updateScore();
        break;
        
      case powerUpTypes.SHRINK:
        console.log('Snake Shrinks!');
        if (snake.body.length > 2) {
          snake.body.splice(-2, 2); // Remove last two segments
        }
        break;
    }
  }
  
  // Integration note:
  // - Call `spawnPowerUp()` periodically in your game loop.
  // - Call `checkPowerUpCollision(head)` after updating the snake’s position.
  
  window.spawnPowerUp = spawnPowerUp;
  window.checkPowerUpCollision = checkPowerUpCollision;
  