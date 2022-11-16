
const nome: string="Thiago"
const data: string = '18/Novembro/1999' 

function infoPessoal(nome:string, data:string){
    const dataNascimento: string[]= data.split("/")
    
    return `Olá me chamo ${nome}, nasci no dia ${dataNascimento[0]} do mês de ${dataNascimento[1]} do ano de ${dataNascimento[2]}`
}

console.log(infoPessoal(nome, data))