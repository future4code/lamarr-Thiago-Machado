import styled from "styled-components";



export const Formulario = styled.div`
    width: 560px; 
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid aqua;
    border-radius: 100px;
    background: linear-gradient(90deg, rgba(5,217,230,0.3533788515406162) 2%, rgba(0,69,255,0.20772058823529416) 100%);
    
    h1{
    color: white;
    font-style: italic;
    letter-spacing: 1px;
   }

`
export const Select= styled.select`
    width: 100%;
    height: 40px;
    font-size: 15px;
    padding-left:10px ;
    border-radius: 4px;
    border: 1px solid gray;
   color: gray;
`



export const Buttons = styled.div`
   display: flex;
   justify-content: center;
   margin: 0 10px;
  
  

   button{
    margin: 0 30px;
    width: 130px;
    height: 30px;
    border: none;
    border-radius: 50px;
    color: white;
    font-style: italic;
    font-weight: bold;
    font-size: 15px;
    background:linear-gradient(90deg, rgba(5,217,230,1) 2%, rgba(0,69,255,1) 100%);
    cursor: pointer;
   }

`
export const Form = styled.form`
    margin-bottom: 20px;

    input{
        width: 560px;
        height: 40px;
        font-size: 15px;
        padding-left:10px ;
        border-radius: 4px;
        border: 1px solid gray;
        
        
        &:focus{
         outline: none;
         border: 2px solid aliceblue;
        }
       
        
    }

   

   

`


export const Tela = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://img.olhardigital.com.br/wp-content/uploads/2020/12/espaco-sideral-viktorovpro-shutterstock.jpg');
    background-repeat:no-repeat;
    background-size: 100%;
    
    
`