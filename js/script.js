
import { perguntas } from "./perguntas.js";
import { aleatorio, nome } from "./aleatorio.js";

// ==========================================
// 1. ELEMENTOS HTML
// ==========================================

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");

const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");

const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoCreditos = document.querySelector(".creditos-btn");

const telaCreditos = document.querySelector(".tela-creditos");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");

// ==========================================
// 2. ESTADO DA PARTIDA
// ==========================================

let atual = 0;
let historiaFinal = "";
let faseDaPartida = "inicio";

// ==========================================
// 3. EVENTOS DOS BOTÕES
// ==========================================

botaoIniciar.addEventListener("click", iniciaJogo);

botaoJogarNovamente.addEventListener("click", reiniciaJogo);

botaoCreditos.addEventListener("click", mostraCreditos);

botaoVoltarInicio.addEventListener("click", reiniciaJogo);

// ==========================================
// 4. INICIAR JOGO
// ==========================================

function iniciaJogo() {

    reiniciaJogo();

    faseDaPartida = "jogando";

    telaInicial.style.display = "none";

    caixaPerguntas.style.display = "block";
    caixaAlternativas.style.display = "flex";

    mostraPergunta();
}

// ==========================================
// 5. REINICIAR JOGO
// ==========================================

function reiniciaJogo() {

    atual = 0;

    historiaFinal = "";

    faseDaPartida = "inicio";

    caixaPerguntas.textContent = "";

    caixaAlternativas.replaceChildren();

    tituloResultado.textContent = "";
    textoResultado.textContent = "";

    telaInicial.style.display = "block";

    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "none";

    telaCreditos.style.display = "none";

    botaoCreditos.style.display = "none";

    botaoJogarNovamente.style.display = "inline-block";

    botaoJogarNovamente.textContent = "Recomeçar do início";
}

// ==========================================
// 6. MOSTRAR PERGUNTA
// ==========================================

function mostraPergunta() {

    const perguntaAtual = perguntas[atual];

    // Verifica se o jogador chegou a um final.

    if (perguntaAtual.final === "vitoria") {

        mostraVitoria(perguntaAtual.enunciado);

        return;
    }

    caixaPerguntas.textContent =
        perguntaAtual.enunciado.replace(/você/gi, nome);

    caixaAlternativas.replaceChildren();

    mostraAlternativas(perguntaAtual);
}

// ==========================================
// 7. MOSTRAR ALTERNATIVAS
// ==========================================

function mostraAlternativas(perguntaAtual) {

    for (const alternativa of perguntaAtual.alternativas) {

        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.disabled = alternativa.disponivel === false;

        botao.addEventListener("click", function () {

            respostaSelecionada(alternativa);

        });

        caixaAlternativas.appendChild(botao);
    }
}

// ==========================================
// 8. PROCESSAR RESPOSTA
// ==========================================

function respostaSelecionada(opcaoSelecionada) {

    // Impede escolhas depois do encerramento.

    if (faseDaPartida !== "jogando") {

        return;
    }

    // Verifica se a alternativa está disponível.

    if (opcaoSelecionada.disponivel === false) {

        return;
    }

    // GAME OVER

    if (opcaoSelecionada.tipo === "gameover") {

        const afirmacao = aleatorio(opcaoSelecionada.afirmacao);

        historiaFinal += afirmacao + " ";

        mostraGameOver(opcaoSelecionada.mensagem);

        return;
    }

    // Verifica o destino.

    const destino = opcaoSelecionada.proxima;

    if (!Number.isInteger(destino) || perguntas[destino] === undefined) {

        console.error("Destino inválido:", destino);

        return;
    }

    const origem = perguntas[atual];

    const chegada = perguntas[destino];

    const mudouDeCaminho = origem.caminho !== chegada.caminho;

    // Permite mudanças de narrativa somente pelo tipo trocar.

    if (
        atual !== 0 &&
        mudouDeCaminho &&
        opcaoSelecionada.tipo !== "trocar"
    ) {

        console.error("Mudança de caminho sem o tipo trocar.");

        return;
    }

    // Confere se a troca realmente leva a outra narrativa.

    if (
        opcaoSelecionada.tipo === "trocar" &&
        !mudouDeCaminho
    ) {

        console.error("A troca deve levar a outro caminho.");

        return;
    }

    // Registra a escolha.

    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);

    historiaFinal += afirmacao + " ";

    // Atualiza a posição.

    atual = destino;

    mostraPergunta();
}

// ==========================================
// 9. GAME OVER
// ==========================================

function mostraGameOver(mensagem) {

    faseDaPartida = "gameover";

    caixaPerguntas.style.display = "none";

    caixaAlternativas.replaceChildren();

    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "block";

    tituloResultado.textContent = "GAME OVER";

    textoResultado.textContent =
        mensagem +
        "\n\nSuas escolhas nesta tentativa:\n" +
        historiaFinal;

    botaoJogarNovamente.textContent = "Recomeçar do início";

    botaoJogarNovamente.style.display = "inline-block";

    botaoCreditos.style.display = "none";

    telaCreditos.style.display = "none";
}

// ==========================================
// 10. VITÓRIA — THE END
// ==========================================

function mostraVitoria(mensagem) {

    // Só permite vitória nas posições finais.

    if (
        faseDaPartida !== "jogando" ||
        perguntas[atual].final !== "vitoria"
    ) {

        return;
    }

    faseDaPartida = "vitoria";

    caixaPerguntas.style.display = "none";

    caixaAlternativas.replaceChildren();

    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "block";

    tituloResultado.textContent = "THE END";

    textoResultado.textContent =
        mensagem +
        "\n\nSeu percurso nesta partida:\n" +
        historiaFinal;

    // A vitória libera os créditos.

    botaoJogarNovamente.style.display = "none";

    botaoCreditos.style.display = "inline-block";

    telaCreditos.style.display = "none";
}

// ==========================================
// 11. TELA DE CRÉDITOS
// ==========================================

function mostraCreditos() {

    // Somente jogadores vencedores podem acessar.

    if (faseDaPartida !== "vitoria") {

        return;
    }

    faseDaPartida = "creditos";

    telaInicial.style.display = "none";

    caixaPerguntas.style.display = "none";

    caixaAlternativas.style.display = "none";

    caixaResultado.style.display = "none";

    telaCreditos.style.display = "block";
}

// ==========================================
// 12. ESTADO INICIAL
// ==========================================

reiniciaJogo();
