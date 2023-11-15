




function gerartabuada() {

    var num = parseInt(document.getElementById('num').value)
    var resultado = document.getElementById('resultado')

    resultado.innerHTML = '';
    

    if (isNaN(num)) {
        alert('Digite um número por favor!')
        return; 
    }


    for ( var c = 0; c <= 10; c++) {
        
        var produto = num * c
        resultado.innerHTML += `${num} x ${c} = ${produto}<br>`;
    }

} 