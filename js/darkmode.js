'use strict'

// o evento "DOMContentLoaded" garante que o HTML seja totalmente carregado antes do código ser executado
document.addEventListener("DOMContentLoaded", async() => {

    // recebe o elemento HTML
    const darkMode = document.getElementById('dark-mode')

    // pega o input do texto a ser traduzido
    const inputFrom = document.getElementById('input-de')

    //pega o input do texto traduzido
    const inputTo = document.getElementById('input-para')

    // recebe o body do html
    const body = document.body

    // inicializa a variável
    let modoEscuro = false

    // adiciona evento de click no elemento
    darkMode.addEventListener('click', async() => {

        // muda o valor da variável de false p true
        modoEscuro = !modoEscuro

        // se(modoEscuro ativado)
        if(modoEscuro){

            // quando o modo escuro tiver ativado, define a imagem do sol
            darkMode.src = '../imgs/sol.svg'

            // muda a cor do fundo para preto
            body.style.background = 'black'

            // muda a cor do texto dos inputs para branco
            inputFrom.style.color = 'white'
            inputTo.style.color = 'white'

        } else {

            //  quando o modo escuro tiver desativado, define a imagem da lua
            darkMode.src = '../imgs/lua.svg'

            // reverte ao padrão
            body.style.background = ''

//<<<<<<< HEAD
            // reverte ao padrão
            inputFrom.style.color = 'white'
            inputTo.style.color = 'white'

        }

    })
})
//=======
 // adicionando um ação para o input, no caso dessa "change" será quando o input mudar
inputFrom.addEventListener('change', alice)
inputFrom.addEventListener('keyup', alice)
//>>>>>>> 6e06a2eab0dbb033fbd9f49b359b3a28fb38846a
