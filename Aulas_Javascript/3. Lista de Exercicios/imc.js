/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para 
    dar uma indicação sobre a condição de peso de uma pessoa adulta. 
    Formula do IMC:
    IMC = peso / (altura * altura)
    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/

const peso = 35.45;
const altura = 1.46;

const imc = peso / Math.pow(altura,2);//Math : clase, pow : metodo estatico

if(imc < 18.5){
    console.log('Voce tem que comer demais, esta Abaixo de peso ' + imc.toFixed(2))
}else if (imc >= 18.5 && imc < 25){
    console.log('Voce esta exelente, tem peso normal ' + imc.toFixed(2))
}else if (imc >= 25 && imc < 30){
    console.log('Voce esta comendo muito, esta acima do peso ' + imc.toFixed(2))
}else if (imc >= 30 && imc <= 40){
    console.log('Voce precisa parar de comer doce, esta obeso ' + imc.toFixed(2))
}else{
    console.log('Prepare teu ataude, voce tem obesidad grave ' + imc.toFixed(2))
}