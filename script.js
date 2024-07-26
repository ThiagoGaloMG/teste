document.addEventListener('DOMContentLoaded', function () {
    const contadorElementHoras = document.getElementById('contador-horas');
    const contadorElementMinutos = document.getElementById('contador-minutos');
    const contadorElementSegundos = document.getElementById('contador-segundos');

    // Defina a duração desejada em minutos (1 hora e 20 minutos = 80 minutos)
    const duracaoMinutos = 80;
    const duracaoMilissegundos = duracaoMinutos * 60 * 1000;

    const countdownDate = new Date().getTime() + duracaoMilissegundos;

    function atualizarContador() {
        const agora = new Date().getTime();
        const diferenca = countdownDate - agora;

        const horas = Math.floor(diferenca / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        const horasFormatadas = horas.toString().padStart(2, '0');
        const minutosFormatados = minutos.toString().padStart(2, '0');
        const segundosFormatados = segundos.toString().padStart(2, '0');

        contadorElementHoras.textContent = horasFormatadas;
        contadorElementMinutos.textContent = minutosFormatados;
        contadorElementSegundos.textContent = segundosFormatados;

        if (diferenca <= 0) {
            clearInterval(intervalo);
            contadorElementHoras.textContent = '00';
            contadorElementMinutos.textContent = '00';
            contadorElementSegundos.textContent = '00';
        }
    }

    const intervalo = setInterval(atualizarContador, 1000);
});
