

    function contar() {

        var inicio = parseInt(document.getElementById('inicio').value);
        var fim = parseInt(document.getElementById('fim').value);
        var passo = parseInt(document.getElementById('passo').value);
        var resultado = document.getElementById('resultado')

        // Limpar os resultados anteriores
        resultado.innerHTML = '';

        if (passo === 0 || isNaN(passo)) {
            // Se o passo for zero ou nenhum número, exibir mensagem de erro em um pop-up
            alert('O passo não pode ser zero. Por favor, escolha um passo válido.');
            return; // Encerra a função aqu
        }
    
        

    
        if (isNaN(inicio) || isNaN(fim)) {
            // Verifica se inicio ou fim não são números
            resultado.innerHTML = 'Por favor, preencha os campos de início e fim com números.';
            return; // Encerra a função aqui se houver um erro
        }

    if (inicio < fim) {

    for (inicio; inicio <= fim; inicio += passo) {
      
        resultado.innerHTML += inicio + '👉';
       
        
    }
    } else {
        for (fim; fim <= inicio; fim += passo) {
            resultado.innerHTML += fim + '👉'
           
        }
    }

    resultado.innerHTML += '🏁';

    }




