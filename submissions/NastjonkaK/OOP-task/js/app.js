// Enemies our player must avoid
let points = 0;
let scoreboard = document.createElement('p');
scoreboard.textContent = 'Your score: 0';
scoreboard.style.cssText = 'color: #3a9500; font-size: 30px; font-weight: bold; margin-top: 50px';
document.body.appendChild(scoreboard);

const gameField = {
    minX: 0,
    minY: 0,
    max: 400,
    width: 500,
    cellWidth: 100,
    cellHeight: 80,
};

const enemyStartPosition = {
    enemyStartX: -100,
    firstEnemyStartY: 65,
    secondEnamyStartY: 145,
    thirdEnemyStartY: 230,
    enemyMaxSpeed: 100,
    enemyMinSpeed: 50
};

const playerStartPosition = {
    playerStartX: 200,
    playerStartY: 400
};

const Enemy = function (y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = enemyStartPosition.enemyStartX;
    this.y = y;
    this.speed = Math.floor(Math.random() * (enemyStartPosition.enemyMaxSpeed - enemyStartPosition.enemyMinSpeed) + enemyStartPosition.enemyMinSpeed);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > gameField.width) {
        this.x = enemyStartPosition.enemyStartX;
    }
    if ((Math.round(this.x / gameField.cellWidth) === Math.round(player.x / gameField.cellWidth)) &&
        (Math.round(this.y / gameField.cellHeight) === Math.round(player.y / gameField.cellHeight))) {
        player.restart();
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function () {
    this.x = playerStartPosition.playerStartX;
    this.y = playerStartPosition.playerStartY;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function () {
    if (this.y < gameField.minY) {
        points++;
        scoreboard.innerHTML = `Your score: ${points}`;
        this.x = playerStartPosition.playerStartX;
        this.y = playerStartPosition.playerStartY;
    }
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
    if (key == 'left' && this.x > gameField.minX) {
        this.x -= gameField.cellWidth;
    } else if (key == 'right' && this.x < (gameField.width - gameField.cellWidth)) {
        this.x += gameField.cellWidth;
    } else if (key == 'up') {
        this.y -= gameField.cellHeight;
    } else if (key == 'down' && this.y < gameField.max) {
        this.y += gameField.cellHeight;
    };
};

Player.prototype.restart = function () {
    points = 0;
    scoreboard.innerHTML = `Your score: ${points}`;
    this.x = playerStartPosition.playerStartX;
    this.y = playerStartPosition.playerStartY;

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let enemyFirst = new Enemy(enemyStartPosition.firstEnemyStartY);
let enemySecond = new Enemy(enemyStartPosition.secondEnamyStartY);
let enemyThird = new Enemy(enemyStartPosition.thirdEnemyStartY);
let allEnemies = [enemyFirst, enemySecond, enemyThird];
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
