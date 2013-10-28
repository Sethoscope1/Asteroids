(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function Ship() {
    this.RADIUS = 65;
    this.COLOUR = "aquamarine";
    this.posX = Asteroids.Game.DIM_X / 2;
    this.posY = Asteroids.Game.DIM_Y / 2;
    this.velX = 0;
    this.velY = 0;
    this.impulseX = 0;
    this.impulseY = 0;
    Asteroids.MovingObject.call(this, this.posX, this.posY, 0, 0, this.RADIUS, this.COLOUR);
  }

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function() {
    this.velX += this.impulseX;
    this.velY += this.impulseY;
    this.velX = this.velX / 1.1
    this.velY = this.velY / 1.1
  };





})(this);