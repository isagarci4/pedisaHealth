function pesquisarEnderecoFech(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
        return response.json();
    })
    .then(endereco => {
        document.getElementById("state").value = endereco.uf;
        document.getElementById("city").value = endereco.localidade;
        document.getElementById("adress").value = endereco.logradouro;
    })
    .catch(err => {
        alert("Erro ao consultar serviço");
        console.log(err);
    })
}

function salvarCadastro(){
    fetch("http://127.0.0.1:8000/api/cadastro", {
        method: "POST",
        headers: new Headers({
            Accept: "application/json",
            'Content-Type': "application/json",
    }),
    body: JSON.stringify({
        nome: document.getElementById("name").value,
        sobrenome: document.getElementById("lastname").value,
        dataNascimento: document.getElementById("born").value,
        sexo: document.querySelector("gender:checked").value,
        cep: document.getElementById("cep").value,
        cpf: document.getElementById("cpf").value,
        cidade: document.getElementById("city").value,
        uf: document.getElementById("state").value,
        logradouro: document.getElementById("adress").value,
        numeroLogradouro: document.getElementById("number").value
        })
    })
    .then(response => {
        return response.json();
    }).then(response => {
        alert(response.message);
    }).catch(err => {
        alert("Erro ao salvar cadastro");
        console.log(err);
    })
}