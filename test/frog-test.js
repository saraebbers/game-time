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
  it.skip('after dying three times the game should be over', () => {
    //setup
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    //execution
    isDead();
    isDead();
    isDead();
    //assertion
    assert.isTrue(game.gameOver);
  })
  it.skip('it should move move the same direction as the arrow pressed', () => {
    //setup
    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    frogMoves(down);
    assert.equal(frog.y, 551)

    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    frogMoves(up);
    assert.equal(frog.y, 549);

    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    frogMoves(left);
    assert.equal(frog.x, 299)

    const frog = new Frog(300, 550, 40, 40, 'green', 'pink');
    frogMoves(right);
    assert.equal(frog.x, 301);
  })
  
  it.skip('it should recognize when it hits a wall', () => {
    //setup
    const frog = new Frog(0, 100, 40, 40, 'green', 'pink');

    isCollidingWithWall();

    assert.equal(isCollidingWithWall, true);

    const frog = new Frog(600, 100, 40, 40, 'green', 'pink');

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