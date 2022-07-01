import React, {useState} from 'react'
import './style.css'


export function SecaoComentario(props) {
	const [inputComentario, setInputComentario] = useState("")

	const handleInputComentario = (event) => {
		setInputComentario(event.target.value)
		}
		

	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={inputComentario}
				onChange={handleInputComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}