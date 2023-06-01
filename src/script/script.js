const gameMemory = document.querySelector(".game-memory")

const characters =  [
    '1',
    '2',
    '3',
    '4',
    '5'
]


const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firistCard = ''
let secondCard = ''

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if(disabledCards.length === 10) {
        alert("fim do jogo")
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

loadGame()