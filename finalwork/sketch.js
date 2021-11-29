// 最終課題を制作しよう
let x, y, xf, yf, xl, yl, a, b, c, d, k, l, m, n, o;

function setup(){
  createCanvas(1250, 550);
  x=30;
  y=530;
  xf=[0,300,60,300,700,700,1250,1249,1000,1000,1150,1200,1249,1200,1050,945,899,1030,901,850,835,635,650,221,220,220];
  yf=[520,330,550,400,500,550,550,450,450,450,400,300,450,0,95,200,400,51,180,350,400,100,50,100,50,50];
  xl=[300,700,300,700,1200,1250,1249,1150,1150,1200,1201,1200,1250,1250,1201,1050,945,1200,1030,901,899,835,850,635,650,221];
  yl=[330,500,400,550,500,550,450,450,400,500,300,50,0,0,50,95,200,0,51,180,400,400,350,100,50,100];

}

function draw(){
  background(160, 192, 255);
  for(let i=0; i<xf.length; i++){line(xf[i],yf[i],xl[i],yl[i]);}
  ellipse(x, y, 20);
  if(mouseIsPressed&&sqrt((x-mouseX)*(x-mouseX)+(y-mouseY)*(y-mouseY))<10){
    x=mouseX;
    y=mouseY;
  }

  for(let i=0; i<xf.length; i++){

    k=(yl[i]-yf[i])/(xl[i]-xf[i]);
    l=yf[i]-xf[i]*k;

    m=k*x-y+l;
    if(m<0){m=(-1)*m};
    n=sqrt(k*k+1);
    o=m/n;
    // 点と直線の距離の公式

    if(o<10&&sqrt((x-xf[i])*(x-xf[i])+(y-yf[i])*(y-yf[i]))<sqrt((xl[i]-xf[i])*(xl[i]-xf[i])+(yl[i]-yf[i])*(yl[i]-yf[i]))+10&&sqrt((x-xl[i])*(x-xl[i])+(y-yl[i])*(y-yl[i]))<sqrt((xl[i]-xf[i])*(xl[i]-xf[i])+(yl[i]-yf[i])*(yl[i]-yf[i]))+10){
      x=30;
      y=530;
    }

  }

  goal("GOAL",250,75)

  if(x<300&&y<100){
    congratulations("CONGRATULATIONS!!",100,200)
  }

  x = constrain(x, 10, width-10);
  y = constrain(y, 10, height-10);

}

function goal(t,x,y){
  text(t,x,y)
}

function congratulations(t,x,y){
  text(t,x,y)
}

// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
