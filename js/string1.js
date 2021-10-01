window.onload= function(){
    let result = document.getElementById("inverte");

    result.addEventListener("click", inverteOpostos);
};

function inverteOpostos(){
    var inv= document.getElementById("texto").value
    , result= document.getElementById("result")
    , parte1, parte2;
    parte1 = inv.split("");
    parte2= parte1.reverse()
    result.textContent = parte2;
}
