/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
     calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
    Média = (nota 1 + nota 2 + nota 3) / 3;
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota1 = 9;
const nota2 = 7;
const nota3 = 8;

const mediaDeNotas = (nota1 + nota2 + nota3)/3;

if (mediaDeNotas < 5) {
    console.log('O aluno  REPROVO com ' + mediaDeNotas)
} else if (mediaDeNotas >= 5 && mediaDeNotas <= 7) {
    console.log('O aluno vai a RECUPERACAO com ' + mediaDeNotas)
} else {
    console.log('O aluno PASSO SEMESTRE com ' + mediaDeNotas)
}
