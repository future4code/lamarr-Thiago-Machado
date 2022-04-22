// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retângulo"))
  const largura = Number(prompt("Digite a largura do retângulo"))

  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o Ano Atual"))
  const anoNascimento = Number(prompt("Digite o Ano de Nascimento"))

  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso / (altura * altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  
    const nome = prompt("Qual é seu nome?")
    const idade = prompt("Qual é sua idade?")
    const email = prompt("Qual é seu E-mail?")
  

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.` )

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

    const cor1= prompt("Qual sua primeira cor favorita?")
    const cor2= prompt("Qual sua segunda cor favorita?")
    const cor3= prompt("Qual sua terceira cor favorita?")

    let minhaCor = [cor1, cor2, cor3]

    console.log(minhaCor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return (string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return (custo / valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return(string1.length == string2.length)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return(array[0])

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return(array[array.length - 1])

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  function mudarPosicao(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
    return array;
  }
  let ind = (array.length -1)

  let novoArray = mudarPosicao(array, ind, 0);

  novoArray.push(novoArray.splice(1,1)[0]);
  
  return novoArray
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1= string1.toLowerCase()
  string2= string2.toLowerCase()

  const verificacao = string1 === string2

  return verificacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual=prompt("Qual é o ano atual");
  let anoNascimento=prompt("Qual é o ano do seu Nacsimento?");
  let anoDeEmicao=prompt("Qual ano sua carteira de identidade foi emitida?");

  let idade= anoAtual-anoNascimento
  
  if(idade<=20){ 
    let tempo = anoAtual - anoDeEmicao
    let renovação = tempo >= 5
    console.log(renovação)
  }else if (idade<=50) {
    let tempo = anoAtual - anoDeEmicao
    let renovação = tempo >= 10
    console.log(renovação)
  }else {
    let tempo = anoAtual - anoDeEmicao
    let renovação = tempo >= 15
    console.log(renovação)
  }
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  

    let div4 = ano % 4
    let div400 = ano % 400
    let div100 = ano % 100

    if(div400 === 0 || div4 === 0 && div100 !== 0){
      return true
    }else{
      return false
    }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maior18 = prompt("Você tem mais de 18 anos?");
  const ensinoMedio = prompt("Você possui ensino médio completo?");
  const diponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  if(maior18 === "sim" && ensinoMedio === "sim" && diponibilidade === "sim") {
    console.log(true)
  }else{
    console.log(false)
  }

}