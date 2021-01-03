//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload() {
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog.addImage(dog);
  database = firebase.database();
  foodStock = database.ref('Food')
  foodStock.on("value", readStock)
}


function draw() {
  background(46, 139, 87)
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here
  textSize(10);
  stroke("black");
  fill("white");
  text("Note:Use UP_ARROW To Feed Drago");
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

  database.ref('/').update({
    Food: x
  })
}


