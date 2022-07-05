import React, {useState} from 'react'
import {PostContainer} from './style'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'



function Post(props){

  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [inputComentario, setInputComentario] = useState('')

  
  const onClickCurtida = () => {
    let novoValor=0
    let novoValor1=false

    if(novoValor===numeroCurtidas){
      novoValor=novoValor+1
      novoValor1=true
    }else if (novoValor>numeroCurtidas+1){
      novoValor=numeroCurtidas
      novoValor1=curtido
    }

    setnumeroCurtidas(novoValor)
    setCurtido(novoValor1)
    console.log('Curtiu!')
  }
    
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

    if(curtido===true) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }

    const info = [
      {nomeUsuario:props.nomeUsuario,
      fotoUsuario:props.fotoUsuario,
      fotoPost:props.fotoPost}
    ]

let arrayComponentes=info.map((elemento,index)=>{
  return elemento
})

    
console.log(arrayComponentes)

  return(
    <PostContainer>
      <div className = 'PostHeader'>
        <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </div>

      <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>

      <div className = 'PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

      </div>
      {componenteComentario}
    </PostContainer>
  )
}


export default Post