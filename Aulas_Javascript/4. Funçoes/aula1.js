/* 

function sayMyName(nome){ //uma funcao que tem um nome, 
    console.log('Your name is ' + nome);//codigo que deve ser executado
}

sayMyName('Rina');//invocacao ou chamada de funcao para ser executada
sayMyName('Renan'); */

//----------------------------------------------------------------------------

/* function quadrado(valor) {
    return valor * valor;
}

console.log(quadrado(10) + quadrado(10)); */

//----------------------------------------------------------------------------

/* function incrementarJuros(valor, porcentualJuros) {//funcoe com mas de um parametros
    const valordeAcrecimo = (porcentualJuros / 100) * valor;//procedimento que nao tem retono
    return valor + valordeAcrecimo;//funcao que retorna um valor
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15)); */


//          ORGANIZACION DE CODIGO


function calcularJuros(){

}

/* function main(){ //Todos os programas vai ser en funcao de funcao main
    console.log('Programa princpial');//vai criar funcoes necesarias (ex: calcularJuros) que seran invocadas dentro do bloco de funcao main
    calcularJuros();//funcao auxiliar, criada fora
}

main(); */

//   Main
(function(){ //llamada funcoes anonimas por nao ter nome
    console.log('Programa princpial');
    calcularJuros();
})();