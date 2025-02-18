// controls.js
// This file sets up event listeners for player input to control the snake's movement.
// It supports both arrow keys and WASD keys.

function initControls() {
    document.addEventListener('keydown', function (e) {
      // Determine the new direction based on the key pressed.
      let newDirection = { x: 0, y: 0 };
  
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          newDirection = { x: 0, y: -1 };
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          newDirection = { x: 0, y: 1 };
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          newDirection = { x: -1, y: 0 };
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          newDirection = { x: 1, y: 0 };
          break;
        default:
          // Ignore any other keys.
          return;
      }
  
      // Ensure the snake variable exists before attempting to update it.
      if (typeof snake !== 'undefined') {
        // Prevent the snake from reversing directly.
        if (
          newDirection.x === -snake.direction.x &&
          newDirection.y === -snake.direction.y
        ) {
          return;
        }
        // Update the snake's buffered direction.
        snake.nextDirection = newDirection;
      }
    });
  }
  
  // Initialize the controls when this script loads.
  initControls();
  
  // If using module systems, you can export initControls as needed.
  // export { initControls };
  