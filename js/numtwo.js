window.onload= function(){
    let result = document.getElementById("mq");

    result.addEventListener("click", maiorqMenorq);
};


function maiorqMenorq() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var result= document.getElementById("result");
    
    if (num1>num2==true) {
        result.textContent = "O resultado: "+ num1+" é maior que "+ num2;
     }
     else { 
        result.textContent = "O resultado: "+ num1+" é menor que "+ num2;
     }
}