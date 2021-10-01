window.onload= function(){
    let result = document.getElementById("salary");

    result.addEventListener("click", grausCelsius);
};

function grausCelsius(){
    var fah = Number(document.getElementById("number").value), result= document.getElementById("result"), celsius;
    celsius= (5*(fah-32))/9;
    result.textContent = fah+" Fahrenheit é igual a "+ celsius.toFixed(2);
    document.getElementById("number").value= "";
}