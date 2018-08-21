module.exports = class GamePiece {
  constructor(x, y, height, width, color) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }

  isCollidingWith(obstacles) {
    
    obstacles.forEach( obstacle => {
      if(this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y) {
        console.log('sara is a goddess');
        console.log(this.x);
        return true;
      }
    })
    //   let collide = (
    //   this.x < obstacle.x + obstacle.width && 
    //   this.x + this.width > obstacle.x &&
    //   this.y < obstacle.y + obstacle.height &&
    //   this.y + this.height > obstacle.y
    // );
    console.log('Jessica wins');
    return ;
  }

  isCollidingWithWall(canvasWidth, canvasHeight) {
    return (
      this.x < 50 ||
      this.x + this.width > canvasWidth ||
      this.y < 20 || 
      this.y + this.height > canvasHeight
    )
  }

  draw(ctx) {
    const { x, y, height, width, color } = this;

    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }

  move() {
    this.x += this.dx * this.dxv;
    this.y += this.dy * this.dyv;
  }

  changeDirection(direction) {
    this.dx = direction.dx;
    this.dy = direction.dy;
  }

}