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

app.get("/afazer", (req: Request, res: Response) => {          
    res.send("")
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});