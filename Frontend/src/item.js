class Item {

  constructor(json){
    this.name = json.name
    this.healthEffect = json.healthEffect
    this.ammoEffect = json.ammoEffect
    this.img = json.img
    this.id = json.id
    this.description = json.description;
    Item.all.push(this)
  }

  static render(){
    var randomItem = Item.all[Math.floor(Math.random()*Item.all.length)]
    Player.backpack.push(randomItem);
    Item.takeEffect(randomItem);
    return `<img src='${randomItem.img}' style='width: 100%; height: 100%'>`
  }

  static takeEffect(item){
    const playerHealth = document.getElementById('player-health');
    const playerAmmo = document.getElementById('player-ammo');
    if (item.healthEffect){
      Player.health += item.healthEffect;
    } else if (item.ammoEffect) {
      Player.ammo += item.ammoEffect;
    }
    if (Player.health > 10) {
      Player.health = 3;
    }
    if (Player.ammo > 30) {
      Player.ammo = 15;
    }
    playerHealth.innerHTML = `${Player.health}`;
    playerAmmo.innerHTML = `${Player.ammo}`;
  }
}
Item.all = []
