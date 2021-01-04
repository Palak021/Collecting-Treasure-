var knife,knifeImage;
var gameOverImage;

var PLAY=1;

var END=0;

var gameState=1;

var score,fruitGroup,enemyGroup;

var monster,fruit,fruit2;//,monsterImage1,monsterImage2,
//fruitImage;

function preload(){
  knifeImage=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  gameOverImage=loadImage("gameover.png");
  monsterImage=loadImage("alien1.png");
  
}

function setup(){
  
  knife=createSprite(300,150,0,0);
  knife.addImage("cut",knifeImage);
  knife.scale=0.7;
  score=0;
     
  enemyGroup=new Group();
  fruitGroup=new Group();
   
}


function draw(){
  
    background(600,800)
    background("pink");
  if(gameState===PLAY){
   knife.y=World.mouseY;
   knife.x=World.mouseX;
    
    if(knife.isTouching(fruitGroup)){
      fruitGroup.destroyEach();
     score=score+2
   } 
    
fruit();
enemy();
    
    if(knife.isTouching(enemyGroup)){
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
      enemyGroup.setVelocityXEach(0);
      gameState=END
    }
     
  } else if(gameState===END){
    knife.addImage("cut",gameOverImage);
    knife.x=200;
    knife.y=200;
    
   
  }
  
  
  drawSprites();
   text("score="+score,300,30)
}
function fruit(){
  if(World.frameCount%80===0){
var fruit=createSprite(400,200,20,20)
    fruit.addImage(fruit1);
     fruit.scale=0.2;
    
    r=Math.round(random(1,4));
  if(r==1){
    fruit.addImage=fruit1;
  } else if(r==2){
    fruit.addImage=fruit2;
  } else if(r==3){
    fruit.addImage=fruit3;
  } else {
    fruit.addImage=fruit4;
  }
fruit.y=Math.round(random(50,340));
fruit.velocityX=-7;
fruit.setLifetime=100;

fruitGroup.add(fruit);
  }}

function enemy(){
  if(World.frameCount%200===0){
  monster=createSprite(400,200,20,20);
  monster.addImage(monsterImage);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-8;
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
  }
}