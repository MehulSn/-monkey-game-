var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0,survivalTime = 0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bananaGroup = new Group();
}

function setup() {
  createCanvas(600,600);
  monkey = createSprite(100,395,30,30);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.2;
  ground = createSprite(300,450,1200,20);
  ground .velocityX=-2;
  
}

function draw() {
  background("green");
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")) {
    monkey.y=monkey.y-10;
  }
  monkey.y=monkey.y+5;
  monkey.collide(ground);

  food();
  obstacles();
  survival();
  drawSprites();
}

function food() {
  if(frameCount%80===0) {
    banana = createSprite(550,150,20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-2;
    banana.scale=0.1;    
    banana.y=Math.round(random(120,200));
    banana.lifetime=500;
    bananaGroup.add(banana);
  } 
}

function obstacles() {
  if(frameCount%300===0) {
  obstacle = createSprite(500,385,30,30);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.3;
  obstacle.velocityX=-2;
  obstacle.lifetime=500;
  } 
}
function  survival () {
  score = score + Math.round(getFrameRate()/60);
  survivalTime= Math.ceil(frameCount/frameRate());
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+ score,450,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time :" + survivalTime ,100,50);
}




