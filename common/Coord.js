/** Constructor @param {int} c */
function Coord(c){
  if (typeof c !== 'number') {
    this.c = null;
  } else {
    this.c = c;  
  }
}

Coord.prototype = {

  /** @return {number} c */ 
  getCoord: function(){
    return this.c;
  },

  /** @param {number} c */
  setCoord: function(c){
    this.c = c;
  },

  /** @return {string} c */
  toString: function(){
    return '' + this.c;
  }
}

exports.Coord = Coord;