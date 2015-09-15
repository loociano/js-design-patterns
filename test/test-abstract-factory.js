/** Tests! */
var assert = require("assert");

var impl = require('../abstract-factory/abstract-factory');
MazeGame = impl.MazeGame;
MazeFactory = impl.MazeFactory;
EnchantedMazeFactory = impl.EnchantedMazeFactory;
BombedMazeFactory = impl.BombedMazeFactory;

describe('Abstract Factory tests', function () {

  it('it should create a Wall', function() {
    assert.equal(new MazeFactory().makeWall().toString(), 'Wall');
  });

  it('it should create a Bombed Wall', function() {
    assert.equal(new BombedMazeFactory().makeWall().toString(), 'Bombed wall');
  });

  it('it should create a Room', function() {
    assert.equal(new MazeFactory().makeRoom(1).toString(), 'room 1');
  });

  it('it should create an EnchantedRoom', function() {
    assert.equal(new EnchantedMazeFactory().makeRoom(1).toString(), 'enchanted room 1 with spell abra-cadabra');
  });

  it('it should create a room with a bomb', function() {
    assert.equal(new BombedMazeFactory().makeRoom(1).toString(), 'room 1 with a bomb');
  });

  it('it should create a Door', function() {
    
    var factory = new MazeFactory();
    var room1 = factory.makeRoom(1);
    var room2 = factory.makeRoom(2);

    assert.equal(factory.makeDoor(room1, room2).toString(), 'Door between room 1 and room 2');
  });

  it('it should create an DoorNeedingSpell', function() {

    var factory = new EnchantedMazeFactory();
    var room1 = factory.makeRoom(1);
    var room2 = factory.makeRoom(2);
    
    assert.equal(factory.makeDoor(room1, room2).toString(), 'DoorNeedingSpell between enchanted room 1 with spell abra-cadabra and enchanted room 2 with spell abra-cadabra');
  });

  it('it should create a Maze', function() {
    
    var factory = new MazeFactory();

    assert.equal(factory.makeMaze().toString(), 'Maze with 0 rooms: ');
  });
});

describe('Game tests', function () {

  it('it should create a game using AbstractFactory MazeGame', function() {
    
    var game = new MazeGame();
    var maze = game.createMaze(new MazeFactory());

    assert.equal(maze.toString(), 'Maze with 2 rooms: room 1, room 2');
  });
});

describe('Concrete Factory tests', function () {

  it('it should create a game using Concrete Factory EnchantedMazeFactory', function() {
    
    var game = new MazeGame();
    var maze = game.createMaze(new EnchantedMazeFactory());

    assert.equal(maze.toString(), 'Maze with 2 rooms: enchanted room 1 with spell abra-cadabra, enchanted room 2 with spell abra-cadabra');
  });

  it('it should create a game using Concrete Factory BombedMazeFactory', function() {
    
    var game = new MazeGame();
    var maze = game.createMaze(new BombedMazeFactory());

    assert.equal(maze.toString(), 'Maze with 2 rooms: room 1 with a bomb, room 2 with a bomb');
  });
});