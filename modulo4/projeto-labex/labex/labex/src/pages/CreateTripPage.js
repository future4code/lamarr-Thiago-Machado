import React from "react"
import { useNavigate } from "react-router-dom"
import { Planetas } from '../componets/planeta'
import { Formulario, Form, Tela, Buttons, Select } from "../Style/CreateTripStyle"
import useProtectedPage from "../hook/useProtectedPage"
import axios from "axios"
import URL_BASE_GET from '../componets/URL_BASE_GET'
import { useForm } from "../hook/useForm"


export const CreateTripPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const token = localStorage.getItem("token");

    const voltar = () => {
        navigate(-1)
    }

    const header = {
        headers: {
            'Content-Type': 'application/json',
            'auth': token
        }
    }
    const [form, onChange] = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const Envio = (event) => {
        event.preventDefault()
        axios.post(`${URL_BASE_GET}trips`, form, header).then(() => {
            alert('Uma Viagem criada com sucesso!!!')
            window.location.reload()
        }).catch((erro) => {
            alert(erro)
        })
    }





    return (
        <Tela>
            <Formulario>
                <h1>Crie uma Viagem</h1>
                <Form onSubmit={Envio}>
                    <input
                        placeholder="Nome"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        required
                    ></input>
                    <Select
                        name="planet"
                        value={form.planet}
                        onChange={onChange}
                        required
                    >
                        <option value='' disabled select>Escolha um planeta</option>
                        {Planetas.map((option) => (

                            <option
                                key={option.id}
                                value={option.title}
                            >{option.title}
                            </option>
                        ))}
                    </Select>
                    <input
                        placeholder="Data"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={onChange}
                        required
                    ></input>
                    <input
                        placeholder="Descrição"
                        name="description"
                        type="text"
                        value={form.description}
                        onChange={onChange}
                        required
                    ></input>
                    <input
                        placeholder="Duração em dias"
                        name="durationInDays"
                        type="number"
                        value={form.durationInDays}
                        onChange={onChange}
                        required
                    ></input>
                    <Buttons>
                        <button onClick={voltar}>Voltar</button>
                        <button type="submit">Criar</button>
                    </Buttons>
                </Form>

            </Formulario>
        </Tela>
    )
}
