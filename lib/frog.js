const GamePiece = require('./GamePiece');
const game = require('./Game')

// extend GamePiece class
module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);
    this.borderColor = borderColor;
    this.lives = 3;
    this.rArrowPressed = false;
    this.lArrowPressed = false;
    this.uArrowPressed = false;
    this.dArrowPressed = false;
    console.log (this.rArrowPressed);
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
    //use closure for counting of lives
    this.lives --;
    console.log(this.lives)
    if(this.lives === 0) {
      return 
    } else {
      //push the new number of lives to the DOM
    }
  }

  frogMove(frog) {
    console.log('in frogMove');
    if (this.rArrowPressed === false) {
      this.x += 20;
      this.rArrowPressed = false;
      console.log('rArrowPressed in frogMove');
    } else if (frog.isCollidingWithWall() === false && this.lArrowPressed === true) {
      this.x -= 20;
      this.lArrowPressed = false;
      console.log('lArrowPressed in frogMove');
    } else if (frog.isCollidingWithWall() === false && this.uArrowPressed === true) {
      this.y -= 20;
      this.uArrowPressed = false;
      console.log('uArrowPressed in frogMove');
    } else if (frog.isCollidingWithWall() === false && this.dArrowPressed === true ) {
      this.y += 20;
      this.dArrowPressed = false;
      console.log('rArrowPressed in frogMove');
    }
    console.log('leaving frogMove')
  }
}


