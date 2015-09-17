/** @param {number} x
    @param (number) y */
function Point(x, y){
  if (typeof x !== 'number'){
    this.x = null;
  } else {
    this.x = x;
  }
  
  if (typeof y !== 'number'){
    this.y = null;
  } else {
    this.y = y;
  }
}

Point.prototype.toString = function(){
  return this.x + ',' + this.y;
}

exports.Point = Point;