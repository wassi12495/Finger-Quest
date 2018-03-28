class Score {
  constructor(obj) {
    this.score = obj.score
    this.player = obj.user
    Score.all.push(this);
  }

  static sortAll(){
    Score.all.sort(function(a,b){
      return b.score - a.score;
    })
  }

  static render(){
    Score.sortAll();
    document.getElementById('leaderboard-ul').innerHTML = "";
    Score.all.forEach(score => {
      console.log(score);
      document.getElementById('leaderboard-ul').innerHTML += `<li>${score.player.name}: ${score.score}</li>`
    })
  }
}

Score.all = [];
