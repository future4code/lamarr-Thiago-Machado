import styled from 'styled-components'

export const Div = styled.div`
    margin: 0;
    padding: 0;
`

export const Header = styled.header`
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;

    img{
        width: 50px;
    }

    h1 {
    font-size: 25px;
    color: black;
    }
`

export const Main = styled.main`
    background-color: RGB(255, 165, 0);
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;

    .mensagem{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        background-color: white;
        height: 500px;
        width: 1000px;
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
