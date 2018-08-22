const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Water extends GamePiece {
  constructor(x, y, height, width, color) {
    // invoke parent class constructor
    super(x, y, height, width, color);
  } 

  draw(ctx) {
    super.draw(ctx);
  }
};