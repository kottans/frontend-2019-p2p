var enemySize = 60;
var canvasWidth = 550;
var borgSpawn = -100;
var playerSpawnX = 200;
var playerSpawnY = 400;
var horizontalStep = 100;
var verticalStep = 83;
var stepZone = 400;

var Enemy = function(x, y, speed, player) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
  this.player = player;
};

Enemy.prototype.update = function(dt) {
  this.x += +(this.speed * dt);

  if (this.x > canvasWidth) {
    this.x = borgSpawn;
    this.speed = Math.floor(100 + Math.random() * 200);
  }

  if (
    player.x > this.x - enemySize &&
    player.x < this.x + enemySize &&
    player.y > this.y - enemySize &&
    player.y < this.y + enemySize
  ) {
    player.x = playerSpawnX;
    player.y = playerSpawnY;
  }
};

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var enemyLocation = [60, 140, 220];

var allEnemies = enemyLocation.map(y => new Enemy(0, y, 300, player));

var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
  if (this.y < 60) {
    this.x = playerSpawnX;
    this.y = playerSpawnY;
  }
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
  if (key === 'left' && this.x > 0) {
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

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
