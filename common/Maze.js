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

exports.Maze = Maze;