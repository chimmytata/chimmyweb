// 瀏覽器的控制台 列印語法 console.log(顯示資料);
/* 雙引號（"）與 單引號（'） 為字串 都可以使用 字串不是數字 無法加減
   但習慣是 雙引號：自己打的  單引號：javascrip原使用*/

// TestCode();

TimeYear();

function TimeYear(){
    // 日期函數 Date 產新的 Date
    var year = new Date().getFullYear();
    // var now = new Date;
    // var year = now.getFullYear();

    // 年份變數
    // var Year = "2022";
    // 由 html 顯示資料
    document.getElementById('Year').textContent = year;
}

// 設計 方法 function name(參數或空白){程式}
function TestCode(){
    // 變數 命名：英文開頭（不可數字開頭），英文與數字，底線，javascrip關鍵字不可能設定，英文可設大小寫混用
    // es5版本 var；es6版本 let（變數） const（常數）
    // 宣告變數 全域變數
    var one;
    var ONE;

    // 賦予 值
    one = 1;
    ONE = "01";

    console.log(one);
    console.log(ONE);
    console.log('02');

    // 條件判斷 if.....else 單一條件
    var NumBer = 12;
    // 顯示條件成立，執行的資料
    if (NumBer < 5) {
        console.log("數字小於 5");
    }

    if (NumBer > 10)console.log("數字大於 10");

    if (NumBer > 10)
        console.log("數字為：" + NumBer);

    // 顯示條件成立，執行的資料；或是不成立時，執行的資料
    var Num = 20;
    if ( NumBer < Num) {
        console.log("NumBer < Num")
    } else {
        console.log("NumBer < Num 不成立")
    }

    if ( NumBer < Num) 
        console.log("NumBer < Num");
    else 
        console.log("NumBer < Num 不成立");

    // 多條件判斷式 if(條件){程式} else if(條件二) {程式} else{程式}
    // 全域變數
    let Num_One = 1;
    let Num_Two = 2;
    // == 等於（比較）
    if ( Num_One == Num_Two ) {
        console.log("兩個變數相等")
    } else if ( Num_Two > Num_One ) {
        console.log(Num_Two + " 大於 " + Num_One);
    } else {
        console.log("不成立")
    };
}

// 全域變數
var a = 1;
let b = 2;

// var 與 let 的差別
function Var_LetCode() {
    // 區域變數 
    var a = 3;
    let b = 4;

    console.log( a + b );
}
    
Var_LetCode();