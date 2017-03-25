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
});