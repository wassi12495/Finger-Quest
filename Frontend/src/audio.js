class Audio {

  constructor(url, ){}

  static playerHitSounds(level){

    switch (level) {
      case 1:
        Audio.playSound(url)
        break;
      

    }
  }

  static playSound(url){
    document.getElementById('game').appendChild(div);
    const audioDiv = document.createElement('div');
    audioDiv.innerHTML = `<audio id="hotline" src="/Users/joshwasserman/Development/FingerQuest-project/Finger-Quest-Frontend/src/fingerquestmusic.mp3" autoplay></audio>`;
    document.getElementById('game').appendChild(audioDiv);


  }


}
