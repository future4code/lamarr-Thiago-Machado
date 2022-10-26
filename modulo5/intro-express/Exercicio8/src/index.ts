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
    website: string,
    posts: Post[]
}
// Prefiro desenvolver dentro! Acho que é mais comum banco de dados serem assim! 
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
        website: 'vemdancarcomaxuxa.com',
        posts: [
            {
                userId: 1,
                id: 1,
                title: "olá mundo",
                body: "olá mundo, belo mundo, lindo mundo!"
            }
        ]
       },

       {
        id: 2,
        name: 'Marcos',
        phone: 987657771235,
        email: 'email@gmail.com',
        website: 'vemdancarcomabarbi.com',
        posts: [
            {
                userId: 2,
                id: 1,
                title: "olá mundo",
                body: "olá mundo, belo mundo, lindo mundo!"
            }
        ]
       },

       {
        id: 3,
        name: 'Baby',
        phone: 98765401234,
        email: 'email@gmail.com',
        website: 'latecoracao.com',
        posts: [
            {
                userId: 3,
                id: 1,
                title: "olá mundo",
                body: "olá mundo, belo mundo, lindo mundo!"
            }
        ]
       },
      ]
    

    


app.get('/users/:id/post', (req: Request, res: Response) => {
    

    const user = bancoDeDados.filter((user)=>{
        if(Number(req.params.id) === user.id){
            return user
        }     
    })
    
    const post = user.map((user)=> {
        return user.posts
    })
   

       
        // res.status(400).send("colocar outro id")
  
    res.status(200).send(post)
   })

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});