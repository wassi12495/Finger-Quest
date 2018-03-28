class Adapter {

  static getItems(){

    fetch('http://localhost:3000/api/v1/items')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(function(item){
        new Item(item)
      })
    })
  }

  static getScores(){
    fetch('http://localhost:3000/api/v1/scores')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(function(score){
        new Score(score)
      })
    }).then(resp => Score.render())
  }

  static findCreate(jsonBody){
    fetch('http://localhost:3000/api/v1/users', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(jsonBody)
    }).then(resp => {Score.all.length = 0; Adapter.getScores()})
  }

}
