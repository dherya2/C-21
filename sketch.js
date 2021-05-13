
var fixedRect, movingRect;
var gameObject1, gameObject2;
var fixedRect1;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug=true

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug=true

  fixedRect1=createSprite(200,100,50,50);
  fixedRect1.ShapeColor="orange";

  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";   
  }
  
  else if(isTouching(movingRect, fixedRect1))
  { movingRect.shapeColor = "blue"; 
  fixedRect1.shapeColor = "blue";
 }
  else { movingRect.shapeColor = "green"; 
  fixedRect.shapeColor = "green";
   fixedRect1.shapeColor = "green" 
  }
 
  
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(movingRect,fixedRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


