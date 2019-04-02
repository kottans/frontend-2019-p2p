var Enemy = function(row, speed) {
    this.x = -100;
    this.y = 60 + (row-1)*80;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 500) {this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {

    this.x = 200;
    this.y = 380;
    this.score = 0;
    this.HighScore = 0;
    this.sprite = 'images/char-boy.png';

};

var Gem = function() {
    this.x = 101 * getRandNum(0,5) +15;
    this.y = 83 * getRandNum(1,4);
    this.sprite = 'images/GemOrange.png';
}
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Gem.prototype.get = function(score = 5) {
    this.x = -100;
    this.y = -200;
    player.score+=score;
}
Gem.prototype.update = function() {
    this.x = 101 * getRandNum(0,5) + 15;
    this.y = 83 * getRandNum(1,4);
}

var gem = new Gem();

Player.prototype.update = function() {
    this.x = 200;
    this.y = 380;
    this.score += 1;
    allEnemies.forEach(function(enemy) {
        enemy.speed+=getRandNum(5,45);
    });
    
};



Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) { 

    if ( key === 'left' ) {
        if ( this.x > 0 ) {
            this.x = this.x - 100;
        }
    } else if ( key === 'right' ) {
        if ( this.x < 400 ) {
            this.x = this.x + 100;
        }
    } else if ( key === 'up' ) {
        if ( this.y > 0 ) {
            this.y = this.y - 80;
        }
    } else if ( key === 'down') {
        if ( this.y < 380 ) {
            this.y = this.y + 80;
        } 
    }
};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
    if (this.score >this.HighScore) {
        this.HighScore = this.score;
    } 
    alert("Your score: " + this.score);
    this.score = 0;   
    allEnemies.forEach(function(enemy) {
        enemy.speed = getRandNum(15,85);
    }); 
};


var allEnemies = [];
function getEnemies() {
    for (var i = 0; i < 7; i++) {
        var diff_speed = getRandNum(10, 31) * 3;
        var diff_row = getRandNum(1, 5);
    if (i < 4) {
        allEnemies[i] = new Enemy(i+1, diff_speed);
    } else {
        allEnemies[i] = new Enemy(diff_row, diff_speed);}
    }
}
getEnemies();
var player = new Player();

function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// This listens for key presses and sends the keys to 
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
