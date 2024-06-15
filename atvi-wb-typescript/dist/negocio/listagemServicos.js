"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListagemServicos {
    constructor(servicos) {
        this.servicos = servicos;
    }
    listar() {
        this.servicos.forEach(servico => {
            console.log(`Nome: ${servico.nome}`);
            console.log(`Valor: ${servico.valor}`);
        });
    }
}
exports.default = ListagemServicos;
