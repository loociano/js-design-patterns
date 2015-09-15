/** Tests! */
var assert = require("assert");

StandardMazeBuilder = require('../builder/StandardMazeBuilder').StandardMazeBuilder;
CountingMazeBuilder = require('../builder/CountingMazeBuilder').CountingMazeBuilder;

MazeGameWithBuilder = require('../builder/MazeGameWithBuilder').MazeGameWithBuilder;

describe('Builder tests', function () {

  it('it should build a maze', function() {

    var builder = new StandardMazeBuilder();
    builder.buildMaze();
    assert.equal(builder.getMaze(), 'Maze with 0 rooms: ');
  });

  it('it should build a room', function() {

    var builder = new StandardMazeBuilder();
    builder.buildMaze();
    builder.buildRoom(1);
    assert.equal(builder.getMaze(), 'Maze with 1 rooms: room 1');
  });

  it('it should not build a room without building a maze first', function() {

    var builder = new StandardMazeBuilder();
    builder.buildRoom(1);
    assert.equal(builder.getMaze(), null);
  });

  it('it should build a door', function() {

    var builder = new StandardMazeBuilder();
    builder.buildMaze();
    builder.buildRoom(1);
    builder.buildRoom(2);
    builder.buildDoor(1, 2);
    assert.equal(builder.getMaze(), 'Maze with 2 rooms: room 1, room 2');
  });

  it('it should not build a door without rooms', function() {

    var builder = new StandardMazeBuilder();
    builder.buildMaze();
    builder.buildDoor(1, 2);
    assert.equal(builder.getMaze(), 'Maze with 0 rooms: ');
  });

  it('it should create a game with a builder', function() {

    var builder = new StandardMazeBuilder();
    var game = new MazeGameWithBuilder();
    assert.equal(game.createMaze(builder), 'Maze with 2 rooms: room 1, room 2');
  });

  it('it should create a game with a CountingMazeBuilder', function() {

    var builder = new CountingMazeBuilder();
    var game = new MazeGameWithBuilder();
    game.createMaze(builder);

    assert.equal(builder.getCounts().rooms, 2);
    assert.equal(builder.getCounts().doors, 1);
  });

});