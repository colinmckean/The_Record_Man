var Record = require('../Record');
var assert = require('assert');

describe('The Record', function () {
  var record = new Record("Colin", "a record", 10);
  it('should have an artist name of Colin', function (){
    assert.equal("Colin", record.artist);
  });
  it('should have an title of a record', function(){
    assert.equal("a record", record.title);
  })
})