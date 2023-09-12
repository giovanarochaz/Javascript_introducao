function Verificar(event) {
    event.preventDefault();

    var altura = parseFloat(document.ImcForm.altura.value);
    var peso = parseFloat(document.ImcForm.peso.value);
    var calculo = peso / (altura * altura);

    var resultadoElement = document.getElementById('resultado');

    if (calculo < 18.5) {
        resultadoElement.className = 'imc-moderado';
        resultadoElement.textContent = "Você está abaixo do peso ideal! Seu IMC é de " + calculo.toFixed(2);
    } else if (calculo >= 18.5 && calculo < 24.9) {
        resultadoElement.className = 'imc-ideal';
        resultadoElement.textContent = "Você está com o seu peso ideal! Seu IMC é de " + calculo.toFixed(2);
    } else if (calculo >= 25 && calculo < 29.9) {
        resultadoElement.className = 'imc-moderado';
        resultadoElement.textContent = "Você está acima do peso ideal! Seu IMC é de " + calculo.toFixed(2);
    } else if (calculo >= 30) {
        resultadoElement.className = 'imc-grave';
        resultadoElement.textContent = "Você está com obesidade! Seu IMC é de " + calculo.toFixed(2);
    }
}
