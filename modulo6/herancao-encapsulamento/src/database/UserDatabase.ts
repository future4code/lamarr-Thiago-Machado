import { BaseDatabase } from "./BaseDatabase"
import { TABLE_USERS, TABLE_PRODUCTS, TABLE_PURCHASES } from "../database/tableNames"

export class UserDatabase extends BaseDatabase {

   public static async getAllUsers() {
        const result = await BaseDatabase
        .connection(TABLE_USERS)
        .select()
        return result
    }

    public static async findUser(id: string) {
        const result = await BaseDatabase
        .connection(TABLE_USERS)
        .select()
        .where({
            id: id
        })
        return result
    }

    public static async createUser(id:string, email:string, password:string) {
        const result = await BaseDatabase
        .connection(TABLE_USERS)
        .insert({
            id: id,
            email: email,
            password: password
        })

        return result
    }

    public static async getAllProducts() {
        const result = await BaseDatabase.connection(TABLE_PRODUCTS).select()

        return result
    }

    public static async findProduct(id: string) {
        const result = await BaseDatabase
        .connection(TABLE_PRODUCTS)
        .select()
        .where({
            id: id
        })
        return result
    }

    public static async createProduct(id:string, name:string, price:Number) {
        const result = await BaseDatabase
        .connection(TABLE_PRODUCTS)
        .insert({
            id: id,
            name: name,
            price: price
        })

        return result
    }


    public static async getAllPurchases(id:string) {
        const result = await BaseDatabase.connection.raw(`
        SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${id};
        `)

        return result
    }

    public static async createPurchase(
        id: string,
        user_id: string,
        product_id: string,
        quantity: number,
        total_price: number
        ) {
        const result = await BaseDatabase
        .connection(TABLE_PURCHASES)
        .insert({
            id: id,
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price
        })

        return result
    }


   }