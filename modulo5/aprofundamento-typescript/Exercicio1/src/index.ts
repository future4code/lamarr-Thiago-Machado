const minhaString: String = "22"

const meuNumero: Number | string = 22

type pessoa={
    name:string,
    idade:Number,
    corFavorita:corFavorita
}

enum corFavorita{
    AZUL='azul',
    VERMELHO='vermelho',
    VERDE='verde',
    VIOLETA='violeta',
    AMARELO='amarelo',
    LARANJA='laranja',
}

const pessoaUm: pessoa ={
    name:"thiago",
    idade:22,
    corFavorita:corFavorita.AZUL, 
}

const pessoaDois: pessoa ={
    name:"Luca",
    idade:15,
    corFavorita:corFavorita.VERDE, 
}

const pessoaTres: pessoa ={
    name:"Hiago",
    idade:27,
    corFavorita:corFavorita.VERMELHO, 
}

console.table(pessoaTres)