"use strict";

import { 
  context as ctx, 
  GAME_WIDTH, GAME_HEIGHT, PLAYER_SIZE
} from './js/config.js';

import BlockSprite from './js/sprites/blocksprite.js';
import BallSprite from './js/sprites/ballsprite.js';
import Player from './js/player.js';
import InputHandler from './js/input.js';


let Blocky = new BlockSprite(PLAYER_SIZE,PLAYER_SIZE);
let player = new Player(Blocky);
new InputHandler(player);
player.place(GAME_WIDTH/2, GAME_HEIGHT - Blocky.height/2);


let lastTime = 0;

function gameLoop(timestamp) {

  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

  player.update(dt);
  player.draw(ctx);

  ctx.fillStyle = 'white';
  ctx.font = '16px sans-serif';
  ctx.fillText(`Position: (${Math.round(player.sprite.pos.x)}, ${Math.round(player.sprite.pos.y)})`, 20, 30);
  ctx.fillText(`Velocity: (${Math.round(player.vel.x)}, ${Math.round(player.vel.y)})`, 20, 55);
  ctx.fillText(`Acceleration: (${Math.round(player.acc.x)}, ${Math.round(player.acc.y)})`, 20, 80);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);