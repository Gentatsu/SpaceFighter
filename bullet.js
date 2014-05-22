function Bullet(x, y) {
  this.initialize();
 
  this.bullet = new lib.Bullet();
  this.addChild(this.bullet);
  this.x = x;
  this.y = y;
}
Bullet.prototype = p = new createjs.Container();

Bullet.prototype.update = function() 
{
  this.x += 3
}
