const { assert } = require('chai');
const Frog = require ('../lib/frog');
const Game = require('../lib/Game');
const Water = require('../lib/Water');
const ctx = {
  canvas: {
    width: 600,
    height: 600,
  }
};


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
    //setup
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    //execution

    //assertion
    assert.equal(frog.lives, 3);
    assert.equal(frog.x, 300);
    assert.equal(frog.y, 550);
    assert.equal(frog.height, 40);
    assert.equal(frog.width, 40);
    assert.equal(frog.color, 'green')
    assert.equal(frog.borderColor, 'pink')

    // =========
    // animate()
    // move()
    // animate()
  })
  it('should collide with walls', () => {
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    
    frog.x = ctx.canvas.width;
    assert.isTrue(frog.isCollidingWithWall(ctx.canvas.width, ctx.canvas.height));

  })
  it('after dying three times the game should be over', () => {
    //setup
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    const game = new Game();
    //execution
    frog.isDead();
    frog.isDead();
    frog.isDead();
    //assertion
    assert.equal(frog.lives, 0);
  })

  it.skip('it should recognize when it hits a wall', () => {
    //setup
    let frog = new Frog(0, 100, 40, 40, 'green', 'pink');

    isCollidingWithWall();

    assert.equal(isCollidingWithWall, true);

    let frog2 = new Frog(600, 100, 40, 40, 'green', 'pink');

    isCollidingWithWall();

    assert.equal(isCollidingWithWall, true)
    //execution
    //assertion    
  })
  it.skip('it should not move further than the wall', () => {
    const frog = new Frog (0, 100, 40, 40, 'green', 'pink')
  })
  it.skip('it should score y < 100 or the end of the game', () => {
    //setup
    //execution
    //assertion    
  })
  it.skip('should die when hit by a vehicle', () => {
    //setup
    //execution
    //assertion    
  })
  it.skip('it should die when not a log or turtle', () => {
    //setup
    //execution
    //assertion    
  })
  it.skip('match the movement the of the log/turtle when colliding', () => {
    //setup
    //execution
    //assertion    
  })
  it.skip('it should appear to jump', () => {
    //setup
    //execution
    //assertion    
  })
})