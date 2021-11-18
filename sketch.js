
var trex, trexCorrendo, solo, soloImg, soloFalso,nuvemImg,o1,o2,o3,o4,o5,o6;
function preload() {
  trexCorrendo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  soloImg = loadImage("ground2.png");
  nuvemImg = loadImage("cloud.png");
  o1 = loadImage("obstacle1.png");
  o2 = loadImage("obstacle2.png");
  o3 = loadImage("obstacle3.png");
  o4 = loadImage("obstacle4.png");
  o5 = loadImage("obstacle5.png");
  o6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200)

  trex = createSprite(50, 150, 20, 50);
  trex.addAnimation("correndo", trexCorrendo); 
  trex.scale = 0.5;

  solo = createSprite(300, 180, 600, 20);
  solo.addImage(soloImg);

soloFalso = createSprite(200,190,600,10);
soloFalso.visible = false 
var x=Math.round(random(1,100));
console.log(x);
}

function draw() {
  background("white"); 
  solo.velocityX = -2;

  if (solo.x < 0) {
    solo.x = solo.width / 2;
  }

  if (keyDown("space")&& trex.y >=150) { 
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;


  trex.collide(soloFalso);
  gerarNuvens();
  gerarObstaculos();
  drawSprites();
}
function gerarNuvens(){
  if(frameCount%60===0){
    var nuvem = createSprite(600,100,40,40);
    nuvem.velocityX = -3;
    nuvem.addImage(nuvemImg);
    nuvem.scale = 0.4;
    nuvem.y = Math.round(random(10,100));
    nuvem.depth = trex.depth;
    trex.depth++;
    nuvem.lifetime = 200;
  }
}
function gerarObstaculos(){
  if(frameCount%60===0){
    var obstaculo = createSprite(600,165,10,40);
    obstaculo.velocityX = -6;
    var x = Math.round(random(1,6));
    switch (x) {
      case 1:
        obstaculo.addImage(o1);
        break;
      case 2:
          obstaculo.addImage(o2);
        break;
      case 3:
          obstaculo.addImage(o3);
        break;
      case 4:
          obstaculo.addImage(o4);
        break;
      case 5:
          obstaculo.addImage(o5);
        break;
      case 6:
          obstaculo.addImage(o6);
        break;
      default:
        break;
    }
obstaculo.scale = 0.5 ; 
obstaculo.lifetime = 100;
  }  
}