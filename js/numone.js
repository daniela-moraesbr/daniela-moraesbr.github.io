window.onload= function(){
    let result = document.getElementById("sum");

    result.addEventListener("click", calcular);
};


function calcular() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").value= num1+num2;
    document.getElementById("num1").value=""; 
    document.getElementById("num2").value=""; 
}