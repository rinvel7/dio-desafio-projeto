//OBJETO

const rina = {
    nome: 'Rina',
    idade: 43,
    //METODO
    descrever: function () {
        //THIS ELE CHAMA O FAZE REFERENCIA AOS OBJETOS ONDE ELE SE ENCONTRA
        console.log(`Meu nome e ${this.nome} e minha idade e ${this.idade}`);
    }
};
//COMO SE IMPRIME
/* console.log(rina.nome);
console.log(rina.idade);
console.log(rina);*/

//COMO SE IMCREMENTA UM OBJETO
/*rina.altura = 1.62;
delete rina.nome;

//COMO SE IMPRIME O CONJUNTO DE DADOS
console.log(rina);
*/

//SOBRE-ESCREVER UM METODO
/* rina.descrever = function(){
    console.log(`Meu nome e ${this.nome}`);
}
 */

//COMO SE IMPRIME O METODO
/* rina.descrever(); */

//ACESO A OS VALORES DE UM OBJETO A TRAVES DE UMA SINTAXIS MAS DINAMICA

console.log(rina['idade']);