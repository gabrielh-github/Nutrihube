function calcularTMB() {
    const idade = parseInt(document.getElementById('idade').value);
    const altura = parseInt(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const sexo = document.getElementById('sexo').value;

    let tmb;

    if (sexo === 'masculino') {
        tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);
    } else {
        tmb = 665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
    }

    document.getElementById('result').innerHTML = `Sua Taxa  Metabólica Basal é de aproximadamente: ${tmb.toFixed(2)} calorias por dia`;
}
