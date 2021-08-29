function minimumValue (number){
    var result, resultf;
        if (number>=100){
            resultf= Math.floor(number/100);
            console.log("100: ",resultf);
            result= number%100;

            if(result>=50){
                resultf= Math.floor(result/50);
                console.log("50: ",resultf)
                result= result%50;

                    if(result>=20){
                        resultf= Math.floor(result/20);
                        console.log("20: ",resultf); 
                        result= result%20;

                        if(result>=10){
                            resultf= Math.floor(result/10);
                            console.log("10: ",resultf);  
                            result= result%10;
                            
                            if(result>=5){
                                resultf= Math.floor(result/5);
                                console.log("5: ",resultf);  
                                result= result%5;

                                if(result>=2){
                                    resultf= Math.floor(result/2);
                                     console.log("2: ",resultf);                                     
                                };
                            };
                        };
                    };
            };
 
        };
    };
minimumValue(892);