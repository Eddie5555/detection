var movingRect;
var fixedRect;



function setup() {
  createCanvas(1200,800);
 // createSprite(400, 200, 50, 50);
 movingRect=createSprite(200,200,50,100);
 fixedRect=createSprite(300,300,50,100);
 movingRect.shapeColor="red";
 fixedRect.shapeColor="red";
 movingRect.debug=true;
 fixedRect.debug=true;
}

function draw() {
  background(0);
movingRect.x=mouseX;
movingRect.y=mouseY;
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  &&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
  &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
movingRect.shapeColor="green";
fixedRect.shapeColor="green";




}
else{
movingRect.shapeColor="red";
fixedRect.shapeColor="red";

}



  rectMode(CENTER);
  rect (200,200,50,50);  
  drawSprites();
}