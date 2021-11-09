// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }
  console.log(scores);
  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }
  console.log(total)
  // BLANK[1]
  ellipse(200,200,300);
  for(let i=0;i<scores.length;i++){
    // fill(240)
    // arc(200,200,300,300,PI*scores[i]/total,PI*scores[i+1]/total,true);
    line(200,200,200+150*cos(2*PI*scores[i]/total),200+150*sin(2*PI*scores[i]/total))
    // line(200,200,200+150*cos(PI*scores[i+1]/total),200+150*sin(PI*scores[i+1]/total))
  }
}
