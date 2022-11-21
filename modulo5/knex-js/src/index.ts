import express from "express"
// importando o knex no projeto:
import { Request, Response } from "express"
import connection from "./connection"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())


const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }
  
  const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE nome = "${name}"
    `)
    return result[0][0]
  }
  
  // Assim a chamada funciona fora dos endpoints com .then()/.catch
  getActorById("001")
      .then(result => {
          console.log(result)
      })
      .catch(err => {
          console.log(err)
      });


      searchActor("Antônio Fagundes")
      .then(result => {
          console.log(result)
      })
      .catch(err => {
          console.log(err)
      });
  
  // Assim a chamada funciona fora dos endpoints com await
  (async () => {
    console.log(await getActorById("001") )
  })()
  
  
  
  // Ou então podemos chamá-la dentro de um endpoint
  app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
        
      const nome = 'Antônio Fagundes'

      console.log(await getActorById(id))
      console.log(await searchActor(nome))
      
  
      res.end()
    } catch (error:any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal






app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

