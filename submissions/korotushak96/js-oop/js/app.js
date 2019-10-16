// Enemies our player must avoid
const enemyWidth = 101;
const fieldWidth = 504;
const fieldHeight = 385;
const finishY = 0;
const stepY = 85;
const stepX = 101;
const startX=202;
const startY=385;

var Enemy = function(x,y) {
    this.speed = Math.floor(Math.random() * (350 - 150 + 1)) + 150;
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.isColision = function(){
    return (player.x > this.x - enemyWidth / 2  && player.x < this.x + enemyWidth/2 &&  this.y === player.y)
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x < fieldWidth ? this.x + this.speed * dt : -10;

    if (this.isColision()){
        player.loose();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    if (this.y < finishY) {
        this.x = startX;
        this.y=startY;
    }
};

Player.prototype.loose = function(){
    this.x = startX;
    this.y = startY;
}

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key){
    switch (key){
        case 'up':
            this.y -= stepY;
            break;
        case 'left':
            this.x = this.x>0 ? this.x - stepX : this.x;
            break;
        case 'down':
            this.y = this.y<fieldHeight ? this.y + stepY : this.y;
            break;
        case 'right':
            this.x = this.x<fieldWidth-stepX ? this.x + stepX : this.x;
            break;
    };
    this.update();
}

let player = new Player(startX,startY)
let allEnemies = [new Enemy(300,45), new Enemy(150,130), new Enemy(0,215)];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
