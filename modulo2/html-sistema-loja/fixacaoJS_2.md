function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let custoTota
  
  if(quantidade >= 12){
   custoTota = quantidade * 1 
  }else{
    custoTota =quantidade * 1.30
  }
  
  return custoTota
}