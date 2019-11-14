var gameScore = 0;

const ENEMY = {
  speed: 100,
  varianceSpeed: 222,
  location: [70, 155, 235]
};
const PLAYER = {
  startX: 200,
  startY: 404,
  stepX: 101,
  stepY: 83
};

const CANVAS = {
  begin: -60,
  end: 510,
  leftSide: 0,
  rightSide: 400,
  top: 0,
  bottom: 404,
  halfCell: 50
};

var Draw = function() {};

Draw.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Enemy = function(x, y, speed, player) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.player = player;
  this.sprite = "images/car.png";
};

Enemy.prototype = Object.create(Draw.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;
  if (this.x > CANVAS.end) {
    this.x = CANVAS.begin;
    //random speed for enemies
    this.speed = ENEMY.speed + Math.floor(Math.random() * ENEMY.varianceSpeed);
  }
  // return to start position player when collide with enemy
  if (
    player.x > this.x - CANVAS.halfCell &&
    player.x < this.x + CANVAS.halfCell &&
    player.y > this.y - CANVAS.halfCell &&
    player.y < this.y + CANVAS.halfCell
  ) {
    player.startPosition();
  }
};

var Player = function() {
  this.startPosition();
  this.sprite = "images/char-cat-girl.png";
};
Player.prototype = Object.create(Draw.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function() {
  if (this.y <= 0) {
    displayStats();
    this.startPosition();
  }
};

Player.prototype.startPosition = function() {
  this.x = PLAYER.startX;
  this.y = PLAYER.startY;
};

Player.prototype.handleInput = function(keyUp) {
  if (keyUp === "left" && this.x > CANVAS.leftSide) {
    this.x = this.x - PLAYER.stepX;
  } else if (keyUp === "right" && this.x < CANVAS.rightSide) {
    this.x = this.x + PLAYER.stepX;
  } else if (keyUp === "up" && this.y > CANVAS.top) {
    this.y = this.y - PLAYER.stepY;
  } else if (keyUp === "down" && this.y < CANVAS.bottom) {
    this.y = this.y + PLAYER.stepY;
  }
};

var displayStats = function() {
  gameScore++;
  document.getElementById("currentStats").innerHTML = "Score: " + gameScore;
};

var allEnemies = ENEMY.location.map(y => new Enemy(0, y, 200, player));
var player = new Player();

document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
