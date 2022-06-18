const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio (){
    return parseInt(Math.random()*maiorValor+1);
}

const elementoMenorValor = document.getElementById('menorValor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maiorValor');
elementoMaiorValor.innerHTML = maiorValor;
