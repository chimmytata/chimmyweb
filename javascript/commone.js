requirejs.config({
    "baseUrl": "javascript/lib",
    "paths": {
      "app": "../app"
    },
    // 若 javascript 檔案用 jQuery 語法開發，需要指向 jQuery 函式檔運作
    "shim": {
        backbone: {
          deps: ['jquery', 'underscore'],
          exports: 'Backbone'
        },
        underscore :{
          exports: '_'
        }
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);