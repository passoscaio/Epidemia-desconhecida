import {aleatorio} from ‘./aleatorio.js’;
import {perguntas} from ‘./perguntas.js;

const caixaPrincipal = document.querySelector(“.caixa-principal”);
const caixaPerguntas = document.querySelector(“.caixa-perguntas”);
const caixaAlternativas = document.querySelector(“.caixa-alternativas”);
const caixaResultado = document.querySelector(“.caixa-resultado”);
const textoResultado = document.querySelector(“.texto-resultado”);
const botaoJogarNovamente = document.querySelector(“.novamente-btn”);

export const perguntas = [
{

export function aleatorio (lista){
    const posicao = Math.floot(Math.random()* lista.length);
    return lista[posicao];

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + “ “;
atual++;
function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
mostraPergunta();
}

function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
botaoJogarNovamente.addEventListener("click", jogaNovamente());

}