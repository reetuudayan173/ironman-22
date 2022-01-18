var bg, backgroundImg;
var player,playerImage;
var stoneimage,stonegroup;
var dimondimage;
var dimondgroup;





function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 playerImage=loadImage("images/iron.png")
  dimondimage=loadImage("images/diamond.png")
  stoneimage=loadImage("images/stone.png")
}

function setup(){
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  bg.velocityY=4
  bg.scale=2.5
   player=createSprite(200,500)
   player.addAnimation("runing",playerImage)
   player.scale=0.3
   stonegroup=new Group()
    dimondimage=new Group()
   dimondgroup=new Group()
}
   //function definiation 
function generatestone(){
    
  if(frameCount%100==0){
      stone=createSprite(1100,100)
      stone.y=random(100,500)
      stone.velocityX=-5 
      stone.addImage(stoneimage) 
      stone.scale=0.6 
      stonegroup.add(stone)
  }
  
}   
   
  
function draw() {
  if (keyDown("up")) {

    
  player.velocityY=-10;
  }
  if(keyDown("left")){
    player.x=player.x -5;
  }
   
  
  if(keyDown("right")){
    player.x=player.x+5;
  }
  if(bg.y>600){bg.y=300

  }
  player.velocityY=player.velocityY+1
    
   //function to creat dimond
   generatestone()
   // make the mario catch the coins
  
   
  }

  