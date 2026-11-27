
export const perguntas = [

    // POSIÇÃO 0 — ESCOLHA INICIAL

    {
        caminho: "inicio",

        enunciado:
            "O mundo entrou em colapso após uma pandemia causada por um vírus que sofreu mutações inesperadas. Entre os poucos sobreviventes, três grandes facções disputam o futuro da humanidade. Qual será sua primeira decisão?",

        alternativas: [
            {
                texto: "Procurar os Reconstrutores e ajudar a recuperar a civilização.",

                afirmacao: [
                    "Decidiu procurar os Reconstrutores e ajudar na reconstrução da civilização."
                ],

                tipo: "entrada",
                proxima: 1
            },

            {
                texto: "Investigar as facções antes de escolher um lado.",

                afirmacao: [
                    "Decidiu investigar as facções antes de escolher em quem confiar."
                ],

                tipo: "entrada",
                proxima: 2
            }
        ]
    },

    // POSIÇÃO 1 — A1: PRIMEIRO CONTATO

    {
        caminho: "A",

        enunciado:
            "Você encontra um assentamento dos Reconstrutores. Seus integrantes afirmam que estão tentando recuperar o conhecimento e a infraestrutura do mundo antigo. Como pretende começar?",

        alternativas: [
            {
                texto: "Ajudar a procurar recursos para o assentamento.",

                afirmacao: [
                    "Começou a ajudar os Reconstrutores na busca por recursos."
                ],

                tipo: "avancar",
                proxima: 3
            },

            {
                texto: "Utilizar informações de uma expedição anterior para planejar o próximo passo.",

                afirmacao: [
                    "Utilizou informações de uma expedição anterior para planejar suas ações."
                ],

                tipo: "salto",
                proxima: 4
            },

            {
                texto: "Investigar um assentamento controlado pela Aliança Livre.",

                afirmacao: [
                    "Decidiu investigar o assentamento da Aliança Livre."
                ],

                tipo: "trocar",
                proxima: 2,
                disponivel: true
            }
        ]
    },

    // POSIÇÃO 2 — B1: INVESTIGAÇÃO DAS FACÇÕES

    {
        caminho: "B",

        enunciado:
            "Durante sua investigação, você descobre que a Ordem de Ferro controla diversos assentamentos. Seus líderes prometem segurança em troca de obediência. O que você pretende fazer?",

        alternativas: [
            {
                texto: "Investigar a origem do poder da Ordem de Ferro.",

                afirmacao: [
                    "Começou a investigar a influência da Ordem de Ferro."
                ],

                tipo: "avancar",
                proxima: 7
            },

            {
                texto: "Procurar diretamente a Aliança Livre para conhecer suas propostas.",

                afirmacao: [
                    "Procurou a Aliança Livre para conhecer suas propostas."
                ],

                tipo: "salto",
                proxima: 8
            },

            {
                texto: "Levar suas descobertas aos Reconstrutores.",

                afirmacao: [
                    "Decidiu compartilhar suas descobertas com os Reconstrutores."
                ],

                tipo: "trocar",
                proxima: 1,
                disponivel: true
            }
        ]
    },

    // POSIÇÃO 3 — A2: BUSCA POR RECURSOS

    {
        caminho: "A",

        enunciado:
            "Durante uma expedição, você encontra um depósito de suprimentos abandonado. Entretanto, outros sobreviventes também reivindicam o local. Como pretende resolver a situação?",

        alternativas: [
            {
                texto: "Negociar uma divisão dos recursos.",

                afirmacao: [
                    "Negociou uma divisão dos recursos com os outros sobreviventes."
                ],

                tipo: "avancar",
                proxima: 4
            },

            {
                texto: "Retornar ao assentamento para organizar uma nova expedição.",

                afirmacao: [
                    "Retornou ao assentamento para reorganizar a expedição."
                ],

                tipo: "salto",
                proxima: 1
            },

            {
                texto: "Tomar os recursos e abandonar os outros sobreviventes.",

                afirmacao: [
                    "Tentou tomar todos os recursos, prejudicando os outros sobreviventes."
                ],

                tipo: "gameover",
                disponivel: true,

                mensagem:
                    "Sua decisão destruiu a confiança entre os grupos. Sem cooperação, o assentamento perdeu o apoio de seus aliados e sua missão terminou."
            }
        ]
    },

    // POSIÇÃO 4 — A3: PLANEJAMENTO DA EXPEDIÇÃO

    {
        caminho: "A",

        enunciado:
            "Os Reconstrutores planejam uma expedição para recuperar equipamentos e documentos de uma antiga cidade. Como você pretende contribuir?",

        alternativas: [
            {
                texto: "Organizar uma expedição com os recursos disponíveis.",

                afirmacao: [
                    "Ajudou a organizar a expedição dos Reconstrutores."
                ],

                tipo: "avancar",
                proxima: 5
            },

            {
                texto: "Utilizar informações de uma expedição anterior para acelerar os preparativos.",

                afirmacao: [
                    "Utilizou informações anteriores para acelerar os preparativos."
                ],

                tipo: "salto",
                proxima: 6
            },

            {
                texto: "Procurar a Aliança Livre para propor uma cooperação.",

                afirmacao: [
                    "Procurou a Aliança Livre para propor uma cooperação entre os grupos."
                ],

                tipo: "trocar",
                proxima: 8,
                disponivel: true
            }
        ]
    },

    // POSIÇÃO 5 — A4: CONFLITO INTERNO

    {
        caminho: "A",

        enunciado:
            "Durante os preparativos, surge um conflito entre os Reconstrutores. Uma parte deseja reconstruir as antigas instituições, enquanto outra acredita que o mundo precisa de novas regras. Como você reage?",

        alternativas: [
            {
                texto: "Promover uma discussão para encontrar um acordo.",

                afirmacao: [
                    "Tentou resolver o conflito por meio do diálogo."
                ],

                tipo: "avancar",
                proxima: 6
            },

            {
                texto: "Retornar à busca por recursos e reconsiderar os planos.",

                afirmacao: [
                    "Retornou à busca por recursos para reconsiderar os planos."
                ],

                tipo: "salto",
                proxima: 3
            },

            {
                texto: "Impor uma decisão sem considerar os outros integrantes.",

                afirmacao: [
                    "Tentou impor sua decisão sem considerar os outros integrantes."
                ],

                tipo: "gameover",
                disponivel: true,

                mensagem:
                    "O conflito interno se agravou e o assentamento perdeu sua unidade. Sem apoio, você não conseguiu concluir a missão."
            }
        ]
    },

    // POSIÇÃO 6 — A5: PREPARAÇÃO PARA O FUTURO

    {
        caminho: "A",

        enunciado:
            "A expedição foi organizada e os Reconstrutores estão prontos para iniciar a recuperação da cidade. Qual será sua decisão final?",

        alternativas: [
            {
                texto: "Liderar a organização da reconstrução.",

                afirmacao: [
                    "Assumiu a responsabilidade de ajudar a reconstruir a antiga cidade."
                ],

                tipo: "avancar",
                proxima: 11
            },

            {
                texto: "Revisar os planos antes de iniciar a reconstrução.",

                afirmacao: [
                    "Revisou os planos da expedição antes de prosseguir."
                ],

                tipo: "salto",
                proxima: 5
            },

            {
                texto: "Levar os planos aos sobreviventes da Aliança Livre.",

                afirmacao: [
                    "Decidiu apresentar os planos aos sobreviventes da Aliança Livre."
                ],

                tipo: "trocar",
                proxima: 10,
                disponivel: true
            }
        ]
    },

    // POSIÇÃO 7 — B2: INVESTIGAÇÃO DA ORDEM DE FERRO

    {
        caminho: "B",

        enunciado:
            "Você descobre que a Ordem de Ferro mantém diversos assentamentos sob seu controle. Algumas comunidades afirmam estar protegidas, enquanto outras denunciam a falta de liberdade. Como continuar sua investigação?",

        alternativas: [
            {
                texto: "Conversar com representantes dos assentamentos.",

                afirmacao: [
                    "Conversou com representantes dos assentamentos para compreender a situação."
                ],

                tipo: "avancar",
                proxima: 8
            },

            {
                texto: "Retornar ao início da investigação e procurar outras informações.",

                afirmacao: [
                    "Retornou ao início da investigação para procurar novas informações."
                ],

                tipo: "salto",
                proxima: 2
            },

            {
                texto: "Espalhar acusações sem verificar as informações.",

                afirmacao: [
                    "Espalhou acusações sem verificar as informações."
                ],

                tipo: "gameover",
                disponivel: true,

                mensagem:
                    "As acusações sem provas provocaram desconfiança entre os assentamentos. Sua investigação perdeu credibilidade e a missão foi interrompida."
            }
        ]
    },

    // POSIÇÃO 8 — B3: ALIANÇA ENTRE SOBREVIVENTES

    {
        caminho: "B",

        enunciado:
            "Você conhece a Aliança Livre, formada por comunidades independentes que tentam cooperar sem estabelecer um governo central. Como pretende ajudar?",

        alternativas: [
            {
                texto: "Organizar uma reunião entre os representantes das comunidades.",

                afirmacao: [
                    "Organizou uma reunião entre representantes das comunidades independentes."
                ],

                tipo: "avancar",
                proxima: 9
            },

            {
                texto: "Utilizar um acordo anterior para organizar diretamente um encontro maior.",

                afirmacao: [
                    "Utilizou um acordo anterior para organizar um encontro entre as comunidades."
                ],

                tipo: "salto",
                proxima: 10
            },

            {
                texto: "Levar as propostas da Aliança Livre aos Reconstrutores.",

                afirmacao: [
                    "Decidiu apresentar as propostas da Aliança Livre aos Reconstrutores."
                ],

                tipo: "trocar",
                proxima: 4,
                disponivel: true
            }
        ]
    },

    // POSIÇÃO 9 — B4: REVISÃO DOS PLANOS

    {
        caminho: "B",

        enunciado:
            "Durante a preparação da reunião, surgem divergências sobre a distribuição dos recursos. Como você pretende resolver o problema?",

        alternativas: [
            {
                texto: "Propor regras transparentes para a distribuição.",

                afirmacao: [
                    "Propôs regras transparentes para a distribuição dos recursos."
                ],

                tipo: "avancar",
                proxima: 10
            },

            {
                texto: "Retornar às negociações para rever os acordos.",

                afirmacao: [
                    "Retornou às negociações para rever os acordos entre as comunidades."
                ],

                tipo: "salto",
                proxima: 7
            },

            {
                texto: "Apropriar-se dos recursos destinados às comunidades.",

                afirmacao: [
                    "Tentou se apropriar dos recursos destinados às comunidades."
                ],

                tipo: "gameover",
                disponivel: true,

                mensagem:
                    "A descoberta da apropriação dos recursos destruiu a confiança na Aliança Livre. As comunidades encerraram sua cooperação e sua missão fracassou."
            }
        ]
    },

    // POSIÇÃO 10 — B5: ORGANIZAÇÃO DA COMUNIDADE

    {
        caminho: "B",

        enunciado:
            "As comunidades concordam em participar de uma reunião para discutir o futuro dos sobreviventes. O que você fará antes do encontro?",

        alternativas: [
            {
                texto: "Organizar um acordo de cooperação entre os assentamentos.",

                afirmacao: [
                    "Organizou um acordo de cooperação entre os assentamentos."
                ],

                tipo: "avancar",
                proxima: 12
            },

            {
                texto: "Retornar à revisão dos planos e melhorar as propostas.",

                afirmacao: [
                    "Retornou à revisão dos planos para melhorar as propostas."
                ],

                tipo: "salto",
                proxima: 9
            },

            {
                texto: "Abandonar os acordos e expor informações privadas dos participantes.",

                afirmacao: [
                    "Quebrou a confiança dos participantes ao expor informações privadas."
                ],

                tipo: "gameover",
                disponivel: true,

                mensagem:
                    "A exposição das informações privadas encerrou a cooperação entre os assentamentos. Sem confiança, a missão fracassou."
            }
        ]
    },

    // POSIÇÃO 11 — FINAL A: VITÓRIA DOS RECONSTRUTORES

    {
        caminho: "A",
        final: "vitoria",

        enunciado:
            "Você conseguiu organizar os esforços dos Reconstrutores. Com a recuperação dos conhecimentos e recursos do passado, os primeiros passos para reconstruir a civilização foram concluídos. Uma nova esperança surgiu entre os sobreviventes. Você venceu!",

        alternativas: []
    },

    // POSIÇÃO 12 — FINAL B: VITÓRIA DA ALIANÇA LIVRE

    {
        caminho: "B",
        final: "vitoria",

        enunciado:
            "Você conseguiu unir diferentes comunidades em torno de um acordo de cooperação. Apesar das diferenças, os sobreviventes decidiram construir um futuro baseado na confiança e na autonomia. Uma nova sociedade começa a surgir. Você venceu!",

        alternativas: []
    }

];
