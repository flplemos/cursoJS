
function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
// var hora = 
msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora< 12) {
            img.src = 'imagens/manha.png'
            document.body.style.background = '#e6bf9f'
        } else if (hora  >= 12 && hora <= 18) {
            img.src = 'imagens/tarde.png'
            document.body.style.background = '#5c3828'
        } else {
            img.src = 'imagens/noite.png'
            document.body.style.background = '#0d3340'
        }
    }   




    // manha = #e6bf9f
    //tarde = #5c3828
    // noite = #0d3340