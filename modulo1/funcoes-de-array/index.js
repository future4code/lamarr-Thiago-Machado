// Exercícios de interpretação de código

// 1°
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// a)R: será impresso todo array, com os itens, o index, e a quantidade de array

// 2°

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// a)R: irá ser impresso somente os nomes! 

// 3°

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a)R: será impresso somente os apelidos "Mandi", "Laura"

// Exercícios de escrita de código

// 1°

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArray1A = pets.map((item, index, array) => {
         return item.nome
})

console.log(novoArray1A)

const novoArray1B = pets.filter((item, index, array) => {
     return item.raca === "Salsicha"
})

console.log(novoArray1B)

function filtrarPorRaca(pet) {
    return pet.raca === "Poodle"
}

function retornaApenasNome(pet) {
    return pet.nome
}

let petSorteado=pets.filter(filtrarPorRaca)
petSorteado=petSorteado.map(retornaApenasNome)

console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${petSorteado[0]}!`);
console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${petSorteado[1]}!`);


// 2°
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const novoArrayA = produtos.map((item, index, array) => {
             return item.nome
    })
    
    console.log(novoArrayA)


function aredondamento(nun){
    let arredondar = Math.round(nun*100)/100
    return arredondar
}

function desconto(nun){
    let procetagem = 5 * (nun / 100) ;
    let desconto = nun - procetagem
    return desconto
}

const novoArrayB = produtos.filter((item, index, array) => {
    return item.preco = aredondamento(desconto(item.preco))
})


console.log(novoArrayB)


const novoArrayC = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log(novoArrayC)

const novoArrayD = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})

console.log(novoArrayD)

var novoArrayE = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})

const nomeProduto = novoArrayE.map((item, index, array) => {
    return item.nome
})
const valorProduto = novoArrayE.map((item, index, array) => {
    return item.preco
})

console.log(`Compre ${nomeProduto[0]} por R$${valorProduto[0]}`);
console.log(`Compre ${nomeProduto[1]} por R$${valorProduto[1]}`)