import { data } from "./data"
import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/",(req: Request, res: Response)=>{
    res.status(201).send(data)
})

app.post("/produto/add",(req: Request, res: Response)=>{
    const {name, price}= req.body
    if(!name || !price){
        res.status(400).send("algo deu errado")
    }else{
        data.push({
            id: Date.now().toString(),
            name: name,
            price: price
        })

        res.status(201).send(data)
    }
    
})

app.put("/produto/edit/price/:name",(req: Request, res: Response)=>{
        
    data.map((produto)=>{
        for(let i=0; data.length > i; i++){
            if(req.params.name == produto.name){
                produto.price = req.body.price
                res.status(201).send(data)
            }
        }
    })
    
        
})

// Delete ainda não funciona! 
app.delete("/produto/del/:name",(req: Request, res: Response)=>{
        
    data.find((produto)=>{
        let i = 0;
        while (i < data.length) {
            if (produto.name === req.params.name) {
            data.splice(i, 1);
            
        } else {
        ++i;
        }
     }

        // for(let i=0; data.length > i; i++){
        //     if(req.params.name === produto.name){
        //        data.splice(i, 1)
        //        res.status(201).send(data)
        //     }
        // }
    })
    
        
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});