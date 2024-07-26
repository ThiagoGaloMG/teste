document.addEventListener('DOMContentLoaded', function () {
    const contadorElement = document.getElementById('contador');

    // Defina a duração desejada em minutos (1 hora e 20 minutos = 80 minutos)
    const duracaoMinutos = 80;
    const duracaoMilissegundos = duracaoMinutos * 60 * 1000;

    const countdownDate = new Date().getTime() + duracaoMilissegundos;

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
