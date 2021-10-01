window.onload= function(){
    let result = document.getElementById("media");

    result.addEventListener("click", mediaAr);
};

function mediaAr(){
    var num1 = Number(document.getElementById("num1").value), num2 = Number(document.getElementById("num2").value), num3 = Number(document.getElementById("num3").value), result= document.getElementById("result"), mediaFinal;
    mediaFinal= (num1*2+num2*3+num3*5)/10;
    result.textContent = "A média final do aluno é "+mediaFinal+".";
    document.getElementById("num1").value= "";
    document.getElementById("num2").value= "";
    document.getElementById("num3").value= "";
}