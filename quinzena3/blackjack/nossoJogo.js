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

function blackJackSimples() {
   let resp = confirm('Deseja iniciar uma nova rodada?')
   let somaUsuario = 0
   let somaComp = 0

   if(resp==true){
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

      confirm("Usuário - cartas: "+usuarioCarta1+" "+usuarioCarta2+" pontuação: "+somaUsuario+". \n"+
      "Computador - cartas: "+compCarta1+" "+compCarta2+" pontuação: "+somaComp+".")
      if(somaUsuario&&somaComp == 21 || somaUsuario == somaComp){
         confirm("Empate! Atualize a página para jogar novamente.")
      }else if(somaUsuario > somaComp){
         confirm("Usuário venceu! Atualize a página para jogar novamente.")
      }else{
         confirm("Computador venceu! Atualize a página para jogar novamente.")
      }
      
   }else{
      confirm("Jogo encerrado. Atualize a página para nova rodada.")
   }
}