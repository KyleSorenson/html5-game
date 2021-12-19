"use strict";

import Sprite from "../sprite.js";

class BlockSprite extends Sprite {
  
  constructor(width = 50, height = 50, color = 'gray') {
    super(width, height);
    this.color = color;
  }
    
  draw(ctx) {

    // Body
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.rect.topLeft.x,
      this.rect.topLeft.y,
      this.rect.width,
      this.rect.height
    );

    // Left Eye
    ctx.fillStyle = 'black';
    ctx.fillRect(
      this.rect.topLeft.x + (this.rect.width / 5 * 1),
      this.rect.topLeft.y + (this.rect.height / 5 * 1),
      this.rect.width / 5,
      this.rect.height / 5
    );

    // Right Eye
    ctx.fillStyle = 'black';
    ctx.fillRect(
      this.rect.topLeft.x + (this.rect.width / 5 * 3),
      this.rect.topLeft.y + (this.rect.height / 5 * 1),
      this.rect.width / 5,
      this.rect.height / 5
    );
    
    // Mouth
    ctx.fillStyle = 'black';
    ctx.fillRect(
      this.rect.topLeft.x + (this.rect.width / 5 * 1),
      this.rect.topLeft.y + (this.rect.height / 10 * 6),
      this.rect.width / 5 * 3,
      this.rect.height / 10
    );

  }

}

export default BlockSprite;