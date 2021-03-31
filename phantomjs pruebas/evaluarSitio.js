var sitioWeb = require ('webpage').create();
var _URL = "https://www.linkedin.com/learning/desarrollo-web-control-de-calidad-automatizado/analizar-el-contenido-de-un-sitio-web";

sitioWeb.open (_URL, function(status){
    if (status==="success"){

        var titulo = sitioWeb.evaluate(function(){
            return document.title;
        })

        console.log(titulo);
    }
    
    phantom.exit();
})