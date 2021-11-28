// 最終課題を制作しよう
let x, y, a, b, c, d, k, l, m, n, o;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=15;
  y=height-15;
  xf=10;
  yf=30;
  xl=110;
  yl=130;

  k=(yl-yf)/(xl-xf);
  console.log(k);
  l=yf-xf*k;
  console.log(l);
}

function draw(){
  background(160, 192, 255);
  line(xf,yf,xl,yl);

  ellipse(x, y, 20);
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  m=k*x-y+l;
  if(m<0){m=-1*m};
  n=sqrt(k*k+1);
  o=m/n;
  // 点と直線の距離の公式

  if(o<10&&xf-10<x<xl+10){
    x=15;
    y=height-15;
  }
  
  x = constrain(x, 10, width-10);
  y = constrain(y, 10, height-10);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
