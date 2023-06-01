const buttonStart = document.querySelector(".startGame")
const buttonReiniciar = document.querySelector(".reiniciar")
let gameMemory = document.querySelector(".game-memory")

let characters = [];
let firistCard = ''
let secondCard = ''

buttonStart.addEventListener('click', () => {
   const numerosSorteados = sortearNumeros()
   const personagensSorteados = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '44',
        '45',
        '46',
        '47',
        '48'   
   ]

   for(let i=0; i < 5; i++){
    characters.push(personagensSorteados[numerosSorteados[i]])
   }
   loadGame()

   buttonStart.style.display = 'none'
})

buttonReiniciar.addEventListener('click', () => {
    gameMemory.innerHTML = ''
    firistCard = ''
    secondCard = ''
    characters = []

    buttonReiniciar.style.display = 'none'
    buttonStart.style.display = 'block'
})

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}


const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if(disabledCards.length === 10) {
        alert("Parabéns, Você Venceu!")
        buttonReiniciar.style.display = 'block'
    }
}

const checkCards = () => {
    const firistPerson = firistCard.getAttribute('data-character')
    const secondPerson = secondCard.getAttribute('data-character')

    if(firistPerson === secondPerson) {

        firistCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')
        firistCard = ''
        secondCard = ''

        checkEndGame()
    }else{

        setTimeout(() => {
            firistCard.classList.remove("revel-card")
            secondCard.classList.remove('revel-card')
            firistCard = ''
            secondCard = ''
        }, 500)
    }

}

const revelCard = ({ target }) => {

    if(target.parentNode.className.includes("revel-card")){
        return
    }

    if(firistCard === ''){
        target.parentNode.classList.add('revel-card')
        firistCard = target.parentNode
    }else if(secondCard === ''){
        target.parentNode.classList.add('revel-card')
        secondCard = target.parentNode

        checkCards()
    }
}

const createCard = (character) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')
    
    front.style.backgroundImage = `url(../../src/assets/images-card/${character}.png)`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener("click", revelCard)
    card.setAttribute('data-character', character)

    return card
}

createCard()


const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ]
    
    const embaralhar = duplicateCharacters.sort(() => Math.random() - 0.5)

    embaralhar.forEach((character) => {
        const card = createCard(character);
        gameMemory.appendChild(card)
    })
}


function sortearNumeros() {
    let numerosSorteados = [];

    for (let i = 0; i < 5; i++) {
      let numeroAleatorio;
      let repetido;

      do {
        numeroAleatorio = Math.floor(Math.random() * 42);;
        repetido = numerosSorteados.includes(numeroAleatorio);
      } while (repetido);

      numerosSorteados.push(numeroAleatorio);
    }

    return numerosSorteados;
  }