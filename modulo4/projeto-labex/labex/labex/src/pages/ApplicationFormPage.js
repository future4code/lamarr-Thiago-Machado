import React from "react"
import { useNavigate } from "react-router-dom"
import { Paises } from '../componets/paises'
import Select from 'react-select'
import { Formulario, Form, Tela, Buttons } from "../Style/ApplicationFormStyle"

export const ApplicationFormPage = () => {
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

    





return (
    <Tela>
        <Formulario>
            <h1>Inscreva-se para uma viagem</h1>
            <Form>
                <Select options={Viagens} placeholder='Escolha uma Viagem' />
                <input placeholder="Nome"></input>
                <input placeholder="Idade"></input>
                <input placeholder="Texto do Candidato"></input>
                <input placeholder="Profissão"></input>
                <Select options={Pais} placeholder='Escolha um Pais' />
            </Form>
            <Buttons>
                <button onClick={voltar}>Voltar</button>
                <button onClick={''}>Enviar</button>
            </Buttons>
        </Formulario>
    </Tela>
)
}