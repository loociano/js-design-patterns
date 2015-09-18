function PMWindowImp(){
  WindowImp.call(this);
}

PMWindowImp.prototype = Object.create(WindowImp.prototype);

/** @param {Coord} x0
    @param {Coord} y0
    @param {Coord} x1
    @param {Coord} y1 */
PMWindowImp.prototype.deviceRect = function(x0, y0, x1, y1){

  var left = Math.min(x0.getCoord(), x1.getCoord());
  var right = Math.max(x0.getCoord(), x1.getCoord());
  var bottom = Math.min(y0.getCoord(), y1.getCoord());
  var top = Math.max(y0.getCoord(), y1.getCoord());

  // Array<Point>
  var points = [];
  points.push(new Point(left, top));
  points.push(new Point(right, top));
  points.push(new Point(right, bottom));
  points.push(new Point(left, bottom));

  // logic...
  var result = ['rect'];
  for (var p = 0; p < points.length; ++p){
    result.push(points[p].getX() + ',' + points[p].getY());
  }
  return result.join(' ');
};

exports.PMWindowImp = PMWindowImp;