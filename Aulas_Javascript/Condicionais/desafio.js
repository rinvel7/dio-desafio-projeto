/* Faca um programa para calcular o valor de um viagem.

Vocẽ terá  variaveis. Sendo elas:
1- Preço do etanol,
2- Preço do gasolina,
3- O tipo de combustivel que está no seu carro,
4-Gasto medio de combustivel do carro por KM,
5- Distancia en KM de viagem. 

Imprima no console o valor que será o gasto para realizar este viagem.
*/


/*--------------------------------------------------------------------------------------------|
                                    RESOLUCAO - DESAFIO                                           
---------------------------------------------------------------------------------------------*/ 

const preçoEtanol = 5.79;
const preçoGasolina = 6.66;
const tipoCombustivelCarro = 'Etanol';
const combustivelPorKm = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm  / combustivelPorKm; 

if(tipoCombustivelCarro === 'Etanol'){
    const valorGastoViagem = litrosConsumidos * preçoEtanol;
    console.log('O gasto total do viagem e ' + valorGastoViagem) 
} else {
    const valorGastoViagem = litrosConsumidos * preçoGasolina;
    console.log('O gasto total do viagem e ' + valorGastoViagem)
}

