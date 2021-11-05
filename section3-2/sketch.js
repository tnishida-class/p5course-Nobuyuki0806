// テキスト「アニメーションの基本」
let x, y, vx, vy;
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y*2-10, 20, 20);
　// y*2-10でぴったり下についている状態
  y=y+vy
  y=constrain(y,0,height)

  if(y>y*2-10){y=y*2-10}
  if(keyIsDown(RIGHT_ARROW)){
    x+=3;
  }
  if(keyIsDown(LEFT_ARROW)){
    x-=3;
  }
  if(keyIsDown(UP_ARROW)){

    y=y-vy+g;
  }
  }



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if(keyCode==UP_ARROW){y=y-vy+g}
}
