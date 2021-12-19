"use strict";

import Sprite from "../sprite.js";

class BallSprite extends Sprite {
  
  constructor(width = 50, height = 50, color = 'gray') {
    super(width, height);
    this.color = color;
  }
    
  draw(ctx) {

    // Body
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.rect.width/2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

  }

}

export default BallSprite;