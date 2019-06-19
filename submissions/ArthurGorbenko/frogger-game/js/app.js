let countForWonRound = 0;

const blockWidth = 100;
const blockHeight = 90;
const fieldMaxHeight = 400;
const fieldMinHeight = -70;
const fieldMaxWidth = 405;
const fieldMinWidth = -10;
const waterLevel = fieldMinHeight + blockHeight;
const startPositionX = 200;
const startPositionY = 300;
const halfOfSizeImg = 50;
const endOfField = 600;

class Enemy {
  constructor(x, y) {
    this.sprite = "images/enemy-bug.png";
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 100) + 50;
  }
  update(dt) {
    this.x += this.speed * dt;

    if (this.x > endOfField) {
      this.restartEnemy();
    }

    if (
      this.x < player.x + halfOfSizeImg &&
      this.x + halfOfSizeImg > player.x &&
      this.y < player.y + halfOfSizeImg &&
      this.y + halfOfSizeImg > player.y
    ) {
      this.collisionHapped();
    }
  }
  restartEnemy() {
    this.x = -100;
    this.generateSpeed(countForWonRound);
  }
  collisionHapped() {
    alert("You are busted!");
    countForWonRound = 0;
    player.x = startPositionX;
    player.y = startPositionY;
    allEnemies.forEach(el => el.generateSpeed(countForWonRound));
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  generateSpeed(difficulty) {
    if (difficulty === 0) {
      this.speed = Math.floor(Math.random() * 100) + 50;
    } else {
      this.speed = (Math.floor(Math.random() * 100) + 50) * difficulty;
    }
  }
}

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = "images/char-boy.png";
  }
  update(keyPressed) {
    switch (keyPressed) {
      case "left":
        if (this.x - blockWidth <= fieldMinWidth) {
          return null;
        } else {
          this.x -= blockWidth;
          break;
        }
      case "up":
        if (this.y - blockHeight <= fieldMinHeight) {
          return null;
        } else if (this.y - blockHeight < waterLevel) {
          countForWonRound++;
          alert("Congratulations, you won! Score : " + countForWonRound);
          player.x = startPositionX;
          player.y = startPositionY;
          allEnemies.forEach(el => el.generateSpeed(countForWonRound)); // difficulty increase
          break;
        } else {
          this.y -= blockHeight;
          break;
        }
      case "right":
        if (this.x + blockWidth >= fieldMaxWidth) {
          return null;
        } else {
          this.x += blockWidth;
          break;
        }
      case "down":
        if (this.y + blockHeight >= fieldMaxHeight) {
          return null;
        } else {
          this.y += blockHeight;
        }
    }
  }

  handleInput(keyPressed) {
    this.update(keyPressed);
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

let player = new Player(startPositionX, startPositionY);
let enemyOne = new Enemy(-50, 50);
let enemyTwo = new Enemy(-50, 130);
let enemyThree = new Enemy(-50, 210);

const allEnemies = [enemyOne, enemyTwo, enemyThree];

document.addEventListener("keyup", function(e) {
  let allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
