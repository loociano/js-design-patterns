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
  },

  getSide: function(side){
    return this.sides[side];
  }
}

exports.Room = Room;