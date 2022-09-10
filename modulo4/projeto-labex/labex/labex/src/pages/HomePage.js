import React from "react"
import { useNavigate } from "react-router-dom"
import { Tela, Buttons, Home } from "../Style/HomeStyle"

export const HomePage = () => {
    const navigate = useNavigate()

    const goToLogin = () => {
        const token = localStorage.getItem("token")

        if (token === null) {
            navigate("/login")
        } else {
            navigate("/admin/trips/list")
        }
    }

    const goToListTrips = () => {
        navigate('/trips/list')
    }

    return (
        <Tela>
            <Home>
                <h1>LabeX</h1>
                <Buttons>
                    <button onClick={goToLogin}>Área Admin</button>
                    <button onClick={goToListTrips}>Ver Viagens</button>
                </Buttons>
            </Home>
        </Tela>
    )
}