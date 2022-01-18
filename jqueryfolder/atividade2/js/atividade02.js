//função construtora de objetos Produto
var Produto = function(id, nome, categoria, img, valorUnitario){
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.foto = img;
    this.valorUnitario = valorUnitario;
}

function pesquisaPorId(vetor, objId){
	return vetor.find(function(item){
		return item.id === objId;
	})
}

// carregamento de cardápio de exemplo
var cardapio = [new Produto(1, "Capuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/capuccino.png",7)
			, new Produto(2, "Espresso", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/espresso.png",4)
			, new Produto(3, "Frapuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/frapuccino.png",8)
			, new Produto(4, "Chococcino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chococcino.png",7)
			, new Produto(5, "Chocolate Quente", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chocolate_quente.png",10)
			, new Produto(6, "Frapê", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/frape.png",12)
			, new Produto(7, "Suco de Laranja", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/suco_laranja.png",10)
            , new Produto(8, "Açaí", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/acai.png",12)
            , new Produto(9, "Bolo de Laranja", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/bolo_laranja.png",8)];
		
$(function(){
			
	var produtosEscolhidosArray = [];
    /* 
        each é uma função do jQuery que funciona como o foreach do javascript. Tem dois parâmetros: o primeiro é a lista que iremos iterar; o segundo é uma função que será executada a cada laço de iteração. A função tem dois parâmetros - ind, o índice da iteração e item, o objeto recuperado a cada iteração.
        
        Nos nomes ind e item podem ser alterados para o nome que for mais interessante, ok?

        No exemplo abaixo, eu usei o each para iterar a lista "cardapio". A cada laço, cada elemento é atribuído na variável "item".
    */
	$.each(cardapio, function(ind, item){
        var itemLista = $("<li>");
        // setando o item, id e conteúdo
        itemLista.attr("id", item.id);
        itemLista.text(item.nome);
        // adicionando na lista de cardápio
		$("#cardapio").append(itemLista);
	});

	$("#cardapio").on("click", "li",function(){
		var itemEscolhido = pesquisaPorId(cardapio, $(this).attr("id"));
        console.log(itemEscolhido);
        produtosEscolhidosArray.push(itemEscolhido);
        let itemLista = $("<li>");
        itemLista.attr("id", itemLista.id);
        itemLista.text(itemEscolhido.nome);

        $("#pedidos").append(itemLista);
        let total =0;
        produtosEscolhidosArray.forEach(element=>{
            total += element.valorUnitario;
        });
        
        $("#valorTotal").text("Total R$" + total + ",00");
	});
});