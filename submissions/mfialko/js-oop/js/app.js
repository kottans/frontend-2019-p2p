
const //borders for enemy respawn
    enemyLeftX = -100,
    enemyRightX = 500,
    numOfAnimals = 7,
    //size of step
    stepX = 101,
    stepY = 83,
    //borders for player
    playerLeftX = 0,
    playerRightX = 400,
    playerTopY = 0,
    playerBottomY = 380,
    //player starting position
    playerPosX = 202,
    playerPosY = 380,
    //speed for enemies
    minStartSpeed = 30,
    maxStartSpeed = 90,
    minAddSpeed = 5,
    maxAddSpeed = 45,
    //deltas
    deltaForEnemy = 60, 
    deltaForGem = 15,
    gemBonusScore = 5,
    playerBonusScore = 1;   


const Enemy = function(row, speed) {
    this.x = enemyLeftX;
    this.y = deltaForEnemy + (row - 1) * stepY;
    this.speed = speed;
    // The image/sprite for enemies
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiplying any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > enemyRightX) {
        this.x = enemyLeftX;
    }
};

// Drawing the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

const Player = function() {
    this.x = playerPosX;
    this.y = playerPosY;
    this.score = 0;
    this.highScore = 0;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    this.x = playerPosX;
    this.y = playerPosY;
    this.score += playerBonusScore;
    allEnemies.forEach(function(enemy) {
        enemy.speed += getRandNum(minAddSpeed, maxAddSpeed);
    }); 
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) { 

    if ( key === 'left' ) {
        if ( this.x > playerLeftX ) {
            this.x -= stepX;
        }
    } else if ( key === 'right' ) {
        if ( this.x < playerRightX  ) {
            this.x += stepX;
        }
    } else if ( key === 'up' ) {
        if ( this.y >playerTopY ) {
            this.y -= stepY;
        }
    } else if ( key === 'down') {
        if ( this.y < playerBottomY ) {
            this.y += stepY;
        } 
    }
};

Player.prototype.reset = function() {
    this.x = playerPosX;
    this.y = playerPosY;
    if (this.score > this.highScore) {
        this.highScore = this.score;
    } 
    alert("Your score: " + this.score);
    this.score = 0;   
    allEnemies.forEach(function(enemy) {
        enemy.speed = getRandNum(15, 85);
    }); 
};

const Gem = function() {
    //Making gem on random column and row
    this.x = stepX * getRandNum(0, 5) + deltaForGem;
    this.y = stepY * getRandNum(1, 4);
    this.sprite = 'images/GemOrange.png';
}
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Gem.prototype.get = function(score = gemBonusScore) {
    //Gem hiding after the player got it
    this.x = -100;
    this.y = -200;
    player.score += score;
}
Gem.prototype.update = function() {
    this.x = stepX * getRandNum(0, 5) + deltaForGem;
    this.y = stepY * getRandNum(1, 4);
}

let gem = new Gem();


let allEnemies = [];

function getEnemies() {
    for (let i = 0; i < numOfAnimals; i++) {
        let diffSpeed = getRandNum(minStartSpeed, maxStartSpeed);
        let diffRow = getRandNum(1, 5);
    if (i < 4) {
        allEnemies[i] = new Enemy(i + 1, diffSpeed);
    } else {
        allEnemies[i] = new Enemy(diffRow, diffSpeed);}
    }
}
getEnemies();

let player = new Player();

function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// This listens for key presses and sends the keys to 
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
