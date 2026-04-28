import dbInventory from "./connection.js";

export function createDBTable(): Promise<void>{
    const query = `
        CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quantity INTEGER NOT NULL, 
            price REAL NOT NULL,
            category TEXT
        );`

    return new Promise((resolve, reject) => {
        dbInventory.run(query, (err: Error | null) => {
            if(err){
                console.log("Erro ao criar a tabela")
                reject(err)
            }
            else{
                console.log("Tabela criada!")
                resolve()
            }
        })
    })
}