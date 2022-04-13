//Interpretação
/*
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

R: console.log(b) --> vai imprimir no console o valor: 10

R: b = 5
    console.log(a, b) --> vai imprimir no console o valor: 10, 5 
*/

/*
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

R: console.log(a, b, c) --> vai impimir no console o valor: 20, 10, 10
*/

/*
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

R:
let horasDeTrabralho = prompt("Quantas horas você trabalha por dia?")
let valorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorDia/horasDeTrabralho} por hora`)
*/

//Escrita de código

let nome = ""
let idade= Number("")

console.log(typeof nome)
console.log(typeof idade)

/* 
Foi impresso tipo string porque está entre aspas, 
mas para corrigir eu fiz a converção para numero
*/
nome= prompt("Qual é seu nome?")
idade= prompt("Qual é sua idade?")

//Eu notei que ele manteve o mesmo tipo de variável

console.log("Olá",nome,"você tem", idade,"anos")

let primeiraPergunta= ""
let segundaPergunta= ""
let terceiraPergunta= ""

primeiraPergunta=prompt("você está de azul?")
segundaPergunta=prompt("você está bem hoje?")
terceiraPergunta=prompt("você está feliz?")

console.log("você está de azul?",primeiraPergunta)
console.log("você está bem hoje?",segundaPergunta)
console.log("você está feliz?",terceiraPergunta)

let a = 10
let b = 25

c = a 
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)