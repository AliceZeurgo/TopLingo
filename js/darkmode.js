'use strict'

 import { montarForm } from "./app.js";

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

// função para trocar a cor do fundo
const trocarBackground = async() => {

    // muda o valor da variável de false p true
    modoEscuro = !modoEscuro
    
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
        
        // reverte ao padrão
        inputFrom.style.color = 'white'
        inputTo.style.color = 'white'
        
    }

}

// criando a feature alice, que quando o input receber a palavra muda a cor do background
const alice = async() => {
        
    if (inputFrom.value == 'alice'){

        trocarBackground()        
        
    } else {

        montarForm()

    }

}

// adiciona evento de click no elemento
darkMode.addEventListener('click', trocarBackground)

 // adicionando um ação para o input, no caso dessa "change" será quando o input mudar
inputFrom.addEventListener('change', alice)