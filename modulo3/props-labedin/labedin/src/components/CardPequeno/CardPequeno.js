import React from 'react';
import './CardPequeno.css'
import email from './img/email.png'
import endereço from './img/endereço.png'

function CardPequeno(props){
   return(
     <div className='card-min'>
        <div className='container-min'>
        <img src={email}/>
        <h4>Email:</h4>
        <p>{ props.email }</p>
        </div>

        <div className='container-min'>
        <img src={endereço}/>
        <h4>Endereço:</h4>
        <p>{ props.endereço }</p>
        </div>

     </div>
   )
}

export default CardPequeno