// PARTE 01

const body = document.body

const h1 = document.createElement('h1')
h1.innerText= 'Exercício 5.2 - JavaScript DOM'
body.appendChild(h1)

const main = document.createElement('main')
main.className = 'main-content'
body.appendChild(main)

const section = document.createElement('section')
section.className = 'center-content'  
main.appendChild(section)

const parag = document.createElement('p')
parag.innerHTML = "Adicionando um texto aleatótio"
section.appendChild(parag)

const section01 = document.createElement('section')
section01.className = 'left-content'
main.appendChild(section01)

  const section03 = document.createElement('section')
  section03.className = 'right-content'
  main.appendChild(section03)

const imagem = document.createElement('img')
imagem.className = 'small-image'
imagem.src = 'https://picsum.photos/200'
section01.appendChild(imagem)



const lista = document.createElement('ul')
const arrayExtenso = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
  for(let i in arrayExtenso){
    const ingredientes = document.createElement('li')
    ingredientes.innerHTML = arrayExtenso[i]
    section03.appendChild(ingredientes)
  }
  
const primeira = document.createElement('h3')
main.appendChild(primeira)

const segunda = document.createElement('h3')  
main.appendChild(segunda)

const terceira = document.createElement('h3')
main.appendChild(terceira)


// PARTE 02




const title = document.querySelector('h1')
title.className = 'title'

primeira.className = 'description'
segunda.className = 'description'
terceira.className = 'description'

const section03 = document.getElementsByClassName('left-content')[0]
main.removeChild(section01)

const sectionRightContent = document.getElementsByClassName('right-content')[0];
section03.style.marginRight = 'auto';

const sectionCenterContent = document.getElementsByClassName('center-content')[0];
main.parenteNode.style.backgroundColor = 'green'

const ul = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();