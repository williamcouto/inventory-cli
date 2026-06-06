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

    countAllProducts(){
        const totalProducts = dbInventory.prepare(`SELECT COUNT(*) AS totalProducts FROM products`).get()
        return totalProducts
    }

    countLowProducts(){
        const lowProducts = dbInventory.prepare(`SELECT COUNT(*) AS lowProducts FROM products WHERE quantity <= 6`).get() as {lowProducts: number}
        return lowProducts
    }

    deleteProducts(id: number){
        const queryStateDel = dbInventory.prepare(`DELETE FROM products WHERE id = ?`).run(id)
        return queryStateDel
    }

    filterLowProducts(): Produto[]{
        const filteredProduct = dbInventory.prepare(`
            SELECT name, quantity FROM products WHERE quantity < 6`)
        const products = filteredProduct.all() as Produto[]
        return products
    }
}