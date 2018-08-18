const { assert } = require('chai');
const Obstacle = require ('../lib/Obstacle');

describe ('Obstacle', () => {
  let obstacle;

  beforeEach( () => {
  obstacle = new Obstacle( 0, 30, 10, 10, 'pink') });

  it('should instanciate new obstacles', () => {
    //setup
    //execution
    //assertion
    assert.isObject(obstacle);
  });

  it('it should start on the 0 or 600 x axis', () => {
    //setup
    let obstacle0 = new Obstacle( 0, 130, 10, 10, 'gray');
    let obstacle600 = new Obstacle( 600, 230, 10, 10, 'blue');
    //execution
    //assertion  
    assert.equal(obstacle0.x, 0)
    assert.equal(obstacle600.x, 600)
  });

  it('it should move horizotally across the screen', () => {
    //setup
    //execution
    obstacle.move();
    //assertion
    assert.notEqual(obstacle.x, 0)
  })

  it.skip('it should exit one side of screen and reappear on other when it hits a wall', () => {
    //setup
    //execution
    obstacle.move();
    obstacle.isCollidingWithWall();
    obstacle.move();
    //assertion    
  })
  it.skip('it should console.log when colliding with frog', () => {
    //setup
    //execution
    //assertion    
  })
  it.skip('it should appear to move smooth like cool jazz axcross the screen', () => {
    //setup
    //execution
    //assertion    
  })
})