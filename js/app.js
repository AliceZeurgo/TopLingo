'use strict'

// pega os inputs do html
const inputFrom = document.getElementById('input-de')
const inputTo = document.getElementById('input-para')

// criar função para o traduzir
const traduzir = async(texto) => {

    const textTraducao = texto
    
    //pegando a api
    const url = `https://api.mymemory.translated.net/get?q=${textTraducao}&langpair=pt-br|en`

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