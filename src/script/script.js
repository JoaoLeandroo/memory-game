
// const buttonStart = document.querySelector(".start-game button")
// const sectionStart = document.querySelector(".start-game")
// const cardsGame = document.querySelector(".cards-game")


// buttonStart.addEventListener("click", function() {
//     sectionStart.style.display = 'none'
//     cardsGame.style.display = 'grid'

// })


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
