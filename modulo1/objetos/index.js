// Exercícios de interpretação de código

// 1°
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a)R: 1- "Matheus Nachtergaele"; 2-"Virginia Cavendish"; 3-canal: "Globo", horario: "14h"

// 2°
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a)R: 1-nome: "Juca", idade: 3, raca: "SRD"; 2-nome: "Juba", idade: 3, raca: "SRD"; 3- nome: "Jubo", idade: 3, raca: "SRD"

// b)R: Faz uma copia do objeto

// 3°
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a)R: false; undefined

/* b)R: O primeiro retornou o valor de false, porque é o 
valor que estava dentro do objeto. Já o segundo retornou undefined
porque não tinha esse valor dentro do objeto.  */

// Exercícios de escrita de código

// 1°
// a)
const pessoa = {
    nome: "Thiago", 
    apelidos:["Tim", "Thi", "Titi"],
}

function objeto(pessoa){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
}

objeto(pessoa)

// b)
const amorPessoa = {
    ...pessoa,
    apelidos:["bebe", "vida", "amor" ],
}

objeto(amorPessoa)

// 2°
// a)
const usuario = {
	nome: "Bruna", 
    idade: 23, 
	profissao: "Professora"
}

const usuario2 = {
	nome: "Bruno", 
    idade: 28, 
	profissao: "Advogado"
}

// b)
function retornar(){
    return [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length]

}
function retornar(){
    return [
        [usuario.nome, usuario.nome.length, usuario.idade, usuario.profissao, usuario.profissao.length],
        [usuario2.nome, usuario2.nome.length, usuario2.idade, usuario2.profissao, usuario2.profissao.length]
    ]
    
}

// 3

let carrinho = [

]


let mamão = {
    nome:"Mamão", 
    disponibilidade:true
}

let maça= {
    nome:"Maça", disponibilidade:true
}

let banana = {
    nome:"Banana", disponibilidade:false
}

function intruduzir(){
    carrinho.push(mamão, maça, banana)
    return intruduzir
}

intruduzir()

console.log(carrinho)

