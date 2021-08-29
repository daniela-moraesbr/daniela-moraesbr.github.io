let numbersUntilSix=[1, 2, 3, 4, 5, 6];
let numbersTwo=[2,2,2];
let numbersUntilThree=[1,2,3];

console.log("Arrays: ",numbersUntilSix," / ",numbersTwo," / ",numbersUntilThree);

/*Soma dos arrays*/
/*----------------------------------------------------------*/
let additionNumbersUntilThree= numbersUntilThree.reduce(function(acum, num){
    return acum+num;
}, 0);
console.log("Soma dos numeros ate 3: ",additionNumbersUntilThree);
/*----------------------------------------------------------*/

/*----------------------------------------------------------*/
let additionNumbersTwo= numbersTwo.reduce(function(acum, num){
    return acum+num;
}, 0);
console.log("Soma dos numeros 2: ",additionNumbersTwo);
/*----------------------------------------------------------*/


/*----------------------------------------------------------*/
let additionNumbersUntilSix = numbersUntilSix.reduce(function(acum, num){
    return acum+num;
}, 0);
console.log("Soma dos numeros ate 6: ",additionNumbersUntilSix);
/*----------------------------------------------------------*/



/*Addition odd numbers*/
/*----------------------------------------------------------*/
//filter odd numbers: numbersUntilThree
let oddNumbersUntilThree= numbersUntilThree.filter(function(oddnumber){
    return oddnumber%2!==0;
});

//Addition odd numbers
let additionOddNumbersUntilThree = oddNumbersUntilThree.reduce(function(acum, odd){
    return acum+odd;
}, 0);
console.log("Soma dos numeros impares ate 3: ",additionOddNumbersUntilThree);
/*----------------------------------------------------------*/

/*----------------------------------------------------------*/
//filter odd numbers: numbersTwo
let oddNumbersTwo= numbersTwo.filter(function(oddnumber){
    return oddnumber%2!==0;
});

//Addition odd numbers
let additionOddNumbersTwo = oddNumbersTwo.reduce(function(acum, odd){
    return acum+odd;
}, 0);
console.log("Soma dos numeros impares dentro dos 2: ",additionOddNumbersTwo);
/*----------------------------------------------------------*/

/*----------------------------------------------------------*/
//filter odd numbers: numberuntilsix
let oddNumbersSix= numbersUntilSix.filter(function(oddnumber){
    return oddnumber%2!==0;
});

//Addition odd numbers
let additionOddNumbers = oddNumbersSix.reduce(function(acum, odd){
    return acum+odd;
}, 0);
console.log("Soma dos numeros impares ate 6: ",additionOddNumbers);
/*----------------------------------------------------------*/



/*Product of the numbers*/
/*----------------------------------------------------------*/
function product (a){
    var res=1;
    for(var i=0; i<a.length;i++){
        res*=a[i];
    }
    return res;
}
console.log("Produto dos numeros do array ate 3: ",product(numbersUntilThree));
console.log("Produto dos numeros do array de 2: ",product(numbersTwo));
console.log("Produto dos numeros do array ate 6: ",product(numbersUntilSix));
/*----------------------------------------------------------*/
