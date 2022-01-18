
$(function(){
    fetch('https://rafaelescalfoni.github.io/desenv_web/receitas.json')
    .then(res=>res.json())
    .then(data=>{
        let r = "";
        data.forEach(recipe => {
            const preparoR = $("<ul>");
            const ingredientR = $("<ul>");
            recipe.preparo.forEach((preparo)=>{
                const li = $("<li>");
                li.text(preparo);
                preparoR.append(li);
            })

            recipe.ingredientes.forEach(function(ingrediente){
                const li = $("<li>");
                li.text(ingrediente);
                ingredientR.append(li);
            })

            const r = $("<section>");
            r.append(`<h1>${recipe.nome}</h1>
                    <img src = "${recipe.foto}">
                    <h3>${recipe.descricao}</h3>`)
                    r.append("<h4>Ingredientes</h4>")
                    r.append(ingredientR);
                    r.append("<h4>Ingredientes</h4>")
                    r.append(preparoR);

                    $("body").append(r);


        });
    })

});