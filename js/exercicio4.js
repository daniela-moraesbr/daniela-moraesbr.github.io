//exercicio4
var fibonacci = function(n){
    var currently =0, last=1, newone;
    for(var i=1; i<=n; i++){
        newone = currently+last;
        last=currently;
        currently=newone;
        console.log(currently);

    }
}
fibonacci(100);
