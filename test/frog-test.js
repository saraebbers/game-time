const { assert } = require('chai');
const Frog = require ('../lib/frog');
const Game = require('../lib/Game');
const Water = require('../lib/Water');
const Log = require('../lib/Log');
const ctx = {
  canvas: {
    width: 600,
    height: 600,
  }
};
const Obstacle = require('../lib/Obstacle');

describe ('Frog', () => {
  it('should be an object', () => {
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    const newGame = new Game();

    assert.isObject(newGame)
    assert.isObject(frog);
  });
  it('should be a function', () => {
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    const newGame = new Game();


    assert.isFunction(frog.isDead);
    assert.isFunction(frog.isCollidingWith);
    assert.isFunction(frog.frogMove);
    assert.isFunction(frog.draw);
  })
  it('should move when a direction pressed',() => {
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    const newGame = new Game();

    frog.frogMove(frog, 'right');
    assert.equal(frog.x, 350);
  })
  it('should take properties', () => {
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');

    assert.equal(frog.lives, 3);
    assert.equal(frog.x, 300);
    assert.equal(frog.y, 550);
    assert.equal(frog.height, 40);
    assert.equal(frog.width, 40);
    assert.equal(frog.color, 'green')
    assert.equal(frog.borderColor, 'pink')
  })
  it('it should not be able to jump beyond wall', () => {
    let frog = new Frog (0, 100, 40, 40, 'green', 'pink')

    frog.frogMove(frog, 'left');
    assert.equal(frog.x, 0)

    frog = new Frog(580, 100, 40, 40, 'green', 'pink')

    frog.frogMove(frog, 'right');
    assert.equal(frog.x, 580);

    frog = new Frog(100, 0, 40, 40, 'green', 'pink');

    frog.frogMove(frog, 'up');
    assert.equal(frog.y, 0);

    frog = new Frog(100, 600, 40, 40, 'green', 'pink');

    frog.frogMove(frog, 'down');
    assert.equal(frog.y, 600);
  })
  it('should detect collision between frog and object', () => {
    const frog = new Frog(300, 300, 40, 40, 'green', 'pink');
    const obstacle = [new Obstacle(300, 300, 40, 40)];

    assert.isTrue(frog.isCollidingWith(obstacle, frog))
  })
  it('should detect collision with walls', () => {
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    
    frog.x = ctx.canvas.width;
    assert.isTrue(frog.isCollidingWithWall(ctx.canvas.width, ctx.canvas.height));

  })
  // it('should lose a life when colliding with wall', () => {
  //   const frog = new Frog(300, 300, 40, 40, 'green', 'pink');
  //   frog.x = ctx.canvas.width;
  //   let canvasWidth = 600;
  //   let canvasHeight = 600;
  //   const game = new Game();
  //   game.handleFrog(frog);
  //   assert.equal(frog.lives, 2);
  //   //test passes, inorder to run test must hard code in canvas height and width into game.js file
  // })
  it('after dying three times the game should be over', () => {
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    const game = new Game();
    frog.isDead();
    frog.isDead();
    frog.isDead();
    assert.equal(frog.lives, 0);
  })
  it('it should detect collision with a log', () => {
    const frog = new Frog(300, 150, 40, 40, 'green', 'pink');
    const log = [new Log(300, 150, 40, 40)];

    assert.isTrue(frog.isCollidingWith(log, frog))
  })
  it('match the movement the of the log/turtle when colliding', () => {
    const frog = new Frog(300, 150, 40, 40, 'green', 'pink');
    const log = [new Log(300, 150, 40, 40, 'red', 'green', 1, 2)];
    frog.isCollidingWith(log, frog);
    
    console.log(frog.x, frog.dxv, frog.dx);
    console.log('log', log.x, log.dxv, log.dx);
    console.log(log);
    assert.isTrue(frog.x === log[0].x && frog.dx === log[0].dx && frog.dxv === log[0].dxv)

  })
})