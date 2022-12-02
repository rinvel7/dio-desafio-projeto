//CLASSE

class Pessoa { 
    nome;
    idade;
    anoNacimento;

//CONSTRUTOR

constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.anoNacimento = 2022 - idade;
}

    descrever(){
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
}

//INSTANCIA
/* const rina = new Pessoa();
rina.nome = 'Rina';
rina.idade = 43;

const sebas = new Pessoa();
sebas.nome = 'Sebas';
sebas.idade = 11; */

//FAZ REFERENCIA AO CONSTRUTOR
/* const rina = new Pessoa('Rina', 43);
const sebas = new Pessoa('Sebas', 11); */

/* console.log(rina)//IMPRIME OS DATOS EM FORMA DE OBJETO{}
console.log(sebas) */

/*rina.descrever();//IMPRIME O TEXTO CONCATENADO
sebas.descrever();*/ 

/*console.log(rina);*/

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
         console.log(`${p1.nome} e mais velho(a) que ${p2.nome}`);
    }else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} e mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem  misma idade`);;
    }
}

const rina = new Pessoa('Rina', 43);
const sebas = new Pessoa('Sebas', 11);

compararPessoas(rina, sebas);