import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!')
   })

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});