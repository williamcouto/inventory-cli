// Criando interfaces
interface Produto {
    id?: number;
    name: string;
    quantity: number;
    price: number;
    category: string;
}

// Criando Enum de Categorias
enum Categorias {
    Salgados = "Salgados",
    Doces = "Doces",
    Bebidas = "Bebidas",
    Outros = "Outros"
}