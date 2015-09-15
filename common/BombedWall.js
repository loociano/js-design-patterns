Wall = require('../common/Wall').Wall;

function BombedWall(){}

BombedWall.prototype = Object.create(Wall.prototype);

BombedWall.prototype.toString = function(){
  return 'Bombed wall';
}

exports.BombedWall = BombedWall;