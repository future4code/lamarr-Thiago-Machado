import axios from 'axios'
import React, { useEffect, useState } from 'react'



function App() {


  const CadastroUsuario = () => {

    const [myList, setMyList] = useState([])
    const [myName, setMyName] = useState("")
    const [myEmail, setMyEmail] = useState("")
  
    const atualizaName = (event) => {
      setMyName(event.target.value)
    }

    const atualizaEmail = (event) => {
      setMyEmail(event.target.value)
    }
  
    const ComponentLista = myList.map((item, index) => {
      const deletelist = (event) => {
        event.preventDefault()
  
        axios.delete(url + "/" + item.id, myHeaders).then((response) => {
            alert("Usuario deletado com sucesso!")
            getlist()
            // getPlaylist()
        }).catch((erro) => {
            alert("Ops! Algo deu errado!")
            console.log(erro.response);
        })
        setMyName("")
    }


      return (
        <li key={index}>
          {item.name} <button onClick={deletelist}>X</button>
        </li>
      )
    })
  
  
    useEffect(() => {
      getlist()
    }, [])
  
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const myHeaders = {
      headers: {
        Authorization: 'thiago-luca-lamarr'
      }
    }
  
    const getlist = () => {
      axios.get(url, myHeaders).then((response) => {
        console.log(response);
        setMyList(response.data)
      }).catch(
        (erro) => {
          console.log(erro.response);
        })
    }
  
    const body = {
      "name": myName,
      "email": myEmail
    }
  
    const postPlaylist = (event) => {
      event.preventDefault()
      axios.post(url, body, myHeaders).then(() => {
        alert("Cadastro realizado com sucesso!")
        getlist()
      }).catch((erro) => {
        alert("Ops! Algo deu errado!")
      })
      setMyName("")
      setMyEmail("")
    }
    
    const [State, setState]=useState(false);

    function trocaPagina(){
        setState(!State);
    }

    if(State){
      return (
          <div>
            <h1>Lista Usuário</h1>
            <div>
            {ComponentLista}
            </div>
            <button onClick={trocaPagina}>Voltar Página inicial</button>
          </div>
        )
    }else{
      return (
        <div>
          <h1>Cadastro</h1>
          <div>
          <button onClick={trocaPagina}>Lista Usuários</button>
          </div>
          <div>
            <input type="text" value={myName} onChange={atualizaName} placeholder="Nome" />
            <input type="text" value={myEmail} onChange={atualizaEmail} placeholder="E-mail" />
            <button onClick={postPlaylist}>
              Adicionar
            </button>
          </div>
        </div>
      )
    }

    
  }


  return (
    <div>
      <CadastroUsuario/>
    </div>
  );
}

export default App;
