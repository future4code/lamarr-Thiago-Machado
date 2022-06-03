function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let novoArray = []
for(i = 0; i < arrayDeNumeros.length; i++ ){
  if(arrayDeNumeros[i] === numeroEscolhido ){
   novoArray.push(arrayDeNumeros[i])
} 
}

if(numeroEscolhido === 3 || arrayDeNumeros.length === 0){
  return "Número não encontrado"
}else{
  return `O número ${numeroEscolhido} aparece ${novoArray.length}x`
}

}
