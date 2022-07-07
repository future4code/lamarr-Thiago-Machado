import React, {useState} from 'react'
import {CommentContainer} from'./style.js'


export function SecaoComentario(props) {
	const [inputComentario, setInputComentario] = useState("")

	const handleInputComentario = (event) => {
		setInputComentario(event.target.value)
		}
		

	return (
		<CommentContainer>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={inputComentario}
				onChange={handleInputComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}