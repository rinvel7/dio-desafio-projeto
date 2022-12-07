//Desafio
//O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n.
// Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação
// por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'.
// Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. 
//Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas.
// Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, 
//retorne o fatorial desajeitado de n.

//Entrada
//A entrada consiste em um valor inteiro positivo N.

//Saída
//A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

//Exemplo 1:

//Entrada	Saída
//4 	7
//Explicação: 7 = 4 * 3 / 2 + 1 

//Exemplo 2:

//Entrada	Saída
//10	12
//Explicação: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1


// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 
/* 

let lines = gets().split("\n"); 
	let n = parseInt(lines.shift()); 
	
	if (n <= 2) { 
	 print(n); 	
	} 
 */
	
let lines = '4'.split("\n"); 
let n = parseInt(lines.shift());

let list = [];
let r = 0;

while (n >= 0) {
 list[n] = n;
 n--;
}

list.shift();
list.reverse();

if (list.length >= 4) {
 r = Math.floor((list[0] * list[1]) / list[2]);
 r = r + list[3];
 list.splice(0, 4);

 while (list.length >= 4) {
 r = r - Math.floor((list[0] * list[1]) / list[2]);
 r = r + list[3];
 list.splice(0, 4);

 }

 if (list.length == 3) {
 r = r - Math.floor((list[0] * list[1]) / list[2]);
 list.splice(0, 2);

 }
 
 if (list.length == 2) {
 r = r - Math.floor(list[0] * list[1]);
 list.splice(0, 2);
 }

 if (list.length == 1) {
 r = r - Math.floor(list[0]);
 list.splice(0, 2);
 }

}

console.log(r)