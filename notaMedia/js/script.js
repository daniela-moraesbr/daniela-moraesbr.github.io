"use strict";
const submit = document.querySelector('#submit');

submit.addEventListener('click', function(event){
    event.preventDefault();
    let nome = document.querySelector('#nome').value;
    let n1 = parseFloat(document.querySelector('#n1').value);
    let n2 = parseFloat(document.querySelector('#n2').value);
    let notaMedia = mediaAluno(n1,n2);
    let texto = nome+' obteve média '+notaMedia+' e o seu grau foi de '+classificacao(notaMedia);
    ImprimiTexto(texto);
});

function ImprimiTexto (txt){
    let div = document.createElement('div');
    let main = document.getElementsByTagName('main')[0];
    let divTexto = document.createTextNode(txt);
    div.appendChild(divTexto);
    main.appendChild(div);
    // document.body.appendChild(textNode);**testar
}

function mediaAluno (nota1, nota2){
    return (nota1+nota2)/2;
}

function classificacao (mediaAluno) {
    if(mediaAluno > 8){
        return 'A';
    }else if (mediaAluno >= 6){
        return 'B';
    }else if (mediaAluno >= 4){
        return 'C';
    }else if (mediaAluno >= 2){
        return 'D';
    }else{
        return 'E';
    }

}