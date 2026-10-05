const caixaPrincipal = document.querySelector(“.caixa-principal”);
const caixaPerguntas = document.querySelector(“.caixa-perguntas”);
const caixaAlternativas = document.querySelector(“.caixa-alternativas”);
const caixaResultado = document.querySelector(“.caixa-resultado”);
const textoResultado = document.querySelector(“.texto-resultado”);

const perguntas = [
  {
    enunciado:
      "Em um mundo pós-apocalíptico dominado por zumbis, há três grupos lutando por sobrevivência:",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: [
          "No início ficou com medo do que essa tecnologia pode fazer. ",
          "Achou assustador pensar na velocidade na qual a tecnologia está avançando.",
        ],
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: [
          "Quis saber como usar IA no seu dia a dia.",
          "Foi atrás de vídeos, artigos e mais informaçõe sobre como utilizar essa tecnologia.",
        ],
      },
    ],
  },
];