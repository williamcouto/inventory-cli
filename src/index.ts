// Testando
import {showMenu} from './cli/menu.js'
import { createDBTable } from './database/migration.js'

async function startSystem(): Promise<void>{
    createDBTable()
    await showMenu()
}
startSystem()