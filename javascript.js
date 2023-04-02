function selecionarPrato (seletor) {
    const selecionadoP = document.querySelector('.prato .selecionado');

    if ( selecionadoP !== null ) {
        selecionadoP.classList.remove('selecionado');
    }

    const prato = document.querySelector(seletor);
    
    prato.classList.add('selecionado');


}

function selecionarBebida (seletor) {
    const selecionadoB = document.querySelector('.bebida .selecionado');

    if ( selecionadoB !== null ) {
        selecionadoB.classList.remove('selecionado');
    }

    const bebida = document.querySelector(seletor);
    
    bebida.classList.add('selecionado');


}

function selecionarSobremesa (seletor) {
    const selecionadoS = document.querySelector('.sobremesa .selecionado');

    if ( selecionadoS !== null ) {
        selecionadoS.classList.remove('selecionado');
    }

    const sobremesa = document.querySelector(seletor);
    
    sobremesa.classList.add('selecionado');


}

function finalizar () {

}

