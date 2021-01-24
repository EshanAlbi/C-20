var rectangle1, rectangle2;




function setup() {
  createCanvas(800,400);
  rectangle1 = createSprite(400, 200, 50, 55);
  rectangle2 = createSprite(300,200,35,40);
  rectangle1.shapeColor = "red";
  rectangle2.shapeColor = "blue";
}

function draw() {
  background(255,255,255);

  rectangle2.y = mouseY;
  rectangle2.x = mouseX;
  
  console.log(rectangle2.x);
  if(rectangle2.x - rectangle1.x <rectangle2.width/2+rectangle1.width/2
    &&rectangle1.x-rectangle2.x<rectangle2.width/2+rectangle1.width/2
    &&rectangle1.y - rectangle2.y<rectangle2.height/2+rectangle1.height/2
    &&rectangle2.y - rectangle1.y<rectangle1.height/2+rectangle2.height/2){
    rectangle1.shapeColor = "yellow";
  rectangle2.shapeColor = "green";
  
  }
  else{
    rectangle1.shapeColor = "red";
  rectangle2.shapeColor = "blue";
  
  }
 
  drawSprites();
}