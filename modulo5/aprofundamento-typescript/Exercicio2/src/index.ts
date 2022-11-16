type amostra = {
    numeros: Number[],
    obterEstatisticas: any
}


const amostraDeIdades: amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros:any)=>{

    const numerosOrdenados:any = numeros.sort(
        (a:any, b:any) => a - b
    )

    let soma: any = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior:numerosOrdenados[numeros.length - 1],
        menor:numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
    }
}
console.table(amostraDeIdades.numeros)
console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))