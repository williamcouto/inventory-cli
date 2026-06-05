import { ProductRepo } from "../database/product-repo.js";
import { Produto } from "../models/products.js";
import { logger } from "../cli/menu.js";

// Validações e Regras de negócio
export class ProductService{
    private repo = new ProductRepo()
    
    addProduct(product: Produto): void{
        if(!product.name.trim()){
            logger.alert("O nome do produto é obrigatório")
            throw new Error()
        }
        if(product.quantity === null || product.quantity === undefined){
            logger.alert("A quantidade é obrigatória")
            throw new Error()
        }
        if(product.quantity < 0){
            logger.alert("A quantidade não pode ser negativa")
            throw new Error()
        }
        if(product.price == undefined){
            logger.alert("O preço do produto é obrigatório")
            throw new Error()
        }
        if(product.price < 0){
            logger.alert("O valor do produto não deve ser negativo")
            throw new Error()
        }
        this.repo.saveProduct(product)
    }

    listAllProducts(){
        return this.repo.listAllProducts()
    }

    countAllProducts(){
        return this.repo.countAllProducts()
    }

    deleteProducts(id: number): void{
        if(id == null){
            logger.alert("O ID é obrigatório para a exclusão!")
            throw new Error() 
        }
        this.repo.deleteProducts(id)
        logger.success(`O produto com ID ${id} foi deletado!`)
    }

    filterLowProducts(){
        return this.repo.filterLowProducts()
    }
}