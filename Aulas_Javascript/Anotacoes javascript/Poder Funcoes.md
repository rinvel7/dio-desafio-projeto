# FUNCOES
### QUE SAO FUNCOES
    E um trecho de codigo, que invoca a execucao dele en qualquer momento.

### COMO SE DECLARA UMA FUNCOA

    function nomeFuncao(){
        console.log('nomeFuncoa');
    }

### COMO INVOCAR UMA FUNCAO QUE EXECUTARA UMA FUNCAO
    
    nomeFuncao();

### FUNCAO COM PARAMETRO (CALLBACK)

function nomeFuncao(parametro){
    console.log('Your name is ' + name);
}

nomeFuncao('parametro1');
nomeFuncao('parametro2');

function incrementarJuros(valor, porcentualJuros) {//funcoe com mas de um parametros
    const valordeAcrecimo = (porcentualJuros / 100) * valor;//procedimento que nao tem retono
    return valor + valordeAcrecimo;//funcao que retorna um valor
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));



### ORGANIZACAO DE CODIGO

o cogido princiopal deve permanecer dentro de uma funcao chamada MAIN

function main(){
    console.log('Programa princpial');

    chamadaFuncaoAuxiliar(com, parametros);
}

main();

Ela receve a invocacao  de funcoes e variavel do funcoes Auxiliares


## REFACTORIZACAO DE CODIGO O ISOLAR CODIGO

Todo trecho de codigo que tem uma responsabilidade unica, precisa ser isolado.

 ### ISOLAR

 Disminuye a complijidad de um codigo e fica mas lejivel.

 # FUNCOES: EM JS SON VALORES, OBJETOS QUE SE PODEN MANIPULAR.

 function main() {
    const peso = 85;
    const altura = 1.62;

    const imc = calculaImc(peso, altura) ;
    console.log(clasificarImc(imc));

}

main = function(){
    console.log(1);
}

main();//imprimira o valor que foi atribuido por segunda veis

##   FUNCOES ANOMINAS

Ela no tem nome

 (function () { //main nao e preciso colocar
    const peso = 85;
    const altura = 1.62;

    const imc = calculaImc(peso, altura) ;
    console.log(clasificarImc(imc));

})();

Este tipo de codigo e muito utilizado em oarte da web, io, ... para isolar

# OBEJTOS E CLASSES

## OBJETOS 
    E uma colecao de valores agrupados, e funciona a traves de chave valor.

    Ele e dinamico, oseja, se pode incrementar o eliminar dados.

### SINTAXIS

const varivel = {        const rina = {      
    nomechave1: 'Valor1',        nome: 'Rina',
    nomechave2: Valor2,          idade: 43,
};                        };

### COMO IMPRIMIR UM OBJETO

    console.log(variavel.nomechave1);
    console.log(variavel.nomechave2);
    console.log(variavel);

### COMO IMCREMENTAR UM VALOR DE UM OBJETO

    variavel.nomechave3 = valor string ou numerico;
    
    EX:
        rina.altura = 1.62;
### COMO ELIMINAR UM VALOR DE UM OBJETO

    delete variavel.nomechav1;

### FUNCOE DENTRO DE UN OBJETO: "METODO"

// contexto = this
const varivel = {            
    nomechave1: 'Valor1',       
    nomechave2: Valor2,

    descrever: function(){
        this//contexto onde esa funcao esta sendo executada
        console.log(`Meu nome e ${this.nomechave1} e minha idade e ${this.nomechave2}`);
    }          
};    

### COMO IMPRIMIR O METODO (FUNCOE DENTRO DE OBJETO)
variavel.descrever();

### POSICAO E ADICAO DE OUTRO DADOS A UN OBJETO
// contexto = this
const varivel = {            
    nomechave1: 'Valor1', //this       
    nomechave2: Valor2, //this

    descrever: function(){
        this//contexto onde esa funcao esta sendo executada
        console.log(`Meu nome e ${this.nomechave1} e minha idade e ${this.nomechave2}`);
    }          
};   

variavel.nomechave1 = 'valor4';
variavel.nomechave2 = 'valor4';

variavel.descrever();

### O METODO SE PODE SOBRE-ESCREVER

const varivel = {            
    nomechave1: 'Valor1',      
    nomechave2: Valor2, 

    descrever: function(){
        this//contexto onde esa funcao esta sendo executada
        console.log(`Meu nome e ${this.nomechave1} e minha idade e ${this.nomechave2}`);
    }          
};   

variavel.descrever = function(){

    console.log(`Meu nome e ${this.nomechave1}}`);
}

variavel.descrever();

### ACESO A OS VALORES DE UM OBJETO A TRAVES DE UMA SINTAXIS MAS DINAMICA
const varivel = {            
    nomechave1: 'Valor1',      
    nomechave2: Valor2, 

    descrever: function(){
        this//contexto onde esa funcao esta sendo executada
        console.log(`Meu nome e ${this.nomechave1} e minha idade e ${this.nomechave2}`);
    }          
};   

console.log(variavel['nomechave1']);

### DIFERENCIAS:
#### variavel['nomechave1'] = 'teste';
 Ela e dimanica:
    -Posibilidade infinitas
    -Anotacao de colecao
    -Pode ser retribuida
    -Para codifica, nao e necesario ter claro os atributos das chave, pois ele e um texto (string), que pode recever um parametro que venha de outro lugar

#### variavel.nome = 'teste';
Ela retorna o aceso direto:
    -Para codifica, debe ter claro os atributos das chave.

# CLASSES
    E uma definicao do que como deveria ser um objeto, para que ele poda ser instanciado.

### QUE E UMA INSTACIA
    E uma ocurrencia de aquele objeto.

### CONSTRUCTOR
    E o que acontece quando uma pessoa e instanciada.

    O constructor debe fazer referencia ao instancia. Quando o constructor sea implementado, o bloco da instacia debe reflejar as palavra new, acompanhado de "()".

### SINTAXIS DE AS CLASSES
    class Pessoa { //classe
        nome;
        idade;

    constructor(){ //constructor
        this.nome = 'teste';//this.atributo = valor;
        this.idade = 20;//this.atributo = valor;
    }

        descrever(){
            console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
        }
    }

    const rina = new Pessoa();//instancia. O constructor faz referencia porque a palavra new e os "()" ele estan sendo implementados
    nome = 'Rina';
    idade = 43;



