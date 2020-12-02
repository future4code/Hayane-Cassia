console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

// interpretação de código 1
// a. 10 e 50, um em cada linha
//b. Não apareceria nada no console pois não estamos usando função de impressão.


// interpretação de código 2
//a. imprime Darvas e Goli porque o for só imprime a posição 0 e 1
//b. será impresso Amanda e Caio


// interpretação de código 2
// ele serve para testar se o indice do array é par e se for, adicionar o elemento no arrayFinal



//Exercícios de escrita de código 4
//a. 
/* function info(){
    return console.log("Eu sou Hayane, tenho 26 anos e moro em Fortaleza mas sou mineira.")
} */

//b. 
/* let nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))
let cidade = prompt("Digite sua cidade")
let estudante = confirm("Você é estudante?")

function info2 (){
    return console.log("Eu sou "+nome+", tenho "+idade+" anos, moro em "+
    cidade+" e sou estudante ("+estudante+")")
}

info2(nome, idade, cidade, estudante) */



//Exercícios de escrita de código 5
//a. 
/* function soma(a, b){
    return a+b
}
console.log(soma(5, 3)) */

//b. 
/* function comparacao (a, b) {
    if(a >= b){
        return true
    }else{
        return false
    }
}
console.log(comparacao(5, 3)) */

//c.
/* let msgm = 'Olá mundo!'

function repeat (msgm){
    for (i=0; i<10; i++){
        console.log(msgm)
    }
}

repeat(msgm) */



//Exercícios de escrita de código 6
//a.
/* const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22] */

/* function tamanho(array){
    return console.log(array.length)
}

tamanho(array) */

//b.
/* function verificador (num){
    if(num%2==0){
        return true
    }else{
        return false
    }
}
console.log(verificador(2)) */

//c.
/* function verifPares(){
    let cont = 0
    for (i=0; i<array.length; i++){
        if(array[i]%2==0){
            cont++
        }
    }
    return console.log(cont)
}

verifPares(array) */

//d. 
/* function verifPares(){
    for (i=0; i<array.length; i++){
        if(array[i]%2==0){
            return console.log(array[i]+" Número par!")
        }else{
            return console.log(array[i]+" Número Impar!")
        }
    }   
}

verifPares(array) */



//DESAFIO
//1.

/* let imprime = (x) => {
    return console.log(x)
}

let soma = (a, b) => {
    imprime(a+b)
}

soma(5, 3) */
