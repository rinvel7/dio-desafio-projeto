/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando 
    o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida 
    e efetuar o cálculo adequado.
    Código Condição de pagamento:
    1- À vista Débito, recebe 10% de desconto;
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoNormal = 100;
const condicaoPagamento = 2;


if(condicaoPagamento === 1) {
    const desconto = precoNormal - 10*100/100;
    console.log('Pago com debito, receve 10% de desconto ' + desconto)
}else if(condicaoPagamento === 2) {
    const desconto = precoNormal - 15*100/100;
    console.log('Pago com dinheiro ou pix, receve 15% de desconto ' + desconto)
}else if(condicaoPagamento === 4) {
    const desconto = precoNormal + 10*100/100;
    console.log('Voce pagara acima de duas vezes, ficara com juros de 10% ' + desconto)
}else{
    console.log('Voce pagara em duas vezes, nao receve desconto ' + precoNormal)
}