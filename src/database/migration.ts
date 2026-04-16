import dbInventory from "./connection";

export async function createDBTable(){
    const query = `
        CREATE TABLE IF NOT EXISTS Product(
            id PRIMARY KEY INTEGER,
            name TEXT NOT NULL,
            quantity INTEGER NOT NULL, 
            price REAL NOT NULL,
            category TEXT
        );
    `

    try{
        dbInventory.run(query)
        console.log("Tabela Criada!")
    }
    catch (err) {
        console.log(`Erro ao criar tabela`)
        throw err
    }
}