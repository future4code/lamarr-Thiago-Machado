// Exercícios de interpretação de código

// 1°
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a)R: O codigo verifica se o resto da divisão é igual a 0.

// b)R: Para numero Par

// c)R: Para numero Impar

// 2°
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a)R: Para verificar o valor da fruta.

// b)R: "O preço da fruta maça é R$ 2.25"

// c)R: "O preço da fruta Pêra é R$ 5"

// 3°
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a)R: Recebendo um numero

// b)R: 10 --> "Esse número passou no teste", -10 --> Daria erro, pq não foi declarada com else

// c)R: haverá sim! o correto é assim: --->

/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
}else{
    let mensagem = "Essa mensagem é secreta!!!";
    console.log(mensagem)
} */

// fim da respoda da c)

// Exercícios de escrita de código

// 1°

const idade = Number(prompt("Qual sua idade?"))

if(idade >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir.")
}

// 2°

const aluno = prompt("Digite o turno que você estuda: \n M (matutino) ou V (Vespertino) ou N (Noturno)")

if(aluno === "M"){
    console.log("Bom Dia!")
}else if (aluno === "V"){
    console.log("Boa Tarde!")
}else if (aluno === "N"){
    console.log("Boa Noite")
}

// 3°

const aluno2 = prompt("Digite o turno que você estuda: \n M (matutino) ou V (Vespertino) ou N (Noturno)")

switch (aluno2) {
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa Noite")
        break;  
}

// 4°

const escolhaUsuario = prompt("Escolha um Gênero de filme:") 
const quantoPagar =Number(prompt("Qual o valor do ingresso?"))

if (escolhaUsuario === "Fantasia" && quantoPagar <= 15) {
    console.log("Bom filme!")
}else {
    console.log("Escolha outro filme :(")
}
