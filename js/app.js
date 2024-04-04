'use strict'

import { trocarIdioma } from "./trocar-idiomas"

// pega os inputs do html
const inputFrom = document.getElementById('input-de')
const inputTo = document.getElementById('input-para')

// criar função para o traduzir
const traduzir = async(texto) => {

    const textTraducao = texto
    
    //pegando a api
    const url = `https://api.mymemory.translated.net/get?q=${textTraducao}&langpair=pt-br|en|spa`

    // requisitando a api
    const response = await fetch(url)

    //pegando os resultados e transformando em JSON
    const data = await response.json()

    // retornando a tradução
    return data.responseData.translatedText

}

// função para mostrar o texto traduzido no input PARA
export const montarForm = async() => {

    // envia o texto a ser traduzido e recebe a tradução
    const textTraduzido = await traduzir(inputFrom.value)

    // "imprime" no input
    inputTo.value = textTraduzido

}

// adicionando um ação para o input, no caso dessa "change" será quando o input mudar
inputFrom.addEventListener('change', montarForm)

// função para ler o texto traduzido
const lerTexto = async(texto, info) => {
    let mensagem = new SpeechSynthesisUtterance()
    let vozes = speechSynthesis.getVoices()
    mensagem.text = texto
    mensagem.lang = info.lang
    mensagem.voice = vozes[info.voice]
    mensagem.volume = 1
    speechSynthesis.speak(mensagem)
}

for (let botaoLerTexto of botoesLerTexto) {
    botaoLerTexto.addEventListener('click', () => {
        if(botaoLerTexto.id == 'button-1'){
            let infoTraducao = getInfoTraducao(idiomaFrom)
            if(inputFrom.value != ''){
                lerTexto(inputFrom.value, infoTraducao)
            }else{
                lerTexto(infoTraducao.placeholder, infoTraducao)
            }
        }else{
            let infoTraducao = getTranslateInfo(idiomaTo)
            if(inputTo.value != ''){
                lerTexto(inputTo.value, infoTraducao)
            }else{
                lerTexto(infoTraducao.placeholder, infoTraducao)
            }
        }
    })
}

// traduzindo depois de trocar as línguas
idiomaFrom.addEventListener('change', () => {
    montarForm()
})

idiomaTo.addEventListener('change', () => {
    montarForm()
})

// invertendo línguas
botaoTrocarTraducao.addEventListener('click', () => {
    
    inputFrom.value = inputTo.value
    let idiomaFromValue = idiomaFrom.value
    trocarIdioma(idiomaFrom, idioma.value)
    idiomaFrom.value = idiomaTo.value
    trocarIdioma(idiomaTo, idiomaFromValue)
    idiomaTo.value = idiomaFromValue
    montarForm()

})

// traduzir apertando enter
inputFrom.addEventListener('keypress', (e) => {

    if (e.key == 'Enter') {
        montarForm()
    }

})

// impedir form de recarregar página 
form.addEventListener('submit', (e) => {
    e.preventDefault()
})

// reconhecimento de fala
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition() 

talkButton.addEventListener('click', () => {
    recognition.lang = getInfoTraducao(idiomaFrom).lang
    recognition.start()
})

recognition.addEventListener('result', (e) => {
    let text = e.results[0][0].transcript
    inputFrom.value = text
    montarForm()
})

recognition.addEventListener('audiostart', () => {
    let img = botaoFalar.children[0]
    img.src = './imgs/microfone-branco.svg',
    img.classList.add('animate-scale')
})

recognition.addEventListener('audioend', () => {
    let img = botaoFalar.children[0]
    img.src = './imgs/microfone-borda.svg',
    img.classList.remove('animate-scale')
})