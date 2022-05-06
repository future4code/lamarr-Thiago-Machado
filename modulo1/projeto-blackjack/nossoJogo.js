/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   //  for(let rodadas = 0; rodadas < 2; rodadas++ ){
   //    const cartaUsuario = comprarCarta(); 
   //    const cartaComputador = comprarCarta();
   //    }

if(confirm("Deseja jogar?")) {
//--> Pontuação e cartas Usuario 
   let pontuaçãoUsuario
   for(let rodadas = 0; rodadas < 1; rodadas++ ){
      const carta1 = comprarCarta();
      const carta2 = comprarCarta();
      pontuaçãoUsuario = carta1.valor + carta2.valor
      
      console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${carta1.valor + carta2.valor} `);
   } // for 
        
//--> Pontuação e cartas computador
   let pontuaçãoComputador
   for(let rodadas = 0; rodadas < 1; rodadas++ ){
      const carta1 = comprarCarta();
      const carta2 = comprarCarta();
      pontuaçãoComputador = carta1.valor + carta2.valor
      
      console.log(`Computador - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${carta1.valor + carta2.valor} `);
   } // for 


//Verificação do resutado da partida
   if(pontuaçãoUsuario > pontuaçãoComputador){
      console.log("O usuário ganhou!")
   }else if(pontuaçãoUsuario < pontuaçãoComputador){
      console.log("O computador ganhou!")
   }else if(pontuaçãoUsuario === pontuaçãoComputador){
      console.log("Empate!")
   }


}else {
   console.log("O jogo acabou") 

}



