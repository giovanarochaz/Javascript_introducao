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