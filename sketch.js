var monkey
var invisibleGround;
var obstaclesGroup, Stone;
var background1
 


function preload(){
  monkey = loadImage("monkey_01,");
  
    background1 = loadImage*("Jungle.jpg")
  obstacleGroup = loadImage("stone.png");
}

function setup() {
  createCanvas(600, 200);
  
  monkey = createSprite(50,180,20,50);
  monkey.scale = 0.5;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group();
}
function draw() {
  background(255);
    
 if(keyDown("space") && monkey.y >= 150){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
     monkey.collide(invisibleGround);
  spawnObstacles();
  drawSprites()
  }

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
