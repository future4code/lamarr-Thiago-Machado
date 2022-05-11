// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let numerosPares = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                numerosPares.push(array[i]);
            }
        }
        return numerosPares;
    
}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosPares = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                numerosPares.push(array[i] * array[i]);
            }
        }
        return numerosPares;


}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
	for( let i = 0 ; i < array.length ; i++ ){ 
		let numeroDoArray = array[i]
       		if( numeroDoArray > maiorNumero ){ 
           			maiorNumero = numeroDoArray  
	}
    }
    return maiorNumero
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menorNumero

    const objeto = {
        maiorNumero: [],
        maiorDivisivelPorMenor: [],
        diferenca: [],
    }

    if ( num1 > num2){
        objeto.maiorNumero = num1
        maiorNumero = num1
        menorNumero = num2
    }else{
        objeto.maiorNumero = num2
        maiorNumero = num2
        menorNumero = num1
    }

    if (objeto.maiorNumero % menorNumero === 0){
       objeto.maiorDivisivelPorMenor = true
    }else{
        objeto.maiorDivisivelPorMenor = false
    }

    if ( num1 > num2){
       objeto.diferenca = num1 - num2
    }else{
        objeto.diferenca = num2 - num1
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC ) {
        return "Escaleno"
    }else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
//     let novoArray = []

//     let maiorNumero = 0
// 	for( let i = 0 ; i < array.length ; i++ ){ 
// 		let numeroDoArray = array[i]
//        		if( numeroDoArray > maiorNumero ){ 
//            			maiorNumero = numeroDoArray
// 	}
//     }
//     let menorNumero = maiorNumero
// 	for( let i = 0 ; i < array.length ; i++ ){ 
// 		let numeroDoArray = array[i]
//        		if( numeroDoArray < menorNumero ){ 
//            			menorNumero = numeroDoArray 
// 	}
//     }
// let segundoNumero
//     for(let i = 0; i < array.length; i++ ){
//         let numeroDoArray = array[i]
//         if(numeroDoArray < maiorNumero ){
//            let segundo = numeroDoArray
//            if(segundo > numeroDoArray){
//                segundoNumero = segundo
//            }
//         }
//     }

// let segundoNumeroMenor
//     for(let i = 0; i < ; i++ ){
//         let numeroDoArray = array[i]
//         if(numeroDoArray > menorNumero){
//             segundoNumeroMenor = numeroDoArray
//         }
//     }
//     novoArray.push(segundoNumero, segundoNumeroMenor)
//     return novoArray

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}