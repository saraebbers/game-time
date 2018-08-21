const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Water extends GamePiece {
  constructor(x, y, height, width, color, borderColor) {
    // invoke parent class constructor
    super(x, y, height, width, color);
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor} = this;

    super.draw(ctx);
    // draw block border
    // ctx.strokeStyle = borderColor;
    // ctx.strokeRect(x, y, width, height, color);
  }
};