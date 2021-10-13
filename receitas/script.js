window.onload = function(){
    let body = document.getElementsByName("body")[0];
    console.log(body);
    for (receita of receitasList){
        body.appendChild(montaDiv(receita));
    }
    /*receitasList.forEach (function(receita){

    })*/
}

function montaDiv (receita){
    let divReceita = document.createElement("div");
    divReceita.classList.add("receita");
    let titulo = document.createElement("h3");
    let foto =  document.createElement("img");
    let tituloText = document.createTextNode(receita.nome);
    foto.src= receita.foto;
    
    let descricao = document.createElement("p");
    let descricaoText = document.createTextNode(receita.descricao);

    titulo.appendChild(tituloText);
    descricao.appendChild(descricaoText);
    divReceita.appendChild(titulo)
    divReceita.appendChild(descricao);
    return divReceita;
}