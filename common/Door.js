function Door(room1, room2){
  this.room1 = room1;
  this.room2 = room2;
}

Door.prototype = {
  toString: function(){
    return 'Door between ' + this.room1.toString() + ' and ' + this.room2.toString();
  }
}

exports.Door = Door;