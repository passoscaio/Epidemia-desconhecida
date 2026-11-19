
import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

// Selecionando os elementos HTML

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

// Variáveis do jogo

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Seleciona uma afirmação aleatória

function respostaSelecionada(opcaoSelecionada) {

    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);

    historiaFinal += afirmacoes + " ";

    if (opcaoSelecionada.proxima !== undefined) {

        atual = opcaoSelecionada.proxima;

        mostraPergunta();

    } else {

        mostraResultado();

    }
}

// Reinicia o jogo

function jogaNovamente() {

    atual = 0;
    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

// Exibe o resultado final

function mostraResultado() {

    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";

    caixaResultado.classList.add("mostrar");
}

// Substitui a palavra "você" pelo nome aleatório

function substituiNome() {

    for (const pergunta of perguntas) {

        pergunta.enunciado = pergunta.enunciado.replace(/você/gi, nome);

    }
}

// Inicia o jogo

function iniciaJogo() {

    atual = 0;
    historiaFinal = "";

    telaInicial.style.display = "none";

    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

// Exibe uma pergunta

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

// Cria os botões das alternativas

function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", function () {

            respostaSelecionada(alternativa);

        });

        caixaAlternativas.appendChild(botaoAlternativas);

    }
}

// Preparação inicial

substituiNome();

// Eventos dos botões

botaoIniciar.addEventListener("click", iniciaJogo);

botaoJogarNovamente.addEventListener("click", jogaNovamente);
