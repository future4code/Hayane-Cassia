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

function blackJackOriginal() {
   let resp = confirm('Deseja iniciar uma nova rodada?')
   let somaUsuario = 0
   let somaComp = 0

   if (resp == true) {
      uCarta1 = comprarCarta()
      uCarta2 = comprarCarta()
      usuarioCarta1 = uCarta1.texto
      usuarioCarta2 = uCarta2.texto
      somaUsuario = uCarta1.valor + uCarta2.valor

      coCarta1 = comprarCarta()
      coCarta2 = comprarCarta()
      compCarta1 = coCarta1.texto
      compCarta2 = coCarta2.texto
      somaComp = coCarta1.valor + coCarta2.valor

      let sim = confirm("Suas cartas são: " + usuarioCarta1 + " e " + usuarioCarta2 + ". A carta revelada do computador é: " +
         compCarta1 + ". \n" +
         "Deseja comprar mais uma carta?")

      if (sim == true) {
         uCarta3 = comprarCarta()
         usuarioCarta3 = uCarta3.texto
         somaUsuario += uCarta3.valor

         if (somaUsuario > 21) {
            confirm("Suas cartas são: " + usuarioCarta1 + " e " + usuarioCarta2 + " e " + usuarioCarta3 +
               ". As cartas do computador são: " + compCarta1 + " e " + compCarta2 + ". \n" +
               "Estourou. O computador venceu!")
         } else if (somaUsuario < 21) {
            coCarta3 = comprarCarta()
            compCarta3 = coCarta3.texto
            somaComp += coCarta3.valor

            if (somaUsuario > somaComp || somaComp > 21) {
               confirm("Suas cartas são: " + usuarioCarta1 + " e " + usuarioCarta2 + " e " + usuarioCarta3 + ". As cartas do computador são: " +
                  compCarta1 + " e " + compCarta2 + " e " + compCarta3 + ". \n O usuário Venceu!")
            } else if (somaUsuario == somaComp) {
               confirm("Suas cartas são: " + usuarioCarta1 + " e " + usuarioCarta2 + " e " + usuarioCarta3 + ". As cartas do computador são: " +
                  compCarta1 + " e " + compCarta2 + " e " + compCarta3 + ". \n Empate!")
            } else {
               confirm("Suas cartas são: " + usuarioCarta1 + " e " + usuarioCarta2 + ". As cartas do computador são: " +
                  compCarta1 + " e " + compCarta2 + " e " + compCarta3 + ". \n O Computador Venceu!")
            }
         }


      } else {
         coCarta3 = comprarCarta()
         compCarta3 = coCarta3.texto
         somaComp += coCarta3.valor

         if (somaUsuario > somaComp || somaComp > 21) {
            confirm("Suas cartas são: " + usuarioCarta1 + " e " + usuarioCarta2 + ". As cartas do computador são: " +
               compCarta1 + " e " + compCarta2 + " e " + compCarta3 + ". \n O usuário Venceu!")
         } else if (somaUsuario == somaComp) {
            confirm("Suas cartas são: " + usuarioCarta1 + " e " + usuarioCarta2 + " e " + usuarioCarta3 + ". As cartas do computador são: " +
               compCarta1 + " e " + compCarta2 + " e " + compCarta3 + ". \n Empate!")
         } else {
            confirm("Suas cartas são: " + usuarioCarta1 + " e " + usuarioCarta2 + ". As cartas do computador são: " +
               compCarta1 + " e " + compCarta2 + " e " + compCarta3 + ". \n O Computador Venceu!")
         }
      }
   } else {
      confirm("Jogo encerrado.")
   }
}