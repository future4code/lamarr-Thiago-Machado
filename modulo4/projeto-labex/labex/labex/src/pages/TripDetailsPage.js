import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useProtectedPage from "../hook/useProtectedPage";
import URL_BASE_GET from "../componets/URL_BASE_GET";
import { Buttons, Card, Container, Tela, CardTrip, Header, Main, ButtonsCard } from "../Style/TripDetailsStyle";



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
    const [isLoading, setIsLoading] = useState('')
    

    

   useEffect(()=>{
    setIsLoading(true)
    axios.get(`${URL_BASE_GET}trip/${localStorage.getItem("id")}`, 
    {
        headers: {
            'Content-Type': "application/json",
            auth: localStorage.getItem("token")

        }
    }).then(response => {
        setIsLoading(false)
        setTrip(response.data.trip)
        setAprovado(response.data.trip.approved)
        setCandidato(response.data.trip.candidates)
    }).catch(error => {
        setIsLoading(false)
        console.log("Deu erro: ", error)
    })
   
   }, [])


    const voltar = () => {
        navigate(-1)
    }

    console.log(aprovado)


    const Candidatos = candidato && candidato.map(item => {
        const urlPut = `${URL_BASE_GET}trips/${id}/candidates/${item.id}/decide`
        const bobyAprovado = {
            approve: true
        }  
        
        const bobyReprovado = {
            approve: false
        } 

        const aprovado = () => {
            axios.put(urlPut, bobyAprovado, header).then(()=>{
                alert('Aprovado')
                window.location.reload()
            })
        }

        const Reprovado = () => {
            axios.put(urlPut, bobyReprovado, header).then(()=>{
                alert('Reprovado')
                window.location.reload()
            })
        }

        return (
            <Card key={item.id}>
                <p>Name: {item.name}</p>
                <p>Profissão: {item.profession}</p>
                <p>Pais: {item.country}</p>
                <p>Idade: {item.age}</p>
                <p>Texto: {item.applicationText}</p>
                <ButtonsCard>
                <button className="aprovado" onClick={aprovado}>Aprovado</button>
                <button className="reprovado" onClick={Reprovado}>X</button>
                </ButtonsCard>
            </Card>
        )
    })


    const aprovados = aprovado && aprovado.map(item => {
        return (
            <Card>
                <p>Nome: {item.name}</p>
            </Card>
        )
    })

    console.log(aprovado)
    return (
        <Tela>
           <Header>
            <Buttons>
                <button onClick={voltar}></button>
            </Buttons>
            <CardTrip>
                <h1>{trip.name}</h1>
                <div className="info">
                <p>Planeta: <br/>{trip.planet}</p>
                <p>Data: <br/>{trip.date}</p>
                <p>Duração: <br/>{trip.durationInDays}-Dias</p>
                <p>Descrição: <br/>{trip.description}</p>
                </div>
            </CardTrip>
            </Header>

            <Main>
            <Container>
                <h1>Candidatos</h1>
                {isLoading && "...Carregando!!! ...."}
                {!isLoading && Candidatos}
                {!isLoading && !Candidatos}
            </Container>

            <Container>
                <h1>Aprovados</h1>
            {aprovados}
            </Container>
            </Main>
        </Tela>
    )
}