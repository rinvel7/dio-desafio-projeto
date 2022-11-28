/* Faca um programa para calcular o valor de um viagem.

Vocẽ terá  variaveis. Sendo elas:
1- Preço do combustivel,
2- Gasto medio de combustivel do carro por KM,
3- Distancia en KM de viagem. */


 //***************************************  DESAFIO  ******************************************* 

 const preçoCombustivel = 5.79;
 const combustivelPorKm = 12;
 const distanciaEmKm = 1580 / combustivelPorKm;

 let gastoTotalCombustivel =  distanciaEmKm * preçoCombustivel;

 console.log(gastoTotalCombustivel.toFixed(2)); //toFixed: converte um valor em texto e coloca 2 número de dígitos depois do ponto decimal