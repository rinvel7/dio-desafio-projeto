//simulando uma leitura
/* 
Em uma sala contem 5 alunos e para cada aluno foi sorteado um  numero de 1- 100
Faca un programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada:
5, 50, 10, 98, 23

Saida:
98
*/

const entrada = [5, 50, 10, 98, 23];
let i = 0;//contador de chamadas

function gets() {
    const valor = entrada[i];
    i++;//incrementa para ir a proximo numero
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports ={ gets, print }

