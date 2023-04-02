let nome_prato = '';
let nome_bebida = '';
let nome_sobremesa = '';


function finalizar () {
    if (nome_prato !== ''){
        if (nome_bebida !== '') {
            if (nome_sobremesa !== '') {
                const continuar = document.querySelector('.botao');
                continuar.innerHTML = "Fechar pedido";
                continuar.classList.add('avancar');
                continuar = document.querySelector('.botao').removeAttribute("disabled");
            }
        }
    }

}

function selecionarPrato (seletor) {
    nome_prato = seletor.innerHTML;

    const selecionadoP = document.querySelector('.prato .selecionado');

    if ( selecionadoP !== null ) {
        selecionadoP.classList.remove('selecionado');
    }

    const prato = document.querySelector(seletor);
    
    prato.classList.add('selecionado');

    finalizar();


}

function selecionarBebida (seletor) {
    
    nome_bebida = seletor.innerHTML;

    const selecionadoB = document.querySelector('.bebida .selecionado');

    if ( selecionadoB !== null ) {
        selecionadoB.classList.remove('selecionado');
    }

    const bebida = document.querySelector(seletor);
    
    bebida.classList.add('selecionado');

    finalizar();

}

function selecionarSobremesa (seletor) {
    nome_sobremesa = seletor.innerHTML;

    const selecionadoS = document.querySelector('.sobremesa .selecionado');

    if ( selecionadoS !== null ) {
        selecionadoS.classList.remove('selecionado');
    }

    const sobremesa = document.querySelector(seletor);
    
    sobremesa.classList.add('selecionado');

    finalizar();
}


