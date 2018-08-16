const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);
    this.borderColor = borderColor;
    this.lives = 3;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;
    // call parent class draw function
    super.draw(ctx);
    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }

  isDead() {
    this.lives --;
    if(this.lives === 0) {
      endGame();
    }else {
      //push the new number of lives to the DOM
    }
  }
}