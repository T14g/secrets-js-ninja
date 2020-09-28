var name = "Ninja",later;

function outerFunction(){
    var skill = "javascript";

    function innerFunction(){
        console.log(name + " " + skill);
    }

    later = innerFunction;
}

//Call outer function creating the closure over the inner function
outerFunction();

//Now call later() a  reference to innerfunction, 
//the closure keeps the scope of the function when the innerFunction is created
later();
