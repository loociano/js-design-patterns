// Mazes
function Maze(){
  this.rooms = {};
}

Maze.prototype = {
  addRoom: function(room){
    if (!room) return;
    this.rooms[room.number] = room;
  },

  toString: function(){
    var string = [];
    for (var key in this.rooms){
      string.push(this.rooms[key].toString());
    }
    return 'Maze with ' + string.length + ' rooms: ' + string.join(', ');;
  },

  hasRoom: function(number){
    if (this.rooms[number])
      return true;
    else
      return false;
  },

  getRoom: function(number){
    return this.rooms[number];
  }
}

exports.Maze = Maze;