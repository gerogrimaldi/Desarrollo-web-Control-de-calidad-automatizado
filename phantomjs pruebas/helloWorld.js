var system = require('system');
var fecha = new Date().toDateString();

console.log("Hola mundo");
console.log(3*5);

if(system.args.lenght === 0){
    console.log("no argumentos");
}else{
    system.args.forEach( function (arg, index){
        console.log( '[' + index + '] ' + arg);
    });
};

phantom.exit();