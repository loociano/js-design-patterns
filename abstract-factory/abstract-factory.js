/** Objects */

// Mazes
function Maze(){
  this.rooms = [];
}

Maze.prototype = {
  addRoom: function(room){
    this.rooms.push(room);
  },

  toString: function(){
    var string = [];
    for (var i in this.rooms){
      string.push(this.rooms[i].toString());
    }
    return 'Maze with ' + this.rooms.length + ' rooms: ' + string.join(', ');;
  }
}

// Walls
function Wall(){}

Wall.prototype = {
  toString: function(){
    return 'Wall';
  }
}

function BombedWall(){}

BombedWall.prototype = Object.create(Wall.prototype);

BombedWall.prototype.toString = function(){
  return 'Bombed wall';
}


// Rooms
function Room(number){

  this.number = '' + number; // cast to string  
  
  this.sides = {
    North: null,
    East: null,
    South: null,
    West: null
  };
}

Room.prototype = {
  setSide: function(side, element){
    
    switch(side){
      case 'North':
      case 'East':
      case 'South':
      case 'West':
        this.sides[side] = element;
    }
  },

  toString: function(){
    return 'room ' + this.number;
  }
}

function EnchantedRoom(number, spell){
  Room.call(this, number);
  this.spell = spell;
}
EnchantedRoom.prototype = Object.create(Room.prototype);

EnchantedRoom.prototype.constructor = EnchantedRoom;

EnchantedRoom.prototype.toString = function(){
  return 'enchanted room ' + this.number + ' with spell ' + this.spell;
}

function RoomWithABomb(number){
  Room.call(this, number);
}
RoomWithABomb.prototype = Object.create(Room.prototype);

RoomWithABomb.prototype.toString = function(){
  return 'room ' + this.number + ' with a bomb';
}

// Doors
function Door(room1, room2){
  this.room1 = room1;
  this.room2 = room2;
}

Door.prototype = {
  toString: function(){
    return 'Door between ' + this.room1.toString() + ' and ' + this.room2.toString();
  }
}

function DoorNeedingSpell(room1, room2){
  Door.call(this, room1, room2);
}

DoorNeedingSpell.prototype = Object.create(Door.prototype);

DoorNeedingSpell.prototype.toString = function(){
  return 'DoorNeedingSpell between ' + this.room1.toString() + ' and ' + this.room2.toString();
}

/** Abstract Factory */
function MazeFactory() {}

MazeFactory.prototype.makeMaze = function(){
  return new Maze();
}

MazeFactory.prototype.makeWall = function(){
  return new Wall();
}

MazeFactory.prototype.makeRoom = function(number){
  return new Room(number);
}

MazeFactory.prototype.makeDoor = function(room1, room2){
  return new Door(room1, room2);
}

/** Concrete factories */
function EnchantedMazeFactory() {
  MazeFactory.call(this);
}
EnchantedMazeFactory.prototype = Object.create(MazeFactory.prototype);

EnchantedMazeFactory.prototype.makeRoom = function(number){
  return new EnchantedRoom(number, 'abra-cadabra');
}

EnchantedMazeFactory.prototype.makeDoor = function(room1, room2){
  return new DoorNeedingSpell(room1, room2);
}

/** Another concrete factory */
function BombedMazeFactory() {
  MazeFactory.call(this);
}
BombedMazeFactory.prototype = Object.create(MazeFactory.prototype);

BombedMazeFactory.prototype.makeWall = function(){
  return new BombedWall();
}

BombedMazeFactory.prototype.makeRoom = function(number){
  return new RoomWithABomb(number);
}


/** Client: game using Abstract Factory */
function MazeGame(){}

MazeGame.prototype = {

  createMaze: function(MazeFactory){
    if (!MazeFactory) return;

    var maze = MazeFactory.makeMaze();
    var room1 = MazeFactory.makeRoom(1);
    var room2 = MazeFactory.makeRoom(2);
    var door = MazeFactory.makeDoor(room1, room2);

    maze.addRoom(room1);
    maze.addRoom(room2);

    room1.setSide('North', MazeFactory.makeWall());
    room1.setSide('East', door);
    room1.setSide('South', MazeFactory.makeWall());
    room1.setSide('West', MazeFactory.makeWall());

    room2.setSide('North', MazeFactory.makeWall());
    room2.setSide('East', MazeFactory.makeWall());
    room2.setSide('South', MazeFactory.makeWall());
    room2.setSide('West', door);

    return maze;
  }
}

// Exports
exports.MazeGame = MazeGame;
exports.MazeFactory = MazeFactory;
exports.EnchantedMazeFactory = EnchantedMazeFactory;
exports.BombedMazeFactory = BombedMazeFactory;