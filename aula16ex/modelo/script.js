let bloco = [];

function adicionar() {
    let numbInput = document.getElementById('numb');
    let numb = parseInt(numbInput.value);
    let valoresregistrados = document.getElementById('valoresregistrados');
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = "";

        // Verifica se o número é valido e maior que zero e menor que 100:
    if (!isNaN(numb) && numb > 0 && numb <= 100) {
        // Verifica se o número já foi adicionado:
        if (!bloco.includes(numb)) {
            bloco.push(numb);
            valoresregistrados.innerHTML += `<br> ${numb} adicionado. <br>`;
            numbInput.value = '';
        } else {
            window.alert('Este número já foi inserido. Digite um número diferente.');
        }
    } else {
        window.alert('Digite um número válido, entre 1 e 100');
    }
}


function finalizar() {
    let resultado = document.getElementById('resultado');
    let valoresregistrados = document.getElementById('valoresregistrados');

   valoresregistrados.innerHTML = '';


    if (bloco.length > 0) {
        bloco.sort(function(a, b) {
            return a - b;
        });

        let total = 0

        for (let pos = 0; pos < bloco.length; pos ++) {
            total += bloco[pos]
        }


        let media = total / bloco.length

        resultado.innerHTML = `O maior valor digitado = ${bloco[bloco.length - 1]}`;
        resultado.innerHTML += `<br>O menor valor encontrado = ${bloco[0]}<br>`
        resultado.innerHTML += `Ao todo temos ${bloco.length} números cadastrados<br>`;
        resultado.innerHTML += `Somando todos os valores temos ${total} no total<br>`
        resultado.innerHTML += `A média dos valores é = ${media}`
        bloco = [];
    } else {
        resultado.innerHTML = 'Nenhum valor cadastrado.';
    }

}



    