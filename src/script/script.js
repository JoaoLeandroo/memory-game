
const buttonStart = document.querySelector(".start-game button")
const sectionStart = document.querySelector(".start-game")
const cardsGame = document.querySelector(".cards-game")

// const randomCards = ['']
buttonStart.addEventListener("click", function() {
    sectionStart.style.display = 'none'
    cardsGame.style.display = 'grid'

})

