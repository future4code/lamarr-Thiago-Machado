
type ClientesType={
    cliente: string,
    saldoTotal: Number,
    debitos: Number[]
}

const clientes:ClientesType[]=[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
    
]
function EmprestimoClientes (object:ClientesType[]){

    const array = object

    function soma (total:number, num:number){
            return total + num
        }
    
        for(let i=0; i < array.length; i++){
           const total= Number(array[i].debitos.reduce((a:number, b:number) => a + b, 0))
           array[i].saldoTotal =  Number(array[i].saldoTotal) - total
           array[i].debitos = []
        }

        function filtro(array:ClientesType){
            return array.saldoTotal < 0 
        }

    return array.filter(filtro)
}
EmprestimoClientes(clientes)  

console.table(EmprestimoClientes(clientes) )