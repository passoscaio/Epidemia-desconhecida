const nomes = ["Big Smoke","Robert Downey Jr","Steve Rogers", "Bruce Wayne","Joel Miller"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);