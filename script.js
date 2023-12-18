function gerarIdeia() {
    const temas = ['Te Amo'];
    const objetos = ['Desenhando'];
    const acoes = ['Nossa história Juntos'];

    const temaAleatorio = temas[Math.floor(Math.random() * temas.length)];
    const objetoAleatorio = objetos[Math.floor(Math.random() * objetos.length)];
    const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];

    const ideia = `Eu ${temaAleatorio.toLowerCase()}, continue ${objetoAleatorio.toLowerCase()} a ${acaoAleatoria.toLowerCase()}.`;

    document.getElementById('idea').innerText = ideia;
}

document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector('.container');
    container.classList.add('show');
});
