var RecordStore  = require('../RecordStore');
var assert  = require('assert');

describe('The Record Store', function () {
  var store = new RecordStore("Colins Record Store", "Glasgow");
  it('Should have a name', function () {
    assert.equal("Colins Record Store", store.name);
  });
  it('Should have a city', function () {
    assert.equal("Glasgow", store.city);
  });
  it('should have 0 balance to start', function () {
    assert.equal(0, store.balance);
  });
});