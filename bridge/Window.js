/** @param {View} contents 
    @param {WindowImp} windowImp */
function Window(contents, windowImp){
  this.contents = contents;
  this.windowImp = windowImp;
}

Window.prototype = {

  // requests handled by Window
  drawContents: function(){},

  open: function(){},

  close: function(){},

  iconify: function(){},

  deiconify: function(){},

  // request forwarded to implementation

  /** @param {Point} at */
  setOrigin: function(at){},

  /** @param {Point} extent */
  setExtent: function(extent){},

  raise: function(){},

  lower: function(){},

  /** @param {Point} pointA
      @param {Point} pointB */
  drawLine: function(p1, p2){},

  /** @param {Point} pointA
      @param {Point} pointB */
  drawRect: function(p1, p2){
    imp = this.getWindowImp();
    
    if (imp !== null && imp !== undefined){
      return imp.deviceRect(new Coord(p1.getX()), new Coord(p1.getY()), 
        new Coord(p2.getX()), new Coord(p2.getY()));
    }
  },

  /** @param {Array<Point>} points,
      @param {number} n  */
  drawLine: function(points, n){},

  /** @param {string} text
      @param {Point} point */
  drawLine: function(text, point){},

  /** @return {WindowImp} */
  getWindowImp: function(){
    return this.windowImp;
  },

  /** @return {View} */
  getView: function(){
    return this.contents;
  }
};

exports.Window = Window;