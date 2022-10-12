const operador=process.argv[2]
const n1=Number(process.argv[3])
const n2=Number(process.argv[4])

function imprimirResutado(operador, n1, n2){
    switch(operador){
        case "soma":
            return n1+n2
            break;
        case "subt":
            return n1-n2
            break;
        case "mult":
            return n1*n2
            break;
        case "div":
            return n1/n2
            break;
        default:
            return("Deu Erro, digite novamente!")
    }
}

const resultado=imprimirResutado(operador, n1, n2)

console.log(resultado)