/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 */

class Carros {
    marca;
    cor;
    gastoMeioPorKm;


    constructor(marca, cor, gastoMeioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMeioPorKm = gastoMeioPorKm; 
    }

    calcularGastoDePercurso(distanciaKm, preçoCombustible){
        return distanciaKm * this.gastoMeioPorKm * preçoCombustible;
    }
}

const carro1 = new Carros('fiat', 'vermelho', 1/12);
console.log(`O carro ${carro1.marca} ${carro1.cor}, tem um gasto de viagem de ${carro1.calcularGastoDePercurso(70, 5)} km`);
const carro2 = new Carros('Honda', 'preto', 1/10);
console.log(`O carro ${carro2.marca} ${carro2.cor}, tem um gasto de viagem de ${carro2.calcularGastoDePercurso(60, 5)} km`);
const carro3 = new Carros('Toyota', 'preto', 1/15);
console.log(`O carro ${carro3.marca} ${carro3.cor}, tem um gasto de viagem de ${carro3.calcularGastoDePercurso(58, 5)} km`);