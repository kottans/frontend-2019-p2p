var Enemy = function(x, y, speed) {
    this.x = x;
	this.y = y;
	this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    this.x +=  + (this.speed * dt);
    
    if (this.x > 550) {
    	this.x = -100;
		this.speed = Math.floor(100 + (Math.random() * 200));
    };
    
    if (player.x > this.x - 60 && 
        player.x < this.x + 60 && 
        player.y > this.y - 60 &&
        player.y < this.y + 60) {
        player.x = 200;
        player.y = 400;
	};
    
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var allEnemies = []
var enemyLocation = [60, 140, 220]

enemyLocation.forEach(function (y) {
    allEnemies.push(new Enemy(0, y, 300))
});

// Now write your own player class
var Player = function(x, y){
	this.x = x;
	this.y = y;
	this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function(){
	if (this.y < 60) {
		this.x = 200;
		this.y = 400;
	};
	
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){
	if (key === 'left' && this.x > 0) {
        this.x = this.x - 100;
    } else if (key === 'right' && this.x != 400) {
        this.x = this.x + 100;
    } else if (key === 'up') {
        this.y = this.y - 83;
    } else if (key === 'down' && this.y != 400) {
        this.y = this.y + 83;
    }
};

var player = new Player(200, 400);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

