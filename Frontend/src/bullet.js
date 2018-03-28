BULLETWIDTH = '30px';
BULLETHEIGHT = '30px';
BULLETSARRAY = [];
BULLETINTERVALS = [];
class Bullet {

  static clearBullets(){
    BULLETSARRAY.forEach(bullet => bullet.remove());
    BULLETSARRAY.length = 0;
    BULLETINTERVALS.forEach(interval => clearInterval(interval));
    BULLETINTERVALS.length = 0;
  }

  static createBulletDiv(){
    const PLAYER = document.getElementById('player')
    const bullet = document.createElement('div')
    bullet.style.width = BULLETWIDTH;
    bullet.style.height = BULLETHEIGHT;
    bullet.className = 'bullet'
    bullet.style.left = PLAYER.style.left
    bullet.style.bottom = '30px'
    bullet.innerHTML = '<img src="https://cdn.shopify.com/s/files/1/1061/1924/files/Middle_Finger_Emoji.png?9898922749706957214" style="width: 100%; height: 100%">'
    BULLETSARRAY.push(bullet);
    document.getElementById('game').appendChild(bullet)

    function moveBulletUp(){
      let bottomNumbers = bullet.style.bottom.replace('px','')
      let bottom = parseInt(bottomNumbers, 10)

      if (bottom > 650) {
        bullet.remove()
        clearInterval(bulletInterval)
      } else {
        bullet.style.bottom = `${bottom + 10}px`
      }
      Bullet.checkCollision(bullet, bulletInterval);
    }
    let bulletInterval = setInterval(moveBulletUp, 100);
    BULLETINTERVALS.push(bulletInterval);
  }

  static checkCollision(bullet, bulletInterval){
    let bottomNumbers = bullet.style.bottom.replace('px','')
    let bottom = parseInt(bottomNumbers, 10)
    let PLAYER = document.getElementById('player')
    let BOX1 = document.getElementById('box1')
    let BOX2 = document.getElementById('box2')
    let BOX3 = document.getElementById('box3')
    let BOSS = document.getElementById('boss')
    let bulletLeft = Bullet.positionToInteger(bullet.style.left)
    let bulletRight = Bullet.positionToInteger(bullet.style.left) + Bullet.positionToInteger(BULLETWIDTH)

    if (BOX1) {
      var box1Left = BOX1.offsetLeft
      var box1Right = BOX1.offsetLeft + 100
    }
    if (BOX2) {
      var box2Left = BOX2.offsetLeft
      var box2Right = BOX2.offsetLeft + 100
    }
    if (BOX3) {
      var box3Left = BOX3.offsetLeft
      var box3Right = BOX3.offsetLeft + 100
    }
    if (BOSS){
      var bossLeft = BOSS.offsetLeft
      var bossRight = BOSS.offsetLeft + BOSSWIDTH
    }

    let boxBottom = 325

    if (bulletLeft <= box1Left && bulletRight > box1Left && bottom >= 305||
      bulletLeft >= box1Left && bulletRight <= box1Right && bottom >= 305||
      bulletLeft <= box1Right && bulletRight >= box1Right && bottom >= 305){
        clearInterval(bulletInterval)
        setTimeout(function () {
          bullet.remove()
          box1.innerHTML = Item.render();
          box2.remove()
          box3.remove()
          Bullet.clearBullets();
          setTimeout(function () {
            alert(`${Player.backpack[Player.backpack.length - 1].name}! ${Player.backpack[Player.backpack.length - 1].description}`)
            if (Player.ammo === 0){
              Player.status = "loss"
              Game.endGame()
            }else{
              box1.remove();
              Boss.createBoss();
            }
          }, 1000);
        }, 10);

    } else if (bulletLeft <= box2Left && bulletRight > box2Left && bottom >= 305||
      bulletLeft >= box2Left && bulletRight <= box2Right && bottom >= 305||
      bulletLeft <= box2Right && bulletRight >= box2Right && bottom >= 305) {
        clearInterval(bulletInterval)
        setTimeout(function () {
          bullet.remove()
          box2.innerHTML = Item.render();
          box1.remove()
          box3.remove()
          Bullet.clearBullets();
          setTimeout(function () {
            alert(`${Player.backpack[Player.backpack.length - 1].name}! ${Player.backpack[Player.backpack.length - 1].description}`)
            box2.remove();
            Boss.createBoss();
          }, 1000);
        }, 10);
    }else if (bulletLeft <= box3Left && bulletRight > box3Left && bottom >= 305||
      bulletLeft >= box3Left && bulletRight <= box3Right && bottom >= 305||
      bulletLeft <= box3Right && bulletRight >= box3Right && bottom >= 305) {
        clearInterval(bulletInterval)
        setTimeout(function () {
          bullet.remove()
          box3.innerHTML = Item.render();
          box1.remove();
          box2.remove();
          Bullet.clearBullets();
          setTimeout(function () {
            alert(`${Player.backpack[Player.backpack.length - 1].name}! ${Player.backpack[Player.backpack.length - 1].description}`)
            box3.remove();
            Boss.createBoss();
          }, 1000);
          }, 10);
    }else if (bulletLeft <= bossLeft && bulletRight > bossLeft && bottom >= BOSSBOTTOM||
      bulletLeft >= bossLeft && bulletRight <= bossRight && bottom >= BOSSBOTTOM||
      bulletLeft <= bossRight && bulletRight >= bossRight && bottom >= BOSSBOTTOM) {
        clearInterval(bulletInterval)
        setTimeout(function () {
          bullet.remove();
          Boss.takeHit();
        }, 10);
      }


  }

  static positionToInteger(p) {
    return parseInt(p.split('px')[0]) || 0
  }

}
