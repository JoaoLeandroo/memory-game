const memoryGame = document.querySelector(".game-memory")
const buttonResult = document.querySelector(".result-game")

const cartas = [
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
    '27'
]

// buttonResult.addEventListener('click', () => {
//     numerosSorteados
//     console.log(numerosSorteados)

// })

function createCard() {
    let num = sortearNumeros()
    for(let i=0; i < 5; i++) {
        const card = document.createElement("div")
        const front = document.createElement("div")
        const back = document.createElement("div")
        const img = document.createElement('img')
        img.src = `../../src/assets/images-card/${cartas[num[i]]}.png`


        card.className = 'card'
        front.className = 'face front'
        back.className = 'face back'

        front.appendChild(img)
        card.appendChild(front)
        card.appendChild(back)

        memoryGame.appendChild(card)
    }
}

createCard()





function sortearNumeros() {
    let numerosSorteados = [];
    
    for (let i = 0; i < 5; i++) {
      let numeroAleatorio;
      let repetido;
      
      do {
        numeroAleatorio = Math.floor(Math.random() * 27) + 1;
        repetido = numerosSorteados.includes(numeroAleatorio);
      } while (repetido);
      
      numerosSorteados.push(numeroAleatorio);
    }
    
    return numerosSorteados;
  }
  
  let numerosSorteados = sortearNumeros();
  
  // Exibindo os números sorteados
  console.log(numerosSorteados);
