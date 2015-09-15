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
}

exports.MazeFactory = MazeFactory;