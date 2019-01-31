const START_X_PLAYER = 202;
const START_Y_PLAYER = 370;
const MOVE_PLAYER_UP_DOWN = 80;
const MOVE_PLAYER_LEFT_RIGTH = 101;
const MAX_X_RIGHT = 505;
const MAX_X_LEFT = -101;
const MAX_Y_UP = -30;
const MAX_Y_DOWN = 450;

const START_X_ENEMY = -101;
const START_Y_ENEMY = 50;
const NEXT_Y_ENEMY = 80;
const CHECK_X_Y_ENEMY = 75;
const MAX_X_ENEMY = 505;
let score = 0;
let maxScore = 0;
let scoreBoard = document.createElement("p");
scoreBoard.innerHTML = "Max Score:0 Score:0";
document.body.appendChild(scoreBoard);

class Enemy {
    constructor(x, y, speed) {
        this.x = x,
        this.y = y,
        this.speed = speed,
        this.sprite = 'images/enemy-bug.png'
    }
}

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

function getRandomSpeed(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

const allEnemies = [];

function newEnemy(y = 0) {
    let enemy = new Enemy(START_X_ENEMY, START_Y_ENEMY + y, getRandomSpeed(2, 5));
    allEnemies.push(enemy);
}

newEnemy();
newEnemy(NEXT_Y_ENEMY);
newEnemy(2*NEXT_Y_ENEMY);

Enemy.prototype.update = function(dt) {
    if (this.x <= MAX_X_ENEMY) {
        this.x += this.speed;
    } else {
        this.x = START_X_ENEMY;
        this.speed = getRandomSpeed(2 + score, 5 + score);
    }

    if (player.x < this.x + CHECK_X_Y_ENEMY &&
        player.x + CHECK_X_Y_ENEMY > this.x &&
        player.y < this.y + CHECK_X_Y_ENEMY &&
        player.y + CHECK_X_Y_ENEMY > this.y) {

        if(maxScore < score) maxScore = score;
        score = 0;
        scoreBoard.innerHTML = `Max Score:${maxScore}  Score:${score}`;
        player.x = START_X_PLAYER;
        player.y = START_Y_PLAYER;
    }

};

class Player {
    constructor(x, y, speed) {
        this.x = x,
        this.y = y,
        this.speed,
        this.sprite = 'images/char-boy.png'
    }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt) {
    switch (this.x) {
        case MAX_X_RIGHT:
            this.x = MAX_X_RIGHT - MOVE_PLAYER_LEFT_RIGTH;
            break;
        case MAX_X_LEFT:
            this.x = MAX_X_LEFT + MOVE_PLAYER_LEFT_RIGTH;
            break;
    }

    switch(this.y) {
        case MAX_Y_UP:
            score += 1;
            scoreBoard.innerHTML = `Max Score:${maxScore} Score:${score}`;
            this.x = START_X_PLAYER;
            this.y = START_Y_PLAYER;
            break;
        case MAX_Y_DOWN:
            this.y = START_Y_PLAYER;
    }
};

Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'up':
            this.y -= MOVE_PLAYER_UP_DOWN;
            break;
        case 'down':
            this.y += MOVE_PLAYER_UP_DOWN;
            break;
        case 'left':
            this.x -= MOVE_PLAYER_LEFT_RIGTH;
            break;
        case 'right':
            this.x += MOVE_PLAYER_LEFT_RIGTH;
            break;
    }
};

let player = new Player(START_X_PLAYER, START_Y_PLAYER);


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
