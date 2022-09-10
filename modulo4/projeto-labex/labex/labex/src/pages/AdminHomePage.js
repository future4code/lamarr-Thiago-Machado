import React from "react"
import { useNavigate } from "react-router-dom"
import { PainelAdmin, Buttons, Tela, Card, Container } from "../Style/AdminHomeStyle"
import URL_BASE_GET from '../componets/URL_BASE_GET'
import useRequestData from "../hook/UseRequestData";
import useProtectedPage from "../hook/useProtectedPage";
import axios from "axios";


export const AdminHomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const goToCreate = () => {
        navigate('/admin/trips/create')
    }


    const goToLogin = () => {
        navigate('/login')
    }
    const voltar = () => {
        navigate(-1)
    }





    const [data, isLoadding, erro] = useRequestData(`${URL_BASE_GET}trips`)

    const Viagens = data && data.map((item) => {

        const goToTripDetails = () => {
            navigate(`/admin/trips/${item.id}`)
            localStorage.setItem("id", item.id)
        }

        const Delete = () => {
            axios.delete(`${URL_BASE_GET}trips/${item.id}`, {
                headers: {
                    "Content-Type": "application/ json",
                    auth: localStorage.getItem("token")
                }
            }).then(() => {
                window.location.reload()
            }).catch(erro => {
                alert(erro)
            })

        }

        return (
            <Card key={item.id}>
                <button onClick={goToTripDetails}><h1>{item.name}</h1></button>
                <button onClick={Delete}><img alt="img-lixeira" src="https://cdn-icons-png.flaticon.com/512/669/669010.png" /></button>
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