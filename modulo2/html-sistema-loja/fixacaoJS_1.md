function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const salario = 2000

const totalComiscao = qtdeCarrosVendidos * 100  + valorTotalVendas * 0.05

const salarioFinal = salario + totalComiscao

return salarioFinal
}