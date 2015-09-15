/** Another concrete factory */
function BombedMazeFactory() {
  MazeFactory.call(this);
}

BombedMazeFactory.prototype = Object.create(MazeFactory.prototype);

BombedMazeFactory.prototype.makeWall = function(){
  return new BombedWall();
};

BombedMazeFactory.prototype.makeRoom = function(number){
  return new RoomWithABomb(number);
};

exports.BombedMazeFactory = BombedMazeFactory;