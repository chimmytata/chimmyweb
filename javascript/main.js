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

// 修正load路徑 原本為 ../web/header.html 在本機中沒有問題，但是到網路會有問題，所以將 ../拿掉
Pageload();
function Pageload() {
    $('header').load("web/header.html");
    $('footer').load("web/footer.html");
}