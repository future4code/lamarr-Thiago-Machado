import React from "react"
import { useNavigate } from "react-router-dom"
import { Paises } from '../componets/paises'
import Select from 'react-select'
import { Formulario, Form, Tela, Buttons } from "../Style/LoginStyle"
import { useForm } from "../hook/useForm"
import URL_BASE_GET from '../componets/URL_BASE_GET'
import axios from 'axios'

export const LoginPage = () => {
    const navigate = useNavigate()

    const voltar = () => {
        navigate(-1)
    }

    const goToAdminHome = () => {
        navigate('/admin/trips/list')
    }

    const [form, onChange] = useForm({
        email: "",
        password: "",
    })

    const Envio = (event) => {
        event.preventDefault()
        axios.post(`${URL_BASE_GET}login`, form).then((response)=>{
            return goToAdminHome()
        }).catch((erro)=>{
            alert('Seu E-mail ou senha, estão incorretos')
        })
        console.log(form)
    }






    return (
        <Tela>
            <Formulario>
                <h1>Login</h1>
                <Form onSubmit={Envio}>
                    <input
                        placeholder="Email"
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                    ></input>
                    <input
                        id="password"
                        placeholder="Senha"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={onChange}
                        required
                    ></input>
                    <Buttons>
                        <button onClick={voltar}>Voltar</button>
                        <button type="submit">Entrar</button>
                    </Buttons>
                </Form>

            </Formulario>
        </Tela>
    )
}
