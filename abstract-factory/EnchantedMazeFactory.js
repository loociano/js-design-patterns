/** Concrete factories */
function EnchantedMazeFactory() {
  MazeFactory.call(this);
}

EnchantedMazeFactory.prototype = Object.create(MazeFactory.prototype);

EnchantedMazeFactory.prototype.makeRoom = function(number){
  return new EnchantedRoom(number, 'abra-cadabra');
};

EnchantedMazeFactory.prototype.makeDoor = function(room1, room2){
  return new DoorNeedingSpell(room1, room2);
};

exports.EnchantedMazeFactory = EnchantedMazeFactory;