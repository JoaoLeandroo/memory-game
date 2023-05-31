const memoryGame = document.querySelector(".game-memory")
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
    '10'
]



function createCard() {
    for(let i=0; i < 10; i++) {
        const card = document.createElement("div")
        const front = document.createElement("div")
        const back = document.createElement("div")
        const img = document.createElement('img')
        img.src = `../../src/assets/images-card/${cartas[i]}.png`


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





// function sortearNumeros() {
//     let numerosSorteados = [];
    
//     for (let i = 0; i < 5; i++) {
//       let numeroAleatorio;
//       let repetido;
      
//       do {
//         numeroAleatorio = Math.floor(Math.random() * 27) + 1;
//         repetido = numerosSorteados.includes(numeroAleatorio);
//       } while (repetido);
      
//       numerosSorteados.push(numeroAleatorio);
//     }
    
//     return numerosSorteados;
//   }
  
//   let numerosSorteados = sortearNumeros();
  
//   // Exibindo os números sorteados
//   console.log(numerosSorteados);
