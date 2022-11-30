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

//-------------------------------MINHA RESPOSTA-----------------------------------------------------
/*
function calcularJuros(precoNormal, condicaoPagamento){
         
    if(condicaoPagamento === 1) {
        const desconto = precoNormal - 10*100/100;
        return 'Pago com debito, receve 10% de desconto ' + desconto;
    }else if(condicaoPagamento === 2) {
        const desconto = precoNormal - 15*100/100;
        return 'Pago com dinheiro ou pix, receve 15% de desconto ' + desconto;
    }else if(condicaoPagamento === 4) {
        const desconto = precoNormal + 10*100/100;
        return 'Voce pagara acima de duas vezes, ficara com juros de 10% ' + desconto;
    }else{
        return 'Voce pagara em duas vezes, nao receve desconto ' + precoNormal;
    }
}

function main(){
    const precoNormal = 100;
    const condicaoPagamento = 1;

    console.log(calcularJuros(precoNormal, condicaoPagamento));
}

main();

*/

//------------------------------------Resolucao Aula ----------------------------------------

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto /100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)))
}

    const precoNormal = 100;
    const condicaoPagamento = 4

    if(condicaoPagamento === 1) {
        console.log('Pago com debito, receve 10% de desconto ' + (aplicarDesconto(precoNormal, 10)));
    }else if(condicaoPagamento === 2) {
        console.log('Pago com dinheiro ou pix, receve 15% de desconto ' + (aplicarDesconto(precoNormal, 15)));
    }else if(condicaoPagamento === 4) {
        console.log('Voce pagara acima de duas vezes, ficara com juros de 10% ' + (aplicarJuros(precoNormal, 10)));
    }else{
        console.log('Voce pagara em duas vezes, nao receve desconto ' + precoNormal);
    }

    