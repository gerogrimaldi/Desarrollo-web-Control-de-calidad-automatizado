var sitioWeb = require ('webpage').create();
var _URL = "https://google.com";

var captura = function(m_width, m_height, m_nombre){

    sitioWeb.viewportSize = {
        width: m_width,
        height: m_height
    };

    sitioWeb.render(m_nombre+'.jpg', { format: "JPEG", quality: "80"});

}

sitioWeb.open (_URL, function(status){

    if (status==="success"){

        captura(67,100,"chiquita");
        captura(769,100,"chica");
        captura(992,100,"media");
        captura(1201,100,"grande");

    };

    phantom.exit();
})