u = User.create(name: "Bob")
Item.create(name:"Beer", img:"https://dydza6t6xitx6.cloudfront.net/ci_2822.jpg", healthEffect:3, description: "Health Increase 3 Points!")
Item.create(name:"Hot Dog", img:"http://www.hot-dog.org/sites/default/files/pictures/hotdogstories/is%20hot%20dog.jpg", healthEffect:1, description: "Health Increase 1 Point!")
Item.create(name:"The Finger", img:"https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_large.png?v=1513336434", healthEffect:-1, description: "Health Decrease 1 Point!")
Item.create(name:"Reload", img:"https://images.template.net/wp-content/uploads/2016/04/23054631/Thumbs-Up-Emoji-Sign-on-Apple.jpg", ammoEffect: 5, description: "+5 Ammo")
