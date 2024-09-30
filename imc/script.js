function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }
    
    const imc = peso / (altura * altura);
    let classificacao = '';

    // Verifica se é adulto ou criança
    const idade = document.querySelector('input[name="idade"]:checked').id;

    if (idade === 'adulto') {
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }
    } else { // Para crianças
        // Classificações para crianças (aproximadamente)
        if (imc < 14.0) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 14.0 && imc < 18.5) {
            classificacao = 'Peso normal';
        } else if (imc >= 18.5 && imc < 22.0) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }
    }

    document.getElementById('resultado').innerText = `Seu IMC é: ${imc.toFixed(2)} - Classificação: ${classificacao}`;
}

function formatarAltura(input) {
    let valor = input.value.replace(/\D/g, ''); // Remove qualquer caractere que não seja número
    if (valor.length > 4) { // Limita a 4 dígitos
        valor = valor.slice(0, 4);
    }
    if (valor.length === 4) {
        valor = valor.slice(0, 2) + '.' + valor.slice(2); // Coloca o ponto após o segundo dígito
    } else if (valor.length === 3) {
        valor = valor.slice(0, 1) + '.' + valor.slice(1); // Coloca o ponto após o primeiro dígito
    }
    input.value = valor;
}
