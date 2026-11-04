import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado"); 
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");


export const perguntas = [
{

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];

   let botaoIniciar.addEventListener('click', iniciaJogo);

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
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogaNovamente);

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