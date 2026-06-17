// Onde ficará a biblioteca inquirer, loop do menu e as rotas de ação
import inquirer from "inquirer";
import { confirm, editor } from "@inquirer/prompts";
import { ProductService } from "../services/product-service.js";
import { Categorias } from "../models/products.js";
import picocolors from "picocolors";

const service = new ProductService()
export const logger = {
    success(textUser: string){
        console.log(picocolors.bgGreen(textUser))    
    },
    alert(textUser: string){
        console.log(picocolors.bgRed(textUser))
    }
}

export async function showMenu(): Promise<void>{
    let optionState = true
    while(optionState){
        console.log(picocolors.bgBlackBright("GERENCIADOR DE INVENTÁRIO"))

        //Contagem de produtos
        const productsRegister = service.countAllProducts()
        if(typeof productsRegister === "object" && productsRegister != null){
            let productValues = Object.values(productsRegister)
            console.log(`Produtos Cadastrados: ${productValues}`)
        }

        //Contagem de produtos com baixo estoque
        const productsLow = service.countLowProducts()
        console.log(picocolors.yellow(`Produtos com Baixo Estoque: ${productsLow.lowProducts}`))

        const { menu } = await inquirer.prompt([
            {
                type: "rawlist",
                name: "menu",
                message: "O que deseja fazer?",
                choices: [
                    'Cadastrar Produto',
                    'Listar Produtos',
                    'Editar Produtos',
                    new inquirer.Separator(),
                    'Verificar Estoque Baixo',
                    'Deletar Produto',
                    new inquirer.Separator(),
                    'Sair'
                ],
            }
        ])

        switch(menu){
            // Adicionar um produto na tabela 
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
                                `${Categorias.Papelaria}`,
                                `${Categorias.Eletronicos}`,
                                `${Categorias.Outros}`
                            ]
                        }
                    ])

                try {
                    service.addProduct({name, quantity, price, category})
                    logger.success('Produto cadastrado com sucesso!')
                } catch (error) {
                    logger.alert(`Ocorreu um erro ao cadastrar o produto - ${error}`)
                }
                break
            
            // Editar dados dos produtos
            case "Editar Produtos": {
                    const { idMenu } = await inquirer.prompt([
                        {
                            type: "input",
                            name: "idMenu",
                            message: "Insira o ID do produto"
                        }
                    ])

                    // TRansformando array de string em um objeto para exibir as opções de campos sem alterar os valores já definidos.
                    const allowFieldValidate = [
                        {
                            name: "Nome", value: "name",
                        },{
                            name: "Quantidade", value: "quantity"
                        },{
                            name: "Preço", value: "price"
                        },{
                            name: "Categoria", value: "category"
                        }
                    ]
                    const {editField} = await inquirer.prompt([
                        {
                            type: "rawlist",
                            name: "editField",
                            message: "Selecione o campo",
                            choices: allowFieldValidate.map(item => ({name: item.name, value: item.value}))
                        }
                    ]) 

                    console.log(idMenu)
                    console.log(editField)
                break
            }
            
            // Listar os produtos presentes na tabela
            case "Listar Produtos":
                const products = service.listAllProducts()
                console.table(products)
                break

            case "Sair":
                console.log('Saindo...')
                optionState = false
                break
            
            // Deletar um produto da tabela
            case "Deletar Produto":
                const { id } = await inquirer.prompt([
                    {
                        type: "number",
                        name: "id",
                        message: "Insira o ID do produto:",
                    }
                ])

                const answerUser = await confirm({
                    message: "Deseja excluir o produto?"
                })
                try{
                    if(answerUser == true){
                        service.deleteProducts(id)
                    }
                    else{
                        console.log("Retornando ao menu!")
                    }
                }
                catch(error){
                    console.log(error)
                }
                break
            
            // Filtrar produtos 
            case "Verificar Estoque Baixo":
                const listProducts = service.filterLowProducts()
                console.table(listProducts)
                break
        }
    }
}