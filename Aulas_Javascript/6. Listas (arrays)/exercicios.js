//1) Crie um programa que dado um número imprima a sua tabuada.

/* const numero = 2;

for (let i = 1; i <= 10.; i++) 
    const tabuada = i * numero;
    console.log(tabuada);
}
*/ 

//-------------------------------------------------------------------------


//2) Crie um programa que seja capaz de percorrer uma lista de números 
      //e imprima cada número Par encontrado.
/*
const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero % 2 === 0){
    console.log(numero);    
    }
}*/
//---------------------------------------------------------------------------

//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Victor', 'Rina', 'Valeria', 'Sebas', 'Maria', 'Vicky'];

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes.filter(nomeComV => (nomeComV.charAt(0) == "V"));   
    console.log(nome);
}

/* var estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];
var resultado = estados.filter( estadosComS  => (estadosComS.charAt(0) == "S"));
console.log(resultado); */
    



//4) Faça um programa que preencha uma lista com todos os números pares contidos no 
     //intervalo de 10 a 50;

    /*const numero = 50;
        for (let i = 10; i <= numero; i += 2) {
        console.log(i);    
    }/* 

//--------------------------------------------------------------------------------------------------

//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram 
    //de recuperação (média < 5).
    //Ex de lista = [2, 7, 3, 8, 10, 4]

    /* const lista = [2, 7, 3, 8, 10, 4];

        for (let i = 0; i < lista.length; i++) {
            const media = lista[i];
            if(media < 5){
            console.log(media);    
        }
    }
 */
//---------------------------------------------------------------------------------------------

//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
    //Ex de lista de notas = [2, 7, 3, 8, 10, 4]
/* 
     const notas = [2, 7, 3, 8, 10, 4];

        for (let i = 0; i < notas.length; i++){
            const maxNota = notas[i]
            if(maxNota === 10){ 
            console.log(maxNota);
        }
     }
       */