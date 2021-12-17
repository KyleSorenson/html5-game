"use strict";

function InputHandler(Player) {

  document.addEventListener('keydown', event => {

    switch (event.code) {

      case 'ArrowRight':
        event.preventDefault();
        Player.moveRight();
        break;
      
      case 'ArrowLeft':
        event.preventDefault()
        Player.moveLeft();
        break;

      case 'Space':
        if (Player.jumpEnabled) {
          event.preventDefault()
          Player.jump();
          Player.jumpEnabled = false;
        }
        break;

    }

  });

  document.addEventListener('keyup', event => {

    switch (event.code) {

      case 'ArrowRight':
        if (Player.vel.x > 0) Player.stop();
        Player.stop();
        break;
        
        case 'ArrowLeft':
        if (Player.vel.x < 0) Player.stop();
        Player.stop();
        break;

    }

  })

}

export default InputHandler;