/*「ウィンドウの横幅を変数に入れよう」

JavaScriptを使ってウィンドウサイズを変数に入れ、
アラートを出してみよう。

※アラートに出る数値は環境によって違います。*/

const WidthNumber = window.innerWidth;
console.log(WidthNumber);

/*「変数の中の文字列を置き換えよう」

変数 text1　に "リンゴ・バナナ" を代入。
変数 text2　に "レモン" を代入。
ふたつの変数を足して、アラートに出そう。
ただし条件があります。
"バナナ" と言う文字列は取り除きましょう。*/
let text1 = "りんご・バナナ";
let text2 = "レモン";

text1 = "りんご";

console.log(text1 + text2);

/*「2秒後にアラートを出そう」

リロードして2秒後にアラートを出そう！*/

setTimeout(Interbal, "2000");
function Interbal() {
  console.log("２秒立ちました。");
}

/*変数 num1　に 5 を代入。
変数 num2　に 8 を代入し
ふたつの変数を足して
アラートに出そう。*/

let num1 = 5;
let num2 = 8;

console.log(num1 + num2);

/*「クラス名を取得しよう」

クリックしたliタグのクラス名を取得して、
アラートに出してみよう。*/

let ListAll = document.querySelectorAll(".list li");

for (let i = 0; i < ListAll.length; i++) {
  ListAll[i].addEventListener("click", function () {
    alert("くりっく");
  });
}
/*変数 fruits　に配列を代入しよう
代入する果物は "リンゴ"、"メロン"、"バナナ"　の3つ
代入ができたら、 "メロン" をアラートに出して見よう。*/

let ListFruit = ["りんご", "メロン", "バナナ"];
console.log(ListFruit[1]);

/*「タグの数を取得しよう」

liタグの数を取得してアラートに出して見よう。*/

let List2 = document.querySelectorAll(".list2 li");
console.log(`liのリストの数は${List2.length}です`);
