function sortear() {
    let quantidade = parseFloat(converterDecimal(document.getElementById("quantidade").value));
    let de = parseFloat(converterDecimal(document.getElementById("de").value));
    let ate = parseFloat(converterDecimal(document.getElementById("ate").value));
    let ambientacao = parseFloat(converterDecimal(document.getElementById("ambientacao").value));

    // Validação dos campos
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert("Por favor, insira apenas números válidos.");
        reiniciar();
        return;
    }

    // Se ambientacao for NaN, define como 0
    if (isNaN(ambientacao)) {
        ambientacao = 0;
    }

    let resultado = document.getElementById("resultado");
    let media = calcularesultado(quantidade, de, ate, ambientacao);

    // Arredondar para duas casas decimais e formatar com vírgula
    resultado.innerHTML = `<label class="texto__paragrafo">Sua média é: <strong>${media.toFixed(2).replace('.', ',')}</strong></label>`;
    habilitarBotaoReiniciar();
}

function converterDecimal(valor) {
    // Troca vírgula por ponto, se existir, e retorna o valor
    return valor.replace(',', '.');
}

function calcularesultado(quantidade, de, ate, ambientacao) {
    let media = (quantidade * 0.2) + (de * 0.2) + (ate * 0.6) + ambientacao;
    return media;
}

function habilitarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

function desabilitarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("ambientacao").value = ""; // Adicionei esta linha para reiniciar o campo ambientacao
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
    desabilitarBotaoReiniciar();
}
