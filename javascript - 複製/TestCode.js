// 瀏覽器的控制台 列印語法 console.log(顯示資料);
/* 雙引號（"）與 單引號（'） 為字串 都可以使用 字串不是數字 無法加減
   但習慣是 雙引號：自己打的  單引號：javascrip原使用*/

// TestCode();

// TimeYear(); 在 CopyRightContent 中呼叫

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

// 新增 html 的標籤與內容
function CopyRightContent () {
    // 宣告變數 在 html 內新增 div 標籤
    let div = document.createElement('div');

    // 宣告變數 在哪個 html 標籤之內新增 div
    let Footer = document.getElementById('Footer');

    // 在 footer 內，新增 div 子元素
    Footer.appendChild(div);

    // 純文字 不能放入標籤
    // div.textContent = "Lulu版權宣告&copy;2020 - " ;

    // html 語法 若要寫入 id or class ，最外層需要用 單引號 包覆
    div.innerHTML = ' Lulu版權宣告&copy;2020 - <span id="Year"></span> ' ;

    TimeYear();

    // 調整 框架 位置
    // 1. 在被選取的元素開頭插入內容 prepend() 置入被選取元素中
    // 呼叫要選取的標籤
    // let Address = document.getElementById('Address');
    // Address.prepend(div);

    // 2. 在被選取的元素結尾插入內容 append() 置入被選取元素中
    // let Address = document.getElementById('Address');
    // Address.append(div);

    // 3. 在被選取的元素之前插入內容 before() 置入被選取元素標籤之前
    let Address = document.getElementById('Address');
    Address.before(div);

    // 4. 在被選取的元素之後插入內容 after() 置入被選取元素標籤之後
    // let Address = document.getElementById('Address');
    // Address.after(div);
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


function Var_LetCode() {
    // 區域變數 
    var a = 3;
    let b = 4;

    console.log( a + b );
}
    
// Var_LetCode();

function Var_LetCode(){
    // var 與 let 的差別：暗藍色表示找不到變數，var 的作用愈會在 function 內才會區分「全域或區域」的差別；let 的作用域包含了全部，例如：function {...} if {...} 等等
    // 全域變數
    var A = 4, C = 1;
    let x = 5, y = 6;
    {
        var d = A + C;
        let z = x + y;
    }
    console.log(d);
    // 呼叫不到z
    console.log(z);

    function NumCal() {
        var d = A + C;
        let z = x + y;
    }
}

// 迴圈 for(宣告變數起始值; 條件; 執行後增加或減少的次數){程式}
let i;
for ( i = 0; i <= 10; i = i + 1 ) {
    console.log(i);
}

WhileCode();
// 迴圈 while (條件) {程式} 與 for 的差別，在於無法指定執行圈數
function WhileCode() {
    // 總數
    let Number = 200;

    // 亂數 ( 系統產生介於 0 ~ 1 之間)，將小數變為整數 ( 數值要介於 0 ~ 含30 ，需乘以 31 )，設為無條件捨去法
    let attack;
    let count = 1;
    
    
    while ( Number > 0 ){
        console.log("第 " + count + " 次")
        count = count + 1;
    
        attack = Math.floor(Math.random() * 31);
        console.log("亂數為：" + attack);
        
        // 將計算過後的值，再指定給 Number
        Number = Number - attack;
    
        console.log("計算結果：" + Number);
    
        // 設定條件 亂數要 > 10、最後計算的值要 > 0
    }
}



// login();

function login() {
    // 變數：承接使用者輸入的資料
    // 帳號
    let User;
    // 密碼
    let Number;

    // 可輸入訊息的對話視窗
    User = window.prompt('請輸入帳號')

    // 假設，網站友聯街資料庫，帳號與密碼都由資料庫帶出
    let UserName = 'chimmy';
    let UserNum = '12345';

    if ( User == UserName) {

        Number = window.prompt('請輸入密碼');

        if ( Number == UserNum ) {
            console.log("歡迎登入！");
        } else {
            console.log("帳號與密碼有誤！");
        }
    } else {
        console.log("帳號與密碼有誤！")
    }
}

ArrayCode();
// 陣列 array 基本會配合 迴圈for 處理
function ArrayCode() {
    // 宣告陣列數 給予值
    let Items = [101, '01', '項目'];
    // 輸出資料 迴圈讀取 陣列 的索引碼，起始索引碼為0，i++ = i+1的縮寫
    for ( let i = 0; i <= 2; i++) {
        // 不能只寫 i，要寫Items[i]
        console.log(Items[i]);
    }
}




// sec.setAttribute("class",CommClass[i]);
sec.setAttribute("id",CommID[i]);

/* ============================================================== */




// let CO = document.querySelector(CommClass[i]);
// let CO = document.getElementById(CommID[i]);






ForLi(LiClass, TB, LiCon);



/* ============================================================== */








// 在 NCommodity 內新增 ul ;前面有宣告了，所以就不用 let
// CO = document.querySelector('.NCommodity');
CO = document.getElementById(CommID[i]);



// 參考 127行

ForLi(PBLi, PriceBox, PBLiCon);

/* ============================================================== */
// 建立 for （建立 li）方法
function ForLi(Class, IdName, Con){
    // for 迴圈
for(let i = 0; i < Class.length; i++) {
    // 建立 li
    let li = document.createElement('li');

    // 在 框架 新增 標籤 li ；參考 TitleBox（宣告在 137 行 TB）、PriceBox（宣告在 232行）
    IdName.appendChild(li);

    // 新增 class 屬性
    li.setAttribute("class", Class[i]);

    // 置入 內容
    li.innerHTML = Con[i];
}
// 終止方法（函式）執行
return;
}