// script.js

// Defina a data final para o contador (substitua com a data do seu evento ou prazo)
const dataFinal = new Date('2030-01-05T15:37:25').getTime();

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exiba o resultado em algum elemento HTML com o ID "contador"
    document.getElementById('contador').textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Se o contador terminar, exiba uma mensagem
    if (diferenca <= 0) {
        clearInterval(intervalo);
        document.getElementById('contador').textContent = 'Contagem encerrada!';
    }
}

// Atualize o contador a cada segundo
const intervalo = setInterval(atualizarContador, 1000);
// script.js

// Carregue o arquivo JSON (substitua o caminho pelo seu)
fetch('contador.json')
  .then(response => response.json())
  .then(data => {
    const countdownDate = new Date(data.countdownDate).getTime();
    const countdownTitle = data.title;

    // Restante do seu código de contador regressivo
    // ...

    // Exiba o título e o contador no HTML
    document.getElementById('countdown-title').textContent = countdownTitle;
    // ...
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));
