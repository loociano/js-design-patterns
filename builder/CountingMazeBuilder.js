StandardMazeBuilder = require('../builder/StandardMazeBuilder').StandardMazeBuilder;

function CountingMazeBuilder(){
  StandardMazeBuilder.call(this);
  this.doors = 0;
  this.rooms = 0;  
}

CountingMazeBuilder.prototype = Object.create(StandardMazeBuilder.prototype);

CountingMazeBuilder.prototype.buildRoom = function(number){
  var room = StandardMazeBuilder.prototype.buildRoom.call(this, number);
  if (room) this.rooms++;
}

CountingMazeBuilder.prototype.buildDoor = function(n1, n2){
  var door = StandardMazeBuilder.prototype.buildDoor.call(this, n1, n2);
  if (door) this.doors++;
}


CountingMazeBuilder.prototype.getCounts = function() {
  return {
    rooms: this.rooms,
    doors: this.doors
  }
}

exports.CountingMazeBuilder = CountingMazeBuilder;