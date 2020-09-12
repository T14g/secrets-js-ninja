//You set any object as function context with apply and call methods
//It solves the problem when for exemple you create an object within a method
//then you wanna append this object methods to a eventhandler on a DOM Object
//the js object will be the context not the DOM element
//You can solve it with apply and call

function teste() {
    var resultado = 0;

    for(var n = 0 ; n < arguments.length; n++ ){
        resultado    += arguments[n];
    }

    this.resultado = resultado;
}

var ninja1 = {};
var ninja2 = {};

//Apply uses an array of arguments
teste.apply(ninja1, [1,2,3,4]);
//Call pass a list of arguments
teste.call(ninja2, 5,6,7,8);

if(ninja1.resultado === 10)console.log("Called via apply!");
if(ninja2.resultado === 26)console.log("Called via call!");
