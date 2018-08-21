const { assert } = require('chai');
const Log = require ('../lib/logs');

describe ('Log', () => {
  let log;


  beforeEach( () => {
    log = new Log(0, 30, 10, 10, 'pink');

  it('Should instantiate our good friend Log', () =>{
    
    assert.isObject(log);
  });

});