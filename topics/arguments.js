//Exemple of using arguments of a function

function sum(){
    var sum = 0;

    //Arguments isn't an an array its an array like
    for(var i = 0; i < arguments.length ;i++ ){
        sum += arguments[i];
    }

    return sum;
}

console.log(sum(1,2,4,56,1,2,100));