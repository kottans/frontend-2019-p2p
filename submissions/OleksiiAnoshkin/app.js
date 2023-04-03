// Global variables
let allEnemies = [];
let allRocks = [];
let jevel = {};
let heart = {};
let player = {};
let score = 0;
let level = 1;
let maxLevel = 1;
let life = 2;
let maxLife = 4;
let gameSpeed = 10;
let playerSpriteSrc = "images/char-boy.png";

// Canvas variables
const CANVAS_DATA = {
  BORDER_BOT: [420, 748, 1076],
  BORDER_TOP: 10,
  BORDER_LEFT: 10,
  BORDER_RIGHT: 410,
  VERT_MOVE: 82,
  HORZ_MOVE: 100,
};

// Player variables
const PLAYER_DATA = {
  START_X: Math.floor(Math.random() * 5) * 100 + 10,
  START_Y: [420, 748, 1076],
  SPRITE_WIDTH: 80,
  SPRITE_HEIGTH: 132,
};

// Rocks variables
const ROCKS_DATA = {
  START_Y: [332, 660],
  SPRITE_WIDTH: 80,
  SPRITE_HEIGTH: 132,
};

// Jewelry variables
const JEWELRY_DATA = {
  START_Y: [360, 688],
  SPRITE_WIDTH: 52,
  SPRITE_HEIGTH: 88,
  SPRITES: [
    "images/gem-blue.png",
    "images/gem-green.png",
    "images/gem-orange.png",
    "images/key.png",
    "images/star.png",
  ],
};

// Heart variables
const HEART_DATA = {
  START_X: [10, 110, 210, 310, 410],
  START_Y: [372, 700],
  SPRITE_WIDTH: 52,
  SPRITE_HEIGTH: 88,
};

// Enemy variables
const ENEMY_DATA = {
  START_Y: [
    [82, 164, 246],
    [82, 164, 246, 328],
    [82, 164, 246, 410, 492, 574, 656],
    [82, 164, 246, 410, 492, 574, 738, 820, 902, 984],
  ],
  SPRITE_WIDTH: 80,
  SPRITE_HEIGTH: 132,
  SPRITES: ["images/enemy-bug-right.png", "images/enemy-bug-left.png"],
};

// The function of creating game objects.
function createObjects() {
  // Enemies our player must avoid
  let Enemy = function (x, y, width, height, speed, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.sprite = sprite;
  };

  // Update the enemy's position, required method for game
  Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt * gameSpeed;

    if (this.x > CANVAS_WIDTH + this.width / 2) {
      this.x = 0 - this.width;
    } else if (this.x < 0 - this.width) {
      this.x = CANVAS_WIDTH + this.width / 2;
    }

    this.checkCollisions();
  };

  // Method that checks the interaction between the character and the enemies.
  Enemy.prototype.checkCollisions = function () {
    if (
      player.x > this.x - ENEMY_DATA.SPRITE_WIDTH * 0.8 &&
      player.y - 10 === this.y &&
      player.x < this.x + ENEMY_DATA.SPRITE_WIDTH * 0.8 &&
      player.y - 10 === this.y
    ) {
      if (life > 1) {
        level = 1;
        gameSpeed = 8;
        life -= 1;
        score = 0;

        player.x = Math.floor(Math.random() * 5) * 100 + 10;

        if (level > 0 && level <= 10) {
          player.y = PLAYER_DATA.START_Y[0];
        } else if (level >= 11 && level <= 15) {
          player.y = PLAYER_DATA.START_Y[1];
        } else {
          player.y = PLAYER_DATA.START_Y[2];
        }

        player.updateRocks(ROCKS_DATA);
        player.updateJewelry(JEWELRY_DATA);
        player.updateHeart(HEART_DATA);
        player.updateEnemies(ENEMY_DATA);

        infoBar();
      } else {
        // Game over if the character has too few lives.
        life -= 1;
        player.x = 210;

        if (level > 0 && level <= 10) {
          player.y = PLAYER_DATA.START_Y[0];
        } else if (level >= 11 && level <= 15) {
          player.y = PLAYER_DATA.START_Y[1];
        } else {
          player.y = PLAYER_DATA.START_Y[2];
        }

        infoBar();
        gameOverPopup();
        setTimeout(() => {
          finishGame();
        }, 800);
      }
    }
  };

  // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function () {
    ctx.drawImage(
      Resources.get(this.sprite),
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  // Now write your own player class
  let Player = function (x, y, width, height, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
  };

  // Updating player information.
  Player.prototype.update = function () {};

  // Draw the player on the screen
  Player.prototype.render = function () {
    ctx.drawImage(
      Resources.get(this.sprite),
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  // Arrow control
  Player.prototype.handleInput = function (key) {
    if (key === "up" && this.y > CANVAS_DATA.BORDER_TOP) {
      // Check the interaction with rocks.
      if (player.checkRocksCollisions(this.x, this.y, "up") === true) {
        this.y -= CANVAS_DATA.VERT_MOVE;
      }

      if (this.y === CANVAS_DATA.BORDER_TOP) {
        // Ending the game after passing the 20th level.
        if (level === 20) {
          score += 100;
          infoBar();
          winPopup();
          setTimeout(() => {
            finishGame();
          }, 1500);
        } else {
          // Raise the level.
          levelUpPopup();

          setTimeout(() => {
            level++;
            gameSpeed += 2;
            maxLevel = countMaxLevel(level);
            score += countLevelScore(level);

            this.x = Math.floor(Math.random() * 5) * 100 + 10;

            if (level > 0 && level <= 10) {
              this.y = PLAYER_DATA.START_Y[0];
            } else if (level >= 11 && level <= 15) {
              this.y = PLAYER_DATA.START_Y[1];
            } else {
              this.y = PLAYER_DATA.START_Y[2];
            }

            this.updateRocks(ROCKS_DATA);
            this.updateJewelry(JEWELRY_DATA);
            this.updateHeart(HEART_DATA);
            this.updateEnemies(ENEMY_DATA);

            infoBar();
          }, 400);

          // We scroll down the page when the height of the screen is too high.
          setTimeout(() => {
            document.querySelector(".canvas").scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
          }, 800);
        }
      }
    } else if (key === "down") {
      if (level > 0 && level <= 10 && this.y < CANVAS_DATA.BORDER_BOT[0]) {
        if (player.checkRocksCollisions(this.x, this.y, "down") === true) {
          this.y += CANVAS_DATA.VERT_MOVE;
        }
      } else if (
        level >= 11 &&
        level <= 15 &&
        this.y < CANVAS_DATA.BORDER_BOT[1]
      ) {
        if (player.checkRocksCollisions(this.x, this.y, "down") === true) {
          this.y += CANVAS_DATA.VERT_MOVE;
        }
      } else if (level >= 16 && this.y < CANVAS_DATA.BORDER_BOT[2]) {
        if (player.checkRocksCollisions(this.x, this.y, "down") === true) {
          this.y += CANVAS_DATA.VERT_MOVE;
        }
      }
    } else if (key === "left" && this.x > CANVAS_DATA.BORDER_LEFT) {
      if (player.checkRocksCollisions(this.x, this.y, "left") === true) {
        this.x -= CANVAS_DATA.HORZ_MOVE;
      }
    } else if (key === "right" && this.x < CANVAS_DATA.BORDER_RIGHT) {
      if (player.checkRocksCollisions(this.x, this.y, "right") === true) {
        this.x += CANVAS_DATA.HORZ_MOVE;
      }
    }
  };

  // Mouse control
  Player.prototype.mauseInput = function (x, y) {
    if (y < this.y && this.y - y >= 50 && this.y > CANVAS_DATA.BORDER_TOP) {
      // Check the interaction with rocks.
      if (player.checkRocksCollisions(this.x, this.y, "up") === true) {
        this.y -= CANVAS_DATA.VERT_MOVE;
        window.scrollBy(0, (CANVAS_DATA.VERT_MOVE * -1) / 2);
      }

      if (this.y === CANVAS_DATA.BORDER_TOP) {
        if (level === 20) {
          // Ending the game after passing the 20th level.
          score += 100;
          infoBar();
          winPopup();
          setTimeout(() => {
            finishGame();
          }, 1500);
        } else {
          // Raise the level.
          levelUpPopup();

          setTimeout(() => {
            level++;
            gameSpeed += 2;
            maxLevel = countMaxLevel(level);
            score += countLevelScore(level);

            this.x = Math.floor(Math.random() * 5) * 100 + 10;

            if (level > 0 && level <= 10) {
              this.y = PLAYER_DATA.START_Y[0];
            } else if (level >= 11 && level <= 15) {
              this.y = PLAYER_DATA.START_Y[1];
            } else {
              this.y = PLAYER_DATA.START_Y[2];
            }

            this.updateRocks(ROCKS_DATA);
            this.updateJewelry(JEWELRY_DATA);
            this.updateHeart(HEART_DATA);
            this.updateEnemies(ENEMY_DATA);

            infoBar();
          }, 400);

          // We scroll down the page when the height of the screen is too high.
          setTimeout(() => {
            document.querySelector(".canvas").scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
          }, 800);
        }
      }
    } else if (y > this.y && y - this.y >= 50) {
      if (level > 0 && level <= 10 && this.y < CANVAS_DATA.BORDER_BOT[0]) {
        if (player.checkRocksCollisions(this.x, this.y, "down") === true) {
          this.y += CANVAS_DATA.VERT_MOVE;
          window.scrollBy(0, CANVAS_DATA.VERT_MOVE / 2);
        }
      } else if (
        level >= 11 &&
        level <= 15 &&
        this.y < CANVAS_DATA.BORDER_BOT[1]
      ) {
        if (player.checkRocksCollisions(this.x, this.y, "down") === true) {
          this.y += CANVAS_DATA.VERT_MOVE;
          window.scrollBy(0, CANVAS_DATA.VERT_MOVE / 2);
        }
      } else if (level >= 16 && this.y < CANVAS_DATA.BORDER_BOT[2]) {
        if (player.checkRocksCollisions(this.x, this.y, "down") === true) {
          this.y += CANVAS_DATA.VERT_MOVE;
          window.scrollBy(0, CANVAS_DATA.VERT_MOVE / 2);
        }
      }
    } else if (
      x < this.x &&
      this.x - x >= 40 &&
      this.x > CANVAS_DATA.BORDER_LEFT
    ) {
      if (player.checkRocksCollisions(this.x, this.y, "left") === true) {
        this.x -= CANVAS_DATA.HORZ_MOVE;
      }
    } else if (
      x > this.x &&
      x - this.x >= 40 &&
      this.x < CANVAS_DATA.BORDER_RIGHT
    ) {
      if (player.checkRocksCollisions(this.x, this.y, "right") === true) {
        this.x += CANVAS_DATA.HORZ_MOVE;
      }
    }
  };

  // Updating the location of rocks when leveling up
  Player.prototype.updateRocks = function (obj) {
    allRocks = [];

    if (level >= 11 && level <= 15) {
      allRocks.push(
        new Rock(
          Math.floor(Math.random() * 5) * 100 + 10,
          obj.START_Y[0],
          obj.SPRITE_WIDTH,
          obj.SPRITE_HEIGTH
        )
      );
    } else if (level >= 16 && level <= 20) {
      let arrX = [
        Math.floor(Math.random() * 5) * 100 + 10,
        Math.floor(Math.random() * 5) * 100 + 10,
      ];

      if (arrX[0] === arrX[1]) {
        if (arrX[0] >= 10 && arrX[0] <= 310) {
          arrX[0] += 100;
        } else {
          arrX[0] -= 100;
        }
      }

      for (let i = 0; i <= 1; i += 1) {
        allRocks.push(
          new Rock(arrX[i], obj.START_Y[i], obj.SPRITE_WIDTH, obj.SPRITE_HEIGTH)
        );
      }
    }
  };

  // Checking conflicts with rocks
  Player.prototype.checkRocksCollisions = function (x, y, key) {
    let posX = x;
    let posY = y;

    if (level >= 11 && level <= 20) {
      if (key === "up") {
        let rock = allRocks.find(
          (elem) => elem.y === posY - CANVAS_DATA.VERT_MOVE - 6
        );

        if (rock !== undefined && rock.x === posX) {
          return false;
        }
        return true;
      } else if (key === "down") {
        let rock = allRocks.find(
          (elem) => elem.y === posY + CANVAS_DATA.VERT_MOVE - 6
        );
        if (rock !== undefined && rock.x === posX) {
          return false;
        }
        return true;
      } else if (key === "right") {
        let rock = allRocks.find(
          (elem) => elem.x === posX + CANVAS_DATA.HORZ_MOVE
        );
        if (rock !== undefined && rock.y === posY - 6) {
          return false;
        }
        return true;
      } else if (key === "left") {
        let rock = allRocks.find(
          (elem) => elem.x === posX - CANVAS_DATA.HORZ_MOVE
        );
        if (rock !== undefined && rock.y === posY - 6) {
          return false;
        }
        return true;
      }
    }

    return true;
  };

  // Updating the location of jewelry when leveling up
  Player.prototype.updateJewelry = function (obj) {
    jevel = {};

    if (level >= 11 && level <= 15) {
      let posX = Math.floor(Math.random() * 5) * 100 + 24;
      let jevelSpriteSrc = obj.SPRITES[Math.floor(Math.random() * 5)];

      if (posX - 14 === allRocks[0].x) {
        if (posX >= 24 && posX <= 324) {
          posX += 100;
        } else {
          posX -= 100;
        }
      }

      jevel = new Jewel(
        posX,
        obj.START_Y[0],
        obj.SPRITE_WIDTH,
        obj.SPRITE_HEIGTH,
        jevelSpriteSrc
      );
    } else if (level >= 16 && level <= 20) {
      let jevelSpriteSrc = obj.SPRITES[Math.floor(Math.random() * 5)];
      let randomI = Math.floor(Math.random() * 2);
      let posX = Math.floor(Math.random() * 5) * 100 + 24;
      let posY = obj.START_Y[randomI];

      if (posY - 28 === allRocks[0].y && posX - 14 === allRocks[0].x) {
        if (posX >= 24 && posX <= 324) {
          posX += 100;
        } else {
          posX -= 100;
        }
      }

      if (posY - 28 === allRocks[1].y && posX - 14 === allRocks[1].x) {
        if (posX >= 24 && posX <= 324) {
          posX += 100;
        } else {
          posX -= 100;
        }
      }

      jevel = new Jewel(
        posX,
        posY,
        obj.SPRITE_WIDTH,
        obj.SPRITE_HEIGTH,
        jevelSpriteSrc
      );
    }
  };

  // Updating the location of heart when leveling up
  Player.prototype.updateHeart = function (obj) {
    heart = {};

    if (getRandomNumber(11, 21) === level) {
      let arrX = [].concat(HEART_DATA.START_X);

      if (level >= 11 && level <= 15) {
        let checkX = [allRocks[0].x, jevel.x - 14];

        checkX.forEach((elem) => {
          arrX = arrX.filter((position) => elem !== position);
        });

        heart = new Heart(
          arrX[Math.floor(Math.random() * (arrX.length - 1))] + 14,
          obj.START_Y[0],
          obj.SPRITE_WIDTH,
          obj.SPRITE_HEIGTH
        );
      } else if (level >= 16 && level <= 20) {
        let randomI = Math.floor(Math.random() * 2);
        let posY = obj.START_Y[randomI];

        if (jevel.y === posY - 12) {
          arrX = arrX.filter((position) => jevel.x - 14 !== position);
        }

        if (allRocks[randomI].y === posY - 40) {
          arrX = arrX.filter((position) => allRocks[randomI].x !== position);
        }

        heart = new Heart(
          arrX[Math.floor(Math.random() * (arrX.length - 1))] + 14,
          posY,
          obj.SPRITE_WIDTH,
          obj.SPRITE_HEIGTH
        );
      }
    }
  };

  // Updating the location of enemies when leveling up
  Player.prototype.updateEnemies = function (obj) {
    if (level === 1 || level === 6 || level === 11 || level === 16) {
      console.log("+");
      allEnemies = [];
      let enemiesLines = setEnemiesLines(level);
      let arrX = [];

      for (
        let i = 0;
        i <= ENEMY_DATA.START_Y[enemiesLines].length - 1;
        i += 1
      ) {
        arrX.push(Math.floor(Math.random() * 5) * 100 + 10);
      }

      for (let i = 0; i <= arrX.length - 1; i += 1) {
        allEnemies.push(
          new Enemy(
            arrX[i],
            ENEMY_DATA.START_Y[enemiesLines][i],
            ENEMY_DATA.SPRITE_WIDTH,
            ENEMY_DATA.SPRITE_HEIGTH,
            setEnemySpeed(i, level),
            setEnemySprite(i)
          )
        );
      }
    }
  };

  // Rocks
  let Rock = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = "images/rock.png";
  };

  // Draw rocks on the screen
  Rock.prototype.render = function () {
    ctx.drawImage(
      Resources.get(this.sprite),
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  // Jewelry
  let Jewel = function (x, y, width, height, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
  };

  // Draw jewelry on the screen
  Jewel.prototype.render = function () {
    ctx.drawImage(
      Resources.get(this.sprite),
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  // Updating jewelry information.
  Jewel.prototype.update = function () {
    this.checkCollisions();
  };

  // Checking conflicts with jewelry
  Jewel.prototype.checkCollisions = function () {
    if (player.x + 14 === this.x && player.y + 22 === this.y) {
      if (
        this.sprite === JEWELRY_DATA.SPRITES[0] ||
        this.sprite === JEWELRY_DATA.SPRITES[1] ||
        this.sprite === JEWELRY_DATA.SPRITES[2]
      ) {
        score += 40;
        infoBar();
      } else if (this.sprite === JEWELRY_DATA.SPRITES[3]) {
        score += 80;
        infoBar();
      } else if (this.sprite === JEWELRY_DATA.SPRITES[4]) {
        score += 135;
        infoBar();
      }
      this.width = 0;
      this.height = 0;
      this.x = -100;
      this.y = -100;
    }
  };

  // Heart
  let Heart = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = "images/heart.png";
  };

  // Draw heart on the screen
  Heart.prototype.render = function () {
    ctx.drawImage(
      Resources.get(this.sprite),
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  // Updating heart information.
  Heart.prototype.update = function () {
    this.checkCollisions();
  };

  // Checking conflicts with heart
  Heart.prototype.checkCollisions = function () {
    if (player.x + 14 === this.x && player.y + 34 === this.y) {
      score += 50;
      if (life < maxLife) {
        life += 1;
      }
      infoBar();

      this.width = 0;
      this.height = 0;
      this.x = -100;
      this.y = -100;
    }
  };

  // Instantiate objects.
  // Place the player object in a variable called player
  player = new Player(
    PLAYER_DATA.START_X,
    PLAYER_DATA.START_Y[0],
    PLAYER_DATA.SPRITE_WIDTH,
    PLAYER_DATA.SPRITE_HEIGTH,
    playerSpriteSrc
  );

  // Place all enemy objects in an array called allEnemies
  player.updateEnemies(ENEMY_DATA);

  // This listens for key presses and sends the keys to your
  // Player.handleInput() method. You don't need to modify this.
  // Arrow control
  document.addEventListener("keyup", function (e) {
    const allowedKeys = {
      37: "left",
      38: "up",
      39: "right",
      40: "down",
    };

    player.handleInput(allowedKeys[e.keyCode]);
  });

  // Mouse control
  document.addEventListener("click", function (e) {
    if (e.target.className === "canvas") {
      // We create the coordinates that we will transfer.
      let x = 0;
      let y = 0;

      // We calculate the coefficient of change in the coordinate value when the screen width changes to less than 540 px.
      let coef = (CANVAS_WIDTH + CANVAS_WIDTH * 0.12) / window.innerWidth;

      // // Calculation of coordinates along the X and Y axes.
      if (window.innerWidth < 540) {
        x = e.pageX * coef - 41 - window.innerWidth * 0.06;
        y = e.pageY * coef - 80;
      } else {
        x = e.pageX - 41 - (window.innerWidth - CANVAS_WIDTH) / 2;
        y = e.pageY - 80;
      }

      // We pass the coordinates to the function.
      player.mauseInput(x, y);
    }
  });
}

// Other functions
// Check and set max level
function countMaxLevel(level) {
  if (level >= maxLevel) {
    return level;
  } else {
    return maxLevel;
  }
}

// Check srore
function countLevelScore(level) {
  switch (true) {
    case level > 0 && level <= 3:
      return 5;

    case level > 3 && level <= 6:
      return 10;

    case level > 6 && level <= 10:
      return 15;

    case level > 10 && level <= 13:
      return 20;

    case level > 13 && level <= 16:
      return 30;

    case level > 16 && level <= 20:
      return 45;
  }
}

// Random number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Set enemy sprite
function setEnemySprite(i) {
  if (i % 2 === 0) {
    return ENEMY_DATA.SPRITES[0];
  } else {
    return ENEMY_DATA.SPRITES[1];
  }
}

// Set enemy speed
function setEnemySpeed(i, level) {
  if (level > 0 && level <= 5) {
    if (i % 2 === 0) {
      return gameSpeed;
    } else {
      return gameSpeed * -1;
    }
  } else if (level > 5 && level <= 10) {
    if (i % 2 === 0) {
      return gameSpeed / 2;
    } else {
      return (gameSpeed / 2) * -1;
    }
  } else if (level > 10 && level <= 15) {
    if (i % 2 === 0) {
      return gameSpeed / 3;
    } else {
      return (gameSpeed / 3) * -1;
    }
  } else if (level > 15 && level <= 20) {
    if (i % 2 === 0) {
      return gameSpeed / 4;
    } else {
      return (gameSpeed / 4) * -1;
    }
  }
}

// Set enemy line Y
function setEnemiesLines(level) {
  if (level > 0 && level <= 5) {
    return 0;
  } else if (level > 5 && level <= 10) {
    return 1;
  } else if (level > 10 && level <= 15) {
    return 2;
  } else {
    return 3;
  }
}
