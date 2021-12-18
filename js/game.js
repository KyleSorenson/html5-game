"use strict";

import { PLAYER_SIZE } from './config.js';

import BlockSprite from './sprites/blocksprite.js';
import BallSprite from './sprites/ballsprite.js';
import Player from './player.js';
import InputHandler from './input.js';

class Game {
  
  constructor(gameWidth, gameHeight) {

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

  }

  init() {

    let Blocky = new BlockSprite(PLAYER_SIZE, PLAYER_SIZE, 'yellow');
    let Rolly = new BallSprite(120, 120, 'maroon');
    
    this.player1 = new Player(Blocky);
    this.player1.place(this.gameWidth/2, this.gameHeight - Blocky.height/2);
    new InputHandler(this.player1);

    this.player2 = new Player(Rolly);
    this.player2.place(this.gameWidth - Rolly.width/2, this.gameHeight - Rolly.height/2);

  }

  update( deltaTime ) {

    this.player1.update( deltaTime );

  }
  
  draw(ctx) {

    this.player2.draw(ctx);  

    this.player1.draw(ctx);
    this.player1.drawOverlays(ctx);

  }

}

export default Game;