import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { UserDatabase } from "../database/UserDatabase"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await UserDatabase.getAllProducts()
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}