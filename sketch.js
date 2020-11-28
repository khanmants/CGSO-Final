var bullet,wall;
var speed,weight;
var wall, thickness
var bullet, speed, weight

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  bullet=createSprite(50,200,50,50)
  wall=createSprite(1500, 200, 60, height/2);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);
  wall.shapeColor=color(80,80,80)
  thickness=random(22,83)
}

function draw() {
  background(0);  
  drawSprites();
  if (hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
     if(damage>10){
       wall.shapeColor=color(255,0,0);
     }
     if(damage<10){
       wall.shapeColor=color(0,255,0);
     }
  }
}
function hascollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +bullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
