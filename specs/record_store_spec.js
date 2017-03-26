var RecordStore  = require('../RecordStore');
var Record = require('../Record');
var assert  = require('assert');

describe('The Record Store', function () {
  var store = new RecordStore("Colins Record Store", "Glasgow");
  var record_1 = new Record("Colin", "A Hit like a BaseBall Bat out of Hell.", 10);
  var record_2 = new Record("John", "This is my Jam", 15);
  var record_3 = new Record("Alan", "Aint no paddler like a ping pong paddler", 20);
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
    assert.deepEqual([{ artist: 'Colin', title: 'A Hit like a BaseBall Bat out of Hell.', price: 10 }], store.inventory);
  });
  it('should print out all record details of stock in its inventory', function () {
    store.add_to_inventory(record_2);
    assert.deepEqual([ 'A Hit like a BaseBall Bat out of Hell. by Colin for only £10',
      'This is my Jam by John for only £15' ], store.list_inventory() );
  });
  it('should sell records to customers and increase balance', function(){
    store.sell_record(record_2);
    assert.equal(15, store.balance);
    assert.deepEqual([ 'A Hit like a BaseBall Bat out of Hell. by Colin for only £10'], store.list_inventory() );
  });
  it('should provide a sales report', function(){
    assert.equal("STORE REPORT: \nFUNDS: 15\nSTOCK VALUE: 10", store.sit_rep());
  })
});