Room = require('../common/Room').Room;

function EnchantedRoom(number, spell){
  Room.call(this, number);
  this.spell = spell;
}
EnchantedRoom.prototype = Object.create(Room.prototype);

EnchantedRoom.prototype.constructor = EnchantedRoom;

EnchantedRoom.prototype.toString = function(){
  return 'enchanted room ' + this.number + ' with spell ' + this.spell;
}

exports.EnchantedRoom = EnchantedRoom;