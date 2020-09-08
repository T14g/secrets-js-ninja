//Exemple of Rest parameters
//Grab 1st argument then multiply by the biggest of the remaining

multimax = (first, ...otherParameters) => {
    
    //Return the list of otherParameters in DESC order
    let sorted = otherParameters.sort((a,b) => b - a );

    return first * sorted[0];
}

const result = multimax(10,11,100,20);
console.log(result);