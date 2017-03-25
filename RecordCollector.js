RecordCollector = function () {
  this.record_collection = [];
  this.cash = 50;
}

RecordCollector.prototype =  {
  buy_record: function (record) {
    if (this.cash >= record.price){
      this.record_collection.push(record);
      this.cash -= record.price
    }
  }
};

module.exports = RecordCollector;