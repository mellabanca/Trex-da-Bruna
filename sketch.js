var trex, trexCorrendo;
var borda;
var solo,chao;
var vridro;
var claudinei;
var argodao;
var juliette1, juliette2, juliette3, juliette4, juliette5, juliette6;
var contador;
var algodoes;
var espinhos;
var START = 1;
var GAMEOVER = 0;
var estado = START;
var sustin;
var perdeuplayboy;
var fimdejogo;
var reset;
var fotinhadoreset;

function preload(){
 trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
 chao = loadImage("ground2.png");
 argodao = loadImage ("cloud.png");
 juliette1 = loadImage ("obstacle1.png");
 juliette2 = loadImage ("obstacle2.png");
 juliette3 = loadImage ("obstacle3.png");
 juliette4 = loadImage ("obstacle4.png");
 juliette5 = loadImage ("obstacle5.png");
 juliette6 = loadImage ("obstacle6.png");
 sustin = loadAnimation ("trex_collided.png");
 fimdejogo = loadImage ("gameOver.png");
 fotinhadoreset = loadImage ("restart.png");
}

function setup(){
 createCanvas(600,200);
 solo = createSprite (200,180,400,20);
 solo.addImage("chão",chao);
 solo.x = solo.width/2;
 trex = createSprite(50,160,20,50);
 trex.addAnimation("correndo",trexCorrendo);
 trex.addAnimation("morreu",sustin);
 trex.scale = 0.5;
 borda = createEdgeSprites();
 vridro = createSprite (200,190,400,10);
 vridro.visible = false;
 //var aleatorio = Math.round(random(1,100));
 //console.log(aleatorio);
 contador = 0;
 algodoes = new Group();
 espinhos = new Group();
 trex.debug = false;
 trex.setCollider("circle",0,0,35);
 perdeuplayboy = createSprite (300,100);
 perdeuplayboy.addImage (fimdejogo);
 reset = createSprite(300,140);
 reset.addImage (fotinhadoreset);
reset.scale = 0.5;

}

function draw(){
    background(190);
if(estado === START){
    if(contador > 100){
        background(150);
    }
    if(contador > 200){
       background(130);
   }

   solo.velocityX = -2;
   if (solo.x <0){
    solo.x = solo.width/2;
   }
   if(keyDown("space")&&trex.y>=150){
    trex.velocityY = -10;
   }
   trex.velocityY = trex.velocityY + 1;
   nuvens();
   mamacos();
   contador += Math.round(frameCount/60);
   if (espinhos.isTouching(trex)) 
   {
       estado = GAMEOVER;
   }
   perdeuplayboy.visible = false;
   reset.visible = false;
} else if(estado === GAMEOVER){
   solo.velocityX = 0;
   algodoes.setVelocityXEach(0);
   espinhos.setVelocityXEach(0);
   trex.changeAnimation("morreu");
   algodoes.setLifetimeEach(-3);
   espinhos.setLifetimeEach(-5);
   trex.velocityY = 0;
   perdeuplayboy.visible = true;
   reset.visible = true;
}



 

 trex.collide(vridro);
 
 drawSprites();
 text(contador, 550, 50);
 
}

function nuvens(){
if (frameCount%60===0){
claudinei = createSprite (600, 100, 40, 10);
claudinei.addImage (argodao);
claudinei.scale = random(0.5,1);
claudinei.y = Math.round(random(1,100));
claudinei.velocityX = -3;
claudinei.lifetime = 250;
claudinei.depth = trex.depth;
trex.depth +=1;
algodoes.add(claudinei);
}


}
function mamacos (){
if (frameCount%60===0){
var carmen = createSprite(600, 165, 10, 40);
carmen.velocityX = -6;
var paodequeijo = Math.round(random(1,6));
switch (paodequeijo) {
    case 1: carmen.addImage(juliette1);
        
        break;
        case 2: carmen.addImage(juliette2);
        
        break;
        case 3: carmen.addImage(juliette3);
        
        break;
        case 4: carmen.addImage(juliette4);
        
        break;
        case 5: carmen.addImage(juliette5);
        
        break;
        case 6: carmen.addImage(juliette6);
        
        break;
    default:
        break;
}
carmen.scale = 0.5;
carmen.lifetime = 300;
espinhos.add(carmen);
}


}