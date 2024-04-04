'use strict'

const select1 = document.getElementById('select-1')
const select2 = document.getElementById('select-2')

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

// trocar a língua
export const trocarIdioma = (input, idioma) => {

    idiomas.forEach(idiomasArray => {
      
        if (idiomasArray.id == idioma) {

            input.nextElementSibling.children[1].children[0].src = idiomasArray.src
            input.nextElementSibling.children[1].children[0].alt = idiomasArray.alt
            input.nextElementSibling.children[0].placeholder = idiomasArray.placeholder

        }

    })

}


filter1.addEventListener('change', () => {
    trocarIdioma(filter1, filter1.value)
})

filter2.addEventListener('change', () => {
    trocarIdioma(filter2, filter2.value)
})