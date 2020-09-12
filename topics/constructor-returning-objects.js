//If constructor returns an object the object 
//returned is the value of the New expression and this if constructor is discarded
var puppet = {
    rules : false
};

function Emperor(){
    this.rules = true;
    return puppet;
}

var emperor = new Emperor();

if(emperor === puppet){
    console.log("Emperor function returned the puppet!!!");
}

if(emperor.rules === false){
    console.log("The puppet doesn't know rules!");
}


//Otherwise if the returned value is nonobject the, the returned value is ignored and new created object is returned