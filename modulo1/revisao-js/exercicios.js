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
   array.sort((a, b) => a - b);

   let novoArray = []

   novoArray.push(array[array.length-2], array[1])
   return novoArray

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   function filmeEmCartaz (array){
       return `Venha assistir ao filme ${array.nome}, de ${array.ano}, dirigido por ${array.diretor} e estrelado por ${array.atores[0]+", "+array.atores[1]+", "+array.atores[2]+", "+array.atores[3]}.`
   }

   return filmeEmCartaz(filme)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   function pessoaAnonima (obj){
       obj = {
           ...obj,
           nome: "ANÔNIMO"
       }
       return obj
   }

   return pessoaAnonima(pessoa)
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
let pessoasAutorizadas = []

    for(let i = 0; i < pessoas.length; i++){
        let arrayAtual = pessoas[i]
        if(arrayAtual.altura >= 1.5 && arrayAtual.idade > 14 && arrayAtual.idade < 60){
        pessoasAutorizadas.push(arrayAtual)
        }        
    }
return pessoasAutorizadas   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = []

    for(let i = 0; i < pessoas.length; i++){
        let arrayAtual = pessoas[i]
        if(arrayAtual.altura >= 1.5 && arrayAtual.idade > 14 && arrayAtual.idade < 60){
        }else{
            pessoasNaoAutorizadas.push(arrayAtual)
        }        
    }
return pessoasNaoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
        for(let i in contas) {
        let gastoCliente = contas[i].compras
        let soma = 0
        for(let i in gastoCliente){
        soma += gastoCliente[i]
        }
        contas[i].saldoTotal -= soma
        contas[i].compras = []
        }
        return contas
      
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (x, y){
        let a = x.nome.toUpperCase(),
            b =  y.nome.toUpperCase();

        return a == b ? 0 : a > b ? 1 : -1;
    }) 
    
    return consultas

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    consultas.sort(function (a, b) {
	
        return (a.dataDaConsulta > b.dataDaConsulta) ? 1 : ((b.dataDaConsulta > a.dataDaConsulta) ? -1 : 0);
     
    });
    
    return consultas

}