import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Perfis } from './components/perfis'
import { Tela, Match, TelaMatchs, Body, } from './style'



function App() {
  const [myPerfil, setMyPerfil] = useState([])
  const [myMatch, setMyMatch] = useState([])

  useEffect(() => {
    getMatch()
    getPerfil()

  }, [])

  const getPerfil = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago-luca/person').then((response) => {
      setMyPerfil(response.data.profile)
    }).catch(
      (erro) => {
        console.log(erro.response);
      })
  }

  const body = {
    "id": myPerfil.id,
    "choice": true
  }

  const addPerfil = (event) => {
    event.preventDefault()
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago-luca/choose-person', body).then(() => {
      getPerfil()
      getMatch()
    }).catch((erro) => {
      alert("Ops! Algo deu errado!")
    })
  }


  const getMatch = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago-luca/matches').then((response) => {
      setMyMatch(response.data.matches)
    }).catch(
      (erro) => {
        console.log(erro.response);
      })
  }

  const meusMatchs = myMatch.map((item, index) => {
    return (
      <Match key={index}>
        <img src={item.photo}/>
        <p>{item.name}</p>
      </Match>
    )
  })

  const limparPerfil = (event) => {
    event.preventDefault()
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thiago-luca/clear').then(() => {
      getPerfil()
      getMatch()
    }).catch((erro) => {
    })
  }

  
  const [State, setState]=useState(false);

  function trocaPagina() {
    setState(!State);
  }

  if (State) {

    return (
    <Body>
      <TelaMatchs>
      <div className='header'>
        <p className='logo'>astromatch</p>
        <button className='botaohome' onClick={trocaPagina}>Home</button>
      </div>
      <div className='mainmatchs'>
        {meusMatchs}
      </div>
      </TelaMatchs>
      <button className='botaolimpar' onClick={limparPerfil}>Limpar Matchs</button>
    </Body>
    );

  } else {

    return (
      <Body>
      <Tela>
        <div className='header'>
        <p className='logo'>astromatch</p>
        <button className='botaomatch' onClick={trocaPagina}>Matchs</button>
        </div>
        <Perfis
          name={myPerfil.name}
          bio={myPerfil.bio}
          age={myPerfil.age}
          img={myPerfil.photo}
        />

        <div className='botoes'>
        <button className='naocurtiu' onClick={getPerfil}>X</button>
        <button className='curtiu' onClick={addPerfil}>&#9829;</button>
        </div>
      </Tela>

      <button className='botaolimpar' onClick={limparPerfil}>Limpar Matchs</button>
      </Body>
    );

  }
}

export default App;
