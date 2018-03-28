class Box {

  static setUpBoxes(){

    //fetch items
    //select three random items
    //associate the items with the boxes

    const box1 = document.createElement('div')
    box1.id = 'box1'
    box1.innerHTML = '<img src= "https://i.pinimg.com/originals/43/3d/11/433d11455ad682b75e5a2648e51b4d0a.png" style="height: 100%; width: 100%">'
    document.getElementById('box-container').appendChild(box1)
    const box2 = document.createElement('div')
    box2.id = 'box2'
    box2.innerHTML = '<img src= "https://i.pinimg.com/originals/43/3d/11/433d11455ad682b75e5a2648e51b4d0a.png" style="height: 100%; width: 100%">'
    document.getElementById('box-container').appendChild(box2)
    const box3 = document.createElement('div')
    box3.id = 'box3'
    box3.innerHTML = '<img src= "https://i.pinimg.com/originals/43/3d/11/433d11455ad682b75e5a2648e51b4d0a.png" style="height: 100%; width: 100%">'
    document.getElementById('box-container').appendChild(box3)

    //check for collision -- in the bullet object?



  }



}
