/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

     
    calcularImc(){//ela nao precisa parametro porque ja esta dentro class Pessoa
        return this.peso / Math.pow(this.altura, 2);
    }

    clasificarImc(){
    
        const imc = this.calcularImc();
        if(imc < 18.5){
            return 'Voce tem que comer demais, esta Abaixo de peso ';
        }else if (imc >= 18.5 && imc < 25){
            return 'Voce esta exelente, tem peso normal ';
        }else if (imc >= 25 && imc < 30){
            return 'Voce esta comendo muito, esta acima do peso ';
        }else if (imc >= 30 && imc <= 40){
            return 'Voce precisa parar de comer doce, esta obeso ';
        }else {
            return 'Prepare teu ataude, voce tem obesidad grave ';
        }
    }
}

const jose = new Pessoas('Jose', 70, 1.75);
console.log(jose);
console.log(`O IMC de ${jose.nome} e  ${jose.calcularImc()} ${jose.clasificarImc()}`);
const rina = new Pessoas('Rina', 85, 1.62);
console.log(rina);4
console.log(`O IMC de ${rina.nome} e  ${rina.calcularImc()} ${rina.clasificarImc()}`);
