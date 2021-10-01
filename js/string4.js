
window.onload= function(){
    let result = document.getElementById("indicaM");

    result.addEventListener('click', ()=>{
        part1 = texto.value.split(' ');
        let ocor = [];
        let max = [];
        let maxHelper= [];
        let j= 0;
        let i=0;
        for (let i=0;i<part1.length;i++) {
            ocor[i] = contaOcorr(texto.value, part1[i]);
            if (ocor[i]>=Math.max(...ocor)){
                max[j]= part1[i];
                j++;
            }
        }
        for (let i=0, j=0; i<max.length; j++){
            maxHelper[j]= max[i];
            i= i+Math.max(...part1);
        }
        document.getElementById("result").innerHTML= " o "+ maxHelper+" o "+Math.max(...part1);
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