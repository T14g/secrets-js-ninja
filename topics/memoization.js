function assert(condition, msg){
    if(condition){
        console.log(msg);
    }
}

function numeroPrimo(valor){

    //Inicialmente verifica se existe a propriedade na função e a cria se não
    if(!numeroPrimo.resultados){
        numeroPrimo.resultados = {};
    }

    //Se já houver o resultado ele é retornado
    if(numeroPrimo.resultados[valor] !== undefined){
        return numeroPrimo.resultados[valor] !== undefined;
    }

    //Do contrário o fluxo segue
    var prime = valor !== 1; // 1 não é primo

    //Se o número dividir por outro número que não seja ele mesmo não é primo
    for(var i = 2 ; i < valor ;i++){
        if(valor % i === 0){
            prime = false;
            break;
        }
    }

    //salva no cache e retorna o valor
    return numeroPrimo.resultados[valor] = prime;
}

assert(numeroPrimo(5), "5 é primo!");
assert(numeroPrimo.resultados[5], "Está em cache");