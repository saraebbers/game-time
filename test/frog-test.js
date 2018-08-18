const { assert } = require('chai');
const Frog = require ('../lib/frog');

describe ('Frog', () => {
  it('should start with three lives', () => {
    //setup
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    //execution

    //assertion
    assert.equal(frog.lives, 3)
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
    assert.isTrue(game.gameOver);
  })
  // it.skip('it should move move the same direction as the arrow pressed', () => {
  //   //setup
  //   const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
  //   e.key = 'ArrowDown'
  //   handleKeyPress(e);
  //   assert.equal(frog.y, 551)

    let frog2 = new Frog(300, 550, 40, 40, 'green', 'pink');
    frogMoves(up);
    assert.equal(frog2.y, 549);

    let frog3 = new Frog(300, 550, 40, 40, 'green', 'pink');
    frogMoves(left);
    assert.equal(frog3.x, 299)

    let frog4 = new Frog(300, 550, 40, 40, 'green', 'pink');
    frogMoves(right);
    assert.equal(frog4.x, 301);
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