// Enemies our player must avoid
let gameScore = 0;
let canvasSizes = {
    canvasStartX: 0,
    canvasEndX :500,
    canvasStartY :0,
    canvasEndY :500,
    blockWidth :100,
    blockHeight: 90
};

let playerStartPoints = {
    positionX: 200,
    positionY: 300
};
let enemyStartPoints = {
    positionX : -100,
    positionYFirstEnemy: 50,
    positionYSecondEnemy: 125,
    positionYThirdEnemy: 200
};

class Enemy {

   // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x,y) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = Math.floor((Math.random()*100)+ 100);
    }
    update(dt) {
        this.x += this.speed * dt;
        if (this.x > canvasSizes.canvasEndX) {
            this.restartEnemy();
        }
        if ((Math.round(this.x / canvasSizes.blockWidth) === Math.round(player.x / canvasSizes.blockWidth)) && 
            (Math.round(this.y / canvasSizes.blockHeight) === Math.round(player.y / canvasSizes.blockHeight))) {
            this.collision();
            }    
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    restartEnemy() {
        this.x = enemyStartPoints.positionX;
    }
    collision() {
        gameScore--;
        player.x = playerStartPoints.positionX;
        player.y = playerStartPoints.positionY;
        if (gameScore < 0) {
            gameScore = 0;
        }
        document.querySelector(".results").innerHTML = `Your score: ${gameScore}`;
    }
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
//Enemy.prototype.update = function(dt) {
//};

// Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.sprite = "images/char-boy.png";
    }
    update(pressedKey) {
        switch(pressedKey) {
            case "right":
                if(this.x + canvasSizes.blockWidth >= canvasSizes.canvasEndX){
                    return;
                } else {
                    this.x += canvasSizes.blockWidth;
                    break;
                }

            case "left":
                if(this.x <= canvasSizes.canvasStartX) {
                    return;
                } else {
                    this.x -= canvasSizes.blockWidth;
                    break;
                }
            
            case "up":
                if(this.y <= canvasSizes.blockHeight/2) {
                    this.updateScoreWinner();
                } 
                else {
                this.y -= canvasSizes.blockHeight;
                break;
                }
            
            case "down":
                if (this.y + canvasSizes.blockHeight >= canvasSizes.canvasEndY) {
                    return ;
                } else {
                    this.y += canvasSizes.blockHeight;
                    break;
                }
        }
        }
    handleInput(pressedKey) {
        this.update(pressedKey);
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    updateScoreWinner() {
        gameScore++;
        this.x = playerStartPoints.positionX;
        this.y = playerStartPoints.positionY;
        document.querySelector(".results").innerHTML = `Your score: ${gameScore}`;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

let enemyOne = new Enemy(enemyStartPoints.positionX,enemyStartPoints.positionYFirstEnemy);
let enemyTwo = new Enemy(enemyStartPoints.positionX,enemyStartPoints.positionYSecondEnemy);
let enemyThree = new Enemy(enemyStartPoints.positionX,enemyStartPoints.positionYThirdEnemy);
let player = new Player(playerStartPoints.positionX,playerStartPoints.positionY);
let allEnemies = [enemyOne,enemyTwo,enemyThree];

document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
