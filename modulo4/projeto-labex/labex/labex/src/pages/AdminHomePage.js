import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PainelAdmin, Buttons, Tela, Card, Container } from "../Style/AdminHome"
import URL_BASE_GET from '../componets/URL_BASE_GET'
import useRequestData from "../hook/UseRequestData";
import useProtectedPage from "../hook/useProtectedPage";
import { TripDetailsPage } from "./TripDetailsPage";

export const AdminHomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const goToCreate = () => {
        navigate('/admin/trips/create')
    }
    const goToTripDetails = () =>{
        navigate('/admin/trips/:id')
    }

    const goToLogin = () => {
        navigate('/login')
    }
    const voltar = () => {
        navigate(-1)
    }

    const { idTrip, setIdTrip} = useState('')
    
   

    const [data,isLoadding,erro] = useRequestData(`${URL_BASE_GET}trips`)
    const Viagens = data && data.map((item) => {
        

        const goToTripDetails = () =>{
            navigate(`/admin/trips/${item.id}`)
            localStorage.setItem("id", item.id)
        }
       
        

        return (
            <Card onClick={goToTripDetails}>
            <button><h1>{item.name}</h1></button>
            <button><img src="https://cdn-icons-png.flaticon.com/512/669/669010.png"/></button>
            </Card>
        )
    })
    return (
        <Tela>
            <PainelAdmin>
            <h1>Painel Administrativo</h1>

            <Buttons>
                <button onClick={voltar}>Voltar</button>
                <button onClick={goToCreate}>Criar Viagens</button>
                <button onClick={goToLogin}>Logout</button>
            </Buttons>
            </PainelAdmin>
            <Container>
                {isLoadding && "...Carregando!!! ...."}
                {!isLoadding && data && Viagens}
                {!isLoadding && !data && erro}
            </Container>
        </Tela>
    )
}