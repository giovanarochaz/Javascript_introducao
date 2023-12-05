function destacarPalavrasIA() {
    var input = document.getElementById('poemInput').value;
    var regex = /\b\w*ia\b/g;
    var lines = input.split('\n');
    
    var output = lines.map(function(line) {
        return line.replace(regex, '<span class="ia">$&</span>');
    }).join('<br>');
    
    document.getElementById('poemOutput').innerHTML = output;
}

function destacarPalavrasELA() {
    var input = document.getElementById('poemInput').value;
    var regex = /\b\w*ela\b/g;
    var lines = input.split('\n');
    
    var output = lines.map(function(line) {
        return line.replace(regex, '<span class="ela">$&</span>');
    }).join('<br>');
    
    document.getElementById('poemOutput').innerHTML = output;
}

function destacarPalavrasCAO() {
    var input = document.getElementById('poemInput').value;
    var regex = /\b\w*ção\b/g;
    var lines = input.split('\n');
    
    var output = lines.map(function(line) {
        return line.replace(regex, '<span class="cao">$&</span>');
    }).join('<br>');
    
    document.getElementById('poemOutput').innerHTML = output;
}

function destacarPalavrasANO() {
    var input = document.getElementById('poemInput').value;
    var regex = /\b\w*ano\b/g;
    var lines = input.split('\n');
    
    var output = lines.map(function(line) {
        return line.replace(regex, '<span class="ano">$&</span>');
    }).join('<br>');
    
    document.getElementById('poemOutput').innerHTML = output;
}

// Seleciona o elemento com id main-image (imagem que vai ficar no topo)
const mainImage = document.getElementById("main-image");

// Seleciona todos os elementos que tem a classe "bottom-image"
const bottomImages = document.querySelectorAll(".bottom-image");

// Roda um lalo de repetição pata cada elemento do bottomImages
bottomImages.forEach((image, index) => {
    // Escuta o clique encima de um dos elementos, com o objeto image
  image.addEventListener("click", () => {
    // Obtém o caminho da imagem atual na linha superior
    const currentImageSrc = mainImage.getAttribute("src");
    // Define o caminho da imagem na linha superior como o caminho da imagem clicada na linha inferior
    mainImage.setAttribute("src", image.getAttribute("src"));
    //// Define o caminho da imagem clicada na linha inferior como o caminho da imagem anterior da linha superior
    image.setAttribute("src", currentImageSrc);
  });
});

function enviarInput() {
    var valor = document.getElementById("inputCampo").value;
    document.getElementById("resposta").textContent = valor;
};

$(document).ready(function () {
    // Máscara para o campo de telefone
    $('#phone').inputmask('(99) 99999-9999', { placeholder: '' });

    // Validação do formulário
    $('#myForm').submit(function (event) {
      // Validar o telefone usando regex
      var phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
      var phoneValue = $('#phone').val();

      if (!phoneRegex.test(phoneValue)) {
        alert('Por favor, insira um número de telefone válido.');
        event.preventDefault();
        return false;
      }

      // Adicione outras validações conforme necessário

      // Se todas as validações passarem, o formulário será enviado
      alert('Formulário enviado com sucesso!');
    });
  });