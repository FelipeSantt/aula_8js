const cepRegex = /^[0-9]{8}$/;

cep.onkeyup = () => {
    if(cepRegex.test(cep.value.replace('-',''))){
        try {
            fetch(`https://viacep.com.br/ws/${cep.value.replace('-','')}/json/`)
            .then(response => response.json())
            .then(response => {
                if(response.erro){
                    alert('O cep esta errado');
                    cep.value = '';
                    return;
                }
                logradouro.value = response.logradouro;
                bairro.value = response.bairro;
                localidade.value = response.localidade;
                uf.value = response.uf;
            })
        } catch (error) {
            alert(error.message)
        }
    }
}