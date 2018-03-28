class Game {

  static welcome(){
    //welcome page
    let game = document.getElementById("game")
    let screen = document.createElement("div")
    screen.innerHTML= Game.welcomeRender()
    screen.id = "welcome-screen"
    game.style.display = "none"
    document.getElementById("player-stats").style.display = "none"
    document.getElementById("boss-hp").style.display = "none"
    document.body.append(screen)


    // event listeners for start game
  }

  static welcomeRender(){
    return `
      <h1> Finger Quest </h1>
      <h3> Instructions: </h3>
      <h5> Shoot a chest to get a power up (or down)</h5>
      <h5> Shoot the boss, don't get hit.</h5>
      <h5> Arrow keys to move (left and right), SPACE to shoot.</h5>
      <h5> Don't run out of ammo! </h5>
      <button id="start-game">Start</button>
    `
  }


  static renderGame(){
    let game = document.getElementById("game")
    game.innerHTML = ""
    game.innerHTML = `
    <div id="box-container"></div>
    <div id="player" style="bottom: 0px; left: 350px;">
      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/17109-200.png" style="width: 100%; height: 100%">
    </div>`

  }

  static transitionScreen(){
    let game = document.getElementById("game")
    Player.score += 10
    Boss.health = 3
    game.innerHTML = ""
    game.innerHTML = Game.renderTransitionScreen()
    BULLETINTERVALS.forEach(function(interval){
      clearInterval(interval)
    })
    BULLETSARRAY.length = 0

    EventListener.transitionListeners()
  }

  static renderTransitionScreen(){
    return `
    <h1 style="color: white;"> You Beat ${Level.currLevel.name} </h1>
    <h3 style="color: white;"> Continue? </h3>

    <button id="next-level">Continue</button>
    <img src="${Level.currLevel.bossLoseGif}" style="width: 100%; height: 50%">

    `
  }

  static checkInput(){
    EventListener.doKeys()

  }
  static runInputCheck(){
    let inputInterval = setInterval(Game.checkInput, 50)
  }

  static lossRender(){
   return `<img src="${Level.currLevel.playerLoseGif}" style="width: 100%; height: 50%"><div id="scorediv"><input type="text" id="username" placeholder="Enter Name"></input> <label style="background-color: white">Your Score: ${Player.score}</label>  <button id="submit">Submit</button></div>`
  }
  static winRender(){
   return `<img src="${Level.currLevel.bossLoseGif}" style="width: 100%; height: 50%"><div id="scorediv"><input type="text" id="username" placeholder="Enter Name"></input>  <label style="background-color: white">Your Score: ${Player.score}</label>  <button id="submit">Submit</button></div>`
  }

  static endGame(){
    document.removeEventListener("keydown", function(e){
      // e.preventDefault()
      const keyName = e.key;
      if (keyName === " ") {
          console.log("Space")
          // Player.movePlayerLeft()
      }
    })
    BOSSBULLETINTERVALS.forEach(function(interval){
      clearInterval(interval)
    })

    BOSSINTERVALS.forEach(function(interval){
      clearInterval(interval)
    })
    BOSSINTERVALS.length = 0
    Player.score += (Player.health + Player.ammo) - (Boss.health);
    if (Player.status === "loss") {
      document.getElementById('game').innerHTML = Game.lossRender();
    } else {
      Player.score += 10;
      document.getElementById('game').innerHTML = Game.winRender();
    }
    const button = document.getElementById('submit');
    button.addEventListener("click", e => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const jsonBody = {name: username, score: Player.score }
      Adapter.findCreate(jsonBody);
      document.getElementById("scorediv").innerHTML ='<h3 style="color:white;" id="endgame"> Try Again?</h3><br><button id="newgame"> New Game</button>'
      document.getElementById("newgame").addEventListener("click", function(){
        Player.status = ""
        Player.ammo = 15
        Level.currLevel = Level.levelOne()
        Boss.health = 3
        Game.welcome()
        EventListener.welcomeListeners()
      })

    })
  }


}
