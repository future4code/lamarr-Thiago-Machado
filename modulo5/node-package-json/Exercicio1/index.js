const name=process.argv[2]
const idade=Number(process.argv[3])

function imprimirFrase(name, idade){
    return (`Olá, ${name}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}`)
}

const resutado = imprimirFrase(name, idade)

console.log(resutado)