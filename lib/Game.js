const Frog = require('./frog');
const Obstacle = require('./obstacle');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.frog = [
      new Frog(280, 560, 40, 40, 'green', 'pink')
    ];
    this.obstacle = [
      new Obstacle(-10, 505, 40, 20, 'red', 'black', 1, 5), 
      new Obstacle(-80, 505, 40, 20, 'red', 'black', 1, 5), 
      new Obstacle(-195, 455, 40, 80, 'orange', 'blue', 1, 1),
      new Obstacle(-195, 405, 40, 40, 'magenta', 'yellow', 1, 2),
      new Obstacle(650, 355, 40, 80, 'brown', 'yellow', -1, 2 ), 
      new Obstacle(795, 305, 40, 80, 'white', 'brown', -1, 1 ),]
  }

  // draw one frame of our game
  animate() {
    this.frog.forEach( frog => {
      this.handleFrog(frog);
      frog.draw(this.ctx);
    })
    this.obstacle.forEach( obstacle => {
      this.handleObstacle(obstacle);
      obstacle.draw(this.ctx);
    })
  }

  handleFrog(frog) {
    const { canvas } = this.ctx;
    
    // if (frog.isCollidingWith(obstacle)) {
    //   this.endGame();  
    // } else {
      this.handleKeyPress(frog);
    // }
  }

  handleObstacle(obstacle) {
    const { canvas } = this.ctx;
    if (obstacle.x >= 800) {
      obstacle.x = 0;
      // console.log(this.obstacle[0]);
    } else if (obstacle.x <= -200) {
      obstacle.x = 600
    } else {
      obstacle.move();
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
    if (e.key === 'ArrowRight') {
      let right = 'right';

      this.frog.forEach( frog => {
        frog.frogMove(frog, right);
      });
    } else if (e.key === 'ArrowLeft') {
      let left = 'left';

      this.frog.forEach( frog => {frog.frogMove(frog, left)
      });
    } else if (e.key === 'ArrowDown') {
      let down = 'down';
      
      this.frog.forEach( frog => {frog.frogMove(frog, down)
      });
    } else if (e.key === 'ArrowUp') {
      let up = 'up';

      this.frog.forEach( frog => {frog.frogMove(frog, up)
      });
    } 

  }

    // This code sets up the background on the canvas
  drawBackground() {
  // drawing water
    const ctx = this.ctx;
    
    ctx.fillStyle = 'rgb(56, 141, 236)';
    ctx.fillRect(0, 50, 600, 200); 

    // drawing 3 safe grass areas
    ctx.fillStyle = 'rgb(87, 144, 44)';
    ctx.fillRect(0, 0, 600, 50);
    ctx.fillRect(0, 250, 600, 50);
    ctx.fillRect(0, 550, 600, 50);

    // drawing white dash lane dividing lines and yellow center lines 
    ctx.beginPath();
    ctx.moveTo(0, 499);
    ctx.lineTo(600, 499);
    ctx.strokeStyle = 'rgb(254, 255, 255)';
    ctx.setLineDash([10]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 449);
    ctx.lineTo(600, 449);
    ctx.strokeStyle = 'rgb(254, 255, 255)';
    ctx.setLineDash([10]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 349);
    ctx.lineTo(600, 349);
    ctx.strokeStyle = 'rgb(254, 255, 255)';
    ctx.setLineDash([10]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 397);
    ctx.lineTo(600, 397);
    ctx.strokeStyle = 'rgb(252, 248, 86)';
    ctx.setLineDash([0]);
    ctx.strokeWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 401);
    ctx.lineTo(600, 401);
    ctx.strokeStyle = 'rgb(252, 248, 86)';
    ctx.setLineDash([0]);
    ctx.strokeWidth = 2;
    ctx.stroke();

}

}