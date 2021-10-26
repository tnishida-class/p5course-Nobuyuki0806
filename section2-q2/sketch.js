// チェッカー
function setup() {
  createCanvas(200, 200);
  // let width=200;
  // これを入れないとwidthが何か分からない？いらない
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){
        // ()をつけないとjを2で割ったあまりにiを加えることになるのでおかしくなる
        fill(255);
      }
      else{
        fill(192,192,192);
      }

      rect(size*i,size*j,size,size);
        // (左上のx座標, 左上のy座標, 四角形の幅, 四角形の高さ)

      if((i+j)%2==1&&j<3){
        fill(255,0,0);
        ellipse(size*i+size/2,size*j+size/2,size-5)
        // sizeは適当
      }
      else if((i+j)%2==1&&j>4){
        fill(0,0,0);
        ellipse(size*i+size/2,size*j+size/2,size-5)
        // sizeは適当
      }

    }

    }

}
