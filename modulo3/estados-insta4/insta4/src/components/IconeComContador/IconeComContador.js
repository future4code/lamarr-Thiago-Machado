import React from 'react'
import {IconContainer} from './style.js'




export function IconeComContador(props) {
	return (
	<IconContainer>
		<img className ='IconImage' alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
	)
}
