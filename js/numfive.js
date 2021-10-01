window.onload= function(){
    let result = document.getElementById("salary");

    result.addEventListener("click", salario);
};

function salario(){
    var sal = Number(document.getElementById("number").value), result= document.getElementById("result"), result1;
    result1= sal - (sal/10);
    result.textContent ="O salário final é: "+result1;
    document.getElementById("number").value=""; 
}