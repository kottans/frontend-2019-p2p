var enemySize = 60;
var canvasWidth = 550;
var borgSpawn = -100;
var playerSpawnX = 200;
var playerSpawnY = 400;
var horizontalStep = 100;
var verticalStep = 83;
var stepZone = 400;
var finishZone = 60;
var startX = 0;
var firstEnemyLine = 60;
var secondEnemyLine = 140;
var thirdEnemyLine = 220;
var enemySpeed = 800;

var Person = function(x, y, sprite) {
  this.x = x;
  this.y = y;
  this.sprite = sprite;
};

Person.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Enemy = function(x, y, speed, player) {
  Person.call(this, x, y);
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
  this.player = player;
};

Enemy.prototype = Object.create(Person.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(dt) {
  this.x += +(this.speed * dt);

  if (this.x > canvasWidth) {
    this.x = borgSpawn;
    this.speed = Math.floor(100 + Math.random() * 200);
  }

  if (
    this.player.x > this.x - enemySize &&
    this.player.x < this.x + enemySize &&
    this.player.y > this.y - enemySize &&
    this.player.y < this.y + enemySize
  ) {
    this.player.x = playerSpawnX;
    this.player.y = playerSpawnY;
  }
};

var Player = function(x, y) {
  Person.call(this, x, y);
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  if (this.y < finishZone) {
    this.x = playerSpawnX;
    this.y = playerSpawnY;
  }
};

Player.prototype.handleInput = function(key) {
  if (key === 'left' && this.x > startX) {
    this.x = this.x - horizontalStep;
  } else if (key === 'right' && this.x != stepZone) {
    this.x = this.x + horizontalStep;
  } else if (key === 'up') {
    this.y = this.y - verticalStep;
  } else if (key === 'down' && this.y != stepZone) {
    this.y = this.y + verticalStep;
  }
};

var player = new Player(playerSpawnX, playerSpawnY);

var enemyLocation = [firstEnemyLine, secondEnemyLine, thirdEnemyLine];

var allEnemies = enemyLocation.map(
  y => new Enemy(startX, y, enemySpeed, player)
);

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
