const txtPeso = document.getElementById("txtPeso");
const txtAltura = document.getElementById("txtAltura");
const btnCalculaIMC = document.getElementById("btnCalculaIMC");
const spnValor = document.getElementById("spnValor");

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
        txtPeso.value="";
        txtAltura.value="";
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

btnCalculaIMC.addEventListener('click', btnCalculaIMCClick);


