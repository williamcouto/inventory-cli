// Onde ficará a biblioteca inquirer, loop do menu e as rotas de ação
import inquirer from "inquirer";
import { ProductService } from "../services/product-service.js";
import { Categorias } from "../models/products.js";

const service = new ProductService()

export async function showMenu(): Promise<void>{
    let optionState = true
    while(optionState){
        const { menu } = await inquirer.prompt([
            {
                type: "rawlist",
                name: "menu",
                message: "O que deseja fazer?",
                choices: [
                    'Cadastrar Produto',
                    'Listar produtos',
                    'Deletar produtos',
                    new inquirer.Separator(),
                    'Sair'
                ],
                
            }
        ])

        switch(menu){
            case "Cadastrar Produto":
                 const {name, quantity, price, category} = await inquirer.prompt([
                        {
                            type: "input",
                            name: "name",
                            message: "Nome do produto:"
                        },
                        {
                            type: "number",
                            name: "quantity",
                            message: "Quantidade:"
                        },
                        {
                            type: "number",
                            name: "price",
                            message: "Preço:"
                        },
                        {
                            type: "rawlist",
                            name: "category",
                            message: "Categorias:",
                            choices: [
                                `${Categorias.Salgados}`,
                                `${Categorias.Doces}`,
                                `${Categorias.Bebidas}`,
                                `${Categorias.Eletronicos}`,
                                `${Categorias.Outros}`
                            ]
                        }
                    ])

                try {
                    service.addProduct({name, quantity, price, category})
                    console.log('Produto cadastrado com sucesso!')
                    
                } catch (error) {
                    console.log('Ocorreu um erro ao cadastrar o produto:', error)
                }
                break
            
            case "Listar produtos":
                const products = service.listAllProducts()
                console.table(products)
                break

            case "Sair":
                console.log('Saindo...')
                optionState = false
        }
    }
}