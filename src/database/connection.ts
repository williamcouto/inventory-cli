import sqlite3 from 'sqlite3'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// dirname apontará para o caminho src/database
const pathDatabase = path.resolve(__dirname, '..', '..', 'data', 'inventory.sqlite')
const dbInventory = new sqlite3.Database(pathDatabase, (error) => {
    if(error){
        console.log('Erro na conexão com o banco de dados')
    }
    else{
        console.log("Conexão estabelecida")
    }
})
export default dbInventory