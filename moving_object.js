(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function MovingObject (posX, posY, velX, velY, radius, colour) {
    this.posX = posX;
    this.posY = posY;
    this.velX = velX;
    this.velY = velY;
    this.radius = radius;
    this.colour = colour;
  };

  MovingObject.prototype.move = function() {
    this.posX = (this.posX + this.velX) % (Asteroids.Game.DIM_X + 50);
    this.posY = (this.posY + this.velY) % (Asteroids.Game.DIM_Y + 50);
  };

  MovingObject.prototype.draw = function(ctx) {
    // ctx.fillStyle = "red";
    // ctx.fillRect(0,0, 10, 10);

    ctx.fillStyle = this.colour;
    ctx.beginPath();
    ctx.arc(
      this.posX % (Asteroids.Game.DIM_X + 50),
      this.posY % (Asteroids.Game.DIM_Y + 50),
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  }

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var dx, dy, distance;
    dx = Math.abs(this.posX - otherObject.posX);
    dy = Math.abs(this.posY - otherObject.posY);
    distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

    return distance < (this.radius + otherObject.radius);
  }

  Function.prototype.inherits = function(object) {
    function Surrogate() {};
    Surrogate.prototype = object.prototype;

    this.prototype = new Surrogate();
  };

})(this);