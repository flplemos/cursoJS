let bloco = [];

function adicionar() {
    let numbInput = document.getElementById('numb');
    let numb = parseInt(numbInput.value);
    let valoresregistrados = document.getElementById('valoresregistrados')

    

    if (!isNaN(numb) && numb > 0) {
        bloco.push(numb);
        valoresregistrados.innerHTML += `<br> ${numb} adicionado. <br>`;
        numbInput.value = '';

    } else {
        window.alert('Digite um número válido maior que zero');
    }
}

function finalizar() {
    let resultado = document.getElementById('resultado')
   


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
    } else {
        resultado.innerHTML = 'Nenhum valor cadastrado.';
    }
}



    