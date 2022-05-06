// Exercícios de interpretação de código

// 1°

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// R: está somando os valores de i, o valor é 10!

// 2°

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a)R: [19, 21, 23, 25, 27, 30]

// b)R: sim! assim -->

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
// 		console.log(numero)	
// }


// 3°

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

/* R:
        *
        **  
        ***
        ****
*/


// Exercícios de escrita de código

// 1°

// let quantosPets =Number(prompt("Quantos bichinhos de estimação você tem?"));
// if(quantosPets < 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else{
//     let nomePets= [prompt("Digite o nome deles!")];
//     console.log(nomePets)
// }

// 2°

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
// a)
for (let i of array){
    console.log(i);  
}

// b)
for(let i of array){
    console.log(i/10);
}

// c)
for(let i of array) {
    let par = i % 2
   if(par === 0){
       console.log(i)
   }
}

// d)
let numeroDoArray
for (let indice=0; indice < array.length; indice++){
        numeroDoArray = array[indice];
        console.log(`O elemento do índex ${indice} é ${numeroDoArray}`)           
}


// e)
function devolveMaiorNumero( array ) {  
	let maiorNumero = 0
	for( let i = 0 ; i < array.length ; i++ ){ 
		let numeroDoArray = array[i]
       		if( numeroDoArray > maiorNumero ){ 
           			maiorNumero = numeroDoArray  
		}
	}
    let menorNumero = array[0]
	for( let i = 0 ; i < array.length ; i++ ){ 
		let numeroDoArray = array[i]
       		if( numeroDoArray < menorNumero ){ 
           			menorNumero = numeroDoArray  
		}
	}

	return `o maior numero é ${maiorNumero} e o menor é ${menorNumero}` 
}
console.log(devolveMaiorNumero(array))

	