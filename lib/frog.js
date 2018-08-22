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
    let col = this.isCollidingWithWall(580, 580);

    if (dir === 'right' && col === false) {
      this.x += 50;
    } else if (dir === 'right' && col === true && this.x + this.width > 560) {
      this.x += 0;
    } else if (dir === 'right' && col === true && this.x + this.width < 550) {
      this.x += 50;
    } else if (dir === 'left' && col === false) {
      this.x -= 50;
    } else if (dir === 'left' && col === true && this.x < 0) {
      this.x -= 0;
    } else if (dir === 'left' && col === true && this.x > 0) {
      this.x -= 50;
    } else if (dir === 'up' && col === false) {
      this.y -= 50;
    } else if (dir === 'up' && col === true && this.y < 20) {
      this.y -= 0;
    } else if (dir === 'up' && col === true && this.y > 20) {
      this.y -= 50;
    } else if (dir === 'down' && col === false) {
      this.y += 50;
    } else if (dir === 'down' && col === true && this.y + this.height > 580) {
      this.y += 0;
    } else if (dir === 'down' && col === true && this.y + this.height < 580) {
      this.y += 50;
    }
  }
};

