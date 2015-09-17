var assert = require('chai').assert;

// Load common elements
Maze = require('../common/Maze').Maze;
Wall = require('../common/Wall').Wall;
BombedWall = require('../common/BombedWall').BombedWall;
Room = require('../common/Room').Room;
EnchantedRoom = require('../common/EnchantedRoom').EnchantedRoom;
RoomWithABomb = require('../common/RoomWithABomb').RoomWithABomb;
Door = require('../common/Door').Door;
DoorNeedingSpell = require('../common/DoorNeedingSpell').DoorNeedingSpell;

Coord = require('../common/Coord').Coord;
Point = require('../common/Point').Point;
Shape = require('../common/Shape').Shape;
TextView = require('../common/TextView').TextView;
TextManipulator = require('../common/TextManipulator').TextManipulator;

describe('Coord', function(){
  it('should create a coordinate', function(){
    assert.equal(new Coord(2), '2');
  });
  it('should create an empty coordinate', function(){
    assert.equal(new Coord().toString(), 'null');
  });
});

describe('Point', function(){
  it('should create a point', function(){
    assert.equal(new Point(1,2), '1,2');
  });
});

describe('Shape', function(){
  it('should create a shape', function(){
    var shape = new Shape();
    shape.boundingBox(new Point(0, 0), new Point(1, 2));
    assert.equal(shape.toString(), '0,0 -> 1,2');
  });
});

describe('TextView', function(){
  it('should create a TextView', function(){
    var textView = new TextView(
      /* x */new Coord(0), 
      /* y */new Coord(0), 
      /* width */new Coord(10), 
      /* height */new Coord(5),
      /* text */'hi'
    );
    assert.equal(textView.toString(), '0,0 10x5 hi');
    assert.isFalse(textView.isEmpty());
  });
});