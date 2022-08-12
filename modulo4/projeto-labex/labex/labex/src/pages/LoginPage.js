import React from "react"
import { useNavigate } from "react-router-dom"
import { Paises } from '../componets/paises'
import Select from 'react-select'
import { Formulario, Form, Tela, Buttons } from "../Style/ApplicationFormStyle"

export const LoginPage=()=>{
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
            <h1>Login</h1>
            <Form>
                <input placeholder="Nome"></input>
                <input placeholder="Senha" type="password"></input>
            </Form>
            <Buttons>
                <button onClick={voltar}>Voltar</button>
                <button onClick={''}>Entrar</button>
            </Buttons>
        </Formulario>
    </Tela>
)
}
