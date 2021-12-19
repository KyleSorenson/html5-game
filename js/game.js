"use strict";

import ImageSprite from './sprites/imagesprite.js';
import Player from './player.js';
import InputHandler from './input.js';

class Game {
  
  constructor(gameWidth, gameHeight) {

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

  }

  init() {

    let Mario = new ImageSprite();
    
    this.player1 = new Player(Mario);
    this.player1.place(this.gameWidth/2, this.gameHeight - Mario.height/2);
    
    let Goomba = new ImageSprite('../img/goomba.png', 16*2, 16*2);
    this.enemy1 = new Player(Goomba);
    this.enemy1.place(this.gameWidth-100, this.gameHeight - Goomba.height/2);
    
    new InputHandler(this.player1);

  }

  update( deltaTime ) {

    this.player1.update( deltaTime );
    this.enemy1.update( deltaTime );

  }
  
  draw(ctx) {
    
    this.player1.drawOverlays(ctx);

    this.enemy1.draw(ctx);

    this.player1.draw(ctx);

  }

}

export default Game;