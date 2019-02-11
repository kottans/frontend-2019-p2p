const scr = document.querySelectorAll('p');
const mdl = document.getElementsByClassName('modal')[0];
const mdlCont = document.getElementsByClassName('modal-content')[0];
const btn = document.getElementsByTagName('button')[0];
let allowMove = true;
const EnemyConf = {
  minSpeed: 200,
  maxSpeed: 375,
  minStartX: -225,
  minStartY: [60, 140, 230]
}
const PlayerConf = {
  startX: 200,
  startY: 380,
  stepX: 100,
  stepY: 80,
  width: 60,
  height: 70,
  startScore: 0,
  startLives: 3
}
const Field = {
  maxWidthEnemy: 500,
  maxHeight: 0,
  minWidth: 0,
  maxWidth: 400,
  minHeight: 370
}

var Enemy = function(y) {
    this.speed = speedRandom();
    this.x = positionRand();
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
};

function speedRandom() {
  return Math.floor(Math.random() * (EnemyConf.maxSpeed - EnemyConf.minSpeed) + EnemyConf.minSpeed);
}
function positionRand() {
  let position = Math.floor(Math.random() * (EnemyConf.minStartX))
  return position;
}

Enemy.prototype.colision = function() {
  return (Math.abs(this.x - player.x) < PlayerConf.width && Math.abs(this.y - player.y) < PlayerConf.height)
}

Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > Field.maxWidthEnemy) {
      this.x = positionRand();
      this.speed = speedRandom();
    }
    if (this.colision()) {
      player.x = PlayerConf.startX;
      player.y = PlayerConf.startY;
      player.updLive();
    }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
  this.lives = PlayerConf.startLives;
  this.score = PlayerConf.startScore;
  this.highScore = PlayerConf.startScore;
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function() {
    if(this.y < Field.maxHeight){
      this.x = PlayerConf.startX;
      this.y = PlayerConf.startY;
      this.updScore();
    }
  }

Player.prototype.handleInput = function(allowedKey) {
    switch (allowedKey){
        case 'left':
          if(this.x > Field.minWidth && allowMove) {
            this.x -= PlayerConf.stepX;
          }
            break;
        case 'up':
          if(allowMove) {
            this.y -= PlayerConf.stepY;
          }
            break;
        case 'right':
          if(this.x < Field.maxWidth && allowMove) {
            this.x += PlayerConf.stepX;
          }
            break;
        case 'down':
          if(this.y < Field.minHeight && allowMove) {
            this.y += PlayerConf.stepY;
          }
            break;
    }
};
Player.prototype.updLive = function() {
    this.lives--;
    if (this.lives == 0){
      this.lives = PlayerConf.startLives;
      this.highScr();
    }
    scr[0].textContent = this.lives;
}
Player.prototype.updScore = function() {
  this.score++;
  scr[2].textContent = this.score;
}
Player.prototype.highScr = function() {
  if(this.highScore < this.score) {
  this.highScore = this.score;
  scr[1].textContent = this.highScore;
}
  this.score = PlayerConf.startScore;
  scr[2].textContent = this.score;
  popUp();
  allowMove = false;
}
btn.addEventListener('click', function() {
  popUp()
  allowMove = true;
});

let player = new Player(PlayerConf.startX, PlayerConf.startY);

let allEnemies = EnemyConf.minStartY.map(startY => new Enemy(startY));

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function popUp() {
  mdl.classList.toggle("modal-up");
  mdlCont.classList.toggle("modal-content-up");
}
