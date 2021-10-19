// 小手調べ
function setup(){
  createCanvas(1000,1000);
  for(let i = 0; i < 10; i++){
    noFill();
    if(i<5){
      stroke(0,0,225);
    }
    else{
      stroke(255,0,0);
    }
    let x = i*50+50;
    ellipse(500,500,x);
  }
}
