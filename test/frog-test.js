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
    //execution
    frog.isDead();
    frog.isDead();
    frog.isDead();
    //assertion
    assert.equal(frog.lives, 0);
  })
  it('it should move move the same direction as the arrow pressed', () => {
    
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