"use strict";

function InputHandler(Player) {

  document.addEventListener('keydown', event => {

    switch (event.code) {

      case 'ArrowRight':
        Player.moveRight();
        break;
      
      case 'ArrowLeft':
        Player.moveLeft();
        break;

    }

  });

  document.addEventListener('keyup', event => {

    switch (event.code) {

      case 'ArrowRight':
        // if (Player.vel.x > 0) Player.stop();
        Player.stop();
        break;
        
        case 'ArrowLeft':
        // if (Player.vel.x < 0) Player.stop();
        Player.stop();
        break;

    }

  })

}

export default InputHandler;