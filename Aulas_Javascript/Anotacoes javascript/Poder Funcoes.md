# QUE SAO FUNCOES
    E um trecho de codigo, que invoca a execucao dele en qualquer momento.

# COMO SE DECLARA UMA FUNCOA

    function nomeFuncao(){
        console.log('nomeFuncoa');
    }

# COMO INVOCAR UMA FUNCAO QUE EXECUTARA UMA FUNCAO
    
    nomeFuncao();

# FUNCAO COM PARAMETRO (CALLBACK)

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


# ORGANIZACAO DE CODIGO

o cogido princiopal deve permanecer dentro de uma funcao chamada MAIN

function main(){
    console.log('Programa princpial');

    chamadaFuncaoAuxiliar(com, parametros);
}

main();

Ela receve a invocacao  de funcoes e variavel do funcoes Auxiliares


# REFACTORIZACAO DE CODIGO O ISOLAR CODIGO

Todo trecho de codigo que tem uma responsabilidade unica, precisa ser isolado.

 ## ISOLAR

 Disminuye la complijidad de um codigo e fica mas lejivel.

 # FUNCOES: ES JS SON VALORES, OBJETOS QUE SE PODEN MANIPULAR.

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
#   FUNCOE ANOMINA

Ela no tem nome

 (function () { //main nao e preciso colocar
    const peso = 85;
    const altura = 1.62;

    const imc = calculaImc(peso, altura) ;
    console.log(clasificarImc(imc));

})();

Este tipo de codigo e muito utilizado em oarte da web, io, ... para isolar