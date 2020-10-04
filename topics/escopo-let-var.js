// Observe
// Declarando variáveis com var elas são definidas no escopo global mais próximo/função
// Ignorando o escopo de bloco

function exemplo1(){

    for(var i = 0 ; i< 10 ;i++){
        var nome = "Teste" + i;
    }

    //Acessíveis fora do escopo de bloco
    console.log("Variável nome acessível no escopo da função com valor " + nome);
    console.log("Variável i acessível no escopo da função com valor " + i);
}

exemplo1();

//Se quiser ter um escopo de bloco para as variáveis use let ( ES6 )
function exemplo2(){

    for(let i = 0 ; i< 10 ;i++){
        let nome = "Teste" + i;
    }

    //Não acessíveis fora do escopo de bloco
    console.log("Variável nome acessível no escopo da função com valor " + nome);
    console.log("Variável i acessível no escopo da função com valor " + i);
}

exemplo2();
