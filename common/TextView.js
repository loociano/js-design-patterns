/** Constructor 
    @param {Coord} x 
    @param {Coord} y
    @param {Coord} width
    @param {Coord} height
*/
function TextView(x, y, width, height, text){
  this.x = x;
  this.y = y;

  this.width = width;
  this.height = height;

  this.text = text || '';
}

/** @return {string} text */
TextView.prototype.getText = function(){
  return this.text;
}

/** @return {Object: {Coord} x, {Coord} y}*/
TextView.prototype.getOrigin = function(){
  return {x: this.x, y: this.y}
}

/** @return {Object: {Coord} width, {Coord} height} */
TextView.prototype.getExtent = function(){
  return {width: this.width, height: this.height}
}

/** @param {boolean} true if empty */
TextView.prototype.isEmpty = function(){
  return this.text === '';
}

/** @return {string} */
TextView.prototype.toString = function(){
  return this.x.toString() + ',' + this.y.toString() + ' ' + this.width.toString() + 'x' + this.height.toString() + ' ' + this.text;
}

exports.TextView = TextView;