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
  }
};
module.exports = RecordStore;