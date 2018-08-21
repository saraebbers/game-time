const Frog = require('./frog');
const Obstacle = require('./obstacle');
const Log = require('./logs');

module.exports = class Game {
  constructor(ctx) {
    let fGreen = 'rgb(87 144 44)';
    let fYellow = 'rgb(240 252 117)';
    let wBlue = 'rgb(56 141 236)';
    let lBrown = 'rgb(116 89 69)';
    let tBrown = 'rgb(75 71 38)';
    let rBlack = 'rgb(48 42 35)';
    let rYellow = 'rgb(252 248 86)';
    let rWhite = 'rgb(254 255 255)';
    let lGreen = 'rgb(87 144 44)';
    let oPink = 'rgb(238 149 151)';
    let oRed = 'rgb(216 55 49)';
    let oTeal = 'rgb(57 106 175)';
    let oYellow = 'rgb(229 196 65)';
    let oPurple = 'rgb(172, 128, 251)';
    
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    // level 1
    this.frog = [
      new Frog(280, 555, 40, 40, 'green', oPink)
    ];
    this.obstacle = [
      new Obstacle(-10, 515, 20, 40, oPink, rWhite, 1, 5), 
      new Obstacle(-100, 515, 20, 40, oRed, oTeal, 1, 5), 
      new Obstacle(-195, 455, 40, 80, oTeal, oYellow, 1, 1),
      new Obstacle(-55, 405, 40, 40, oYellow, oPurple, 1, 2),
      new Obstacle(-195, 405, 40, 40, oPurple, oPink, 1, 2),
      new Obstacle(650, 355, 40, 80, oPink, oTeal, -1, 2 ), 
      new Obstacle(605, 305, 40, 80, lGreen, oYellow, -1, 1 ),
      new Obstacle(790, 305, 40, 60, fYellow, oRed, -1, 1 ),
    ];
    this.log = [
      new Log (-10, 205, 40, 100, lBrown, fGreen, 1, 2),
      new Log (650, 155, 40, 100, lBrown, tBrown, -1, 2),
      new Log (-100, 105, 40, 100, lBrown, rBlack, 1, 3),
      new Log (710, 55, 40, 100, lBrown, rYellow, -1, 3),
    ];

    // //level 2 
    // this.obstacle = [
    //   new Obstacle(-10, 455, 20, 40, oPink, rWhite, 1, 5), 
    //   new Obstacle(-100, 455, 20, 40, wBlue, oTeal, 1, 5),
    //   new Obstacle(250, 455, 20, 40, oTeal, oYellow, 1, 5), 
    //   new Obstacle(-195, 505, 40, 80, oYellow, oPurple, 1, 1),
    //   new Obstacle(-5, 505, 40, 80, oPurple, oPink, 1, 1),
    //   new Obstacle(-55, 405, 40, 40, oPink, oTeal, 1, 2),
    //   new Obstacle(-195, 405, 40, 40, lGreen, oYellow, 1, 2),
    //   new Obstacle(650, 355, 40, 80, fYellow, oRed, -1, 2 ), 
    //   new Obstacle(605, 305, 40, 80, oPink, lGreen, -1, 3 ),
    //   new Obstacle(200, 305, 40, 80, oTeal, fYellow, -1, 3 ),
    //   new Obstacle(790, 305, 40, 60, rWhite, oRed, -1, 3 ),
    // ];
    // this.log = [
    //   new Log (-10, 205, 40, 50, lBrown, fGreen, 1, 2),
    //   new Log (-80, 205, 40, 50, lBrown, tBrown, 1, 2),
    //   new Log (-160, 205, 40, 50, lBrown, rBlack, 1, 2),

    //   new Log (650, 155, 40, 100, lBrown, rYellow, -1, 2),

    //   new Log (-100, 105, 40, 100, lBrown, fGreen, 1, 3),
    //   new Log (710, 55, 40, 100, lBrown, tBrown, -1, 3),
    // ];
  }

  // draw one frame of our game
  animate() {
    this.log.forEach ( log => {
      this.handleLog(log);
      log.draw(this.ctx);
    });
    this.frog.forEach( frog => {
      this.handleFrog(frog);
      frog.draw(this.ctx);
    });
    this.obstacle.forEach( obstacle => {
      this.handleObstacle(obstacle);
      obstacle.draw(this.ctx);
    });
  }

  handleFrog(frog) {
    if (frog.isCollidingWith(this.obstacle, frog)) {
      this.endGame(); 
      // debugger; 
    } else if (frog.isCollidingWith(this.log, frog)) {
      this.frogRides(this.log);
    } else {
      this.handleKeyPress(frog);
    }
  }

  handleObstacle(obstacle) {
    if (obstacle.x >= 800) {
      obstacle.x = 0;
      // console.log(this.obstacle[0]);
    } else if (obstacle.x <= -200) {
      obstacle.x = 600;
    } else {
      obstacle.move();
    }
  }

  handleLog(log) {
    if (log.x >= 800) {
      log.x = 0;
    } else if (log.x <= -200) {
      log.x = 600;
    } else {
      log.move();
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

  frogRides(log) {

    this.frog.dx = log.dx;
    this.frog.dvx = log.dxv;
  }

  handleKeyPress(e) {

    if (e.key === 'ArrowRight') {
      let right = 'right';

      this.frog.forEach( frog => {
        frog.frogMove(frog, right);
      });
    } else if (e.key === 'ArrowLeft') {
      let left = 'left';

      this.frog.forEach( frog => {
        frog.frogMove(frog, left);
      });
    } else if (e.key === 'ArrowDown') {
      let down = 'down';
      
      this.frog.forEach( frog => {
        frog.frogMove(frog, down);
      });
    } else if (e.key === 'ArrowUp') {
      let up = 'up';

      this.frog.forEach( frog => {
        frog.frogMove(frog, up);
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

};