//game score
var score = 0
//Enemy class with update(), render() methods
var Enemy = function (x, y, speed) {
    this.x = x
    this.y = y
    this.speed = speed
    this.sprite = 'images/car.png';
};
var END_CANVAS = 510
var BEGIN_CANVAS = -50
Enemy.prototype.update = function (dt) {

    this.x += this.speed * dt
    if (this.x > END_CANVAS) {
        this.x = BEGIN_CANVAS
        //random speed for enemies
        this.speed = 100 + Math.floor(Math.random() * 222)
    }
    // return to start position player when collide with enemy
    if (player.x > (this.x - 60) && player.x < (this.x + 60) && player.y > (this.y - 60) && player.y < (this.y + 60)) {
        player.startPosition();
    }
};

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var allEnemies = []
var enemyLocation = [60, 140, 220]

enemyLocation.forEach(function (y) {
    allEnemies.push(new Enemy(0, y, 200))
})

//start location for player
var START_PLAYER_X = 200
var START_PLAYER_Y = 404

//class player
var Player = function () {
    this.startPosition()
    this.player = 'images/char-cat-girl.png'
}
//back to start
Player.prototype.startPosition = function () {
    this.x = START_PLAYER_X
    this.y = START_PLAYER_Y
}

Player.prototype.update = function () {
    if (this.y <= 0) {
        this.startPosition()
        score++
        displayStats()
    }
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y)
}

var LEFT_WALL = 0;
var RIGHT_WALL = 400;
var TOP_WALL = 0;
var BOTTOM_WALL = 404;
var PLAYER_HEIGHT = 101;
var PLAYER_WIDTH = 83;

// moves the player up, down, left, right
Player.prototype.handleInput = function (keyUp) {
    if (keyUp === 'left' && this.x > LEFT_WALL) {
        this.x = this.x - PLAYER_HEIGHT;
    } else if (keyUp === 'right' && this.x < RIGHT_WALL) {
        this.x = this.x + PLAYER_HEIGHT;
    } else if (keyUp === 'up' && this.y > TOP_WALL) {
        this.y = this.y - PLAYER_WIDTH;
    } else if (keyUp === 'down' && this.y < BOTTOM_WALL) {
        this.y = this.y + PLAYER_WIDTH;
    }
};


var player = new Player()

var displayStats = function () {
    document.getElementById('currentStats').innerHTML = 'Score: ' + score
};

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
