window.onload= function(){
    let result = document.getElementById("inverte");

    result.addEventListener("click", inverteOpostos);
};

function inverteOpostos(){
    var receive= document.getElementById("texto").value
    , result= document.getElementById("result")
    , revers;

    revers = receive.split("");
    revers = revers.reverse();
    result.textContent = revers.join(" ");
}
