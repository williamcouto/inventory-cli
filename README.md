# 📦 Inventory-CLI
Ferramenta de gerenciamento de inventário via linha de comando, desenvolvida com TypeScript e Node.js.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat&logo=gnubash&logoColor=black)
![inquirer](https://img.shields.io/badge/inquirer-CB3837?style=flat&logo=npm&logoColor=black)
![picocolors](https://img.shields.io/badge/picocolors-CB3837?style=flat&logo=npm&logoColor=black)

# Funcionalidade
- Cadastrar produtos com nome, preço, quantidade e categoria.
- Listar todos os produtos em uma tabela formatada e personalizada.
- Deletar itens através do ID.
- Persistência de dados com banco de dados SQLite.

# Instalação
Para utilizar a ferramenta, siga o passos

1. Clone o repositório local.
```bash
git clone https://github.com/williamcouto/inventory-cli.git
```
2. Instale as dependências do projeto.
```bash
npm install
```
3. Execute a ferramenta no modo desenvolvimento.
```bash
npm run dev
```
# Arquitetura do projeto 
O projeto foi desenvolvido em uma arquitetura em camadas, visando uma organização de maneira modular e escalável.

- CLI [`menu.ts`]: responsavel por coletar input do usuario  via biblioteca Inquirer.
- Service [`services`]: valida os dados inseridos e aplica as regras de negócio.
- Repository [`product-repo.ts`]: realiza a execução de operações no banco de dados.
- Database: responsável por gerenciar a conexão e a estrutura do SQLite.

Desenvolvido por **William**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/williamcouto)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/williamplácido)