var a = 3;
var N = 18;

let soma = 0;

for (i = 1; (a * i) <= N; i++) {
  let resultado = a * i;
  console.log(resultado)
  soma += resultado;
 }

 console.log(soma)
