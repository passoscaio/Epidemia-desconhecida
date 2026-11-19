
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

    caixaPerguntas.textContent = "2049 — O destino da humanidade";

    textoResultado.textContent =
        "Depois de anos de caos, medo e incerteza, o mundo que um dia conhecemos tornou-se apenas uma lembrança. " +

        "Suas decisões moldaram sua jornada em meio à epidemia. Cada escolha determinou em quem confiar, quais riscos enfrentar e quais ideais defender. " +

        "As três facções continuam disputando o controle dos poucos recursos que restaram. Algumas acreditam que a humanidade precisa reconstruir sua antiga civilização. " +

        "Outras defendem que o mundo precisa de uma nova ordem. Há ainda aqueles que acreditam que a sobrevivência deve estar acima de qualquer ideologia. " +

        "Enquanto isso, rumores sobre novas mutações do vírus começam a surgir. Ninguém sabe se a humanidade está diante de uma nova ameaça ou se ainda existe alguma esperança de encontrar uma solução. " +

        "O futuro permanece incerto. Uma coisa, porém, é inevitável: o mundo nunca mais será o mesmo. Sua história está apenas começando.";

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
