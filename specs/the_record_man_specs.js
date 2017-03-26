var RecordStore  = require('../RecordStore');
var Record = require('../Record');
var assert  = require('assert');
var RecordCollector = require('../RecordCollector');
var TheRecordMan = require('../TheRecordMan');

describe('The RecordMan facilitates the buying and selling of records.', function () {

  var store;
  var record;
  var customer;
  var recordman;

  before(function(){
    store = new RecordStore("Colin's Record Store", "Glasgow");
    record = new Record("Big Al", "Big Al's hits", 20);
    customer = new RecordCollector();
    recordman = new TheRecordMan(store);
    store.add_to_inventory(record);
  });

  it('should transfer the record from the store to the collector.', function () {
    recordman.sell_record_to_collector(record, customer);
    assert.deepEqual([ { artist: 'Big Al', title: 'Big Al\'s hits', price: 20 } ], customer.record_collection);
    assert.deepEqual([], store.inventory);
  });

  it('should reflect the sale in the store balance and customer cash', function(){
    assert.equal(20, store.balance);
    assert.equal(30, customer.cash);
  });

  it('should transfer the record from the collector to the store, and show increased price', function () {
    recordman.buy_record_from_collector(record, customer);
    assert.deepEqual([], customer.record_collection);
    assert.deepEqual([ { artist: 'Big Al', title: 'Big Al\'s hits', price: 22 } ], store.inventory);
  });

  it('should reflect the sale to store in the balance and cash.', function () {
    assert.equal(50, customer.cash);
    assert.equal(0, store.balance);
  });

  it('every time the store buys a record form a collector it adds on 10% to the sale price.', function () {
    recordman.sell_record_to_collector(record, customer);
    assert.equal(22, store.balance);
    assert.equal(28, customer.cash);
    recordman.buy_record_from_collector(record, customer);
    assert.equal(0, store.balance);
    assert.equal(50, customer.cash);
    recordman.sell_record_to_collector(record, customer);
    assert.equal(24.2, store.balance);
    assert.equal(25.8, customer.cash);
  });
});
