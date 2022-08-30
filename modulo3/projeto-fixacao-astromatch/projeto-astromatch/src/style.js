import styled from "styled-components";


export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .botaolimpar{
        position: fixed;
        right: 0;
        bottom: 0;
    }
`

export const Tela = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 3px solid black;
    width: 350px;
    height: 620px;

    .header{
        margin: 0;
        padding: 0;
        width: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0;
        width: 200px;
        font-size: 30px;
        border-radius: 50px;
        background: linear-gradient(90deg, rgba(5,217,230,1) 2%, rgba(255,0,241,1) 100%);
        color: white;
        font-style: italic;
    }

    .botaomatch{
        position: absolute;
        margin-right: -280px;
        border: none;
        border-radius: 50px;
        background-color: blueviolet;
        color: white;
        cursor: pointer;
    }

    .naocurtiu{
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 100%;
        background-color: red;
        text-decoration:none;
        font-size: 30px;
        text-align: center;
        cursor: pointer;
        color: white;
    }

    .curtiu{
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 100%;
        background-color: green;
        text-decoration:none;
        font-size: 30px;
        text-align: center;
        cursor: pointer;
        color: white;
    }

    .botoes{
        width: 300px;
        display: flex;
        justify-content: space-around;
        margin: 10px;
    }

`

export const Match = styled.div`
    width: 200px;
    text-align: left;
    display: flex;
    align-items: center;
    margin: 16px ;

    img{
        margin: 0;
        margin-right: 10px;
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

    p{
        font-weight: bold;
        font-style: italic;
    }
`

export const TelaMatchs = styled.div`
    width: 350px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header{
        margin: 0;
        padding: 0;
        width: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .botaohome{
        position: absolute;
        margin-right: -280px;
        border: none;
        border-radius: 50px;
        background-color: blueviolet;
        color: white;
        cursor: pointer;
    }

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0;
        width: 200px;
        font-size: 30px;
        border-radius: 50px;
        background: linear-gradient(90deg, rgba(5,217,230,1) 2%, rgba(255,0,241,1) 100%);
        color: white;
        font-style: italic;
    }

    .mainmatchs{
        display: flex;
        flex-direction: column;
        width: 350px;
    }

`