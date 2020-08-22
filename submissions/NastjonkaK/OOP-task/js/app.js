// Enemies our player must avoid
const scoreboard = document.createElement('p');
const renderScore = points => { scoreboard.innerHTML = `Your score: ${points}` };
scoreboard.classList.add('scoreboard');
document.body.appendChild(scoreboard);
let points = 0;
renderScore(points);

const GAME_FIELD = {
    MIN_X: 0,
    MIN_Y: 0,
    MAX: 400,
    WIDTH: 500,
    CELL_WIDTH: 100,
    CELL_HEIGHT: 80,
};

const ENEMY_CONFIG = {
    ENEMY_START_X: -100,
    FIRST_ENEMY_START_Y: 65,
    SECOND_ENEMY_START_Y: 145,
    THIRD_ENEMY_START_Y: 230,
    ENEMY_MAX_SPEED: 100,
    ENEMY_MIN_SPEED: 50
};

const PLAYER_START_POSITION = {
    PLAYER_START_X: 200,
    PLAYER_START_Y: 400
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
        this.speed = Math.floor(Math.random() * (ENEMY_CONFIG.ENEMY_MAX_SPEED - ENEMY_CONFIG.ENEMY_MIN_SPEED) + ENEMY_CONFIG.ENEMY_MIN_SPEED);
        this.player = player;
    }

    update(dt) {
        this.x += this.speed * dt;
        if (this.x > GAME_FIELD.WIDTH) {
            this.x = ENEMY_CONFIG.ENEMY_START_X;
        }
        this.contactCheck();
    }

    contactCheck() {
        if ((Math.round(this.x / GAME_FIELD.CELL_WIDTH) === Math.round(this.player.x / GAME_FIELD.CELL_WIDTH)) &&
            (Math.round(this.y / GAME_FIELD.CELL_HEIGHT) === Math.round(this.player.y / GAME_FIELD.CELL_HEIGHT))) {
            points = 0;
            renderScore(points);
            this.player.x = PLAYER_START_POSITION.PLAYER_START_X;
            this.player.y = PLAYER_START_POSITION.PLAYER_START_Y;
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
        if (key == 'left' && this.x > GAME_FIELD.MIN_X) {
            this.x -= GAME_FIELD.CELL_WIDTH;
        } else if (key == 'right' && this.x < (GAME_FIELD.WIDTH - GAME_FIELD.CELL_WIDTH)) {
            this.x += GAME_FIELD.CELL_WIDTH;
        } else if (key == 'up') {
            this.y -= GAME_FIELD.CELL_HEIGHT;
        } else if (key == 'down' && this.y < GAME_FIELD.MAX) {
            this.y += GAME_FIELD.CELL_HEIGHT;
        };
    }

    increasePoints() {
        if (this.y < GAME_FIELD.MIN_Y) {
            points++;
            renderScore(points);
            this.x = PLAYER_START_POSITION.PLAYER_START_X;
            this.y = PLAYER_START_POSITION.PLAYER_START_Y;
        }
    }

}

let player = new Player(PLAYER_START_POSITION.PLAYER_START_X, PLAYER_START_POSITION.PLAYER_START_Y);
const enemyFirst = new Enemy(ENEMY_CONFIG.ENEMY_START_X, ENEMY_CONFIG.FIRST_ENEMY_START_Y, player);
const enemySecond = new Enemy(ENEMY_CONFIG.ENEMY_START_X, ENEMY_CONFIG.SECOND_ENEMY_START_Y, player);
const enemyThird = new Enemy(ENEMY_CONFIG.ENEMY_START_X, ENEMY_CONFIG.THIRD_ENEMY_START_Y, player);
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
