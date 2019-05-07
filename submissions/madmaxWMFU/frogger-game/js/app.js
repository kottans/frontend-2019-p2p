const playerStartValue = {
    "x": 200,
    "y": 400,
    "icon": "images/char-boy.png",
    "stepX": 100,
    "stepY": 82
};

const enemyStartValue = {
    "x": 0,
    "icon": "images/enemy-bug.png",
    "minX": -50,
    "maxX": 510
};

const coordsGameGround = {
    "min": 0,
    "max": 400,
    "delay": 200,
    "conflictX": 80,
    "conflictY": 60
};

let score = document.querySelector(".user-score");

class Character {
    constructor(x, y, sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Enemy extends Character {
    constructor(x, y, sprite, player) {
        super(x, y, sprite);
        this.speed = this.getRandomSpeed();
        this.player = player;
    }
    
    update(dt) {
        this.x += this.speed * dt;
        if(this.x > enemyStartValue.maxX) {
            this.x = enemyStartValue.minX;
            this.speed = this.getRandomSpeed();
        }

        if(player.x < this.x + coordsGameGround.conflictX && player.x + coordsGameGround.conflictX > this.x && player.y < this.y + coordsGameGround.conflictY && coordsGameGround.conflictY + player.y > this.y) {
            player.x = playerStartValue.x;
            player.y = playerStartValue.y;
            minusScore();
        }
    }

    render() {
        super.render();
    }

    getRandomSpeed() {
        return 100 + Math.floor(Math.random() * 222);
    }
}

class Player extends Character {
    constructor(x, y, sprite) {
        super(x, y, sprite);
    }

    update(dt) {

    }

    render() {
        super.render();
    }
    
    handleInput(keyPress) {
        if(keyPress == 'left' && this.x > coordsGameGround.min) {
            this.x -= playerStartValue.stepX;
        }

        if(keyPress == 'right' && this.x < coordsGameGround.max) {
            this.x += playerStartValue.stepX;
        }

        if(keyPress == 'up' && this.y > coordsGameGround.min) {
            this.y -= playerStartValue.stepY;
        }

        if(keyPress == 'down' && this.y < coordsGameGround.max) {
            this.y += playerStartValue.stepY;
        }
      
        if(this.y <= coordsGameGround.min) {
            plusScore();
            setTimeout(() => {
                this.x = playerStartValue.x;
                this.y = playerStartValue.y;
            }, coordsGameGround.delay);
        }
    }
}

const plusScore = () => ++score.innerText;
const minusScore = () => score.innerText <= 0 ? score.innerText = 0 : --score.innerText;

document.addEventListener('keyup', e => {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

const player = new Player(playerStartValue.x, playerStartValue.y, playerStartValue.icon);
const allEnemies = [63, 147, 230].map(y =>  new Enemy(enemyStartValue.x, y, enemyStartValue.icon, player));
