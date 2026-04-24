import dbInventory from "./connection.js";
export async function createDBTable(){
    const query = `
        CREATE TABLE IF NOT EXISTS Product(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quantity INTEGER NOT NULL, 
            price REAL NOT NULL,
            category TEXT
        );`

    try{
        dbInventory.run(query)
        console.log("A Tabela foi criada!")
    }
    catch (err) {
        console.log(`Erro ao criar tabela`)
        throw err
    }
}