"use strict";

import { 
  context as ctx, 
  GAME_WIDTH, GAME_HEIGHT
} from './js/config.js';

import InputHandler from './js/input.js';
import Square from './js/sprites/square.js';



let Player = new Square(0, 0, 'gray');
Player.pos.y = GAME_HEIGHT - Player.rect.height;



new InputHandler(Player);

let lastTime = 0;

function gameLoop(timestamp) {

  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

  Player.update(dt);
  Player.draw(ctx);

  ctx.fillStyle = 'white';
  ctx.font = '16px sans-serif';
  ctx.fillText(`Position: ` + Math.round(Player.pos.x), 20, 30);
  ctx.fillText(`Velocity: ` + Math.round(Player.vel.x), 20, 55);
  ctx.fillText(`Acceleration: ` + Math.round(Player.acc.x), 20, 80);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);