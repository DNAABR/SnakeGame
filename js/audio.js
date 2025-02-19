// audio.js
// Handles game sound effects and background music.

const sounds = {
    eat: new Audio('assets/sounds/eat.mp3'),
    crash: new Audio('assets/sounds/crash.mp3'),
    powerup: new Audio('assets/sounds/powerup.mp3'),
    background: new Audio('assets/sounds/background.mp3')
  };
  
  let soundEnabled = true;
  
  // Function to play a sound effect
  function playSound(sound) {
    if (soundEnabled && sounds[sound]) {
      sounds[sound].currentTime = 0; // Reset audio to allow consecutive plays
      sounds[sound].play();
    }
  }
  
  // Function to toggle sound on/off
  function toggleSound() {
    soundEnabled = !soundEnabled;
    console.log(`Sound: ${soundEnabled ? 'ON' : 'OFF'}`);
  }
  
  // Function to start background music
  function playBackgroundMusic() {
    if (soundEnabled) {
      sounds.background.loop = true;
      sounds.background.volume = 0.5; // Set background music volume
      sounds.background.play();
    }
  }
  
  // Function to stop background music
  function stopBackgroundMusic() {
    sounds.background.pause();
    sounds.background.currentTime = 0;
  }
  
  // Integration note:
  // - Call `playSound('eat')` when the snake eats food in `game.js`.
  // - Call `playSound('crash')` when the snake collides with a wall or itself.
  // - Call `playSound('powerup')` when the snake collects a power-up.
  // - Call `playBackgroundMusic()` when the game starts.
  
  window.playSound = playSound;
  window.toggleSound = toggleSound;
  window.playBackgroundMusic = playBackgroundMusic;
  window.stopBackgroundMusic = stopBackgroundMusic;
  