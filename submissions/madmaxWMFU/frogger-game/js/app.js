const playerStartValue = {
    "x": 200,
    "y": 400,
    "icon": "images/char-boy.png"
};

let score = document.querySelector(".user-score");

class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.sprite = "images/enemy-bug.png";
        this.speed = speed;
        this.player = player;
    }
    
    update(dt) {
        this.x += this.speed * dt;
        if(this.x > 510) {
            this.x = -50;
            this.speed = randomSpeed();
        }

        if(player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && 60 + player.y > this.y) {
            player.x = 200;
            player.y = 400;
            minusScore();
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

class Player {
    constructor(x, y, icon) {
        this.x = x;
        this.y = y;
        this.sprite = icon;
    }

    update(dt) {

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    handleInput(keyPress) {
        if(keyPress == 'left' && this.x > 0) {
            this.x -= 100;
        }

        if(keyPress == 'right' && this.x < 400) {
            this.x += 100;
        }

        if(keyPress == 'up' && this.y > 0) {
            this.y -= 82;
        }

        if(keyPress == 'down' && this.y < 400) {
            this.y += 82;
        }
      
        if(this.y < 0) {
            plusScore();
            setTimeout(() => {
                this.x = 200;
                this.y = 400;
            }, 300);
        }
    }
}

const randomSpeed = () => 100 + Math.floor(Math.random() * 222);
const plusScore = () => ++score.innerText;
const minusScore = () => score.innerText <=0 ? score.innerText = 0 : --score.innerText;

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
const allEnemies = [63, 147, 230].map(value =>  new Enemy( 0, value, randomSpeed(), player));
