exports.MazePrototypeFactory = MazePrototypeFactory;

function MazePrototypeFactory(maze, wall, room, door){
  this._prototypeMaze = maze;
  this._prototypeWall = wall;
  this._prototypeRoom = room;
  this._prototypeDoor = door;
}

MazePrototypeFactory.prototype.makeMaze = function(number){
  return this._prototypeMaze.clone();
}

MazePrototypeFactory.prototype.makeWall = function(number){
  return this._prototypeWall.clone();
}

MazePrototypeFactory.prototype.makeRoom = function(number){
  return this._prototypeRoom.clone();
}

MazePrototypeFactory.prototype.makeDoor = function(number){
  return this._prototypeDoor.clone();
}

// Clone() implementations

Maze.prototype.clone = function(){
  return new Maze();
}

Wall.prototype.clone = function(){
  return new Wall();
}

Room.prototype.clone = function(){
  return new Room(this.number);
}

Door.prototype.clone = function(){
  return new Door(this.room1, this.room2);
}