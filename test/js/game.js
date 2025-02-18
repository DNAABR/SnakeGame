// game.js

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.snake = new Snake(this.ctx, 10);
        this.running = false;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('keydown', (event) => {
            let newDirection = { x: 0, y: 0 };
            switch (event.key) {
                case 'ArrowUp':
                    newDirection = { x: 0, y: -1 };
                    break;
                case 'ArrowDown':
                    newDirection = { x: 0, y: 1 };
                    break;
                case 'ArrowLeft':
                    newDirection = { x: -1, y: 0 };
                    break;
                case 'ArrowRight':
                    newDirection = { x: 1, y: 0 };
                    break;
            }
            this.snake.changeDirection(newDirection);
        });
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.gameLoop();
        }
    }

    gameLoop() {
        if (this.running) {
            this.update();
            this.draw();
            requestAnimationFrame(() => this.gameLoop());
        }
    }

    update() {
        this.snake.update();
        if (this.snake.checkCollision()) {
            this.running = false;
            alert('Game Over!');
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.snake.draw();
    }
}

class Snake {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.body = [
            { x: 50, y: 50 },
            { x: 40, y: 50 },
            { x: 30, y: 50 }
        ];
        this.direction = { x: 1, y: 0 };
    }

    update() {
        const head = { x: this.body[0].x + this.direction.x * this.size, y: this.body[0].y + this.direction.y * this.size };
        this.body.unshift(head);
        this.body.pop();
    }

    draw() {
        this.ctx.fillStyle = 'green';
        this.body.forEach(segment => {
            this.ctx.fillRect(segment.x, segment.y, this.size, this.size);
        });
    }

    changeDirection(newDirection) {
        // Prevent the snake from reversing
        if (
            (newDirection.x === -this.direction.x && newDirection.y === this.direction.y) ||
            (newDirection.y === -this.direction.y && newDirection.x === this.direction.x)
        ) {
            return;
        }
        this.direction = newDirection;
    }

    checkCollision() {
        const head = this.body[0];
        // Check collision with walls
        if (head.x < 0 || head.x >= this.ctx.canvas.width || head.y < 0 || head.y >= this.ctx.canvas.height) {
            return true;
        }
        // Check collision with itself
        for (let i = 1; i < this.body.length; i++) {
            if (head.x === this.body[i].x && head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }
}
