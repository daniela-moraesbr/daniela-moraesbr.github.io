
window.onload= function(){
    let result = document.getElementById("contar");

    result.addEventListener("click", ()=>{
        part1 = texto.value.split(' ');
        let ocor = [];
        let txt = [];
        for (i=0;i<part1.length;i++) {
            ocor[i] = contaOcorr(texto.value, part1[i]);
            txt[i]='A palavra '+'<b>'+part1[i]+'</b>'+ ' teve '+ ocor[i] + ' ocorrências' + "<br></br>";
        }
        document.getElementById("result").innerHTML=txt.join("");
    });
};


function contaOcorr(s, palavra) {
    let replace = palavra;
    let re = new RegExp(replace,"g");
    txt = s.replace(/(^\s*)|(\s*$)/gi,"");
    txt = txt.replace(/[ ]{2,}/gi," ");
    txt = txt.replace(/\n /,"\n"); 
    return txt.match(re, '').length;
}