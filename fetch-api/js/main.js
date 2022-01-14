const cep =document.querySelector("#cep");
const Showdata = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]; 
        }
    }
}

cep.addEventListener("blur",()=>{
    let search = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json`, options)
    .then(response =>{response.json()
        .then(data => Showdata(data))
    
    })
    .catch(e=> console.log('Deu Erro: '+ e, message));

    console.log(cep.value);    
})