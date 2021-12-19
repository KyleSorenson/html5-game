"use strict";

let GAME_WIDTH = 800;
let GAME_HEIGHT = 450;
let PLAYER_ACC = 30;
let PLAYER_MAXSPEED = 300;
let GRAVITY = 2;
let JUMP_VELOCITY = 30;
let FRAME_DURATION = 1000 / 60;

let canvas = document.getElementById('game');
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

let context = canvas.getContext('2d');

export { 
  context, 
  GAME_WIDTH, 
  GAME_HEIGHT, 
  PLAYER_ACC, 
  PLAYER_MAXSPEED, 
  GRAVITY,
  JUMP_VELOCITY,
  FRAME_DURATION,
};