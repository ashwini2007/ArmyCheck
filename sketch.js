var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,25,10);
  bullet.shapeColor = "white";
  wall = createSprite(1000,200,40,height/2);

  speed = random(55,90);
  thickness = random(23,50);
  weight = random(400,1500);

  bullet.velocityX = speed;
}

function draw() {
  background(0);  

  if(hasColided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if ( damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    if( damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}