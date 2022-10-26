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

type Post = {
    userId: number
    id: number
    title: string
    body: string
}

const bancoDeDados: User[] = [
       {
        id: 1,
        name: 'Thiago',
        phone: 98765451235,
        email: 'email@gmail.com',
        website: 'vemdancarcomaxuxa.com'
       },

       {
        id: 2,
        name: 'Marcos',
        phone: 987657771235,
        email: 'email@gmail.com',
        website: 'vemdancarcomabarbi.com'
       },

       {
        id: 3,
        name: 'Baby',
        phone: 98765401234,
        email: 'email@gmail.com',
        website: 'latecoracao.com'
       },
      ]
    

    


app.get('/users', (req: Request, res: Response) => {
    const user = bancoDeDados.map((user)=>{
        return user
    })
    res.status(200).send(user)
   })

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});