const { assert } = require('chai');
const Log = require ('../lib/logs');

describe ('Log', () => {
  beforeEach( () => {
    let log = new Log()
  });
  it('Should be function', () => {
    //setup
    //execution

    //assertion

    assert.isFunction()
  });
  it.skip('Should instantiate our good friend Log', () =>{
    assert.isObject(log);
  })

}