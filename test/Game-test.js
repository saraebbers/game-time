// Game-test.js
const { assert } = require('chai');
const Game = require ('../lib/Game')

const ctx = {
  canvas: {
    width: 300,
    height: 300
  }
}

describe('Game', () => {
  it('should end the game if the block collides the wall', () => {
    //setup
    const game = new Game(ctx);
    const block = game.blocks[0];

    block.x = ctx.canvas.width;

    //execution

    game.handleBlock(block);

    //assertion
    assert.isTrue(game.gameOver);
  });
  it('should take properties', () => {})
  it.skip('should end game', () => {})
  it.skip('should collide with walls', () => {})
  it.skip('should be able to move', () => {})
  it.skip('should be able to changeDirection', () => {})
})