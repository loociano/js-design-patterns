Room = require('../common/Room').Room;

function RoomWithABomb(number){
  Room.call(this, number);
}
RoomWithABomb.prototype = Object.create(Room.prototype);

RoomWithABomb.prototype.toString = function(){
  return 'room ' + this.number + ' with a bomb';
}

exports.RoomWithABomb = RoomWithABomb;