/** Client: game using Abstract Factory */
function MazeGame(){}

MazeGame.prototype = {

  /** @param {MazeFactory} */
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