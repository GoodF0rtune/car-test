var car, car2, car3, car4;
var w1, w2, w3, w4;
var wall;
var things;
function setup() {
  createCanvas(800,400);
  car1 = createSprite(50,50,20,20);
  car1.velocityX = random(0,20);
  car2 = createSprite(50,100,20,20);
  car2.velocityX = random(0,20);
  car3 = createSprite(50,150,20,20);
  car3.velocityX = random(0,20);
  car4 = createSprite(50,200,20,20);
  car4.velocityX = random(0,20);
  wall = createSprite(800,200,50,400);
  w1 = random(400,1500);
  w2 = random(400,1500);
  w3 = random(400,1500);
  w4 = random(400,1500);
  things = (crashTest(car1.velocityX, w1) + "\n" + crashTest(car2.velocityX, w2) + "\n" + crashTest(car3.velocityX, w3) + "\n"+ crashTest(car4.velocityX, w4));
  if(crashTest(car1.velocityX,w1) < 100){
    car1.shapeColor = rgb(0,255,0)
  }
  if(crashTest(car2.velocityX,w2) < 100){
    car2.shapeColor = rgb(0,255,0)
  }
  if(crashTest(car3.velocityX,w3) < 100){
    car3.shapeColor = rgb(0,255,0)
  }
  if(crashTest(car4.velocityX,w4) < 100){
    car4.shapeColor = rgb(0,255,0)
  }
  if(crashTest(car1.velocityX,w1) > 100 && crashTest(car1.velocityX,w1) < 180){
    car1.shapeColor = rgb(255,255,0)
  }
  if(crashTest(car2.velocityX,w2) > 100 && crashTest(car2.velocityX,w2) < 180){
    car2.shapeColor = rgb(255,255,0)
  }
  if(crashTest(car3.velocityX,w3) > 100 && crashTest(car3.velocityX,w3) < 180){
    car3.shapeColor = rgb(255,255,0)
  }
  if(crashTest(car4.velocityX,w4) > 100 && crashTest(car4.velocityX,w4) < 180){
    car4.shapeColor = rgb(255,255,0)
  }
  if(crashTest(car1.velocityX,w1) > 180){
    car1.shapeColor = rgb(255,0,0)
  }
  if(crashTest(car2.velocityX,w2) > 180){
    car2.shapeColor = rgb(255,0,0)
  }
  if(crashTest(car3.velocityX,w3) > 180){
    car3.shapeColor = rgb(255,0,0)
  }
  if(crashTest(car4.velocityX,w4) > 180){
    car4.shapeColor = rgb(255,0,0)
  }








}

function draw() {
  background(255,255,255);  
  drawSprites();
  text(things,300,300)
  car1.collide(wall);
  car2.collide(wall);
  car3.collide(wall);
  car4.collide(wall);

}
function crashTest(carSpeed,carWeight) {
  return 0.5 * carWeight * (carSpeed * carSpeed * 4)/1500;
}
