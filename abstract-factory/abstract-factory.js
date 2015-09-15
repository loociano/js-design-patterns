/** Abstract Factory */
function MazeFactory() {}

MazeFactory.prototype = {

  makeMaze: function(){
    return new Maze();
  },

  makeWall: function(){
    return new Wall();
  },

  makeRoom: function(number){
    return new Room(number);
  },

  makeDoor: function(room1, room2){
    return new Door(room1, room2);
  }
};

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

/** Another concrete factory */
function BombedMazeFactory() {
  MazeFactory.call(this);
}

BombedMazeFactory.prototype = Object.create(MazeFactory.prototype);

BombedMazeFactory.prototype.makeWall = function(){
  return new BombedWall();
};

BombedMazeFactory.prototype.makeRoom = function(number){
  return new RoomWithABomb(number);
};


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