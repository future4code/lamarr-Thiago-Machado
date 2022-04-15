/* 
Exercicios de interpretação 
1° 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) 

R: 1° Impressão --> a. false 
R: 2° Impressão --> b. false
R: 3° Impressão --> c. true
R: 4° Impressão --> d. boolean

2°
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

R: --> falta converter as strings em numbers! está sendo
 impresso os numeros na mesma linha, sem fazer a soma.

3°
R: ---> 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
*/


// Exercícios de escrita de codigo
// 1° 
let minhaIdade = Number(prompt("Qual sua idade?"))
let idadeDoAmigo = Number(prompt("Qual sua idade do seu melhor amigo(a)?"))


console.log("Sua idade é maior do que a do seu melhor amigo?", minhaIdade > idadeDoAmigo)

console.log(minhaIdade - idadeDoAmigo)

// 2°
let numPar = Number(prompt("Digite um numero Par!"))

console.log(numPar % 2)

// R: --> toda impressão dá 0

// R: --> quando o valor é impar dá sempre 1

// 3°
let idade = Number(prompt("Qual sua idade?"))

console.log("A sua idade em meses é:", idade * 12, "meses")

console.log("A sua idade em dias é:", idade * (12 * 365), "dias")

console.log("A sua idade em horas é:", idade * (12 * (365 * 24)), "horas")

// 4°
let num1 = Number(prompt("Digite 1° numero"))
let num2 = Number(prompt("Digite 2° numero"))

let divisão1 = num1 % num2
let divisão2 = num2 % num1

console.log("O primeiro numero é maior que segundo?", num1 > num2)
console.log("O primeiro numero é igual ao segundo?", num1 === num2)
console.log("O primeiro numero é divisível pelo segundo?", divisão1 === 0 )
console.log("O primeiro numero é divisível pelo segundo?", divisão2 === 0 )

