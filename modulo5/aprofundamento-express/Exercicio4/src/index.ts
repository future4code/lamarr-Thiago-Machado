import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

type afazer = {
    id: number,
    title: string,
    completed: boolean
}

const afazeres:afazer[] = [
    {
        id: 1,
        title: "Lavar roupa",
        completed: false,
    },
    {
        id: 2,
        title: "Lavar louça",
        completed: true
    },
    {
        id: 3,
        title: "limpar o chão",
        completed: false
    },
    {
        id: 4,
        title: "limpar banheiro",
        completed: true
    }
]


app.get("/afazer/:status", (req: Request, res: Response) => {
    const realizados = afazeres.filter((array)=>{
        if(req.params.status === "true" && array.completed === true){
            return array
        }else if(req.params.status === "false" && array.completed === false){
            return array
        }
    })         
    res.status(200).send(realizados)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});