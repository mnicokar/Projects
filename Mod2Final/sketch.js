
//12.19.2022 around 6:30pm
const WIDTH= 600;
const HEIGHT = 400;

//Paddle Size
var rectWidth = 20;
var rectHeight = 60;

//p1 is the AI
var p1x = 20;
var p1y = 200;

var p1YSpeed =5;

//p2 is us
var p2x = 560;
var p2y = 200;

var p2YSpeed =2;

//ellipse 
var x = 300;
var y = 200;
var circleRadius = 30;
var xSpeed = Math.floor(Math.random()*4) - 2;
var ySpeed = Math.floor(Math.random()*4) - 2;

//level
var level = 1; 

function setup() {
  createCanvas(WIDTH, HEIGHT);
}



function collideRectCircle(px, py, rectWidth, rectHeight, x, y, circleRadius){
  let centerX = x//+circleRadius;
  let centerY = y//+circleRadius;

  let recCenterX = px + (rectWidth/2);
  let recCenterY = py + (rectHeight/2);

  if (Math.abs(centerX-recCenterX) <= (25) && Math.abs(centerY-recCenterY) < (30)){
    return true;
  }
}


function draw() {
  background(0);

  //move ball
  
  x += xSpeed;
  y += ySpeed;

  //check ball collision
  if (y +15 >= HEIGHT){
    ySpeed = -ySpeed;
  }
  else if (y -15 <= 0){
    ySpeed = -ySpeed;
  }
  else if (x +15 >= WIDTH){
    xSpeed = -xSpeed;
  }
  else if (x -15 <= 0){
    ySpeed -= level;
    xSpeed -= level;
    x = 300;
    y = 200;
    
  }


  if (keyIsPressed){
    if (keyCode == UP_ARROW){
      p2y -= p2YSpeed;
    }
    if (keyCode == DOWN_ARROW){
      p2y += p2YSpeed;
    }
    if (keyCode == 87){
      p1y -= p1YSpeed;
    }
    if (keyCode == 83){
      p1y += p1YSpeed;
    }
    
  }

  //Following the player up and down
  if (y > p1y){
    p1y += p1YSpeed;
  }
  
  if (y < p1y){
    p1y -= p1YSpeed;
  }


  ellipse(x,y,circleRadius,circleRadius);
  rect(p2x,p2y,rectWidth,rectHeight);

  rect(p1x,p1y,rectWidth,rectHeight);
  
  if(collideRectCircle(p1x, p1y, rectWidth, rectHeight, x, y, circleRadius)){
    xSpeed = - xSpeed;
    x = x +1;
  }
  
  if(collideRectCircle(p2x, p2y, rectWidth, rectHeight, x, y, circleRadius)){
    xSpeed = - xSpeed;
    x = x -1;
  }
}

