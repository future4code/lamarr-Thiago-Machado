import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { UserDatabase } from "../database/UserDatabase"

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const [result] = await UserDatabase.getAllPurchases(id)

        res.status(200).send({ purchases: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}