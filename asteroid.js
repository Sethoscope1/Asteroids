(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function Asteroid(posX, posY, velX, velY) {
    var COLOUR = "HotPink";
    var RADIUS = 25;

    Asteroids.MovingObject.call(this, posX, posY, velX, velY, RADIUS, COLOUR);

  };

  console.log(Asteroids)
  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var posX, posY;

    posX = (Math.random() * parseInt(dimX));
    posY = (Math.random() * parseInt(dimY));
    vel = randomVec(2);
    return new Asteroid(posX, posY, vel[0], vel[1]);
  }

  var randomVec = function(maxSpeed) {
    xCoord = (Math.random() * maxSpeed * 2) - maxSpeed;
    yCoord = (Math.random() * maxSpeed * 2) - maxSpeed;
    return [xCoord, yCoord];
  }

  Function.prototype.inherits = function(object) {
    function Surrogate() {};
    Surrogate.prototype = object.prototype;

    this.prototype = new Surrogate();
  };


})(this);





