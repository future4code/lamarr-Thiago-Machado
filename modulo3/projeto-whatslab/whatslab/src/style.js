import styled from 'styled-components'

export const Div = styled.div`
    margin: 0;
    padding: 0;
    background-color: RGB(255, 165, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Header = styled.header`
    background-color: white;
    display: flex;
    margin: 0;
    padding: 0;
    z-index: 10;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    
    h1 {
    font-size: 25px;
    color: black;
    }
`

export const ContainerMensagem = styled.div`
    margin: 0;
    padding: 0;
    background-color: white;
    width: 1000px;
    height: 500px;
    overflow-y: scroll;
   
    
   

    .cardMensagemEu{
    display: flex;
    border-radius: 10px;
    padding: 5px;
    margin: 5px 15px;
    background-color: RGB(255, 165, 0);
    box-shadow: 3px 3px 5px darkgray;
    }

    .cardMensagemOutro{
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
    margin: 5px 15px;
    background-color: RGB(255, 165, 0);
    box-shadow: -3px 3px 5px darkgray;
    }

    .nome{
        margin: 0;
        padding: 0;
    }

    .mensagemUsuario{
        margin: 0;
        padding: 0;
    }

    .containerEu{
        max-width:1000px;
        display: flex;
        justify-content: flex-end;
    }

    .containerOutro{
        max-width:1000px;
        display: flex;
        justify-content: flex-start; 
    }

`


export const Main = styled.main`
    width: 1000px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .mensagem{
        background-color: RGB(255, 165, 0);
        width: 1000px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
   
    p, input, button{
        margin: 10px;
    }
    .input-msg{
        width: 400px;
    }
`

export const Footer = styled.footer `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: RGB(169, 169, 169);
    width: 100%;
    height: 30px;
`