window.onload= function(){
    let result = document.getElementById("marcar");

    result.addEventListener("click", marcaVogais);
};

function marcaVogais(){
    var inv= new String(document.getElementById("texto").value)
    , parte1;
    parte1 = inv.split("");
    for(let i=0; i<parte1.length; i++){
        if(parte1[i]=='A' || parte1[i]=='a'){
            parte1[i]=`<u>${parte1[i].bold()}</u>`;

        }else if(parte1[i]=='E' || parte1[i]=='e'){
            parte1[i]=`<u>${parte1[i].bold()}</u>`;

        }else if(parte1[i]=='I' || parte1[i]=='i'){
        parte1[i]=`<u>${parte1[i].bold()}</u>`;

        }else if(parte1[i]=='O' || parte1[i]=='o'){
        parte1[i]=`<u>${parte1[i].bold()}</u>`;

        }else if(parte1[i]=='U' || parte1[i]=='u'){
        parte1[i]=`<u>${parte1[i].bold()}</u>`;
    }
    document.getElementById("result").innerHTML=parte1.join('');
}
}