var assert = require('assert');
var RecordCollector = require('../RecordCollector');
var Record = require('../Record');

describe('The RecordCollector', function(){
  var customer = new RecordCollector();
  var record_1 = new Record("Colin", "a record", 10);
  var record_2 = new Record("Colin", "expensive tastes", 100);
  it('should have an empty collection', function(){
    assert.equal(0, customer.record_collection.length);
    assert.deepEqual([], customer.record_collection);
  });
  it('should start with 50 cash', function () {
    assert.equal(50, customer.cash);
  });
  it('should increase record collection when buying a record', function(){
    customer.buy_record(record_1);
    assert.equal(1, customer.record_collection.length);
    assert.deepEqual([ { artist: 'Colin', title: 'a record', price: 10 } ], customer.record_collection);
  });  
  it('should reduce funds when buying a record', function(){
    assert.equal(40, customer.cash);
  });  
  it('should not be able to buy a record if they do not have funds', function(){
    customer.buy_record(record_2);
    assert.equal(40, customer.cash);
    assert.equal(1, customer.record_collection.length);
    assert.deepEqual([ { artist: 'Colin', title: 'a record', price: 10 } ], customer.record_collection);
  });
});