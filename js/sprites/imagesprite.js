"use strict";

import Sprite from "../sprite.js";

class ImageSprite extends Sprite {
  
  constructor(src = '../../img/mario.png', width = 15*2, height = 28*2) {
    super(width, height);
    this.image = new Image();
    this.src = src;
    this.imageRev = new Image();
    this.imageRev.src = '../../img/mario-rev.png'
    this.faceRight = true;
  }
    
  draw(ctx, velocity) {
    ctx.imageSmoothingEnabled = false;
    this.image.src = this.src;

    if( velocity.x > 0 ) {
      this.faceRight = true;
    } else if ( velocity.x < 0 ) {
      this.faceRight = false;
    }

    if (this.faceRight) ctx.drawImage(this.image, this.rect.topLeft.x, this.rect.topLeft.y, this.rect.width, this.rect.height);
    if (!this.faceRight) ctx.drawImage(this.imageRev, this.rect.topLeft.x, this.rect.topLeft.y, this.rect.width, this.rect.height);
  }

}

export default ImageSprite;