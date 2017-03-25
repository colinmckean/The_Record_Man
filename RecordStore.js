RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.balance = 0;
  this.inventory = [];
}

RecordStore.prototype = {
  add_to_inventory: function(record){
    this.inventory.push(record);
  },
  list_inventory: function() {
    var resultArr = [];
    this.inventory.forEach(function(record){
      resultArr.push(record.record_details());
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
  sit_rep: function(){
    var sum = 0;
    this.inventory.forEach(function(record){
      sum += record.price;
    });
    return "STORE REPORT: \nFUNDS: " + this.balance + "\nSTOCK VALUE: " + sum;
  }
};
module.exports = RecordStore;