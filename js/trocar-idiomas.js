'use strict'

const select1 = document.getElementById('select-1')
const select2 = document.getElementById('select-2')

const botaoSelecionarIdioma = document.getElementsByClassName('trocar-idioma')
let standardTranslate = true

for (let button of botaoSelecionarIdioma) {

    button.children[1].addEventListener('click', (e) => {
        
        e.target.parentNode.parentNode.appendChild(createBotaoIdiomas(languages[0]))
        e.target.parentNode.parentNode.remove(e.target.parentNode)

    })

}

// array para armazenar os idiomas
const idiomas = [

    {
        id: 'pt-br',
        src: './img/brasil.png',
        alt: 'Bandeira do Brasil'
    },
    {
        id: 'en',
        src: './img/eua.png',
        alt: 'Bandeira dos Estados Unidos'
    },
    {
        id: 'zh-cn',
        src: './img/china.png',
        alt: 'Bandeira da China'
    }

]

const createLanguageButtons = (language) => {

    const div = document.createElement('div')
    div.classList.add('language-button', 'flex', 'items-center', 'justify-center', 'rounded-full')
    
    const img = document.createElement('img')
    language.classList.add('w-12', 'h-12')
    img.src = language.src
    img.alt = language.languageButton
    img.id = language.id
     
    div.appendChild(img)

    return div

}