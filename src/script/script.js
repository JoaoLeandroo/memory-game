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
