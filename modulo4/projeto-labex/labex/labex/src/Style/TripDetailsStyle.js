import styled from "styled-components";


export const Tela = styled.div`
   width: 100%;
   height: 100vh;
   background-image: url('https://img.olhardigital.com.br/wp-content/uploads/2020/12/espaco-sideral-viktorovpro-shutterstock.jpg');
   background-size: 100%;

 
  
`
export const Header = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
export const Buttons = styled.div`
   width: 100%;
   display: inline;
   justify-content: start;
   position: fixed;
   
  
  

   button{
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 0;
    font-style: italic;
    font-weight: bold;
    font-size: 25px;
    background-image: url('https://www.blogson.com.br/wp-content/uploads/2018/08/como-colocar-um-icone-de-voltar-no-aplicativo-framework7.png');
    background-size: 100%;
    cursor: pointer;
   }
`

export const CardTrip = styled.div`
        width: 900px;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        scroll-snap-align: start;
        color: white;
        border-radius: 10px;
        background: linear-gradient(0deg, rgba(4,70,139,1) 2%, rgba(22,143,175,1) 100%);
   
   .info{
        width: 0;
        padding: 0;
        width: 100%;
        display: flex;
        text-align: center;
        justify-content: space-around;
   }

   h1{
        margin: 0;
        padding: 0;
   }
   
   
   `

export const Main = styled.div`
        display: flex;
        justify-content: space-between;
        max-width: 100%;
        padding: 10px;
`

export const Container = styled.div`
   height: 450px;
   padding: 8px;
   width: 50%;
   flex-direction: column;
   justify-content: center;
   overflow-y: auto;
   scroll-snap-type: x mandatory;
   scroll-padding: 24px;
   border-radius: 8px;
   text-align: center;

   h1{
        color: white;
        width: 100%;

   }
  
   ::-webkit-scrollbar {
  width: 20px;
  
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, rgba(4,70,139,1) 2%, rgba(22,143,175,1) 100%);;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
   background: linear-gradient(270deg, rgba(5,217,230,1) 2%, rgba(0,69,255,1) 100%);
}

`


export const Card = styled.div`
   padding: 10px;
   margin: 10px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   scroll-snap-align: start;
   color: white;
   border-radius: 10px;
   background: linear-gradient(0deg, rgba(4,70,139,1) 2%, rgba(22,143,175,1) 100%);

   -webkit-animation: scale-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-in-tl 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

p{
        margin: 0;
        padding: 0;
}
   @-webkit-keyframes scale-in-tl {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
}
@keyframes scale-in-tl {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%;
    opacity: 1;
  }
}


   h1{
      text-align: center;
      padding: 0;
      margin: 0;
      border-radius: 20px;
   }

`

export const ButtonsCard = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-around;
        
  
  

   button{
    margin: 10px;
    width: 130px;
    height: 30px;
    border: none;
    border-radius: 50px;
    color: black;
    font-style: italic;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    box-shadow: 0px 0px 16px -2px rgba(0,0,0,0.55);
   }

   .reprovado{
        background: linear-gradient(0deg, rgba(175,22,22,1) 6%, rgba(252,0,0,1) 50%, rgba(175,22,22,1) 93%);
   }

   .aprovado{
        background: linear-gradient(0deg, rgba(17,143,17,1) 6%, rgba(119,252,0,1) 50%, rgba(17,143,17,1) 93%);
   }
`



