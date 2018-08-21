const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Obstacle extends GamePiece {
  constructor(x, y, height, width, color, borderColor, dx = 1, dxv = 1) {
    // invoke parent class constructor
    super(x, y, height, width, color);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.borderColor = borderColor;
    this.dx = dx;
    this.dy = 0;
    this.dxv = dxv;
    this.dyv = 1;
  } 

  draw(ctx) {
    const {x, y, height, width, borderColor } = this;

    // call parent class draw function
    super.draw(ctx);

    // draw obstacle border
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);
  }
}