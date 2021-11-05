// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 120;
}
// 心臓はポンプの役割をした後一瞬止まっている


  function draw(){

if(keyIsDown(" ".charCodeAt(0))){
    background(160, 192, 255);
    count = (count + 2) % cycle;
    // countに足している数字が変化の割合みたいなもん
  // BLANK[1]
  if(count<20){
    ellipse(width / 2, height / 2, 20)}
  else if(count<50){
    ellipse(width / 2, height / 2, count)}
  else if(count<80){
    ellipse(width / 2, height / 2, 100-count)}
  else{
    ellipse(width / 2, height / 2, 20)}


    }


else{

    background(160, 192, 255);
    count = (count + 1) % cycle;
    // BLANK[1]
    if(count<20){
      ellipse(width / 2, height / 2, 20)}
    else if(count<50){
      ellipse(width / 2, height / 2, count)}
    else if(count<80){
      ellipse(width / 2, height / 2, 100-count)}
    else{
      ellipse(width / 2, height / 2, 20)}

    }

  }
