// 最終課題を制作しよう
let x, y, xf, yf, xl, yl, a, b, c, d, k, l, m, n, o;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=15;
  y=height-15;
  xf=[10,20];
  yf=[30,40];
  xl=[110,200];
  yl=[130,400];


}

function draw(){
  background(160, 192, 255);

  for(let i=0; i<xf.length; i++){line(xf[i],yf[i],xl[i],yl[i]);}


  ellipse(x, y, 20);
  if(keyIsDown(LEFT_ARROW)){ x -= 1; }
  if(keyIsDown(RIGHT_ARROW)){ x += 1; }
  if(keyIsDown(UP_ARROW)){ y -= 1; }
  if(keyIsDown(DOWN_ARROW)){ y += 1; }


  for(let i=0; i<xf.length; i++){


    k=(yl[i]-yf[i])/(xl[i]-xf[i]);
    l=yf[i]-xf[i]*k;

    m=k*x-y+l;
    if(m<0){m=-1*m};
    n=sqrt(k*k+1);
    o=m/n;
    // 点と直線の距離の公式

    if(o<10&&xf[i]-10<x&&x<xl[i]+10){
      x=15;
      y=height-15;
    }

  }



  x = constrain(x, 10, width-10);
  y = constrain(y, 10, height-10);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
