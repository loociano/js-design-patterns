/** Constructor 
    @param {TextView} t*/
function TextShape(textView){
  this.textView = textView;
}

TextShape.prototype = Object.create(Shape.prototype);

/** @param {Point} bottomLeft
    @param {Point} topRight 

    This function modifies the input arguments 
    */
TextShape.prototype.boundingBox = function(bottomLeft, topRight){

  var bottom = new Coord();
  var left = new Coord();
  var width = new Coord();
  var height = new Coord();

  var origin = this.textView.getOrigin();
  bottom.setCoord(origin.x.getCoord());
  left.setCoord(origin.y.getCoord());

  var extent = this.textView.getExtent();
  width.setCoord(extent.width.getCoord());
  height.setCoord(extent.height.getCoord());

  var bottomLeft = new Point(bottom.getCoord(), left.getCoord());
  var topRight = new Point(/* top */bottom.getCoord() + height.getCoord(), 
    /* right */left.getCoord() + width.getCoord());

  Shape.prototype.boundingBox.call(this, bottomLeft, topRight);
}

/** @return {boolean} true if empty text */
TextShape.prototype.isEmpty = function(){
  return this.textView.isEmpty();
}

/** @return {string} */
TextShape.prototype.toString = function(){
  return Shape.prototype.toString.call(this) + ' ' + this.textView.getText();
}

/** @return {TextManipulator} */
TextShape.prototype.createManipulator = function(){
  return Shape.prototype.createManipulator.call(this);
}

exports.TextShape = TextShape;

