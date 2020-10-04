// Business méthod = 1 método que altera o valor de uma variável interna do objeto
function Ninja() {
    var feints = 0;
    this.getFeints = function(){
    return feints;
    };

    //Business method
    this.feint = function(){
    feints++;
    };
}

// A variável feints não é acessada diretamente, previnindo assim alterações descontroladas( uncontrolled)
// Acaba havendo um comportamento similar a variáveis privadas usando closures


// 03-10-20
// Lexical environments é baseado em nesting 
// -Cada estrutura : ex function tem seu lexical enviroment quando o código roda 
// -Cada lexical environment sabe do lexical environment parent que o envolve 
// -Ao procurar uma variável se ela não estiver no L.E atual a variável é procurada na próxima camada externa de L.E, igual uma cebola de dentro pra fora 
//Ao chamar uma função mais interna o ambiente externo a ela se torna o seu outer environment 
