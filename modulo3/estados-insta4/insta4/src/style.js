import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const Card = styled.div`
    background-color: aqua;
    border: 1px solid gray;
    width: 300px;
    height: 300px;
    margin: 10px;

p{
    display: flex;
    font-size: 15px;
}

.nome, .frase{
    margin: 0 15px;
}

.postUsuario{
    margin-left: 15px;
    
}
`