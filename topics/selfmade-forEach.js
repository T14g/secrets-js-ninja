//An exemple of a forEach made setting the context to each item of the list

function forEach(list , callback){
    for( var i = 0 ; i < list.length ;i++){
        callback.call(list[i], i);
    }
}

var weapons = [{tipo: 'shiruken'}, {tipo: 'katana'}, {tipo: 'adaga'}];

forEach(weapons, function(index){
    if(this === weapons[index]){
        console.log("Got the expected value of " + weapons[index].tipo);
    }
})