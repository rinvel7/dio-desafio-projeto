
// Desafio
// Neste desafio, você terá que criar uma função que faça um número 
//como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 

// Entrada
// Você receberá um número onde: 
// Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" (15) ; 
// Se o número for apenas múltiplo de 3 -> "Fizz" ; 
// Se o número for apenas múltiplo de 5 -> "Buzz"; 
// Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

// Saída
// Retorne a palavra correta de acordo com o seu múltiplo. Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme exemplo abaixo:


let resultado = 15;
console.log(fizzBuzz(resultado));



function fizzBuzz(entrada) {
    if (entrada % 3 === 0 && entrada % 5 ===0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
         return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;    
}
