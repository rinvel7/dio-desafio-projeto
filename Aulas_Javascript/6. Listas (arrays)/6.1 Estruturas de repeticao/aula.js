/* const nome = 'Rina Velasquez Ramos';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);//imprime nome por letras e para loop
    
}

const nome = 'Rina Velasquez Ramos';

for (let i = 0; i < nome.length; i++) {
    console.log(nome);//imprime nome completo quantas letras tem o nome e para loop
} 

const nome = 'Rina Velasquez Ramos';

for (let i = 0; i < nome.length; i++) {
    console.log(i);//imprime numeros quantas letras tem nome e para loop
}

const nome = 'Rina Velasquez Ramos';
for (let i = 0; i < nome.length; i++) {
    const letras = nome[i];
    console.log(letras);//imprime nome por letras e para loop
}*/

/* for (let i = 0; i < 10.; i++) {
    console.log(i); //imprime uma tabuada 0 - 9
    */

//---------------------------------------------EXERCICIO-------------------------------------------
const notas = [];

notas.push(5); 
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);
