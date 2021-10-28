window.onload = incluiNoMain, mudaCor;

    let url = 'https://rafaelescalfoni.github.io/desenv_web/filmes.json';

    let xhttp =  new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let filmes = JSON.parse(xhttp.responseText);
            incluiNoMain(filmes);
        }
    }  
    xhttp.open("GET", url);
    xhttp.send();

function incluiNoMain(filmes){

    filmes.forEach(function(filme){
        let main = document.getElementsByTagName("main")[0];
        main.appendChild(carregaFilmes(filme));
    });

};
    
function carregaFilmes(filme){
    let divFilmes = document.createElement("div");
    divFilmes.classList.add("filmesdiv");    


    let tituloh3 = document.createElement("h3");
    let tituloText = document.createTextNode(filme.titulo);

    let resumop = document.createElement("p");
    let resumoText = document.createTextNode(filme.resumo)
    ;
    resumop.id="resumo";

    let generosUl = document.createElement("ul");

    let tSemelhantesUl = document.createElement("ul");

    let idadeclassifp = document.createElement("p");
    let idadeclassifText = document.createTextNode(filme.classificacao);
    idadeclassifp.id="classificacao";

    let imgf = document.createElement("img");
    imgf.src= filme.figura;

    let elencoUl = document.createElement("ul");
    elencoUl.id="elenco";
    

    let opinioesUl = document.createElement("ul")
    opinioesUl.id="opinioes";


    tituloh3.appendChild(tituloText);
    divFilmes.appendChild(tituloh3);

    divFilmes.appendChild(imgf);

    divFilmes.appendChild(elencoUl);
    filme.elenco.forEach((item, i)=>{
        let elencoLi = document.createElement("li");
        elencoLi.appendChild(document.createTextNode(item));
        elencoUl.appendChild(elencoLi);
    });

    resumop.appendChild(resumoText);
    divFilmes.appendChild(resumop);

    divFilmes.appendChild(generosUl);
    filme.generos.forEach((item, i)=>{
        let generoLi = document.createElement("li");
        generoLi.appendChild(document.createTextNode(item));
        generosUl.appendChild(generoLi);
    });

    divFilmes.appendChild(tSemelhantesUl);
    filme.titulosSemelhantes.forEach((item, i)=>{
        let tSemelhantesLi = document.createElement("li");
        tSemelhantesLi.appendChild(document.createTextNode(item));
        tSemelhantesUl.appendChild(tSemelhantesLi);
    });

    divFilmes.appendChild(opinioesUl);
    filme.opinioes.forEach((item, i)=>{
        let opinoesLi = document.createElement("li");
        let opinoesLi2 = document.createElement("li")
        opinoesLi.appendChild(document.createTextNode(`${item.rating} estrelas`));
        opinoesLi2.appendChild(document.createTextNode(item.descricao));
        opinioesUl.appendChild(opinoesLi);
        opinioesUl.appendChild(opinoesLi2);

    });

    idadeclassifp.appendChild(idadeclassifText);
    divFilmes.appendChild(idadeclassifp);

    mudaCor(idadeclassifp);

    return divFilmes;
}

function mudaCor(p){
    if(p.textContent<='14'){
        p.style.backgroundColor="#77DD77";
    }else{
        if(p.textContent>'14' && p.textContent<'18'){
            p.style.backgroundColor="yellow";
        }else{
            if(p.textContent>='18'){
                p.style.backgroundColor="#FF0000";
            }
        }
    }
}