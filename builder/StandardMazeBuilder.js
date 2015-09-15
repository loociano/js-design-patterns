MazeBuilder = require('../builder/MazeBuilder').MazeBuilder;

function StandardMazeBuilder(){
  MazeBuilder.call(this);
  this.currentMaze = null;
}

StandardMazeBuilder.prototype = Object.create(MazeBuilder.prototype);

StandardMazeBuilder.prototype.buildMaze = function(){
    this.currentMaze = new Maze();
}

StandardMazeBuilder.prototype.getMaze = function(){
    return this.currentMaze;
}

StandardMazeBuilder.prototype.buildRoom = function(number){
  
  if (!this.currentMaze) return false;

  if (!this.currentMaze.hasRoom(number)){

    var room = new Room(number);
    this.currentMaze.addRoom(room);

    room.setSide('North', new Wall());
    room.setSide('South', new Wall());
    room.setSide('East', new Wall());
    room.setSide('West', new Wall());

    return room;
  }
}

StandardMazeBuilder.prototype.buildDoor = function(n1, n2){
  var room1 = this.currentMaze.getRoom(n1);
  var room2 = this.currentMaze.getRoom(n2);

  if (!room1 || !room2) return;

  var door = new Door(room1, room2);

  room1.setSide(this.commonWall(room1, room2), door);
  room2.setSide(this.commonWall(room1, room2), door);

  return door;
}

/** @private */
StandardMazeBuilder.prototype.commonWall = function(room1, room2){
  
  if (!room1 || !room2) return;

  var sides = ['North', 'East', 'West', 'South'];

  for(var i in sides){
    if (room1.getSide(sides[i]) === room2){
      break;
    }
  }
  return sides[i]; // Benefiting from JS function scope
}

exports.StandardMazeBuilder = StandardMazeBuilder;