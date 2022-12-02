/*
const alunos = ['Joao', 'Vitor', 'Marina'];

//INCREMETA
alunos.push('Renan');//DINAMICAMENTE .push coloca o elemento no ultima posicao
alunos[4] = 'Rina';//DIRECTAMENTE | imprime ['Joao', 'Vitor', 'Marina', 'Renan', 'Rina']

//SUSTUIR
alunos.push('Renan');
alunos[3] = 'Rina';
console.log(alunos);//imprime ['Joao', 'Vitor', 'Marina', 'Rina']
*/

//MISTURAR DADOS
/*
const alunos = [];
alunos.push('teste'); 
alunos.push('10');  // imprime ['teste', '10']
*/

//REMUEVE
/*
 const   numeros = ['1', '2', '3'];
console.log(numeros);
console.log(numeros.pop());//.pop remueve a ultima posicao ---> 3
console.log(numeros);//imprime ['1', '2'] 

const   numeros = ['1', '2', '3'];
console.log(numeros);
console.log(numeros.shift());//.shift remueve a primeira posicao ---> 1
console.log(numeros);//imprime ['2', '3']
*/

//LONGITUD
const notas = [];

notas.push(5); 
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);

console.log(notas.length);//imprime 5

