function Verificar(){
    var altura = document.ImcForm.altura.value;
    var peso = document.ImcForm.peso.value;
    var calculo = (peso/(altura*altura));

    if(calculo <18.5){
        alert("Você está abaixo do peso ideal! Seu imc é de " + calculo);
    }

    else if(calculo >= 18.5 && calculo <24.9){
        alert("Você está com o seu peso ideal! Seu imc é de " + calculo);
    }

    else if(calculo >= 25 && calculo <29.9){
        alert("Você está acima do peso ideal! Seu imc é de " + calculo);
    }

    else if(calculo >= 30 && calculo <39.9){
        alert("Você está com obesidade! Seu imc é de " + calculo);
    }

    else if(calculo > 40){
        alert("Você está com obesidade grave! Seu imc é de " + calculo);
    }
}