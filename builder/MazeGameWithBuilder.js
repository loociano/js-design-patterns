/** Client: game using Abstract Factory */
function MazeGameWithBuilder(){}

MazeGameWithBuilder.prototype = {

  /** @param {MazeBuilder} */
  createMaze: function(MazeBuilder){
    if (!MazeBuilder) return;

    MazeBuilder.buildMaze();
    MazeBuilder.buildRoom(1);
    MazeBuilder.buildRoom(2);
    MazeBuilder.buildDoor(1, 2);

    return MazeBuilder.getMaze();
  }
}

// Exports
exports.MazeGameWithBuilder = MazeGameWithBuilder;