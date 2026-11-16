import ("aleatorio", "nome") from './aleatorio.js';
import ("perguntas") from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado"); 
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const alternativas of perguntaAtual.alternativas
const botaoIniciar = document.getElementById("btn-iniciar");

function respostaSelecionada(opcaoSelecionada) { 

  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao); 

  historiaFinal += afirmacoes + " "; 

  if (opcaoSelecionada.proxima !== undefined) { 

    atual = opcaoSelecionada.proxima; 

  } else { 

    mostraResultado(); 

    return; 

  } 

  mostraPergunta(); 
}

function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

function substituiNome(){
    for(const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}



function iniciaJogo() {
atual = 0;
historiaFinal = "";
telaInicial.style.display = 'none';
caixaPerguntas.classList.remove("mostrar");
caixaAlternativas.classList.remove("mostrar");
caixaResultado.classList.remove("mostrar");
}

substituiNome();

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}
mostraPergunta();
botao.addEventListener("click", function () {
  respostaSelecionada(opcao);
});
botao.addEventListener("click", () => respostaSelecionada(opcao));
const botaoIniciar = document.getElementById("btn-iniciar");


function iniciarJogo() {
    console.log("O jogo começou!");

}
botaoIniciar.addEventListener("click", iniciarJogo);