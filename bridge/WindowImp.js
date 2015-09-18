function WindowImp(){}

WindowImp.prototype = {
  impTop: function(){
    throw new Error('must be implemented');
  },

  impBottom: function(){
    throw new Error('must be implemented');
  },

  /** @param {Point} */
  impSetExtent: function(point){
    throw new Error('must be implemented');
  },

  /** @param {Point} */
  impSetOrigin: function(point){
    throw new Error('must be implemented');
  },

  /** @param {Coord}
      @param {Coord}
      @param {Coord}
      @param {Coord} */
  deviceRect: function(coord1, coord2, coord3, coord4){
    throw new Error('must be implemented');
  },

  /** @param {string}
      @param {Coord}
      @param {Coord} */
  deviceText: function(string, coord, coord){
    throw new Error('must be implemented');
  },

  /** @param {string}
      @param {Coord} 
      @param {Coord} */
  deviceBitmap: function(string, coord1, coord2){
    throw new Error('must be implemented');
  },

  //...
};

exports.WindowImp = WindowImp;