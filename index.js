"use strict";

import { 
  context as ctx, 
  GAME_WIDTH, GAME_HEIGHT
} from './js/config.js';

import Game from './js/game.js';

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.init();

let lastTime = 0;

function gameLoop(timestamp) {

  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

  game.update(dt);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);