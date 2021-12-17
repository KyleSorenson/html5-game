"use strict";

let GAME_WIDTH = 500;
let GAME_HEIGHT = 450;
let PLAYER_ACC = 20;
let PLAYER_MAXSPEED = 250;

let canvas = document.getElementById('game');
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

let context = canvas.getContext('2d');

export { context, GAME_WIDTH, GAME_HEIGHT, PLAYER_ACC, PLAYER_MAXSPEED };