window.onload= function(){
    let result = document.getElementById("hip");

    result.addEventListener("click", hipotenusa);
};


function hipotenusa() {
    var num1 = Number(document.getElementById("num1").value), num2 = Number(document.getElementById("num2").value), result= document.getElementById("result"), result1;
        result1= (Math.sqrt(Math.pow(num1, 2)+Math.pow(num2, 2)));
    result.textContent = "A hipotenusa desse triângulo retângulo é: "+ result1.toFixed(2);
    document.getElementById("num1").value=""; 
    document.getElementById("num2").value=""; 
}