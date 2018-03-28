PLAYERHEIGHT = 20
PLAYERWIDTH = 40
ALLOWSHOOT = true
SHOOTSPEED = 800

class Player{

  static movePlayer(func){
    window.requestAnimationFrame(func)
  }

  static movePlayerLeft() {
    const PLAYER = document.getElementById('player')
    var leftNumbers = PLAYER.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    if(PLAYER.offsetLeft > 10){
      PLAYER.style.left = `${left - 4}px`
    }


  }

  static movePlayerRight() {
    const PLAYER = document.getElementById('player')

    var leftNumbers = PLAYER.style.left.replace('px','')
    var left = parseInt(leftNumbers, 10)
    if(PLAYER.offsetLeft + PLAYERWIDTH < 690){
      PLAYER.style.left = `${left + 4}px`
    }

  }
  static shoot(){

    if (Player.ammo > 0 && ALLOWSHOOT) {

      ALLOWSHOOT = false
      setTimeout(function () {
        ALLOWSHOOT = true
      }, SHOOTSPEED);
      Bullet.createBulletDiv();
      Player.ammo--
      document.getElementById('player-ammo').innerHTML = `${Player.ammo}`;
    } else if (Player.ammo === 0 && Boss.health > 1){
      Player.status = "loss";
      Game.endGame()
    } 


  }

  static takeHit(){
    document.getElementById("playerHit-audio").play()
    const playerHealth = document.getElementById('player-health')
    document.body.append("")
    Player.health -= 1;
    playerHealth.innerHTML = `${Player.health}`
    if (Player.health === 0) {
      alert("Damnnn You Suck");
      Player.status = "loss";
      Game.endGame();
    }


    //
    // <source src="https://sound.peal.io/ps/audios/000/000/355/original/drake_4.mp3?1469744448" type="audio/mpeg">
  }
}

Player.backpack = [];
Player.health = 3;
Player.ammo = 15;
Player.status = ""
Player.score = 0
