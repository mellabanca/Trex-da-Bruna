var trex, trexCorrendo;
var borda;
var solo,chao;
function preload(){
trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
chao = loadImage("ground2.png");
}
function setup(){
createCanvas(600,200)
trex = createSprite(50,160,20,50);
trex.addAnimation("correndo",trexCorrendo);
trex.scale = 0.5;
borda = createEdgeSprites();
solo = createSprite (200,180,400,20);
solo.addImage("chão",chao);
solo.x = solo.width/2;
}
function draw(){
background(190);
solo.velocityX = -2;
if (solo.x <0){
solo.x = solo.width/2;
}
if(keyDown("space")){
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 1;
trex.collide(solo);
drawSprites();
}
