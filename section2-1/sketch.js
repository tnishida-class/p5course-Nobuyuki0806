// テキスト「繰り返し」
function setup() {
  createCanvas(100,100);
  fill(0);
  let x = 0;
  while(x < 100){ // 四角を描く座標が描画範囲内であれば続ける
    rect(x, x, 20, 20);
    // (左上のx座標, 左上のy座標, 四角形の幅, 四角形の高さ)
    x = x + 20; // 繰り返し1回ごとに場所を動かす
  }
}

// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }
