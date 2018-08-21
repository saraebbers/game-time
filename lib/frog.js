const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);
    this.borderColor = borderColor;
    this.lives = 3;
    // this.rArrowPressed = false;
    // this.lArrowPressed = false;
    // this.uArrowPressed = false;
    // this.dArrowPressed = false;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    super.draw(ctx);
    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }

  isDead() {
    //use closure for counting of lives
    this.lives --;
    if (this.lives === 0) {

      return true;
      //push the new number of lives to the DOM
    }
  }

  frogMove(frog, direction) {
    //prevent from leaving bounds initially. perhaps set canvas coordinates.
    let collide = this.isCollidingWithWall(580, 580);

    if (direction === 'right' && collide === false) {
      this.x += 50;
    } else if (direction === 'right' && collide === true && this.x + this.width > 560) {
      this.x += 0;
    } else if (direction === 'right' && collide === true && this.x + this.width < 550){
      this.x += 50;
    } 

    else if (direction === 'left' && collide === false) {
      this.x -= 50;
    } else if (direction === 'left' && collide === true && this.x < 0) {
      this.x -= 0;
    } else if (direction === 'left' && collide === true && this.x > 0){
      this.x -= 50;
    } 

    else if (direction === 'up' && collide === false) {
      this.y -= 50;
    }else if (direction === 'up' && collide === true && this.y < 20) {
      this.y -= 0;
    }else if (direction === 'up' && collide === true && this.y > 20) {
      this.y -= 50;
    }

    else if (direction === 'down' && collide === false) {
      this.y += 50;
    }
    else if (direction === 'down' && collide === true && this.y + this.height > 580) {
      this.y += 0;
    }
    else if (direction === 'down' && collide === true && this.y + this.height < 580) {
      this.y += 50;
    }
  }
}

