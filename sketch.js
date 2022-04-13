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
var pulin;
var die;
var sossego;

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
 pulin = loadSound ("jump.mp3");
 die = loadSound ("die.mp3");
 sossego = loadSound ("checkPoint.mp3");
}

function setup(){
 createCanvas(windowWidth,windowHeight);
 solo = createSprite (width/2,height-80,width,125);
 solo.addImage("chão",chao);
 solo.x = solo.width/2;
 trex = createSprite(50,height-70,20,50);
 trex.addAnimation("correndo",trexCorrendo);
 trex.addAnimation("morreu",sustin);
 trex.scale = 0.5;
 borda = createEdgeSprites();
 vridro = createSprite (width/2,height-10,width,125);
 vridro.visible = false;
 //var aleatorio = Math.round(random(1,100));
 //console.log(aleatorio);
 contador = 0;
 algodoes = new Group();
 espinhos = new Group();
 trex.debug = false;
 trex.setCollider("circle",0,0,35);
 perdeuplayboy = createSprite (width/2,height/2-50);
 perdeuplayboy.addImage (fimdejogo);
 reset = createSprite(width/2,height/2);
 reset.addImage (fotinhadoreset);
reset.scale = 0.5;

}

function draw(){
    background(190);
    
    if(contador > 100){
        background(170);
    }
    if(contador > 200){
       background(150);
    }
   if(contador > 300){
    background(130);
    }
   if(estado === START){
   solo.velocityX = -(4+contador/100);
   if (solo.x <0){
    solo.x = solo.width/2;
   }
   if(keyDown("space")&&trex.y>=height-130 || touches.length > 0 &&trex.y>=height-130){
    trex.velocityY = -12;
    touches = [];
    pulin.play();
   }
   trex.velocityY = trex.velocityY + 1;
   nuvens();
   mamacos();
   contador += Math.round(frameRate()/60);
   if(contador >0&&contador%100 === 0)
   {
    sossego.play();
   }
   if (espinhos.isTouching(trex)) 
   {
       estado = GAMEOVER;
     die.play();
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

   if(mousePressedOver(reset) || touches.length > 0){
      restart();
      touches = [];
   }
}

 trex.collide(vridro);
 
 drawSprites();
 fill("black")
 text(contador, width-100, height/2-100);
 
}

function restart(){
estado = START;
algodoes.destroyEach();
espinhos.destroyEach();
trex.changeAnimation("correndo")
contador = 0
}

function nuvens(){
if (frameCount%60===0){
claudinei = createSprite (width+20, height-300, 40, 10);
claudinei.addImage (argodao);
claudinei.scale = random(0.5,1);
claudinei.y = Math.round(random(10,height/2));
claudinei.velocityX = -3;
claudinei.lifetime = 250;
claudinei.depth = trex.depth;
trex.depth +=1;
algodoes.add(claudinei);
}


}
function mamacos (){
if (frameCount%60===0){
var carmen = createSprite(width, height-95, 10, 40);
carmen.velocityX = -(6+contador/100);
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