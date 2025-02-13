let numereSecreto = geraNumeroAleatorio();
let tentativas = 1;

mensagemInicial();

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function geraNumeroAleatorio () {
    return parseInt(Math.random() * 100 + 1);
}

function mensagemInicial () {
    exibirTextoNaTela("h1","Jogo do Número Secreto!");
    exibirTextoNaTela("h2","Escolha um número entre 1 e 100:");
}

function verificarChute () {
    let chute = document.querySelector("input").value;
    textoTentativa = tentativas > 1 ? `Você acertou em ${tentativas} tentativas.` : "Você acertou na primeira tentativa.";
    
    if (chute == numereSecreto) {
        exibirTextoNaTela("h1","Acertou!");
        exibirTextoNaTela("h2",textoTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled")

    } else {
        if (chute < numereSecreto) {
            exibirTextoNaTela("h2","O número secreto é maior.");
        } else {
            exibirTextoNaTela("h2","O número secreto é menor.");
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo () {
    chute = document.querySelector("input");
    chute.value = " ";
}

function recomecarJogo () {
    limparCampo();
    numereSecreto = geraNumeroAleatorio();
    tentativas = 0;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}






