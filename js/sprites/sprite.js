"use strict";

import { GAME_WIDTH, PLAYER_ACC, PLAYER_MAXSPEED } from "../config.js";

function Sprite {
  
  constructor(width, height) {
    
    this.rect = {
      width: width,
      height: height,
      topLeft: {
        x: 0, 
        y: 0
      },
      topMiddle: {
        x: width/2,
        y: 0
      },
      topRight: {
        x: width,
        y: 0
      },
      left: {
        x: 0,
        y: height/2
      },
      center: {
        x: width/2,
        y: height/2
      },
      right: {
        x: width,
        y: height/2
      },
      bottomLeft: {
        x: 0,
        y: height
      },
      bottomMiddle: {
        x: width/2,
        y: height
      },
      bottomRight: {
        x: width,
        y: height
      }
    }  

  }

}

export default Sprite;