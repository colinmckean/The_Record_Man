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
    this.inventory.forEach(function(record){
      console.log(record.record_details());
    })
  }
};
module.exports = RecordStore;