var trex, trexCorrendo;
var borda;
var solo,chao;
var vridro;

function preload(){
 trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
 chao = loadImage("ground2.png");
}

function setup(){
 createCanvas(600,200);
 solo = createSprite (200,180,400,20);
 solo.addImage("chão",chao);
 solo.x = solo.width/2;
 trex = createSprite(50,160,20,50);
 trex.addAnimation("correndo",trexCorrendo);
 trex.scale = 0.5;
 borda = createEdgeSprites();
 vridro = createSprite (200,190,400,10);
 vridro.visible = false;
 //var aleatorio = Math.round(random(1,100));
 //console.log(aleatorio);
}

function draw(){
 background(190);
 solo.velocityX = -2;
 if (solo.x <0){
 solo.x = solo.width/2;
}

 if(keyDown("space")&&trex.y>=150){
 trex.velocityY = -10;
}
 trex.velocityY = trex.velocityY + 1;
 trex.collide(vridro);
 nuvens();
 drawSprites();
}

function nuvens(){

}