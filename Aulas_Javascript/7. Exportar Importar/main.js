
/* //Objetc is Destroyed
const { gets, print } = require('./funcoes_auxiliares');

const numerosSorteados = [];
//Adiciona os numeros sorteados
for(let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}
//Acha numero maior
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor); */
/* console.log(funcoes);//imprime function gets e print

console.log(funcoes.gets());//Imprime so o resultado de gets */

//codigo mais simplificado
/* const { gets, print } = require('./funcoes_auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = [];

for(let i = 0; i < quantidadeDeAlunos; i++){
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    };
}
print(maiorValorEncontrado);
 */