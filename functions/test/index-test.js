const chai = require('chai');
const assert = chai.assert;

let btclib = require('../btclib.js');

describe('btcaddress', ()=>{
  it('shoud return expected address', ()=>{
    assert.equal(btclib.btcaddress(1), 'tb1qzyylapxls9u58ckn4w584gu9lhdcd5ngfnm9fa')
  })
})