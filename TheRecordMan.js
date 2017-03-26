TheRecordMan = function (store) {
  this.store = store;
}


TheRecordMan.prototype = {
  sell_record_to_collector: function (record, customer) {
    var sale = customer.buy_record(record);
    if (sale) {
      this.store.sell_record(record);
    }
  },
  buy_record_from_collector: function (record, customer) {
    var collectors_record = customer.sell_record(record);
    this.store.buy_record(collectors_record);
  }
};

module.exports = TheRecordMan;