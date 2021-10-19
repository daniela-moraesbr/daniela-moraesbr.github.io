window.onload = function(){
    let body = document.getElementsByTagName("body")[0];
    
    receitasList.forEach (function(receita){
        body.appendChild(montaDiv(receita));
    })
}

function montaDiv (receita){
    let divReceita = document.createElement("div");
    divReceita.classList.add("receita");    

    let ingredienteUl = document.createElement("ul");

    let preparoOl = document.createElement("ol");

    let titulo = document.createElement("h3");
    let tituloText = document.createTextNode(receita.nome);
    
    let foto =  document.createElement("img");
    foto.src= receita.foto;

    let descricao = document.createElement("p");
    let descricaoText = document.createTextNode(receita.descricao);

    titulo.appendChild(tituloText);
    descricao.appendChild(descricaoText);
    divReceita.appendChild(titulo)
    divReceita.appendChild(descricao);
    divReceita.appendChild(foto);

    divReceita.appendChild(ingredienteUl);

    receita.ingredientes.forEach((item, i) => {
        let ingredienteli = document.createElement("li");
        ingredienteli.appendChild(document.createTextNode(item));
        ingredienteUl.appendChild(ingredienteli);
        console.log(item); 
    });
    

    divReceita.appendChild(preparoOl);

    receita.preparo.forEach((item, i) => {
        let preparoli = document.createElement("li");
        preparoli.appendChild(document.createTextNode(item));
        preparoOl.appendChild(preparoli);
        console.log(item);
        
    });
    return divReceita;
}

