let score = 0;
let maxScore = 0;
let scoreBoard = document.createElement("p");
scoreBoard.innerHTML = "Max Score:0 Score:0";
document.body.appendChild(scoreBoard);

const ENEMY_CONF = {
    START_X: -101,
    START_Y: 50,
    NEXT_Y: 80,
    CHECK_X_Y: 75,
    MAX_X: 505,
    MAX_SPEED: 7,
    MIN_SPEED: 1
};

const PLAYER_CONF = {
    START_X: 202,
    START_Y: 370,
    MOVE_UP_DOWN: 80,
    MOVE_LEFT_RIGTH: 101,
    MAX_X_LEFT: -101,
    MAX_X_RIGHT: 505,
    MAX_Y_DOWN: 450,
    MAX_Y_UP: -30
};

class Heroes {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player extends Heroes {
    constructor(x, y, sprite = "images/char-boy.png") {
        super(x, y, sprite);
    }

    update(dt) {
        switch (this.x) {
            case PLAYER_CONF.MAX_X_RIGHT:
                this.x = PLAYER_CONF.MAX_X_RIGHT - PLAYER_CONF.MOVE_LEFT_RIGTH;
                break;
            case PLAYER_CONF.MAX_X_LEFT:
                this.x = PLAYER_CONF.MAX_X_LEFT + PLAYER_CONF.MOVE_LEFT_RIGTH;
                break;
        }

        switch (this.y) {
            case PLAYER_CONF.MAX_Y_UP:
                score += 1;
                scoreBoard.innerHTML = `Max Score:${maxScore} Score:${score}`;
                this.x = PLAYER_CONF.START_X;
                this.y = PLAYER_CONF.START_Y;
                break;
            case PLAYER_CONF.MAX_Y_DOWN:
                this.y = PLAYER_CONF.START_Y;
        }
    }

    handleInput(key) {
        switch (key) {
            case 'up':
                this.y -= PLAYER_CONF.MOVE_UP_DOWN;
                break;
            case 'down':
                this.y += PLAYER_CONF.MOVE_UP_DOWN;
                break;
            case 'left':
                this.x -= PLAYER_CONF.MOVE_LEFT_RIGTH;
                break;
            case 'right':
                this.x += PLAYER_CONF.MOVE_LEFT_RIGTH;
                break;
        }
    }

}

class Enemy extends Heroes {
    constructor(x, y, player, speed, sprite = 'images/enemy-bug.png') {
        super(x, y, sprite);
        this.speed = speed;
        this.player = player;
    }

    update(dt) {
        if (this.x <= ENEMY_CONF.MAX_X) {
            this.x += this.speed;
            this.checkCollisions();
        } else {
            this.x = ENEMY_CONF.START_X;
            this.speed = this.getRandomSpeed(ENEMY_CONF.MIN_SPEED + score, ENEMY_CONF.MAX_SPEED + score);
        }
    }

    getRandomSpeed(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    checkCollisions() {
        if (this.player.x < this.x + ENEMY_CONF.CHECK_X_Y &&
            this.player.x + ENEMY_CONF.CHECK_X_Y > this.x &&
            this.player.y < this.y + ENEMY_CONF.CHECK_X_Y &&
            this.player.y + ENEMY_CONF.CHECK_X_Y > this.y) {

            if (maxScore < score) maxScore = score;

            score = 0;
            scoreBoard.innerHTML = `Max Score:${maxScore}  Score:${score}`;
            this.player.x = PLAYER_CONF.START_X;
            this.player.y = PLAYER_CONF.START_Y;
        }
    }
}

let player = new Player(PLAYER_CONF.START_X, PLAYER_CONF.START_Y);

const allEnemies = [startPosition = 0, ENEMY_CONF.NEXT_Y, 2 * ENEMY_CONF.NEXT_Y].map(position =>
    new Enemy(ENEMY_CONF.START_X, ENEMY_CONF.START_Y + position, player)
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
