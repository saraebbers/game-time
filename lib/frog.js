const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Frog extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);
    this.borderColor = borderColor;
    this.lives = 3;
    this.dx = 0;
    this.dxv = 0;
  } 
//help
  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    super.draw(ctx);
    // draw block border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }

  isDead() {
    this.lives --;
    if (this.lives === 0) {
      return true;
    }
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 50 ||
      this.x + this.width > canvasWidth ||
      this.y < 20 || 
      this.y + this.height > canvasHeight
    );
  }

  isCollidingWith(objects, frog) {
    
    let frogIsColliding = objects.find( object => {
      return (
        this.x < object.x + object.width &&
        this.x + this.width > object.x &&
        this.y < object.y + object.height &&
        this.y + this.height > object.y
      );
    });
    
    if (frogIsColliding) {
      frog.x = frogIsColliding.x;
      frog.dx  = frogIsColliding.dx;
      frog.dxv = frogIsColliding.dxv;
      return true;
    } else {
      return false;
    }

  }

  frogMove(frog, dir) {
    //prevent from leaving bounds initially. perhaps set canvas coordinates.
    let collide = this.isCollidingWithWall(580, 580);

    switch(dir) {
      case 'right':
            if (collide === true && this.x + this.width > 560){
              this.x += 0;
            } else {
              this.x += 50;
            }
            break;
      case 'left':
            if (collide === true && this.x < 0) {
              this.x -= 0
            } else {
              this.x -= 50;
            }
            break;
      case 'up':
            if(collide === true && this.y < 20) {
              this.y -= 0;
            } else {
              this.y -= 50;
            }
            break;
      case 'down':
            if(collide === true && this.y + this.height > 580) {
              this.y += 0;
            } else {
              this.y += 50;
            }
            break;
    }
  }
};

