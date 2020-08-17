var monkey = createSprite(200,380,20,50);
monkey.setAnimation("monkey");

var ground = createSprite(200,390,800,20);
ground.shapeColor = "green";

//scale and position the monkey
monkey.scale = 0.1;
monkey.x = 50;
monkey.y = 350;

//var bananaGroup;
//var ObstaclesGroup;

function draw() {
  background(255);
  
  ground.velocityX = -3;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
 if(keyDown("space") && monkey >= 359){
      monkey.velocityY = -12 ;
    }

//add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  Obstacles();
  drawSprites();
  Banana();
}
function Banana (){
  //code to spawn bananas
  if (World.frameCount % 200 === 0) {
    var banana = createSprite(400,260,40,10);
    banana.setAnimation("Banana");
    banana.scale = 0.05;
    banana.velocityX = -3;
    
    banana.lifetime = 134;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    //bananaGroup.add(banana);
  }
}

function Obstacles() {
  if(World.frameCount % 120 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -3;
    obstacle.setAnimation("Stone");
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 134;
    //add each obstacle to the group
    //ObstaclesGroup.add(obstacle);  
  }
}

function setup() {
  createCanvas(400, 400);
}

