window.onload= function(){
    let ocorrencias = document.getElementById("ocorre");

    ocorrencias.addEventListener('click', contaOcorre);
}

function contaOcorre(){
    let text = document.getElementById('texto').value,
    result = document.getElementsByName('result');

    //precisa separar em funções e fazer a função de contar palavras;
   
    text = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
    text = text.toLowerCase();
    text = text.split(' ');
    console.log(text);
    
    for(let i=0; i<text.length; i++){
        if( text[i]==text[i+1])
        result.textContent = text
    }
}

//a vida_ -:;é, /doidera! MAS =#{}*o &que. posso?%