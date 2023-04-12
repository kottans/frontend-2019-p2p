// -------------------------------------------------------------------
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

  // // Update the enemy's position, required method for game
  Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt * gameSpeed;

    if (this.x > CANVAS_WIDTH) this.x = -this.width;
    if (this.x < -this.width) this.x = CANVAS_WIDTH;

    this.checkCollisions();
  };

  // /* Resets the game's characteristics to the given ones when
  //  * the character comes into contact with the enemy. */
  Enemy.prototype.levelDown = function () {
    // Reset the position of the character.
    player.x = randomX();
    player.y = setValue(PLAYER_DATA.START_Y, level);

    // Set score.
    score - setValue(RESET_SCORE, level) < 0
      ? (score = 0)
      : (score -= setValue(RESET_SCORE, level));

    // Set other settings.
    gameSpeed = setValue(RESET_SPEED, level);
    life -= 1;

    // Update game objects.
    updateObjects(player);

    // Reduce the level.
    level = setValue(RESET_LEVEL, level);

    // Update the info bar.
    bar.render();

    // Page scroll down
    scrollDown(SCROLL_CLAAS, SCROLL_BEHAVIOR, SCROLL_BLOCK);
  };

  // // Game over if the character has too few lives.
  Enemy.prototype.gameOver = function () {
    // Reset the position of the character.
    player.x = randomX();
    player.y = setValue(PLAYER_DATA.START_Y, level);

    // Set other settings.
    life -= 1;

    // Update the info bar.
    bar.render();

    // Show animation
    gameOverPopup.render();

    // Show finish popup
    setTimeout(() => {
      finishGame(GAME_DATA);
    }, MEDIUM_TIMING);
  };

  // /* Method that checks the interaction between the character
  //  * and the enemies. */
  Enemy.prototype.checkCollisions = function () {
    if (
      player.x > this.x - ENEMY_DATA.SPRITE_WIDTH / 2 &&
      player.y === this.y &&
      player.x < this.x + ENEMY_DATA.SPRITE_WIDTH / 2 &&
      player.y === this.y
    ) {
      life > MIN_LIFE ? this.levelDown() : this.gameOver();
    }
  };

  // // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function () {
    ctx.drawImage(
      Resources.get(this.sprite),
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  // -------------------------------------------------------------------
  // Now write your own player class
  let Player = function (x, y, width, height, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
  };

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

  // Raise the level.
  Player.prototype.levelUp = function () {
    // Show animation.
    levelUpPopup.render();

    setTimeout(() => {
      // Raise the level.
      level += 1;

      // Raise the game speed.
      gameSpeed += GAME_SPEED_STEP;

      // Check and count max level.
      maxLevel = countMaxLevel(level);

      // Raise the score.
      score += setValue(SCORE_LEVELS, level);

      // Set the position of the character.
      player.x = randomX();
      player.y = setValue(PLAYER_DATA.START_Y, level);

      // Update game objects.
      updateObjects(this);

      // Update info bar.
      bar.render();

      // Scroll down the page when the height of the screen is too high.
      setTimeout(() => {
        scrollDown("canvas", "smooth", "end");
      }, LOW_TIMING);
    }, LOW_TIMING);
  };

  // Ending the game after passing the 20th level.
  Player.prototype.endingGame = function () {
    // Raise the score.
    score += FINISH_BONUS;

    // Update info bar.
    bar.render();

    // Show animation.
    winPopup.render();

    // Show finish popup
    setTimeout(() => {
      finishGame(GAME_DATA);
    }, HIGH_TIMING);
  };

  // Check whether the player reached the water.
  Player.prototype.checkWaterLine = function (y) {
    if (y === CANVAS_DATA.BORDER_TOP) {
      switch (true) {
        case level === FOURTH_STAGE.MAX_LEVEL:
          // Ending the game after passing the 20th level.
          this.endingGame();
          break;

        default:
          // Raise the level.
          this.levelUp();
          break;
      }
    }
  };

  // Arrow control
  Player.prototype.handleInput = function (key) {
    switch (true) {
      // Up
      case key === "up" &&
        this.y > CANVAS_DATA.BORDER_TOP &&
        this.checkRocksCollisions(this.x, this.y, key) === true:
        // Update position.
        this.y -= CANVAS_DATA.VERT_MOVE;

        // Check whether the player reached the water.
        this.checkWaterLine(this.y);
        break;

      // Down
      case key === "down" &&
        this.y < setValue(CANVAS_DATA.BORDER_BOT, level) &&
        this.checkRocksCollisions(this.x, this.y, key) === true:
        // Update position.
        this.y += CANVAS_DATA.VERT_MOVE;
        break;

      // Left
      case key === "left" &&
        this.x > CANVAS_DATA.BORDER_LEFT &&
        this.checkRocksCollisions(this.x, this.y, key) === true:
        // Update position.
        this.x -= CANVAS_DATA.HORZ_MOVE;
        break;

      // Right
      case key === "right" &&
        this.x < CANVAS_DATA.BORDER_RIGHT &&
        this.checkRocksCollisions(this.x, this.y, key) === true:
        // Update position.
        this.x += CANVAS_DATA.HORZ_MOVE;
        break;
    }
  };

  // Mouse control
  Player.prototype.mauseInput = function (x, y) {
    switch (true) {
      // Up
      case y < this.y &&
        this.y - y >= CANVAS_DATA.VERT_MOVE / 2 &&
        this.y > CANVAS_DATA.BORDER_TOP &&
        this.checkRocksCollisions(this.x, this.y, "up") === true:
        // Update position.
        this.y -= CANVAS_DATA.VERT_MOVE;

        // Scroll
        window.scrollBy(0, (CANVAS_DATA.VERT_MOVE * -1) / 2);

        // Check whether the player reached the water.
        this.checkWaterLine(this.y);
        break;

      // Down
      case y > this.y &&
        y - this.y >= CANVAS_DATA.VERT_MOVE / 2 &&
        this.y < setValue(CANVAS_DATA.BORDER_BOT, level) &&
        this.checkRocksCollisions(this.x, this.y, "down") === true:
        // Update position.
        this.y += CANVAS_DATA.VERT_MOVE;

        // Scroll
        window.scrollBy(0, CANVAS_DATA.VERT_MOVE / 2);
        break;

      // Left
      case x < this.x &&
        this.x - x >= CANVAS_DATA.HORZ_MOVE / 2 &&
        this.x > CANVAS_DATA.BORDER_LEFT &&
        this.checkRocksCollisions(this.x, this.y, "left") === true:
        // Update position.
        this.x -= CANVAS_DATA.HORZ_MOVE;
        break;

      // Right
      case x > this.x &&
        x - this.x >= CANVAS_DATA.HORZ_MOVE / 2 &&
        this.x < CANVAS_DATA.BORDER_RIGHT &&
        this.checkRocksCollisions(this.x, this.y, "right") === true:
        // Update position.
        this.x += CANVAS_DATA.HORZ_MOVE;
        break;
    }
  };

  // Updating the location of rocks when leveling up
  Player.prototype.updateRocks = function (obj) {
    // Clear array
    allRocks.length = 0;

    // Set new rocks
    switch (true) {
      case level >= THIRD_STAGE.MIN_LEVEL && level <= THIRD_STAGE.MAX_LEVEL:
        allRocks.push(
          new Rock(
            randomX(),
            obj.START_Y[0],
            obj.SPRITE_WIDTH,
            obj.SPRITE_HEIGTH,
            obj.SPRITE
          )
        );
        break;

      case level >= FOURTH_STAGE.MIN_LEVEL && level <= FOURTH_STAGE.MAX_LEVEL:
        const arrX = RockArrX(obj.START_Y, obj.START_X);
        for (let i = 0; i < arrX.length; i += 1) {
          allRocks.push(
            new Rock(
              arrX[i],
              obj.START_Y[i],
              obj.SPRITE_WIDTH,
              obj.SPRITE_HEIGTH,
              obj.SPRITE
            )
          );
        }
        break;
    }
  };

  // Checking conflicts with rocks
  Player.prototype.checkRocksCollisions = function (x, y, key) {
    let rock;

    switch (true) {
      case key === "up":
        rock = allRocks.find((elem) => elem.y === y - CANVAS_DATA.VERT_MOVE);
        return rock !== undefined && rock.x === x ? false : true;

      case key === "down":
        rock = allRocks.find((elem) => elem.y === y + CANVAS_DATA.VERT_MOVE);
        return rock !== undefined && rock.x === x ? false : true;

      case key === "right":
        rock = allRocks.find((elem) => elem.x === x + CANVAS_DATA.HORZ_MOVE);
        return rock !== undefined && rock.y === y ? false : true;

      case key === "left":
        rock = allRocks.find((elem) => elem.x === x - CANVAS_DATA.HORZ_MOVE);
        return rock !== undefined && rock.y === y ? false : true;
    }
  };

  // Updating the location of jewelry when leveling up
  Player.prototype.updateJewelry = function (obj) {
    if (level >= THIRD_STAGE.MIN_LEVEL && level <= FOURTH_STAGE.MAX_LEVEL) {
      // Set new jevel
      jevel = new Jewel(
        // Set x pusition
        randomPosition(ArrX(allRocks, undefined, obj.START_X)),
        // Set y pusition
        level >= FOURTH_STAGE.MIN_LEVEL
          ? obj.START_Y[Math.floor(Math.random() * obj.START_Y.length)]
          : obj.START_Y[0],
        // Set other settings
        obj.SPRITE_WIDTH,
        obj.SPRITE_HEIGTH,
        obj.SPRITES[Math.floor(Math.random() * obj.SPRITES.length)]
      );
    }
  };

  // Updating the location of heart when leveling up
  Player.prototype.updateHeart = function (obj) {
    heart = {};

    if (
      getRandomNumber(THIRD_STAGE.MIN_LEVEL, FOURTH_STAGE.MAX_LEVEL) === level
    ) {
      // Set new Heart
      heart = new Heart(
        // Set x pusition
        randomPosition(ArrX(allRocks, jevel.x, obj.START_X)),
        // Set y pusition
        level >= FOURTH_STAGE.MIN_LEVEL
          ? obj.START_Y[Math.floor(Math.random() * obj.START_Y.length)]
          : obj.START_Y[0],
        // Set other settings
        obj.SPRITE_WIDTH,
        obj.SPRITE_HEIGTH,
        obj.SRC
      );
    }
  };

  // Updating the location of enemies when leveling up
  Player.prototype.updateEnemies = function (obj) {
    if (
      [
        FIRST_STAGE.MIN_LEVEL,
        SECOND_STAGE.MIN_LEVEL,
        THIRD_STAGE.MIN_LEVEL,
        FOURTH_STAGE.MIN_LEVEL,
      ].find((item) => item === level)
    ) {
      // Clear array
      allEnemies.length = 0;

      // Set new enemies
      setValue(obj.START_Y, level).forEach((y) =>
        allEnemies.push(
          new Enemy(
            randomX(),
            y,
            obj.SPRITE_WIDTH,
            obj.SPRITE_HEIGTH,
            setEnemySpeed(y),
            setEnemySprite(y)
          )
        )
      );
    }
  };

  // -------------------------------------------------------------------
  // Rocks
  let Rock = function (x, y, width, height, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
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

  // -------------------------------------------------------------------
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

  // // Updating jewelry information.
  Jewel.prototype.update = function () {
    this.checkCollisions();
  };

  // // Updating jewelry information.
  Jewel.prototype.increaseScore = function () {
    // Search index
    const spriteIndex = JEWELRY_DATA.SPRITES.findIndex(
      (item) => item === this.sprite
    );
    // Increase score
    score += JEWELRY_DATA.SPRITES_SCORE[spriteIndex];
  };

  // // Checking conflicts with jewelry
  Jewel.prototype.checkCollisions = function () {
    // Increase score
    if (player.x === this.x && player.y === this.y) {
      this.increaseScore();

      // Update the info bar
      bar.render();

      // Hidden jewel
      hiddenObj(this);
    }
  };

  // -------------------------------------------------------------------
  // Heart class
  let Heart = function (x, y, width, height, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
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

  // // Updating heart information
  Heart.prototype.update = function () {
    this.checkCollisions();
  };

  // // Checking conflicts with heart
  Heart.prototype.checkCollisions = function () {
    if (player.x === this.x && player.y === this.y) {
      // Increase score
      score += HEART_SCORE;

      // Increase life
      if (life < MAX_LIFE) life += 1;

      // Update the info bar
      bar.render();

      // Hidden heart
      hiddenObj(this);
    }
  };

  // -------------------------------------------------------------------
  // Instantiate objects.
  // Place the player object in a variable called player
  player = new Player(
    randomX(),
    setValue(PLAYER_DATA.START_Y, level),
    PLAYER_DATA.SPRITE_WIDTH,
    PLAYER_DATA.SPRITE_HEIGTH,
    playerSpriteSrc
  );

  // Place all enemy objects in an array called allEnemies
  player.updateEnemies(ENEMY_DATA);
  // -------------------------------------------------------------------

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
    if (e.target.className === CLICK_CLASS) {
      let x;
      let y;

      // We calculate the coefficient of change in the coordinate value when the screen width changes to less than 540 px.
      const coef =
        (CANVAS_WIDTH + CANVAS_WIDTH * CLICK_MARGIN * 2) / window.innerWidth;

      // // Calculation of coordinates along the X and Y axes.
      switch (true) {
        case window.innerWidth < CLICK_WIDTH:
          // Create the coordinates that we will transfer.
          x =
            e.pageX * coef -
            SPRITE_WIDTH / 2 -
            window.innerWidth * CLICK_MARGIN;
          y = e.pageY * coef - SPRITE_HEIGTH / 2;
          break;

        default:
          // Create the coordinates that we will transfer.
          x =
            e.pageX - SPRITE_WIDTH / 2 - (window.innerWidth - CANVAS_WIDTH) / 2;
          y = e.pageY - SPRITE_HEIGTH / 2;
          break;
      }

      // Pass the coordinates to the function.
      player.mauseInput(x, y);
    }
  });
}

// -------------------------------------------------------------------
