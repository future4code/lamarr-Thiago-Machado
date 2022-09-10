import React from "react"
import { useNavigate } from "react-router-dom"
import { Paises } from '../componets/paises'
import axios from 'axios'
import { Formulario, Form, Tela, Buttons, Select } from "../Style/ApplicationFormStyle"
import { useForm } from "../hook/useForm"
import URL_BASE_GET from '../componets/URL_BASE_GET'
import useRequestData from "../hook/UseRequestData";

export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const voltar = () => {
        navigate(-1)
    }

    const [data] = useRequestData(`${URL_BASE_GET}trips`)



    // ----------> form <----------------------------------------------
    const [form, onChange] = useForm({
        id: '',
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const id = form.id

    const Envio = (event) => {
        event.preventDefault()
        axios.post(`${URL_BASE_GET}trips/${id}/apply`, form).then((response) => {
            alert('Tudo Certo')
            window.location.reload()
        }).catch((erro) => {
            alert(erro)
        })
    }




    return (
        <Tela>
            <Formulario>
                <h1>Inscreva-se para uma viagem</h1>
                <Form onSubmit={Envio}>
                    <Select
                        onChange={onChange}
                        name="id"
                        value={form.id}
                        required
                    >
                        <option className="ops" value='' disabled select>Escolha uma Viagem</option>
                        {data && data.map((option) => (
                            <option
                                className="ops"
                                key={option.name}
                                value={option.id}
                            >{option.name}</option>
                        ))}
                    </Select>

                    <input
                        placeholder="Nome"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}

                        required
                    ></input>

                    <input
                        placeholder="Idade"
                        name="age"
                        type="number"
                        value={form.age}
                        onChange={onChange}
                        required
                    ></input>

                    <input
                        placeholder="Texto do Candidato"
                        name="applicationText"
                        type="text"
                        value={form.applicationText}
                        onChange={onChange}
                        required
                    ></input>

                    <input
                        id="userProf"
                        placeholder="Profissão"
                        name="profession"
                        type="text"
                        value={form.profession}
                        onChange={onChange}
                        required
                    ></input>

                    <Select
                        value={form.country}
                        onChange={onChange}
                        name="country"
                        required
                    >
                        <option value='' disabled select>Escolha um Pais</option>
                        {Paises.map((option) => (
                            <option
                                key={option.name}
                                value={option.name}
                            >{option.name}</option>
                        ))}
                    </Select>
                    <Buttons>
                        <button onClick={voltar}>Voltar</button>
                        <button type="submit">Enviar</button>
                    </Buttons>
                </Form>


            </Formulario>
        </Tela>
    )
}