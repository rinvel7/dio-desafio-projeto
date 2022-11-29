//Os condicional e comprovar se uma situacao e verdadeia o false.

//Exemplo: 
/* const camizetRenanAzul =  true; 
const camizetLemaoAzul = false;  */

/* 
********************************************************* if ************************************
const numero = 0;
const numeroPar = (numero % 2) === 0; //e uma pergunta que receve como resposta um sim ou nao

if (numeroPar) {
    console.log('Par')
} else {
    console.log('Impar')
} */

/* if (!numeroPar) { //! convierte en falso ou verdadeiro uma condicao
    console.log('Impar')
}
 *********************************************if, else ******************************************
//Outra forma de testar uma resposta

const numero = 17;
const numeroDivisivel5 = (numero % 5) === 0;

if (numeroDivisivel5 ) {
    console.log('Sim')
} else {
    console.log('Nao')
}
**************************************if, else if, else ***********************************
// pode ser utilizado else if quanto seja necesario

const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {//se a condicion e true, ejecuta o resultado
    console.log('O numero é invalido')
}else if (numero === 5 ) { // if continua compor se a condicao se cumple
    console.log('O numero é invalido')
}else if (numeroDivisivelPor5) {
    console.log('Sim') 
}else { //finaliza o compor
    console.log('Nao')
}*/
/***************************************** Mas simplificado ************************************ */

const numero = 5;
const eNumeroPar = (numero % 2) === 0;

if (eNumeroPar) {
    console.log('O numero é par');
}else {
    console.log('O numero é impar');
}