function DoorNeedingSpell(room1, room2){
  Door.call(this, room1, room2);
}

DoorNeedingSpell.prototype = Object.create(Door.prototype);

DoorNeedingSpell.prototype.toString = function(){
  return 'DoorNeedingSpell between ' + this.room1.toString() + ' and ' + this.room2.toString();
}

exports.DoorNeedingSpell = DoorNeedingSpell;