let nome_prato = '';
let nome_bebida = '';
let nome_sobremesa = '';

let pratoSelecionado = '';
let bebidaSelecionada = '';
let sobremesaSelecionada = '';

let valor_prato = '';
let valor_bebida = '';
let valor_sobremesa = '';

let valor_pratoN = 0;
let valor_bebidaN = 0;
let valor_sobremesaN = 0;


let valor1 ='';
let valor2 ='';
let valor3 ='';

let total = 0;

let mensagem = '';



function selecionarPrato (seletor) {
    nome_prato = seletor.innerHTML;
    valor_prato = seletor.innerHTML;

    const selecionadoP = document.querySelector('.prato .selecionado');

    if ( selecionadoP !== null ) {
        selecionadoP.classList.remove('selecionado');
    }

    const prato = document.querySelector(seletor);
    
    prato.classList.add('selecionado');

    pratoSelecionado = document.querySelector('.prato .selecionado .nome-item');
    nome_prato = pratoSelecionado.innerHTML;

    valor1 = document.querySelector('.prato .selecionado .preco-item');
    valor_prato = valor1.innerHTML;

    valor_pratoN = parseFloat(valor_prato.replace("R$", "").replace(",", "."));
    

    finalizar();


}

function selecionarBebida (seletor) {
    
    nome_bebida = seletor.innerHTML;
    valor_bebida = seletor.innerHTML;

    const selecionadoB = document.querySelector('.bebida .selecionado');

    if ( selecionadoB !== null ) {
        selecionadoB.classList.remove('selecionado');
    }

    const bebida = document.querySelector(seletor);
    
    bebida.classList.add('selecionado');

    bebidaSelecionada = document.querySelector('.bebida .selecionado .nome-item');
    nome_bebida = bebidaSelecionada.innerHTML;
    
    valor2 = document.querySelector('.bebida .selecionado .preco-item');
    valor_bebida = valor2.innerHTML;

    valor_bebidaN = parseFloat(valor_bebida.replace("R$", "").replace(",", "."));

    finalizar();

}

function selecionarSobremesa (seletor) {
    nome_sobremesa = seletor.innerHTML;
    valor_sobremesa = seletor.innerHTML;

    const selecionadoS = document.querySelector('.sobremesa .selecionado');

    if ( selecionadoS !== null ) {
        selecionadoS.classList.remove('selecionado');
    }

    const sobremesa = document.querySelector(seletor);
    
    sobremesa.classList.add('selecionado');

    sobremesaSelecionada = document.querySelector('.sobremesa .selecionado .nome-item');
    nome_sobremesa = sobremesaSelecionada.innerHTML;
    
    valor3 = document.querySelector('.sobremesa .selecionado .preco-item');
    valor_sobremesa = valor3.innerHTML;

    valor_sobremesaN = parseFloat(valor_sobremesa.replace("R$", "").replace(",", "."));

    finalizar();
}


function finalizar () {
    if (nome_prato !== ''){
        if (nome_bebida !== '') {
            if (nome_sobremesa !== '') {
                const continuar = document.querySelector('.botao').removeAttribute('disabled');
                const cont = document.querySelector('.botao');
                cont.classList.add('avancar');
                cont.innerHTML = "Fechar pedido";
            }
        }
    }

}


function calcular() {
   
    total = (valor_pratoN) + (valor_bebidaN) + (valor_sobremesaN);
    total = total.toFixed(2);
    total = total.replace(".", ",");
}


function mensagemWpp () {
   mensagem = `Olá, gostaria de fazer o pedido:
   - Prato: ${nome_prato}
   - Bebida:  ${nome_bebida}
   - Sobremesa:  ${nome_sobremesa}
   Total: R$ ${total}`;
                  
    window.open(`https://wa.me/55999999999?text=${encodeURIComponent(mensagem)}`);
                        
}

    
    
   
   
