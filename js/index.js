const txtPeso = document.getElementById("txtPeso");
const txtAltura = document.getElementById("txtAltura");
const btnCalculaIMC = document.getElementById("btnCalculaIMC");
const spnValor = document.getElementById("spnValor");
const input = document.getElementById("valida-cpf");

function calcularValor(peso, altura) {

    const imc = (peso / (Math.pow(altura, 2))).toFixed(1);
    let textoFormatado;

    if (imc <= 18.5) {
        textoFormatado = ` ${imc} classificado como MAGREZA.`
    } else if (imc >= 18.6 && imc <= 24.9) {
        textoFormatado = ` ${imc} classificado como NORMAL.`
    } else if (imc >= 25 && imc <= 29.9) {
        textoFormatado = ` ${imc} classificado como SOBREPESO.`
    } else if (imc >= 30 && imc <= 39.9) {
        textoFormatado = ` ${imc} classificado como OBESIDADE.`
    } else {
        textoFormatado = ` ${imc} classificado como OBESIDADE GRAVE.`
    }

    spnValor.textContent = textoFormatado;
}

function btnCalculaIMCClick() {
    if (validaCampos()) {
        const peso = Number(txtPeso.value);
        const altura = Number(txtAltura.value);
        txtPeso.value = "";
        txtAltura.value = "";
        calcularValor(peso, altura);
    } else {
        alert("Você não colocou valor em um dos campos obrigatórios ou valor é inválido.");
    }
}

function validaCampos() {

    if (txtPeso.value === "" || Number.isNaN(Number(txtPeso.value))) {
        txtPeso.focus();
        return false;

    } else if (txtAltura.value === "" || Number.isNaN(Number(txtAltura.value))) {
        txtAltura.focus();
        return false;
    }
    return true;
}

function enviarFormTest() {
    var cpf = document.getElementById("valida-cpf").value;
    if (!validarCPF(cpf)) {
        alert("CPF Inválido ou campo vázio");
        input.focus();
        input.classList.add('error');
    } else {
        input.classList.remove('error');
        alert("Cadastro realizado, muito obrigado por fazer parte da PedisaHealth");

    }
}


function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}


btnCalculaIMC && btnCalculaIMC.addEventListener('click', btnCalculaIMCClick);