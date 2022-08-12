import React from "react"
import { useNavigate } from "react-router-dom"
import { Paises } from '../componets/paises'
import Select from 'react-select'
import { Formulario, Form, Tela, Buttons } from "../Style/CreateTripStyle"

export const CreateTripPage=()=>{
    const navigate = useNavigate()

    const voltar = () => {
        navigate(-1)
    }

    const Viagens = [
        { value: 'Teste', label: 'Teste' },
        { value: 'Marte', label: 'Marte' },
    ]

    const Pais = Paises.map(item => {
        return { value: item.name, label: item.name }
    })


    return(
        <Tela>
        <Formulario>
            <h1>Crie uma Viagem</h1>
            <Form>
                <input placeholder="Nome"></input>
                <Select options={Viagens} placeholder='Escolha um Planeta' />
                <input placeholder="Data"></input>
                <input placeholder="Descrição"></input>
                <input placeholder="Duração em dias"></input>
            </Form>
            <Buttons>
                <button onClick={voltar}>Voltar</button>
                <button onClick={''}>Criar</button>
            </Buttons>
        </Formulario>
    </Tela>
    )
}
