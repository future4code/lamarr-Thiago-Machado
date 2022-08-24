import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useProtectedPage from "../hook/useProtectedPage";
import URL_BASE_GET from "../componets/URL_BASE_GET";
import { Buttons, Card, Container, Tela } from "../Style/ListTripsStyle";



export const TripDetailsPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id")
    

    const header = {
        headers: {
            'Content-Type': "application/json",
            auth: token

        }
    }


    const [trip, setTrip] = useState('')
    const [aprovado, setAprovado] = useState('')
    const [candidato, setCandidato] = useState('')

    

    

   useEffect(()=>{
    axios.get(`${URL_BASE_GET}trip/${localStorage.getItem("id")}`, 
    {
        headers: {
            'Content-Type': "application/json",
            auth: localStorage.getItem("token")

        }
    }).then(response => {
        setTrip(response.data.trip)
        setAprovado(response.data.trip.approved)
        setCandidato(response.data.trip.candidates)
    }).catch(error => {
        console.log("Deu erro: ", error)
    })
   
   }, [])


    const voltar = () => {
        navigate(-1)
    }

    console.log(aprovado)
    const Candidatos = candidato && candidato.map(item => {

        const boby = {
            "approve": true
        }

        const urlPut = `${URL_BASE_GET}trips/${id}/candidates/${item.id}/decide`

        const aprovado = () => {
            axios.put(urlPut, boby, header)
        }

        return (
            <Card key={item.id}>
                <p>{item.name}</p>
                <p>{item.profession}</p>
                <p>{item.country}</p>
                <p>{item.age}</p>
                <p>{item.applicationText}</p>
                <button onClick={aprovado}>Aprovado</button>
            </Card>
        )

    })

    return (
        <Tela>
            <Buttons>
                <button onClick={voltar}>Voltar</button>
            </Buttons>
            <Card>
                <h1>{trip.name}</h1>
                <p>Planeta: {trip.planet}</p>
                <p>Descrição: {trip.description}</p>
                <p>Duração: {trip.durationInDays}-Dias</p>
                <p>Data: {trip.date}</p>

            </Card>
            <Container>
                {Candidatos}
            </Container>

        </Tela>
    )
}