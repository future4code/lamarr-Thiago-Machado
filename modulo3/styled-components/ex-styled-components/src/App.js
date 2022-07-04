import React from 'react';
import {Div, Header, Main, Footer} from './style.js'
import Imagem from './img/labenu.jpg'



function App() {
  return (
    <Div>
      <Header>
        <img src={Imagem} alt='logo-labenu' />
        <h1>LabZap</h1>
      </Header>
      <Main>
        <div className='mensagem'>
          <p>Remetente:</p>
          <input></input>
          <p>Msg:</p>
          <input className='input-msg'></input>
          <button>Enviar Mensagem</button>
        </div>
      </Main>

      <Footer>
        <p>Copyright© 2022 Labenu All rights reserved. R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150</p>
      </Footer>
    </Div>
  );
}

export default App;
