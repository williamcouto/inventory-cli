// Criando interfaces
export interface Produto {
    id?: number;
    name: string;
    quantity: number;
    price: number;
    category: Categorias;  // Aceita os valores pré-definidos
}

// Criando Enum de Categorias
export enum Categorias {
    Salgados = "Salgados",
    Doces = "Doces",
    Bebidas = "Bebidas",
    Outros = "Outros"
}