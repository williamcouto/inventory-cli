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
}