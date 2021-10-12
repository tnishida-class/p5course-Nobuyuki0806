// 練習問題：神戸市のマーク
function setup(){
  createCanvas(200, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  // 塗りつぶしなし
  strokeWeight(25);
  // 線の幅
  strokeCap(SQUARE);
  // 線の形　ROUNDやPROJECTなど
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // (中心のx座標, y座標, 横幅, 縦幅, 開始角度, 終了角度) 角度は弧度法で、QUARTER_PI=π/4
  arc(100 - 25, 100, 100, 100, QUARTER_PI + PI, QUARTER_PI + PI + PI);

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
