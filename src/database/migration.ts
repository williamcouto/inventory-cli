import dbInventory from "./connection.js";

export function createDBTable(): void{
    const query = `
        CREATE TABLE IF NOT EXISTS products(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quantity INTEGER NOT NULL, 
            price REAL NOT NULL,
            category TEXT DEFAULT
        );`

        try{
            dbInventory.prepare(query).run()
            console.log("A tabela foi criada!")
        }
        catch (err){
            console.error("Erro ao criar a tabela", err)
            throw err; // Permite tratar o erro lançado
        }
}