function MazeBuilder(){}

MazeBuilder.prototype = {

  buildMaze: function(){
    throw 'buildMaze must be implemented';
  },

  buildRoom: function(number){
    throw 'buildRoom must be implemented';
  },

  /* @param {int} roomFrom, @param {int} roomTo */
  buildDoor: function(roomFrom, roomTo){
    throw 'buildDoor must be implemented';
  },

  /* @return {Maze} */
  getMaze: function(){
    throw 'getMaze must be implemented';
  }
}

exports.MazeBuilder = MazeBuilder;