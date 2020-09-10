assert = ( condition , msg ) => condition ? console.log(msg) : null

//The window is the context object containing this function
function nonstrictFunction(){
    return this;
}

//There is no context in strict
function strictFunction(){
    "use strict";
    return this;
}

assert(nonstrictFunction() === window, "Non strict have window context");
assert(strictFunction() === undefined, "Strict have undefined context");

