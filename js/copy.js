window.onload=function(){
let email = document.getElementById("linkEmail");
let copiamsg = document.getElementById("mensagemcopia");

email.onclick = function(){
    let address = 'dmfariamoraes@gmail.com';
    navigator.clipboard.writeText(address);
    copiamsg.innerHTML = 'Item copiado! ';
}
}