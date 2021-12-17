"use strict";

import { 
  GAME_WIDTH, 
  PLAYER_ACC, 
  PLAYER_MAXSPEED, 
  GRAVITY, 
  GAME_HEIGHT, 
  JUMP_VELOCITY,
  FRAME_DURATION 
} from "./config.js";

class Player {
  
  constructor(sprite) {
    this.sprite = sprite;
  }

  vel = {
    x: 0,
    y: 0
  };

  acc = {
    x: 0,
    y: 0
  }

  maxSpeed = PLAYER_MAXSPEED;

  moveLeft() {
    this.acc.x = -PLAYER_ACC;
  }

  moveRight() {
    this.acc.x = PLAYER_ACC;
  }

  jumpEnabled = true;

  jump() {
    this.acc.y = -JUMP_VELOCITY;
    setTimeout(() => {
      this.acc.y = 0;
    }, FRAME_DURATION);
    
  }
  
  stop() {
    this.acc.x = 0;
    this.vel.x = 0;
  }

  place(x,y) {
    this.sprite.pos.x = x;
    this.sprite.pos.y = y
  }

  update( deltaTime ) {

    // Kinematic Equations
    if ( -this.maxSpeed < this.vel.x && this.vel.x < this.maxSpeed ) {
      this.vel.x += this.acc.x;
    }
    let displacement = this.vel.x + .5 * this.acc.x;
    this.sprite.pos.x += displacement / deltaTime;
    
    // Window Edge Collision
    if (this.sprite.rect.right > GAME_WIDTH) { 
      this.sprite.pos.x = GAME_WIDTH - this.sprite.width/2;
      this.vel.x = 0;
    }
    if (this.sprite.rect.left < 0) { 
      this.sprite.pos.x = 0 + this.sprite.width/2;
      this.vel.x = 0;
    }

    // Jump
    this.vel.y += this.acc.y;

    // Gravity
    this.vel.y += GRAVITY;
    this.sprite.pos.y += this.vel.y;

    // Ground Collision
    if (this.sprite.rect.bottom > GAME_HEIGHT) {
      this.sprite.pos.y = GAME_HEIGHT - this.sprite.height/2;
      this.vel.y = 0;
      this.jumpEnabled = true;
    }
  }

  draw(ctx) {
    this.sprite.draw(ctx);
  }

}

export default Player;