import React from "react"
import { useNavigate } from "react-router-dom"
import { Lista, Tela, Buttons, Card, Container } from "../Style/ListTripsStyle"
import URL_BASE_GET from '../componets/URL_BASE_GET'
import useRequestData from "../hook/UseRequestData";

export const ListTripsPage = () => {
    const navigate = useNavigate()

    const goToFormPage = () => {
        navigate('/trips/application')
    }
    const voltar = () => {
        navigate(-1)
    }

    const [data,isLoadding,erro] = useRequestData(`${URL_BASE_GET}trips`)
    const Viagens = data && data.map((item) => {
        return (
            <Card>
            <h1>{item.name}</h1>
            <p>Planeta: {item.planet}</p>
            <p>Descrição: {item.description}</p>
            <p>Duração: {item.durationInDays}-Dias</p>
            <p>Data: {item.date}</p>
            </Card>
        )
    })

    return (
        <Tela>
            <Lista>
                <h1>Lista de Viagens</h1>
                <Buttons>
                    <button onClick={voltar}>Voltar</button>
                    <button onClick={goToFormPage}>Inscrever-se</button>
                </Buttons>
            </Lista>
            <Container>
                {isLoadding && "...Carregando!!! ...."}
                {!isLoadding && data && Viagens}
                {!isLoadding && !data && erro}
            </Container>
        </Tela>
    )
}