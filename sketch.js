var PLAY=1;
var END=0;
var gameState = 1;
var runningNaruto, jumpingNaruto, deadNaruto;
var badSasuke;
var bridge, invisibleGround;

var score = 0;

function preload(){
runningNaruto = loadAnimation ("naruto1.pnj.jpeg", "naruto2.png.jpeg","naruto3.png.jpeg");
jumpingNaruto = loadImage ("narutoBrincando.jpeg");
deadNaruto = loadImage ("deadNaruto.png.jpeg");
badSasuke = loadImage ("badsasuke.jpg");
bridgeImg = loadImage ("bridge.jpg");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

  
    Naruto = createSprite(50,height-100,20,50);
  
    Naruto.addAnimation("running", runningNaruto);
    
    Naruto.setCollider('circle',0,0,350)
    Naruto.scale = 10;
    Naruto.debug = false;

    invisibleGround = createSprite(width/2,height-10,width,125);  
    invisibleGround.shapeColor = "#f4cbaa";

    bridge = createSprite(width/2,height,width,2);
    bridge.addImage("bridge",bridgeImg);
    bridge.x = width/2
    bridge.velocityX = -(6 + 3*score/100);

    score = 0;
}

function draw() {
    background(bridgeImg);
    textSize(20);
    fill("black")
    text("Puntuación: "+ score,30,50);

    
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    bridgeImg.velocityX = -(6 + 3*score/100);

    Naruto.velocityY = Naruto.velocityY + 0.8

    if (bridgeImg.x < 0){
        bridgeImg.x = bridgeImg.width/2;
      }

      Naruto.collide(invisibleGround);

   spawnBadSasukes();
   if(badSasukes.isTouching(Naruto)){  

    gameState = END;
}




  }
 
  if (gameState === END) {
    naruto.changeAnimation("dead",deadNaruto);
    bridge.velocityX = 0;
    naruto.velocityY = 0;
}
}

function spawnBadSasukes(){
    if(frameCount % 60 === 0) {
        var badSasukes = createSprite(600,height-95,20,30);
        badSasukes.setCollider('circle',0,0,45)
        
      
        badSasukes.velocityX = -(6 + 3*score/100);
        
}
}

