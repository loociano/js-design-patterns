/** Tests! */
var assert = require('chai').assert

MazePrototypeFactory = require('../prototype/MazePrototypeFactory').MazePrototypeFactory;

describe('Abstract Factory tests', function () {

  before(function(){

    var mazePrototype = new Maze();
    var wallPrototype = new Wall();
    var roomPrototype = new Room(1);
    var doorPrototype = new Door(new Room(2), new Room(3));

    factory = new MazePrototypeFactory(mazePrototype, wallPrototype, roomPrototype, doorPrototype);

  });

  it('creates (clones) a maze from a prototype', function() {
    
    var aMaze = factory.makeMaze();
    var anotherMaze = factory.makeMaze();

    assert.equal(aMaze.toString(), anotherMaze.toString());
    assert.notEqual(aMaze, anotherMaze);
  });

  it('creates (clones) a room from a prototype', function() {

    var aRoom = factory.makeRoom();
    var anotherRoom = factory.makeRoom();

    assert.equal(aRoom.toString(), anotherRoom.toString());
    assert.notEqual(aRoom, anotherRoom);
  });

  it('creates (clones) a wall from a prototype', function() {

    var aWall = factory.makeWall();
    var anotherWall = factory.makeWall();

    assert.equal(aWall.toString(), anotherWall.toString());
    assert.notEqual(aWall, anotherWall);
  });

  it('creates (clones) a door from a prototype', function() {

    var aDoor = factory.makeDoor();
    var anotherDoor = factory.makeDoor();
    
    assert.equal(aDoor.toString(), anotherDoor.toString());
    assert.notEqual(aDoor, anotherDoor);
  });
  
});