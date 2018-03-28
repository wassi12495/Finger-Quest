class Level {



 //bossSpd, bossShootSpd, playerBulletSpd, bossImg, bossBulletImg, backgroundSong
  static levelOne(){
    return {name: "Level 1", bossSpd: 70, bossShootSpd: 1500, bossImg:"http://www.instantrapairhorn.com/wp-content/uploads/2014/03/btn9.png" , bossBulletImg: "https://orig00.deviantart.net/5f0d/f/2012/201/9/d/verified_belieber__texto_en__png__by_artisticbeliebergirl-d580otw.png", backgroundSong:"/Users/joshwasserman/Development/FingerQuest-project/Finger-Quest-Frontend/src/justinbieber-baby8-bitversion_cutted.mp3",
    bossLoseGif: "http://images.m-magazine.com/uploads/images/file/34093/justin-bieber-what-is-happening.gif?fit=crop&h=222&w=500",
    playerLoseGif: "https://images.rapgenius.com/122a17aec7e8150c5da96db9198c1516.500x210x10.gif",
    bossHitSound:"https://www.realmofdarkness.net/audio/music/bieber/no.mp3",
    playerHitSound:"https://www.realmofdarkness.net/audio/music/bieber/beast-2.mp3",
    nextLevel: Level.levelTwo()}
  }

  static levelTwo(){
    return {name: "Level 2", bossSpd: 60, bossShootSpd: 1500, bossImg:"https://vignette.wikia.nocookie.net/teswki/images/9/90/Kanye.png/revision/latest?cb=20160219133241" , bossBulletImg: "/Users/joshwasserman/Development/FingerQuest-project/Finger-Quest-Frontend/src/slack-imgs.png", backgroundSong:"/Users/joshwasserman/Development/FingerQuest-project/Finger-Quest-Frontend/src/Kanye_West_-_Heartless_8_Bit_Video_Game_Version[Mp3Converter.net].mp3",  bossLoseGif: "https://i.giphy.com/media/11VjqnGG26syUE/giphy.webp",
    playerLoseGif: "https://m.popkey.co/7394dd/NlN5L.gif",
    bossHitSound:"/Users/joshwasserman/Development/FingerQuest-project/Finger-Quest-Frontend/src/No.mp3",
    playerHitSound:"/Users/joshwasserman/Development/FingerQuest-project/Finger-Quest-Frontend/src/Kanye.mp3",
    nextLevel: Level.levelThree()}
  }

  static levelThree(){
    return {name: "Level 3", bossSpd: 60, bossShootSpd: 1000, bossImg:"http://www.pngmart.com/files/2/Drake-Face-PNG-Clipart.png" , bossBulletImg: "https://talksense.weebly.com/uploads/3/0/7/0/3070350/5385929_orig.png", backgroundSong:"/Users/joshwasserman/Development/FingerQuest-project/Finger-Quest-Frontend/src/fingerquestmusic.mp3",
    bossLoseGif: "https://media1.tenor.com/images/75bb8d2eb27202ace79fabbd80e18ab8/tenor.gif",
    playerLoseGif: "http://pixel.nymag.com/imgs/daily/vulture/2015/10/20/drake-dance/drake-11.w529.h352.gif",
    bossHitSound:"https://sound.peal.io/ps/audios/000/000/211/original/not-again.wav?1469744436",
    playerHitSound:"https://sound.peal.io/ps/audios/000/000/355/original/drake_4.mp3?1469744448"}
  }

  static changeLevel(){
    BOSSBULLETINTERVALS.forEach(function(interval){
      clearInterval(interval)
    })

    BOSSINTERVALS.forEach(function(interval){
      clearInterval(interval)
    })
    BOSSINTERVALS.length = 0
    if (Level.currLevel.name === "Level 3"){
      Game.endGame()
    }
    else{
      Level.currLevel = Level.currLevel.nextLevel
    }
  }
}
Level.currLevel = Level.levelOne()
