BOSSBULLETWIDTH = '30px';
BOSSBULLETHEIGHT = '30px';
BOSSBULLETARRAY = []
BOSSBULLETINTERVALS = []
class BossBullet {

  static createBossBulletDiv(){
    const BOSS = document.getElementById('boss')
    const bossBullet = document.createElement('div')
    bossBullet.style.width = BOSSBULLETWIDTH;
    bossBullet.style.height = BOSSBULLETHEIGHT;
    bossBullet.className = 'bossBullet'
    bossBullet.style.left = BOSS.style.left
    bossBullet.style.bottom = '470px'
    bossBullet.innerHTML = `<img src=${Level.currLevel.bossBulletImg} style="width: 100%; height: 100%">`
    document.getElementById('game').appendChild(bossBullet)

    BOSSBULLETARRAY.push(bossBullet)

    function moveBossBulletDown(){
      let bottomNumbers = bossBullet.style.bottom.replace('px','')
      let bottom = parseInt(bottomNumbers, 10)

      if (bottom < 0) {
        bossBullet.remove()
        clearInterval(bossBulletInterval)
      } else {
        bossBullet.style.bottom = `${bottom - 10}px`
      }
      BossBullet.checkCollision(bossBullet, bossBulletInterval);
    }
    let bossBulletInterval = setInterval(moveBossBulletDown, 100)
    BOSSBULLETINTERVALS.push(bossBulletInterval)
  }

  static checkCollision(bossBullet, bossBulletInterval){
    let bottomNumbers = bossBullet.style.bottom.replace('px','')
    let bottom = parseInt(bottomNumbers, 10)
    let PLAYER = document.getElementById('player')
    let bossBulletLeft = BossBullet.positionToInteger(bossBullet.style.left)
    let bossBulletRight = BossBullet.positionToInteger(bossBullet.style.left) + BossBullet.positionToInteger(BOSSBULLETWIDTH)

    var playerLeft = PLAYER.offsetLeft
    var playerRight = PLAYER.offsetLeft + PLAYERWIDTH
    //player left/right


    if (bossBulletLeft <= playerLeft && bossBulletRight > playerLeft && bottom <= PLAYERHEIGHT ||
      bossBulletLeft >= playerLeft && bossBulletRight <= playerRight && bottom <= PLAYERHEIGHT||
      bossBulletLeft <= playerRight && bossBulletRight >= playerRight && bottom <= PLAYERHEIGHT) {
        console.log('Damnnnnnn third box hit')
        clearInterval(bossBulletInterval)
        setTimeout(function () {
          bossBullet.remove()
          Player.takeHit();
        }, 10);
      }


  }

  static positionToInteger(p) {
    return parseInt(p.split('px')[0]) || 0
  }

}
