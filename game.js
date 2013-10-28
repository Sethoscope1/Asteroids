// keys = require("./keymaster.min.js");

(function (root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});
  // var MovingObject = root.MovingObject = (root.MovingObject || {});
  // var Asteroid = root.Asteroid = (root.Asteroid || {});

  var Game = Asteroids.Game = function Game(ctx) {
    this.FPS = 30;
    this.ctx = ctx;
    this.asteroids = generateAsteroids(this.ctx, 11);
    this.ship = new Asteroids.Ship();
    this.timerId;
  }

  Game.DIM_X = 800;
  Game.DIM_Y = 800;

  Game.prototype.draw = function() {
    ctx = this.ctx;
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(0,0, Game.DIM_X, Game.DIM_Y);
    this.ship.draw(ctx);
    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.move = function() {
    this.ship.move();
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.step = function() {
    this.ship.power();
    this.move();
    this.draw();
    this.bindKeyHandlers();
    if (this.checkCollisions()) {
      alert("You are crashed and die.")
      this.stop();
    }
  };

  Game.prototype.bindKeyHandlers = function() {
    var ship = this.ship;
    key("up", function() {
      if (ship.velY > -10) {
        ship.velY -= 0.1;
      }
    });
    key("down", function() {
      if (ship.velY < 10) {
        ship.velY += 0.1;
      }
    });
    key("left", function() {
      if (ship.velX > -10) {
        ship.velX -= 0.1;
      }
    });
    key("right", function() {
      if (ship.velX < 10) {
        ship.velX += 0.1;
      }
    });
    // key("down", function() { this.ship.velX += 1 });
   //  key("left", function() { this.ship.velX += 1 });
   //  key("right", function() { this.ship.velX += 1 });
  }

  Game.prototype.start = function() {
    var game = this;
    game.bindKeyHandlers()
    // game.step();
    this.timerId = window.setInterval(function () {
      game.step();
    }, 1000/ this.FPS);
  };

  Game.prototype.checkCollisions = function() {
    var ship = this.ship;
    collisions = false;
    this.asteroids.forEach(function (asteroid) {
      console.log("returning " + asteroid.isCollidedWith(ship))
      if (asteroid.isCollidedWith(ship)) {
        // collisions = true;
        return;
      }
    });
    return collisions;
  }

  Game.prototype.stop = function() {
    window.clearInterval(this.timerId)
  }

  var generateAsteroids = function(ctx, n) {
    var i;
    var result = [];
    for(i = 0; i < n; i++) {
      result.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    }
    return result;
  };


  Function.prototype.inherits = function(object) {
    function Surrogate() {};
    Surrogate.prototype = object.prototype;

    this.prototype = new Surrogate();
  };


})(this);