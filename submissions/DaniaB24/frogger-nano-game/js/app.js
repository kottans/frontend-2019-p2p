// Enemies our player must avoid
const FIELD_WIDTH = 505,
  START_X = 202,
  START_Y = 404;
CELL_WIDTH = 101;
CELL_HEIGHT = 83;
let count = 0;
var Enemy = function (x, y, speed, player) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.player = player;
  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
};

const Player = function (x, y) {
  this.x = x;
  this.y = y;
  this.sprite = "images/char-boy.png";
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x < FIELD_WIDTH) {
    this.x += this.speed * dt;
  } else {
    this.x += -FIELD_WIDTH;
  }
  if (this.checkCollision()) player.resetPosition();
};
Enemy.prototype.checkCollision = function () {
  return (
    this.y + CELL_HEIGHT > this.player.y &&
    this.player.x < this.x + CELL_WIDTH &&
    this.player.x > this.x - CELL_WIDTH
  );
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function () {
  document.getElementById('score').innerHTML = 
  `
    <div>
      <p>Score:<span>${count}</span></p>
    </div>
  `
  if (this.y > START_Y) {
    this.y = START_Y;
  }
  if (this.y < 0) {
    this.y = START_Y;
    count++
  }

  if (this.x > FIELD_WIDTH - CELL_WIDTH) {
    this.x -= FIELD_WIDTH;
  }
  if (this.x < 0) {
    this.x = FIELD_WIDTH - CELL_WIDTH;
  }
};
Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.resetPosition = function () {
  player.x = START_X;
  player.y = START_Y;
  count = 0;
};
Player.prototype.handleInput = function (key) {
  switch (key) {
    case "up":
      this.y -= CELL_HEIGHT;
      break;
    case "down":
      this.y += CELL_HEIGHT;
      break;
    case "left":
      this.x -= CELL_WIDTH;
      break;
    case "right":
      this.x += CELL_WIDTH;
      break;

    default:
      break;
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let player = new Player(START_X, START_Y),
  enemy1 = new Enemy(0, 60, 50, player),
  enemy2 = new Enemy(0, 143, 25, player),
  enemy3 = new Enemy(0, 228, 77, player),
  allEnemies = [enemy1, enemy2, enemy3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function (e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
