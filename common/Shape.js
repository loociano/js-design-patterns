/** Constructor */
function Shape(){
  this.bottomLeft = null;
  this.topRight = null;
}

/** @param {Point} bottomLeft
  * @param {Point} topRight */
Shape.prototype.boundingBox = function(bottomLeft, topRight){
  this.bottomLeft = bottomLeft;
  this.topRight = topRight;
}

/** @return {string} */
Shape.prototype.toString = function(){
  return this.bottomLeft.toString() + ' -> ' + this.topRight.toString();
}

/** @return {TextManipulator} */
Shape.prototype.createManipulator = function(){ 
  return new TextManipulator();
}

exports.Shape = Shape;