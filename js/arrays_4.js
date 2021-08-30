let safeb=[100, 50,20, 10, 5, 2];
let total=0; 
function minimumValue (number){
    if(safeb[0]<=number){
        while (safeb[0]<=number){
            number=number-safeb[0];
            total++;
        }
        console.log("100: ",total);

    }
    total=0;
    if(safeb[1]<=number){
        while (safeb[1]<=number){
            number=number-safeb[1];
            total++;
        }
        console.log("50: ",total);

    }
    total=0;
    if(safeb[2]<=number){
        while (safeb[2]<=number){
            number=number-safeb[2];
            total++;
        }
        console.log("20: ",total);
    }
    total=0;
    if(safeb[3]<=number){
        while (safeb[3]<=number){
            number=number-safeb[3];
            total++;
        }
        console.log("10: ",total);

    }
    total=0;
    if(safeb[4]<=number){
        while (safeb[4]<=number){
            number=number-safeb[4];
            total++;
        }
        console.log("5: ",total);

    }
    total=0;
    if(safeb[5]<=number){
        while (safeb[5]<=number){
            number=number-safeb[5];
            total++;
        }
        console.log("2: ",total);

    }
} 
minimumValue(2);