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
  let x = 0;
  // xの定義はforの外でやらないと毎回xが定義されてしまって意味ない
  for(let i=0;i<scores.length;i++){

    x += scores[i];
    line(200,200,200+150*cos((-1)*0.5*PI+2*PI*x/total),200+150*sin((-1)*0.5*PI+2*PI*x/total));
    text(scores[i].toPrecision(3), 200+100*cos((-1)*0.5*PI+2*PI*(x-scores[i]*0.5)/total), 200+100*sin((-1)*0.5*PI+2*PI*(x-scores[i]*0.5)/total));
  }
}
