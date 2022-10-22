enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function filme (nome:string, anoLancamento:Number, genero: GENERO, pontuacao?:Number){
    const filme: any = {
        nome: nome,
        anoLancamento: anoLancamento,
        genero: genero,
    }
    if(pontuacao){   
        filme['pontuacao']=pontuacao
    }
    console.table(filme)
}

filme('Homem Aranha', 2021, GENERO.ACAO)