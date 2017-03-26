Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
}

Record.prototype= {
  record_details: function () {
    return this.title + " by " + this.artist + " for only £" + this.price
  }
};

module.exports = Record;