type Produtos={
    nome: string
    quantidade: number
    valorUnitario: number
}



const produtos: Produtos[]=[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]
type novosProdutos = {
    nome: string
    quantidade: number
    valorUnitario: string
}

function Convercao (produtos:Produtos[]):novosProdutos{
    const ajustaPreco = (preco :number): string => {
        const valorAjustado: string = preco.toFixed(2).replace('.', ',')
        return "R$ "+valorAjustado
    }

    const novosProdutos: novosProdutos[] = produtos
    
    for(let i=0; produtos.length < i; i++){
        const valor: string =  ajustaPreco(produtos[i].valorUnitario)
       novosProdutos[i].valorUnitario = valor
    }
   


}

console.table(Convercao(produtos))