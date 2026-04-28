import Database from 'better-sqlite3'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// dirname apontará para o caminho src/database
const pathDatabase = path.resolve(__dirname, '..', '..', 'data', 'inventory.sqlite')
const dbInventory = new Database(pathDatabase)
export default dbInventory