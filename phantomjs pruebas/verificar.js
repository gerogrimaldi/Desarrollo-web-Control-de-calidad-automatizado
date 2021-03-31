var sitioWeb = require ('webpage').create();
var _URL = "http://instagram.com/djdelacruzok";

sitioWeb.open(_URL, function(status){

    if (status === "success"){
        console.log("el sitio esta funcionando");
    }else{
        console.log("NO funca");
    }
    
    phantom.exit();
});
