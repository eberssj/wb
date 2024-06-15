"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListagemProdutos {
    constructor(produtos) {
        this.produtos = produtos;
    }
    listar() {
        this.produtos.forEach(produto => {
            console.log(`Nome: ${produto.nome}`);
            console.log(`Valor: ${produto.valor}`);
        });
    }
}
exports.default = ListagemProdutos;
