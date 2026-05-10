import dbInventory from "../database/connection.js";
import { Produto } from "../models/products.js"

export class ProductRepo{
    saveProduct(product: Produto): void{
        const query = dbInventory.prepare(`
            INSERT INTO products (name, quantity, price, category)
            VALUES (?, ?, ?, ?)
        `)
            query.run(
            product.name,
            product.quantity,
            product.price,
            product.category
        )
    }

    listAllProducts(){
        const queryState = dbInventory.prepare(`SELECT * FROM products`)
        const product = queryState.all() as Produto[]
        return product
    }

    deleteProducts(id: number){
        const queryStateDel = dbInventory.prepare(`DELETE FROM products WHERE id = ?`).run(id)
        return queryStateDel
    }
}