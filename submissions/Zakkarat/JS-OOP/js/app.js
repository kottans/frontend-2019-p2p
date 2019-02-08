const startX = 200;
const startY = 380;
const stepX = 100;
const stepY = 80;
const scr = document.querySelectorAll('p');
const mdl = document.getElementsByClassName('modal')[0];
const mdlCont = document.getElementsByClassName('modal-content')[0];
const btn = document.getElementsByTagName('button')[0];
let allowMove = true;

var Enemy = function(y) {
    this.speed = speedRand();
    this.x = positionRand();
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
};

function speedRand() {
  let speed = Math.floor(Math.random() * (375 - 200 ) + 200);
  return speed;
}
function positionRand() {
  let position = Math.floor(Math.random() * (-225))
  return position;
}

Enemy.prototype.colision = function() {
  return (Math.abs(this.x - player.x) < 60 && Math.abs(this.y - player.y) < 70)
}

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 500) {
      this.x = positionRand();
      this.speed = speedRand();
    }
    if (this.colision()) {
      player.x = startX;
      player.y = startY;
      updLive();
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {
    if(this.y < 0){
      this.x = startX;
      this.y = startY;
      updScore();
    }
  }

Player.prototype.handleInput = function(allowedKey) {
    switch (allowedKey){
        case 'left':
          if(this.x > 0 && allowMove) {
            this.x -= stepX;
          }
            break;
        case 'up':
          if(allowMove) {
            this.y -= stepY;
          }
            break;
        case 'right':
          if(this.x < 400 && allowMove) {
            this.x += stepX;
          }
            break;
        case 'down':
          if(this.y < 370 && allowMove) {
            this.y += stepY;
          }
            break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player(startX, startY);

let allEnemies = [new Enemy(60), new Enemy(140), new Enemy(230)];
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// SCORE FUNCTIONS
let score = 0;
let highScore = 0;
let lives = 3;

function updLive() {
  lives--;
  if (lives == 0){
    lives = 3;
    highScr();
  }
  scr[0].textContent = lives;
}
function updScore() {
  score++;
  scr[2].textContent = score;
}
function highScr() {
  if(highScore < score) {
  highScore = score;
  scr[1].textContent = highScore;
}
  score = 0;
  scr[2].textContent = score;
  popUp();
  allowMove = false;
}
btn.addEventListener('click', function() {
  popUp()
  allowMove = true;
});
function popUp() {
  mdl.classList.toggle("modal-up");
  mdlCont.classList.toggle("modal-content-up");
}
