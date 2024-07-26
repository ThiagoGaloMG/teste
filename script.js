// script.js
document.addEventListener('DOMContentLoaded', function () {
    const countdownDate = new Date('2030-01-05T15:37:25').getTime();
    const contadorElement = document.getElementById('contador');

    function atualizarContador() {
        const agora = new Date().getTime();
        const diferenca = countdownDate - agora;

        const minutos = Math.floor(diferenca / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        const minutosFormatados = minutos.toString().padStart(2, '0');
        const segundosFormatados = segundos.toString().padStart(2, '0');

        contadorElement.textContent = `${minutosFormatados}:${segundosFormatados}`;

        if (diferenca <= 0) {
            clearInterval(intervalo);
            contadorElement.textContent = 'Contagem encerrada!';
        }
    }

    const intervalo = setInterval(atualizarContador, 1000);
});
