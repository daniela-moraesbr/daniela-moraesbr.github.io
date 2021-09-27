window.onload=function(){
let email = document.getElementById("email");

email.onclick = function(){
    let address = 'dmfariamoraes@gmail.com';
    navigator.clipboard.writeText(address);
    emailText.innerHTML = 'Copiado! ';
}
}