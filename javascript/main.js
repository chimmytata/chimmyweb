// MenuNav();
// 行動裝置 選單
function MenuNav () {
    let MenuNav = document.getElementById('MenuNav');
    // 隱藏 手機板選單
    MenuNav.style.display = "none";
}

// menu 手機板按鈕
function PhoneMenushow () {
    let Menu = document.getElementsByClassName('MenuBtn');
    // 顯示 手機板選單內容
    Menu.style.display = "block";
}

PhoneMenushow2 ();
function PhoneMenushow2 () {
    // $ jQuery 的變數前綴詞
    // 隱藏選單
    $( '#MenuNav' ).hide();

    // 開啟選單
    $( '#MenuBtn').click( function() {
        $( '#MenuNav' ).show();
    });

    // 關閉選單
    $( '#Close').click( function() {
        $( '#MenuNav').hide();
    });
}

CopyRightContent ();

function TimeYear(){
    var year = new Date().getFullYear();
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

    // html 語法 若要寫入 id or class ，最外層需要用 單引號 包覆
    div.innerHTML = ' Lulu版權宣告&copy;2020 - <span id="Year"></span> ' ;

    TimeYear();

    // 調整 框架 位置
    // 呼叫要選取的標籤
    let Address = document.getElementById('Address');

    // 3. 在被選取的元素之前插入內容 before() 置入被選取元素標籤之前
    Address.before(div);
}

SmallNavCon ();
// 新增 SmallNav 的內容
function SmallNavCon () {
    // 新增標籤 ul 與 li
    let ul = document.createElement('ul');
    
    // 在 SmallNav 內新增，宣告變數
    let SN = document.getElementById('SmallNav');

    // 建立 ul 框架，給予 id 名稱
    SN.appendChild(ul);

    // 賦予屬性 id or class
    ul.setAttribute("id","PhoneNav");

    // 陣列
    let PhoneNav = document.getElementById('PhoneNav');
    let NavClass = [ 'About', 'VerticalLine', 'Shop', 'VerticalLine', 'Message', 'VerticalLine', 'Address'];
    let NavCon = [ '品牌故事', '|', '購物說明', '|', '客服留言', '|', '門市資訊']

    // 新增標籤時，程式的運作方式為：先新增標籤，賦予屬性，在指定新增的外框架（此為一個迴圈）
    // 迴圈內的數字，是因為陣列數而產生，故要隨著陣列的數量而自動增減
    for ( let i = 0; i < NavClass.length; i++) {
        let li = document.createElement('li');
        // 新增屬性
        li.setAttribute("class", NavClass[i]);
        // ul 內新增 li 清單
        PhoneNav.appendChild(li);

        // 新增連結 a
        let A = document.createElement('a');
        // 新增屬性 假連結 javascript:;
        A.setAttribute("href", "javascript:;");
        // li 內新增 a 連結
        li.appendChild(A);
        // 置入 陣列內容
        A.innerText = NavCon[i];
    }
    
}

NewCommodityCon();
// 新增 新品上市 的內容
function NewCommodityCon() {

    // 新增標籤 section
    let sec = document.createElement('section');

    // 在 NewCommodityCon 內新增 section
    let SE = document.getElementById('NewCommodityCon');

    // 建立 section 框架，給予名稱
    SE.appendChild(sec);

    // 給予 class 和 id 名稱
    sec.setAttribute("id","NCommodity");
    sec.setAttribute("class","NCommodity"); 

    /* ============================================================== */
    // 新增標籤 ul
    let ul = document.createElement('ul');

    // 在 NCommodity 內新增 ul
    let CO = document.getElementById('NCommodity');

    // 建立 ul 框架
    CO.appendChild(ul);

    // 給予 id 名稱
    ul.setAttribute("id","TitleBox");

    // 設計迴圈
    // li 在 TitleBox 框架內產生，宣告 TitleBox 的變數
    let TB = document.getElementById('TitleBox');

    // 宣告 li 的 class 名稱 array（陣列）
    let LiClass = ['Title','Number','Text'];

    // 宣告 li 的內容
    let LiCon = ['新品上市','庫存','數量有限，售完為止'];

    // for 迴圈
    for(let i = 0;i<LiClass.length;i++) {
        // 建立 li
        let li = document.createElement('li');

        // 在 TitleBox （宣告在 137 行 TB）
        TB.appendChild(li);

        // 新增 class 屬性
        li.setAttribute("class",LiClass[i]);

        // 置入 內容
        li.innerText = LiCon[i];
    }

    // 建立 class 的變數
    // let Number = TB.getElementsByClassName('Number')[0];
    // querySelector() 在文件中匹配指定 css 選擇器
    // let Number = document.querySelector('.Number');
    let Number = TB.querySelector('.Number');

    // 建立 span 標籤
    let SP = document.createElement('span');

    // 在 Number 建立 span
    Number.appendChild(SP);

    SP.innerText = '1';
    /* ============================================================== */

    // 設定 div class 名稱陣列
    let DClass = ['Images','LName','Brief'];

    for(let i =0;i<DClass.length;i++) {
        // 新增 div 的框架，宣告變數
        let Div = document.createElement('div');

        // 在 Commodity
        CO.appendChild(Div);

        // 新增屬性
        Div.setAttribute("class",DClass[i]);
    }

    // Images 內新增資料
    let A = document.createElement('a');
    // 新增 連結 屬性
    A.setAttribute("href","javascript:;");
    // 宣告 指定 class 的變數
    let Images = CO.querySelector('.Images');
    // 在 Images 內新增
    Images.appendChild(A);
}