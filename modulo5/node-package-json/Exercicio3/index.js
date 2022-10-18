import { listaDeTarefas } from "./listaDeTarefas.js"

const novaTarefa=process.argv[2]

function imprimirLista (listaDeTarefas, novaTarefa){
    return (listaDeTarefas.push(novaTarefa))
}

imprimirLista(listaDeTarefas, novaTarefa)

console.log("Tarefa adicionada com sucesso!")
console.log(listaDeTarefas)