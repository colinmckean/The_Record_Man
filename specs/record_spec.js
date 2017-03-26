var Record = require('../Record');
var assert = require('assert');

describe('The Record', function () {
  var record = new Record("Colin", "A Hit like a BaseBall Bat out of Hell.", 10);
  it('should have an artist name of Colin', function (){
    assert.equal("Colin", record.artist);
  });
  it('should have an title of A Hit like a BaseBall Bat out of Hell.', function(){
    assert.equal("A Hit like a BaseBall Bat out of Hell.", record.title);
  });
  it('should have a price of 10', function(){
    assert.equal(10, record.price);
  });
  it('should return a string of record details.', function () {
    assert.equal("A Hit like a BaseBall Bat out of Hell. by Colin for only £10", record.record_details());
  });
});