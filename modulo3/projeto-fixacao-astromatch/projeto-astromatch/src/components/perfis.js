import { CardPerfil } from "./style"

export const Perfis = (props) => {

    return (
        <CardPerfil>
            <img src={props.img}/>
            <h2>{props.name}, {props.age}</h2>
            <p>{props.bio}</p>
        </CardPerfil>
    )

}