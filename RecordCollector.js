RecordCollector = function () {
  this.record_collection = [];
  this.cash = 50;
}

RecordCollector.prototype =  {
  buy_record: function (record) {
    if (this.cash >= record.price){
      this.record_collection.push(record);
      this.cash -= record.price
      return true;
    }
  },
  sell_record: function (record) {
    var rec_sold = this.record_collection.find(function(obj){
      return record === obj;
    }, this);
    this.cash += rec_sold.price;
    this.record_collection.splice(this.record_collection.indexOf(rec_sold),1);
    return rec_sold;
  }
};

module.exports = RecordCollector;