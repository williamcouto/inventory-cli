import { ProductRepo } from "../database/product-repo.js";
import { Produto } from "../models/products.js";

// Validações e Regras de negócio
export class ProductService{
    private repo = new ProductRepo()
    
    addProduct(product: Produto): void{
        if(!product.name){
            throw new Error("O nome do produto é obrigatório")
        }
        if(product.quantity < 0){
            throw new Error("Quantidade não pode ser negativa")
        }
        this.repo.saveProduct(product)
    }
}