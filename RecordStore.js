RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype = {
  add_to_inventory: function (record) {
    this.inventory.push(record);
  },
  buy_record: function (record) {
    this.balance -= record.price;
    record.price +=  (record.price * 0.10);
    this.add_to_inventory(record);
  },
  list_inventory: function () {
    var resultArr = this.inventory.map(function(record){
      return record.record_details();
    });
    return resultArr;
  },
  sell_record: function (record) {
    var rec_sold = this.inventory.find(function(obj){
      return record === obj;
    }, this);
    this.balance += rec_sold.price;
    this.inventory.splice(this.inventory.indexOf(rec_sold),1);
  },
  sit_rep: function () {
    var sum = this.inventory.reduce(function(acc, val) {
      return acc + val.price;
    }, 0);
    return "STORE REPORT: \nFUNDS: " + this.balance + "\nSTOCK VALUE: " + sum;
  }
};
module.exports = RecordStore;