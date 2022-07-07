import React, {useState} from 'react';
import Post from './components/Post/Post';
import { MainContainer, Card } from './style';



function App() {
const [postUsuario, setPostUsuario] = useState([])

const [inputNome, setInputNome] = useState("")
const [inputFrase, setInputFrase] = useState("")
const [inputPost, setInputPost] = useState("")


  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputFrase = (e) => {
    setInputFrase(e.target.value)
  }

  const handleInputPost = (e) => {
    setInputPost(e.target.value)
  }

  const addPost = (e) => {
    e.preventDefault();
    
    const novoPost = {nome: inputNome, Frase: inputFrase, Post: inputPost }
    const novaListaDePost = [...postUsuario, novoPost]
    setPostUsuario(novaListaDePost)
  }

  const listaDePost = postUsuario.map((postUsuario, index) => {
    return (
      <Card key={index}>
            <p className='nome'>{postUsuario.nome}</p>
            <p className='frase'>{postUsuario.Frase}</p>
            <p className='postUsuario'>{postUsuario.Post}</p>
      </Card>
    )
  })


return(
  

  <MainContainer>
      <div className='Formulario'>
          <p>Nome:</p>
          <input placeholder='Insira seu nome'
          value={inputNome}
          onChange={handleInputNome}
          />

          <p>Frase do dia:</p>
          <input
          placeholder='Insira uma frase'
          value={inputFrase}
          onChange={handleInputFrase}/>

          <p>Post</p>
          <input
          placeholder='Insira um post'
          value={inputPost}
          onChange={handleInputPost}/>

          <button onClick={addPost}>Enviar</button>
          </div>

          {listaDePost}

           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          
  </MainContainer>
)
  
}


export default App;
