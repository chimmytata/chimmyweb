// 只要將檔名寫入陣列中（不用給附檔名），即可直接讀取檔案內容
let IndexCon = ["jquery", "jquery.menunav", "copyright", "SmallNav", "NewCommodity", "Share", "Banner"];
let FooterCon = ["copyright"];

define(IndexCon, function($) {
    
    // 讀取 檔案內的 函式名稱
    $(function() {
        PhoneMenushow2 ();
        CopyRightContent ();
        NewCommodityCon(8);
        ShareCon(8);
    });
});