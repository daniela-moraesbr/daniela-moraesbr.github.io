window.onload=function(){
let email = document.getElementById("emaild");
let copiamsg = document.getElementById("mensagemcopia")

email.onclick = function(){
    let address = 'dmfariamoraes@gmail.com';
    navigator.clipboard.writeText(address);
    copiamsg.innerHTML = 'Copiado! ';
}
}