var RecordStore  = require('../RecordStore');
var assert  = require('assert');

describe('The Record Store', function () {
  var store = new RecordStore("Colins Record Store", "Glasgow");
  it('Should have a name', function () {
    assert.equal("Colins Record Store", store.name);
  });
});