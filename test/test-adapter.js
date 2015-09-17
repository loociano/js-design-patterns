/** Testing adapter */
var assert = require('chai').assert;

TextShape = require('../adapter/TextShape').TextShape;

describe('Adapter', function () {

  before(function(){
    var textView = new TextView(new Coord(0), 
      new Coord(0), new Coord(10), new Coord(5), 'hi');

    textShape = new TextShape(textView);
    textShape.boundingBox();
  });

  it('should adapt a TextView and a Shape with TextShape', function(){
    assert.equal(textShape.toString(), '0,0 -> 5,10 hi');
  });

  it('adapter TextShape can use methods of Shape', function(){
    assert.isObject(textShape.createManipulator());
  });

  it('adapter TextShape can use methods of TextView', function(){
    assert.isFalse(textShape.isEmpty());
  });
});