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

    countLowProducts(){
        return this.repo.countLowProducts()
    }

    modifyProducts(id: number, fieldProduct: string,  value: string | number){
        const allowFieldValidate = ["name", "quantity", "price", "category"]
        // Checa se os campos são válidos
        if(!allowFieldValidate.includes(fieldProduct)){
            logger.alert("O Campo é inválido!")
            throw new Error()
        }
        // Verifica se o ID existe na tabela antes de modificar
        const productsList = this.repo.listAllProducts()
        const productExists = productsList.some(product => product.id === Number(id))
        if(!productExists){
            logger.alert("O ID do produto não existe")
            throw new Error()
        }

        return this.repo.modifyProducts(id, fieldProduct, value)
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

    async exportToCSV(filePath: string){
        // valida se há produtos na tabela
        if(filePath.length === 0){
            console.log('Não existem produtos na tabela!')
        }
        return this.repo.exportToCSV(filePath)
    }
}