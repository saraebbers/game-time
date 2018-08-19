const GamePiece = require('./GamePiece');
const game = require('./Game')

// extend GamePiece class
module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);
    this.borderColor = borderColor;
    this.lives = 3;
    let rArrowPressed = false;
    let lArrowPressed = false;
    let uArrowPressed = false;
    let dArrowPressed = false;
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
    console.log(this.lives)
    if(this.lives === 0) {
      return 
    } else {
      //push the new number of lives to the DOM
    }
  }

  frogMove(frog) {

    if (frog.isCollidingWithWall() === false) {
      this.x += 20;
      this.rArrowPressed = false;
    } else if (frog.isCollidingWithWall() === false) {
      this.x -= 20;
      this.lArrowPressed = false;
    } else if (frog.isCollidingWithWall() === false) {
      this.y -= 20;
      this.uArrowPressed = false;
    } else if (frog.isCollidingWithWall() === false) {
      this.y += 20;
      this.dArrowPressed = false;
    }
  }
}


