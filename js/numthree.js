window.onload= function(){
    let result = document.getElementById("prime");

    result.addEventListener("click", pNumber);
};


function pNumber() {
    var nump = Number(document.getElementById("number").value), result= document.getElementById("result");
    if(nump !=2 && nump != 1&& !isNaN(nump)){
         if((nump%2)===1){
            result.textContent = "O número "+ nump+ " é primo";
        }else{
            result.textContent= "O número "+ nump+" não é primo";
        }
    }else{
        if(nump==2){
            result.textContent = "O número "+ nump+ " é primo";
        }else{
            if(nump==1){
                result.textContent = "1 não é considerado um número primo";
            }
        }
    }
}
