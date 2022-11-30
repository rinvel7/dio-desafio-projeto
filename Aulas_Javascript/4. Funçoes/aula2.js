function escriveMeuNome(nome){
    return 'Meu nome e ' + nome + ',';
}


function verificarIdade(idade){
    if(idade < 18){
        return 'sou menor de edade';
    }else{
        return 'Sou mayor de edade';
    }
}
 
function main() {
    const idade = 43; 

    console.log( escriveMeuNome('Rina'), verificarIdade(idade));
}
main();
