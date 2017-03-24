var RecordStore  = require('../RecordStore');
var Record = require('../Record');
var assert  = require('assert');

describe('The Record Store', function () {
  var store = new RecordStore("Colins Record Store", "Glasgow");
  var record_1 = new Record("Colin", "a record", 10);
  var record_2 = new Record("John", "another record", 15);
  var record_3 = new Record("Alan", "a third record", 20);
  it('Should have a name', function () {
    assert.equal("Colins Record Store", store.name);
  });
  it('Should have a city', function () {
    assert.equal("Glasgow", store.city);
  });
  it('should have 0 balance to start', function () {
    assert.equal(0, store.balance);
  });
  it('should have an empty inventory to start', function () {
    assert.deepEqual([], store.inventory);
  });
  it('should increase inventory size when a record is added', function () {
    store.add_to_inventory(record_1);
    assert.equal(1, store.inventory.length);
    assert.deepEqual([{ artist: 'Colin', title: 'a record', price: 10 }], store.inventory);
  });
  it('should print out all record details of stock in its inventory', function () {
    store.add_to_inventory(record_2);
    assert.deepEqual([ 'a record by Colin for only 10',
  'another record by John for only 15' ], store.list_inventory() );
  });


});