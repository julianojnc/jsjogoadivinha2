function exibirTextoNaTela(tag, texto) {
  let titulo = document.querySelector(tag);
  titulo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10!");
}

exibirMensagemInicial();

let contador = 1;

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativas = contador > 1 ? "tentativas" : "tentativa";
    let mensageTentativas = `Você descobriu o número secreto com ${contador} ${palavraTentativas}!`;
    exibirTextoNaTela("p", mensageTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor!");
    } else {
      exibirTextoNaTela("p", "O número secreto é maior!");
    }
    contador++;
    limparFocarCampo();
  }
}

function limparFocarCampo() {
  chute = document.querySelector("input");
  chute.value = "";
  chute.focus();
}

let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let numeroLimite = 10;

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let quantidadeDeELementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeELementosNaLista == 10) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparFocarCampo();
  contador = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
