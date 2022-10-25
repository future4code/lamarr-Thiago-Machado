type Produtos={
    nome: string
    quantidade: number
    valorUnitario: number
}

type novosProdutos = {
    nome: string
    quantidade: number
    valorUnitario: string
}




const produtos: Produtos[] =[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]


function ajustaPreco (preco :number): string {
        const valorAjustado: string = preco.toFixed(2).replace('.', ',')
        return "R$ "+valorAjustado
    }

function converterPreco (produtos:Produtos[]):novosProdutos{
    const array:novosProdutos[] = produtos.map((array:Produtos[]){
        array 
        for(let i=0; array.length > i; i++){
            let valor:string = ajustaPreco(array[i].valorUnitario)
            

            }
    })

    

    

    return array

  } 
   

console.table(converterPreco(produtos))