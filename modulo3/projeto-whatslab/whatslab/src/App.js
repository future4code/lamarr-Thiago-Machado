
import React, {useState} from 'react';
import {Div, Header,ContainerMensagem, Main, Footer} from './style.js'
import styled from 'styled-components'


function App() {
const [mensagemUsuario, setMensagemUsuario] = useState([])

const [inputNome, setInputNome] = useState("")
const [inputMensagem, setInputMensagem] = useState("")



  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputMensagem = (e) => {
    setInputMensagem(e.target.value)
  }



  const addMensagem = (e) => {
    e.preventDefault();
    
    const novaMensagem = {nome: inputNome, Mensagem: inputMensagem}
    const novaListaDeMensagem = [...mensagemUsuario, novaMensagem]
    setMensagemUsuario(novaListaDeMensagem)
  }

  const novaListaDeMensagem = mensagemUsuario.map((mensagemUsuario, index) => {
    const eu = mensagemUsuario.nome

    if(eu.toUpperCase()  === 'EU'){
      return (
        <div className='containerEu'>
        <div className='cardMensagemEu' key={index}>
              <p className='mensagemUsuario'>{mensagemUsuario.Mensagem}</p>
        </div>
        </div>
      )
    }else{
      return (
        <div className='containerOutro'>
        <div className='cardMensagemOutro' key={index}>
              <p className='nome'><b>{mensagemUsuario.nome}: </b></p>
              <p className='mensagemUsuario'>{mensagemUsuario.Mensagem}</p>
        </div>
        </div>
      )
    }
  })



  return (
    <Div>
      <Header>
        <h1>LabZap</h1>
      </Header>

      <ContainerMensagem>

      {novaListaDeMensagem}
      
      </ContainerMensagem>


      <Main>
        <div className='mensagem'>
        
          <input
          placeholder='Insira seu nome'
          value={inputNome}
          onChange={handleInputNome}/>

          <input className='input-msg' 
          placeholder='Insira uma Mensagem'
          value={inputMensagem}
          onChange={handleInputMensagem}/>
          
          <button onClick={addMensagem}>Enviar Mensagem</button>
        </div>
      </Main>

      <Footer>
        <p>Copyright© 2022 Labenu All rights reserved. R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150</p>
      </Footer>
    </Div>
  );
}

export default App;
