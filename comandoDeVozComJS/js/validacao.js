function verificaValorValido(chute){
    const numero = +chute; //+chute (tenta converter o numero), poderia ser parseInt(chute)

    if(ehNumero(numero)){
        divChute.innerHTML += '<div id="destaca">valor inválido</div>';
        return
    }
    if(numeroDentroDoLimite(numero)){
        divChute.innerHTML += `<div id="destaca">valor inválido! Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(numero == numeroSecreto){
        document.body.innerHTML = `<h2>Parabéns! Você ganhou</h2>
                                   <h4 style>O número secreto era <span id="destaca">${numeroSecreto}</span></h4>
                                   <button id="btnR">Reiniciar o jogo</button>`;
    }else if(numero > numeroSecreto){
        divChute.innerHTML += `<div id="destaca">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
    }else{
        divChute.innerHTML += `<div id="destaca">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
    }
}

function ehNumero(numero){
    return Number.isNaN(numero);
}

function numeroDentroDoLimite(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e=>{
    window.location.reload();
})