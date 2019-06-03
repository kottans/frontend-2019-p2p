let scoreCount = 0;

const START = {
	x: 202,
	y: 405,
};

const FIELD = {
	column: 101,
	row: 83,
	leftBorder: 101,
	rightBorder: 303,
	topBorder: 0,
	bottomBorder: 322,
};

const SPEED = (min = 75, max = 200) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const Creature = function (x, y) {
	this.x = x;
	this.y = y;
};


	const Enemy = function(x, y, speed, gamer) {
	Creature.call(this, x, y);
	this.speed = speed;
	this.gamer = gamer;
	this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
	this.x = this.x + this.speed * dt;
	if (this.x >= FIELD.rightBorder + FIELD.column * 2) {
		this.x = -101;
		this.speed = SPEED();
	}
	if (this.isCollision()) {
		alert(`You lost! The score is demotioned to ${scoreCount -= 1}`);
		this.gamer.beginAgain();
	}
};

Enemy.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.isCollision = function() {
	if (
		this.x + FIELD.column >= this.gamer.x &&
		this.x <= this.gamer.x + FIELD.column &&
		this.y + 10 == this.gamer.y
	) {
		return true;
	}
};

const Player = function(x, y) {
	Creature.call(this, x, y);
	this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.beginAgain = function() {
	this.x = START.x;
	this.y = START.y;
};

Player.prototype.handleInput = function(key) {
	switch (key) {
		case 'left':
			if (this.x >= FIELD.leftBorder) this.x -= FIELD.column;
			break;
		case 'right':
			if (this.x <= FIELD.rightBorder) this.x += FIELD.column;
			break;
		case 'up':
			if (this.y >= FIELD.topBorder) this.y -= FIELD.row;

			if (this.y < 0) {
				scoreCount++;
				if (scoreCount < 5){
					alert(`You win ${scoreCount} times!`);
				} else {
					alert(`You are absolute winner with score ${scoreCount} !`);
					scoreCount = 0;
					alert('The new game is started');
				}
				
				this.beginAgain();
			}
			break;
		case 'down':
			if (this.y <= FIELD.bottomBorder) this.y += FIELD.row;
			break;
	}
};

const player = new Player(START.x, START.y);
const enemy1 = new Enemy(0, FIELD.row - 20, SPEED(), player);
const enemy2 = new Enemy(0, FIELD.row * 2 - 20, SPEED(), player);
const enemy3 = new Enemy(0, FIELD.row * 3 - 20, SPEED(), player);

const allEnemies = [enemy1, enemy2, enemy3];

document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
	};

	player.handleInput(allowedKeys[e.keyCode]);
});
