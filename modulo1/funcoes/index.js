// --> Exercicios de interpretação de codigo

// {1°}

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) será impresso 10, 50

// b) não será exibido nada, pois o console não foi chamado!


// {2°}

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) essa função deixa todo texto em minusculo, e verifica se tem a palavra cenoura, sua ultilidade é de verificação

// b) I True (eu gosto de cenoura), II True (cenoura é bom pra vista), III True (cenouras crescem na terra)

// --> Exercicios de escrita de codigo

// {1°}

// a)
function minhaFuncao() {
    let frase= ("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.");
    frase = frase.replace("Caio", "Thiago")
    frase = frase.replace("23", "22");
    frase = frase.replace("São Paulo", "Areal");
    frase = frase.replace("estudade", "Instrutor de Informática");

    console.log(frase)
}

minhaFuncao()

// b)

function infoUsuario (nome, idade, cidade, profissão) {
    nome = prompt("Qual seu nome?");
    idade = Number(prompt("Qual sua idade?"));
    cidade = prompt("Qual cidade Você mora?");
    profissão = prompt("Qual sua profissão?");

    return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
}

console.log(infoUsuario())

//  {2°}

// a)
function calculo(nun1, nun2) {
    soma = nun1 + nun2

    return soma
}

console.log(calculo(20, 30))

// b)

function calculo2(nun1, nun2) {
    comparação = nun1 >= nun2;

    return comparação
}

console.log(calculo2(20, 10))

// c)

function calculo3(nun1) {
    verificação1 = nun1 % 2
    verificação2 = verificação1 === 0

    return verificação2
}

console.log(calculo3(17))

// d)

function mensagem() {
    let mensagem= prompt("Digite uma mensagem: ");
    mensagem=mensagem.toUpperCase();
    
    console.log(mensagem.length);
    return mensagem;
}

console.log(mensagem())


// {3°}

function soma(num1, num2){
    let soma = num1 + num2
    return soma
}

function subtração(num1, num2){
    let subtração = num1 - num2
    return subtração
}

function multiplicação(num1, num2){
    let multiplicação = num1 * num2
    return multiplicação
}

function divisão(num1, num2){
    let divisão = num1 / num2
    return divisão
}

const numero1= Number(prompt("Digite um numero:"));
const numero2= Number(prompt("Digite o segundo numero:"));

console.log(`Numeros inseridos: ${numero1} e ${numero2}`);
console.log(`Soma: ${soma(numero1, numero2)}`);
console.log(`Diferença: ${subtração(numero1, numero2)}`);
console.log(`Multiplicação: ${multiplicação(numero1, numero2)}`);
console.log(`Divisão: ${divisão(numero1, numero2)}`);

