// GamePiece-test.js
const { assert } = require('chai');
const GamePiece = require('../lib/GamePiece.js')

describe('GamePiece', () => {

  it('should take properties', () => {
    const gamepiece = new GamePiece( 30, 30, 10, 10, 'green')

    assert.deepEqual(gamepiece, {
      x: 30,
      y: 30,
      height: 10,
      width: 10,
      color: 'green',
      dx: 1,
      dy: 0,
      dxv: 1,
      dyv: 1,
    })
  })

  it('should collide with a second gamepiece that occupies the same space', () => {
    //setup
    const gamepiece = new GamePiece( 30, 30, 10, 10, 'green')
    const gamepiece2 = new GamePiece( 130, 130, 10, 10, 'green')

    //execution
    const colliding = gamepiece.isCollidingWith(gamepiece2);
    //assertion
    assert.isFalse(colliding);
  })

  it.skip('should collide with walls', () => {})

  it.skip('should be able to move', () => {})

  it.skip('should be able to changeDirection', () => {})
  
})