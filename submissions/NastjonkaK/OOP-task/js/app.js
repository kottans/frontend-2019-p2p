// Enemies our player must avoid
const scoreboard = document.createElement('p');
const renderScore = points => { scoreboard.innerHTML = `Your score: ${points}` };
scoreboard.classList.add('scoreboard');
document.body.appendChild(scoreboard);
let points = 0;
renderScore(points);

const GAME_FIELD = {
    minX: 0,
    minY: 0,
    max: 400,
    width: 500,
    cellWidth: 100,
    cellHeight: 80,
};

const ENEMY_CONFIG = {
    enemyStartX: -100,
    firstEnemyStartY: 65,
    secondEnemyStartY: 145,
    thirdEnemyStartY: 230,
    enemyMaxSpeed: 100,
    enemyMinSpeed: 50
};

const PLAYER_START_POSITION = {
    playerSartX: 200,
    playerSartY: 400
};

class Personage {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Enemy extends Personage {
    constructor(x, y, player, sprite = 'images/enemy-bug.png') {
        super(x, y, sprite);
        this.speed = Math.floor(Math.random() * (ENEMY_CONFIG.enemyMaxSpeed - ENEMY_CONFIG.enemyMinSpeed) + ENEMY_CONFIG.enemyMinSpeed);
        this.player = player;
    }

    update(dt) {
        this.x += this.speed * dt;
        this.contactCheck();
    }

    contactCheck() {
        if (this.x > GAME_FIELD.width) {
            this.x = ENEMY_CONFIG.enemyStartX;
        }
        if ((Math.round(this.x / GAME_FIELD.cellWidth) === Math.round(this.player.x / GAME_FIELD.cellWidth)) &&
            (Math.round(this.y / GAME_FIELD.cellHeight) === Math.round(this.player.y / GAME_FIELD.cellHeight))) {
            points = 0;
            renderScore(points);
            this.player.x = PLAYER_START_POSITION.playerSartX;
            this.player.y = PLAYER_START_POSITION.playerSartY;
        }
    }
}

class Player extends Personage {
    constructor(x, y, sprite = 'images/char-boy.png') {
        super(x, y, sprite);
    }

    update(dt) {
        this.increasePoints();
    }

    handleInput(key) {
        if (key == 'left' && this.x > GAME_FIELD.minX) {
            this.x -= GAME_FIELD.cellWidth;
        } else if (key == 'right' && this.x < (GAME_FIELD.width - GAME_FIELD.cellWidth)) {
            this.x += GAME_FIELD.cellWidth;
        } else if (key == 'up') {
            this.y -= GAME_FIELD.cellHeight;
        } else if (key == 'down' && this.y < GAME_FIELD.max) {
            this.y += GAME_FIELD.cellHeight;
        };
    }

    increasePoints() {
        if (this.y < GAME_FIELD.minY) {
            points++;
            renderScore(points);
            this.x = PLAYER_START_POSITION.playerSartX;
            this.y = PLAYER_START_POSITION.playerSartY;
        }
    }

}

let player = new Player(PLAYER_START_POSITION.playerSartX, PLAYER_START_POSITION.playerSartY);
const enemyFirst = new Enemy(ENEMY_CONFIG.enemyStartX, ENEMY_CONFIG.firstEnemyStartY, player);
const enemySecond = new Enemy(ENEMY_CONFIG.enemyStartX, ENEMY_CONFIG.secondEnemyStartY, player);
const enemyThird = new Enemy(ENEMY_CONFIG.enemyStartX, ENEMY_CONFIG.thirdEnemyStartY, player);
const allEnemies = [enemyFirst, enemySecond, enemyThird];



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
