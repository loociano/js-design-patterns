/** @param {Display} dpy
    @param {Drawable} winid
    @param {GC} gc */
function XWindowImp(dpy, winid, gc){
  WindowImp.call(this);
  this.dpy = dpy;
  this.winid = winid;
  this.gc = gc;
}

XWindowImp.prototype = Object.create(WindowImp.prototype);

XWindowImp.prototype = {

  /** @param {Coord} x0
      @param {Coord} y0
      @param {Coord} x1
      @param {Coord} y1 */
  deviceRect: function(x0, y0, x1, y1){
    console.log('xdevicerect');
    var x = Math.round(Math.min(x0.getCoord(), x1.getCoord()));
    var y = Math.round(Math.min(y0.getCoord(), y1.getCoord()));
    var w = Math.round(Math.abs(x0.getCoord() - x1.getCoord()));
    var h = Math.round(Math.abs(y0.getCoord() - y1.getCoord()));
    return this.XDrawRectangle(this.dpy, this.winid, this.gc, x, y, w, h);
  },

  /** @param {Display} dpy
      @param {Drawable} winid
      @param {GC} gc 
      @param {number} x
      @param {number} y
      @param {number} w
      @param {number} h */
  XDrawRectangle: function(dpy, winid, gc, x, y, w, h){
    return 'XDrawRectangle on ' + dpy + ' ' + winid + ' ' + gc + ' at ' + x + ',' + y + ' ' + w + 'x' + h;
  },

  /** @param {string}
      @param {Coord} 
      @param {Coord} */
  deviceBitmap: function(string, coord1, coord2){
    return string + ' at ' + coord1.toString() + ',' + coord2.toString();
  },
};

exports.XWindowImp = XWindowImp;