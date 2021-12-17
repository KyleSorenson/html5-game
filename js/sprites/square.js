"use strict";

import { GAME_WIDTH, PLAYER_ACC, PLAYER_FRICTION } from "../config.js";

function Square(x, y, color) {

  this.rect = {
    width: 50,
    height: 50
  }

  this.pos = {
    x: x,
    y: y
  }

  this.color = color;


  
  this.vel = {
    x: 0,
    y: 0
  };

  this.acc = {
    x: 0,
    y: 0
  }



  this.moveLeft = function() {
    this.acc.x = -PLAYER_ACC;
  }

  this.moveRight = function() {
    this.acc.x = PLAYER_ACC;
  }
  
  this.stop = function() {
    this.acc.x = 0;
  }


  this.update = function( deltaTime ) {

    this.acc.x += this.vel.x * PLAYER_FRICTION;
    this.vel.x += this.acc.x;
    this.pos.x += ( this.vel.x + .5 * this.acc.x) / deltaTime;
    

    // Stops Player at Boundary
    if (this.pos.x < 0 ) this.pos.x = 0;
    if (this.pos.x > GAME_WIDTH - this.rect.width) this.pos.x = GAME_WIDTH - this.rect.width;

  }

  this.draw = function(ctx) {

    // Body
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.pos.x,
      this.pos.y,
      this.rect.width,
      this.rect.height
    );

    // Left Eye
    ctx.fillStyle = 'black';
    ctx.fillRect(
      this.pos.x + (this.rect.width / 5 * 1),
      this.pos.y + (this.rect.height / 5 * 1),
      this.rect.width / 5,
      this.rect.height / 5
    );

    // Right Eye
    ctx.fillStyle = 'black';
    ctx.fillRect(
      this.pos.x + (this.rect.width / 5 * 3),
      this.pos.y + (this.rect.height / 5 * 1),
      this.rect.width / 5,
      this.rect.height / 5
    );
    
    // Mouth
    ctx.fillStyle = 'black';
    ctx.fillRect(
      this.pos.x + (this.rect.width / 5 * 1),
      this.pos.y + (this.rect.height / 10 * 6),
      this.rect.width / 5 * 3,
      this.rect.height / 10
    );

  }



}

export default Square;