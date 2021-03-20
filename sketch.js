var fixedRectangle,movingRectangle;
var gameObject1 ;
var gameObject2  ;
var gameObject3 ;
var gameObject4 ;


function setup() {
  createCanvas(800,400);
 fixedRectangle = createSprite(200,200,50,80);
 movingRectangle = createSprite(400,200,80,30);
 fixedRectangle.shapeColor = "green";
 movingRectangle.shapeColor= "green";

  gameObject1 = createSprite(100,100,50,50);
 gameObject2 = createSprite(200,100,50,50);
 gameObject3 = createSprite(300,100,50,50);
 gameObject4 = createSprite(400,100,50,50);
gameObject1.shapeColor = "green";
gameObject2.shapeColor = "green";
gameObject3.shapeColor = "green";
gameObject4.shapeColor = "green";

}

function draw() {
  background(000,000,000);
  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;
   if(isTouching(fixedRectangle,movingRectangle)){
    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor= "red";
   }

   else {
    fixedRectangle.shapeColor = "green";
    movingRectangle.shapeColor= "green"; 
   }
   //checking if gameObject1 is touching  movingRectangle
   if(isTouching(gameObject1,movingRectangle)){
    gameObject1.shapeColor = "red";
    movingRectangle.shapeColor= "red";
   }

   else {
    gameObject1.shapeColor = "green";
    movingRectangle.shapeColor= "green"; 
   }
  drawSprites();
}

