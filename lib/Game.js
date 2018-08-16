const Frog = require('./frog');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.frog = [
      new Frog(300, 550, 40, 40, 'green', 'pink')
    ];
  }

  // draw one frame of our game
  animate() {
    this.frog.forEach( frog => {
      this.handleFrog(frog);
      frog.draw(this.ctx);

    })
  }

  handleFrog(frog) {
    const { canvas } = this.ctx;
    
    if (frog.isCollidingWithWall(canvas.width, canvas.height)) {
      this.endGame();  
    } else {
      frog.move();
    }
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.frog.forEach( frog => frog.changeDirection(direction) );
  }

}