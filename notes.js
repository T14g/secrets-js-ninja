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