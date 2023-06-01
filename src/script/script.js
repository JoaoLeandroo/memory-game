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

const createCard = (character) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')
    
    front.style.backgroundImage = `url(../../src/assets/images-card/${character}.png)`

    card.appendChild(front)
    card.appendChild(back)

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