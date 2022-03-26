let ground;
let lander;
var lander_img;
var bg_img;
var tm_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("minataur.png");
  bg_img = loadImage("labrynth.jpg");
  tm_img = loadImage("new boy.png")
}

function setup() {
  createCanvas(screen.height, screen.height);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);


  rectMode(CENTER);
  textSize(15);
}


function draw() 
{
  background(51);
  image(bg_img,0,0, screen.height, screen.height);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();


  //fall down
  vy +=g;
  if(lander.position.x<1000&&lander.position.y<750){
    lander.position.y+= Math.random()*50;
    lander.position.x+= Math.random()*50;
  }else{
    lander.position.y=100;
  lander.position.x=100;
  }
  

  
  drawSprites();
}


