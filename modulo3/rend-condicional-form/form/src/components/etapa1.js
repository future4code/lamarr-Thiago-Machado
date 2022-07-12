import React, {useState} from "react";

export function Etapa1 (){

return(
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        <p>1. Qual o seu nome?</p>
        <input></input>

        <p>2. Qual sua idade?</p>
        <input></input>

        <p>3. Qual seu email?</p>
        <input></input>

        <p>4. Qual a sua escolaridade?</p>
        <select>
        <option value="">Ensino Médio Incompleto</option>
        <option value="">Ensino Médio Completo</option>
        <option value="">Ensino Superior Incompleto</option>
        <option value="">Ensino Superior Completo</option>
        </select>
    </div>
)
}