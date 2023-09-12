function gerarTabuadas() {
    const numeroDe = parseInt(document.getElementById('numeroDe').value);
    const numeroAte = parseInt(document.getElementById('numeroAte').value);
    const tabuadasContainer = document.getElementById('tabuadas');

    if (!isNaN(numeroDe) && !isNaN(numeroAte)) {
        tabuadasContainer.innerHTML = ''; // Limpar conteúdo anterior

        let tabuadaRow = document.createElement('div');
        tabuadaRow.className = 'tabuada-row';

        for (let i = numeroDe; i <= numeroAte; i++) {
            const table = document.createElement('table');
            table.className = 'tabuada';
            table.innerHTML = '<tr><th>Operação</th><th>Resultado</th></tr>';

            for (let j = 1; j <= 10; j++) {
                const resultado = i * j;
                table.innerHTML += `<tr><td>${i} x ${j}</td><td>${resultado}</td></tr>`;
            }

            tabuadaRow.appendChild(table);

            if ((i - numeroDe + 1) % 3 === 0) {
                tabuadasContainer.appendChild(tabuadaRow);
                tabuadaRow = document.createElement('div');
                tabuadaRow.className = 'tabuada-row';
            }
        }

        if (tabuadaRow.children.length > 0) {
            tabuadasContainer.appendChild(tabuadaRow);
        }
    } else {
        alert('Por favor, digite números válidos em ambos os campos.');
    }
}