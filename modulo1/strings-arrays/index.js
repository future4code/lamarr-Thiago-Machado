// Exercicio de interpretação

    // A 

        // 1° Exercicio
        // let array
        // console.log('a. ', array)
        // R:--> será exibido undefined, pois a variavel não foi declarada.

        // 2° Exercicio
        // array = null
        // console.log('b. ', array)
        // R:--> será exbido null, pois foi declarado valor null (nulo)

        // 3° Exercicio
        // array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        // console.log('c. ', array.length)
        // R:--> será exibido (11), pois foi usado a propriedade length, ela indica a quantidade de argumentos! 

        // 4° Exercicio
        // let i = 0
        // console.log('d. ', array[i])
        // R:--> será exibido o valor (3), pois esse argumentos esta localizado no indice [0]

        // 5° Exercicio
        // array[i+1] = 19
        // console.log('e. ', array)
        // R:--> será exibido [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13], pois o indice [1] foi alterado, (4)-->(19)

        // 6° Exercicio
        // const valor = array[i+6]
        // console.log('f. ', valor)
        // R:--> será exibido o valor (9), pois o indice [0] + [6] = [7], e o indice [7] é (9)

    // B

        // 1° exercicio
        // const frase = prompt("Digite uma frase")

        // console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

        // R:-->"SUBI NUM ÔNIBUS EM MIRROCOS 27"

// Exercicios de Código

// 1° Exercicio 
const nomeDoUsuario= prompt("Qual é seu nome?")
const emailDoUsuario= prompt("Qual é seu E-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// 2° Exercicio
let array = ["arroz", "feijão", "batata", "chocolate", "biscoito"]
const pergutaUsuario= prompt("Qual sua comida favorita?")

console.log(array)

console.log("Essas são as minhas comidas preferidas:")
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])

array[1] = pergutaUsuario

console.log(array)

// 3° Exercicio

let listaDeTarefas

const primeiraTarefa = prompt("Primeira Tarefa?")
const segundaTarefa = prompt("Segunda Tarefa?")
const terceiraTarefa = prompt("Terceira Tarefa?")

listaDeTarefas=[primeiraTarefa, segundaTarefa, terceiraTarefa]

console.log(listaDeTarefas)

const ind = prompt("Digite qual o numero da tarefa que você já conclui de 1 a 3")

let novaListaDeTarefas = listaDeTarefas.splice([ind]-1, 1)

console.log(listaDeTarefas)