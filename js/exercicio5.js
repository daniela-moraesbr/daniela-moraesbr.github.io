//exercicio5
var primeNumber= function(limit){
    for(var pnumber=2; pnumber<=limit; pnumber++){
      if(isPrimeNumber(pnumber)) console.log(pnumber);
    }
  }
  var isPrimeNumber= function(pnumber){
    for(let divider=2;divider< pnumber; divider++){
      if(pnumber%divider === 0){
        return false;
      };
  };
  return true;
  };
  primeNumber(1000);