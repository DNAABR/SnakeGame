// main.js

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('start-button');

    const game = new Game(ctx);

    startButton.addEventListener('click', () => {
        game.start();
    });
});
