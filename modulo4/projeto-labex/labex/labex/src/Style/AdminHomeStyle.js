import styled from "styled-components";



export const PainelAdmin = styled.div`
    width: 600px;
    height: 150px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 50vh;
    text-align: center; 
    border: 1px solid aqua;
    border-radius: 100px;
    background: linear-gradient(90deg, rgba(5,217,230,0.3533788515406162) 2%, rgba(0,69,255,0.20772058823529416) 100%);
    
    h1{
    color: white;
    font-style: italic;
    letter-spacing: 1px;
   }

`
export const Card = styled.div`
   flex: 0 0 35%;
   padding: 8px;
   margin: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   scroll-snap-align: start;
   color: white;
   border-radius: 10px;
   background: linear-gradient(0deg, rgba(4,70,139,1) 2%, rgba(22,143,175,1) 100%);

   img{
      width: 35px;
      cursor: pointer;
      margin: 0;
      padding: 0;
   }
   button{
      background: none;
      border: none;
      cursor: pointer;
   }

   h1{
      margin: 0;
      padding: 0;
      cursor: pointer;
      color: white;
   }
`
export const Container = styled.div`
   display: flex;
   position: fixed;
   bottom: 0;
   overflow-x: scroll;
   width: 100%;
   scroll-snap-type: x mandatory;
   scroll-padding: 24px;
   border-radius: 8px;


   ::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, rgba(4,70,139,1) 2%, rgba(22,143,175,1) 100%); 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
   background: linear-gradient(270deg, rgba(5,217,230,1) 2%, rgba(0,69,255,1) 100%);
}
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

export const Tela = styled.div`
     width: 100%;
    height: 100vh;
    background-image: url('https://img.olhardigital.com.br/wp-content/uploads/2020/12/espaco-sideral-viktorovpro-shutterstock.jpg');
    background-repeat:no-repeat;
    background-size: 100%;
    
`