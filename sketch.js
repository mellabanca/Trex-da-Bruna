var trex, trexCorrendo;
var borda;

function preload(){
  trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  trex = createSprite(50,160,20,50);
  trex.addAnimation("correndo",trexCorrendo);
  trex.scale = 0.5;
  borda = createEdgeSprites();
}

function draw(){
  background(190);

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 1;

  trex.collide(borda[3]);
  
  drawSprites();
}
